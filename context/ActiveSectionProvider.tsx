'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ActiveSectionContextProps {
  section: string | null;
  setSection: (section: string) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextProps>({
  section: '#home',
  setSection: () => {},
});

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isManualNavigation, setIsManualNavigation] = useState(false);

  const setSection = useCallback((section: string) => {
    setActiveId(section);
    setIsManualNavigation(true);
    history.replaceState(null, '', section);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsManualNavigation(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScrollEnd);
    return () => {
      window.removeEventListener('scroll', handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualNavigation) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            if (id) {
              setActiveId(`#${id}`);
              history.replaceState(null, '', `#${id}`);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isManualNavigation]);

  const ctx = useMemo(
    () => ({ section: activeId, setSection }),
    [activeId, setSection]
  );

  return (
    <ActiveSectionContext.Provider value={ctx}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  return useContext(ActiveSectionContext);
}

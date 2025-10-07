'use client';

import { useCallback, useEffect, useState } from 'react';
import NavLinks from '@/components/navigation/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useActiveSectionContext } from '@/context/ActiveSectionProvider';
import LanguageSelect from '@/components/navigation/LanguageSelect';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { section } = useActiveSectionContext();
  const dropDownStyle = show
    ? 'opacity-100 max-h-[192px] bg-background'
    : 'opacity-0 max-h-0';
  const backgroundStyle = scrolled || show ? 'bg-background' : 'bg-transparent';

  const handleClick = useCallback(() => {
    setShow((prev) => {
      const isOpening = !prev;
      const scrollOffset = section === '#home' ? 0 : isOpening ? -181 : 181;

      window.scrollBy({
        top: scrollOffset,
        behavior: 'smooth',
      });

      return isOpening;
    });
  }, [section]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`${backgroundStyle} fixed top-0 left-0 right-0 z-50 w-full py-3 md:py-6`}
    >
      <div className="flex justify-between mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl items-center">
        <a
          className="text-white font-bold text-sm md:text-base xl:text-xl py-1 lg:py-3"
          href="#home"
        >
          dmnkws.dev
        </a>
        <div className="flex flex-row gap-4 lg:gap-12">
          <NavLinks className="hidden sm:flex gap-2 xl:gap-10 justify-end" />
          <LanguageSelect />
          <button
            type="button"
            onClick={handleClick}
            className="flex items-center justify-center rounded-md p-2 hover:bg-gray-700 sm:hidden"
          >
            {show ? (
              <FontAwesomeIcon icon={faXmark} className="size-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="size-6" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${dropDownStyle} transition-all duration-500 ease-out overflow-hidden sm:hidden`}
      >
        <NavLinks className="flex flex-col justify-center text-center pb-4" />
      </div>
    </nav>
  );
}

'use client';

import { useCallback, useEffect, useState } from 'react';
import NavLinks from '@/components/navigation/NavLinks';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import LanguageSelect from '@/components/navigation/LanguageSelect';
import Logo from '@/components/navigation/Logo';
import MenuButton from '@/components/navigation/MenuButton';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const backgroundStyle = scrolled || show ? 'bg-background' : 'bg-transparent';
  const overlayStyle = show ? 'opacity-100 visible' : 'opacity-0 invisible';

  const handleClick = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <nav
      className={`${backgroundStyle} fixed top-0 left-0 right-0 z-50 w-full py-3 md:py-6`}
    >
      <div className="flex justify-between mx-10 md:mx-25 2xl:mx-auto max-w-screen-xl items-center">
        <Logo className="sm:text-base xl:text-xl lg:py-3" />
        <div className="flex flex-row justify-center items-center gap-4 lg:gap-12">
          <NavLinks className="hidden sm:flex gap-2 xl:gap-10 justify-end" />
          <LanguageSelect />
          <MenuButton
            onClick={handleClick}
            icon={show ? faXmark : faBars}
            className="sm:hidden"
          />
        </div>
      </div>
      <div
        className={`${overlayStyle} fixed inset-0 z-40 backdrop-blur-md bg-background/80 flex flex-col transition-opacity duration-300 sm:hidden`}
      >
        <div className="flex justify-between mx-10 py-3 items-center">
          <Logo />
          <MenuButton onClick={() => setShow(false)} icon={faXmark} />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <NavLinks
            className="flex flex-col items-center gap-8"
            onLinkClick={() => setShow(false)}
          />
        </div>
      </div>
    </nav>
  );
}

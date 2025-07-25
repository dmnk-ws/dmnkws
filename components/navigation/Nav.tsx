'use client';

import { useEffect, useState } from 'react';
import NavLinks from '@/components/navigation/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropDownStyle = show
    ? 'opacity-100 max-h-[200px] transition-all duration-500 ease-out bg-background'
    : 'opacity-0 max-h-0';
  const backgroundStyle = scrolled || show ? 'bg-background' : 'bg-transparent';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`${backgroundStyle} fixed top-0 left-0 right-0 z-50 w-full py-3 md:py-6`}
    >
      <div className="flex justify-between mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl items-center">
        <a
          className="text-white font-bold text-sm md:text-base xl:text-xl py-3"
          href="#home"
        >
          dmnkws.dev
        </a>
        <NavLinks className="hidden sm:flex gap-2 xl:gap-10 justify-end" />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="flex items-center justify-center rounded-md p-2 hover:bg-gray-700 sm:hidden"
        >
          <span className="sr-only">Menü öffnen</span>
          {show ? (
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="size-6" />
          )}
        </button>
      </div>
      <div className={`${dropDownStyle} overflow-hidden sm:hidden`}>
        <NavLinks className="flex flex-col justify-center text-center pb-4" />
      </div>
    </nav>
  );
}

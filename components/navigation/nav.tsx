'use client';

import Image from 'next/image';
import { useState } from 'react';
import menu from '@/assets/icons/menu.svg';
import close from '@/assets/icons/close.svg';
import NavLinks from '@/components/navigation/nav-links';

export default function Nav() {
  const [show, setShow] = useState(false);
  const dropDownStyle = show ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl py-3 md:py-6 xl:text-xl shadow-md bg-background">
      <div className="flex justify-between">
        <a className="text-white py-3 justify-center" href="#home">
          dmnkws.dev
        </a>
        <NavLinks className="hidden sm:flex gap-2 xl:gap-10 justify-end" />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="flex items-center justify-center rounded-md p-2 hover:bg-gray-700 sm:hidden"
        >
          <span className="sr-only">Menü öffnen</span>
          <Image
            className={`${show ? 'hidden' : 'block'} size-6`}
            src={menu}
            alt="open-menu"
          />
          <Image
            className={`${show ? 'block' : 'hidden'} size-6`}
            src={close}
            alt="close-menu"
          />
        </button>
      </div>
      <div
        className={`${dropDownStyle} overflow-hidden transition-all duration-500 ease-out sm:hidden`}
      >
        <NavLinks className="flex flex-col justify-center text-center pb-4" />
      </div>
    </nav>
  );
}

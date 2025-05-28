'use client';

import Image from 'next/image';
import { useState } from 'react';
import menu from '@/assets/icons/menu.svg';
import close from '@/assets/icons/close.svg';
import NavLinks from '@/components/navigation/nav-links';
import Link from 'next/link';

export default function Nav() {
  const [show, setShow] = useState(false);
  const dropDownStyle = show ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0';

  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between mx-6 sm:mx-2 md:mx-0 py-4">
        <Link className="text-white p-2 sm:p-3" href="/">
          dmnkws.dev
        </Link>
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

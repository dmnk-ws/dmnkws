'use client';

import React, { useCallback } from 'react';
import { useActiveSectionContext } from '@/context/ActiveSectionProvider';

interface NavLinkProps {
  href: '#home' | '#about' | '#portfolio' | '#contact';
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const activeId = useActiveSectionContext();
  const textStyle =
    activeId === href ? 'text-white' : 'text-gray-400 hover:bg-white hover:text-black';

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const id = href.replace('#', '');
      const section = document.getElementById(id);
      const navbar = document.querySelector('nav');

      if (section && navbar) {
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          navbar.getBoundingClientRect().height;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    },
    [href]
  );

  return (
    <li className="m-3">
      <a
        href={href}
        onClick={handleClick}
        className={`${textStyle} rounded-4xl px-4 py-3 font-bold text-sm md:text-base xl:text-xl`}
      >
        {label}
      </a>
    </li>
  );
}

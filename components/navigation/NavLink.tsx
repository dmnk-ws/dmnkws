'use client';

import React, { useCallback } from 'react';
import { useActiveSectionContext } from '@/context/ActiveSectionProvider';

interface NavLinkProps {
  href: '#home' | '#about' | '#portfolio' | '#contact';
  label: string;
  onLinkClick?: () => void;
}

export default function NavLink({ href, label, onLinkClick }: NavLinkProps) {
  const { section, setSection } = useActiveSectionContext();
  const textStyle =
    section === href ? 'text-white' : 'text-gray-400 hover:bg-white hover:text-black';

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
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
        setSection(href);
        onLinkClick?.();
      }
    },
    [href, setSection, onLinkClick]
  );

  return (
    <li
      onClick={handleClick}
      className={`${textStyle} rounded px-2 py-1 lg:px-4 lg:py-3 font-bold text-3xl md:text-base xl:text-xl cursor-pointer`}
    >
      <a href={href}>{label}</a>
    </li>
  );
}

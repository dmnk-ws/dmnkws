import React from 'react';
import NavLink from '@/components/navigation/NavLink';

interface NavLinksProps {
  className?: string;
}

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <ul className={className}>
      <NavLink href="#home" label="home" />
      <NavLink href="#about" label="about" />
      <NavLink href="#portfolio" label="portfolio" />
      <NavLink href="#contact" label="contact" />
    </ul>
  );
}

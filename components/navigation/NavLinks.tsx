import React from 'react';
import NavLink from '@/components/navigation/NavLink';

interface NavLinksProps {
  className?: string;
}

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <ul className={className}>
      <NavLink href="#home" label="Main" />
      <NavLink href="#about" label="About" />
      <NavLink href="#portfolio" label="Portfolio" />
      <NavLink href="#contact" label="Contact" />
    </ul>
  );
}

import React from 'react';
import NavLink from '@/components/navigation/NavLink';
import { useTranslation } from '@/context/TranslationContext';

interface NavLinksProps {
  className?: string;
}

export default function NavLinks({ className }: NavLinksProps) {
  const { t } = useTranslation();

  return (
    <ul className={className}>
      <NavLink href="#home" label={t('home')} />
      <NavLink href="#about" label={t('about')} />
      <NavLink href="#portfolio" label={t('portfolio')} />
      <NavLink href="#contact" label={t('contact')} />
    </ul>
  );
}

import React from 'react';
import NavLink from '@/components/navigation/NavLink';
import { useTranslation } from '@/context/TranslationContext';

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

export default function NavLinks({ className, onLinkClick }: NavLinksProps) {
  const { t } = useTranslation();

  return (
    <ul className={className}>
      <NavLink href="#home" label={t('home')} onLinkClick={onLinkClick} />
      <NavLink href="#about" label={t('about')} onLinkClick={onLinkClick} />
      <NavLink href="#portfolio" label={t('portfolio')} onLinkClick={onLinkClick} />
      <NavLink href="#contact" label={t('contact')} onLinkClick={onLinkClick} />
    </ul>
  );
}

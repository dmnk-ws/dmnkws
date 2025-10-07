'use client';

import React from 'react';
import Carousel from '@/components/portfolio/Carousel';
import Header from '@/components/section/Header';
import Section from '@/components/section/Section';
import { useTranslation } from '@/context/TranslationContext';

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <Section id="portfolio">
      <Header header={t('portfolio')} />
      <Carousel />
    </Section>
  );
}

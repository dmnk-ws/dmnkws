'use client';

import React from 'react';
import ContactForm from '@/components/form/ContactForm';
import Section from '@/components/section/Section';
import { useTranslation } from '@/context/TranslationContext';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center">
        {t('contactHeader')}
      </h1>
      <h2 className="text-xl mb-10 lg:mb-20 text-center">{t('contactSubheader')}</h2>
      <ContactForm />
    </Section>
  );
}

'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { translations } from '@/locales/locales';
import { en } from '@/locales/en';
import { es } from '@/locales/es';
import { de } from '@/locales/de';

export type Languages = 'en' | 'de' | 'es';

type LanguageKeys = keyof typeof en | keyof typeof es | keyof typeof de;
export type TFunction = (key: LanguageKeys) => string;

interface TranslationContextType {
  language: Languages;
  setLanguage: (locale: keyof typeof translations) => void;
  t: TFunction;
}

const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export function TranslationProvider({
  children,
  defaultLocale = 'en',
}: {
  children: ReactNode;
  defaultLocale?: keyof typeof translations;
}) {
  const [locale, setLocale] = useState<keyof typeof translations>(defaultLocale);

  const setLanguage = useCallback((language: Languages) => {
    setLocale(language);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const localeTranslations = translations[locale] as Record<string, string>;

      return localeTranslations[key] || key;
    },
    [locale]
  );

  return (
    <TranslationContext.Provider value={{ language: locale, t, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}

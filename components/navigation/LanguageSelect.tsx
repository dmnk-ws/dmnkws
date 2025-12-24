'use client';

import React, { useCallback, useState } from 'react';
import { Languages, useTranslation } from '@/context/TranslationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LanguageOption from '@/components/navigation/LanguageOption';

const languages = [
  { code: 'en' as Languages, label: 'EN' },
  { code: 'de' as Languages, label: 'DE' },
  { code: 'es' as Languages, label: 'ES' },
];

export default function LanguageSelect() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageSelect = useCallback(
    (lang: Languages) => {
      setLanguage(lang);
      setIsOpen(false);
    },
    [setLanguage]
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center text-gray-400 hover:bg-white hover:text-black rounded px-2 py-1 lg:px-4 lg:py-3 font-bold text-xl sm:text-base xl:text-xl transition-colors duration-200 cursor-default">
        <span>{currentLanguage?.label || 'EN'}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`size-4 lg:size-4 ml-2 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`absolute top-full left-0 right-0 mt-1 rounded bg-background overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 max-h-60' : 'opacity-0 max-h-0'
        }`}
      >
        {languages.map((lang) => (
          <LanguageOption
            key={lang.code}
            code={lang.code}
            label={lang.label}
            onLanguageSelect={handleLanguageSelect}
          />
        ))}
      </div>
    </div>
  );
}

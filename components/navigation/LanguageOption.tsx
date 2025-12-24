'use client';

import React, { memo } from 'react';
import { Languages, useTranslation } from '@/context/TranslationContext';

interface LanguageOptionProps {
  code: Languages;
  label: string;
  onLanguageSelect: (code: Languages) => void;
}

function LanguageOption({ code, label, onLanguageSelect }: LanguageOptionProps) {
  const { language } = useTranslation();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onLanguageSelect(code);
      }}
      className={`p-4 md:p-2 lg:px-4 lg:py-2 font-bold text-3xl md:text-base xl:text-xl cursor-pointer transition-colors duration-200 ${
        language === code
          ? 'text-white bg-gray-700'
          : 'text-gray-400 hover:bg-white hover:text-black'
      }`}
    >
      {label}
    </div>
  );
}

export default memo(LanguageOption);

'use client';

import React from 'react';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Icon from '@/components/footer/Icon';
import { useTranslation } from '@/context/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="border-t border-gray-500 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/background.svg'), url('/background.svg')",
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=" mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl flex flex-col justify-center">
        <div className="flex flex-col justify-center mt-10 md:max-w-1/2 mx-auto">
          <em className="text-lg md:text-2xl font-bold">“{t('cite')}”</em>
          <span> — Johann Wolfgang von Goethe</span>
        </div>
        <div className="flex justify-center mt-10">
          <Icon href="https://github.com/dmnk-ws" icon={faGithub} />
          <Icon
            href="https://www.linkedin.com/in/dominik-wies-613483204"
            icon={faLinkedin}
          />
          <Icon href="https://www.instagram.com/dmnkws/" icon={faInstagram} />
          <Icon href="mailto:domi.wies@googlemail.com" icon={faPaperPlane} />
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <p>&copy; Copyright {new Date().getUTCFullYear()}.</p>
          <p>{t('madeBy')} Dominik Wies</p>
        </div>
      </div>
    </footer>
  );
}

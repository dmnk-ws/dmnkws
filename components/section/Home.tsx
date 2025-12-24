'use client';

import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import laptop from '../../assets/images/laptop.png';
import { IAM } from '@/constants/home/iam';
import Header from '@/components/section/Header';
import Section from '@/components/section/Section';
import Grid from '@/components/section/Grid';
import { useTranslation } from '@/context/TranslationContext';

export default function Home() {
  const { language, t } = useTranslation();

  return (
    <Section id="home" grid>
      <Grid>
        <div className="flex justify-center flex-col">
          <Header header={t('mainHeader')} />
          <h1 className="text-3xl md:text-6xl mb-4 pb-2 font-bold bg-gradient-to-r from-indigo-600 to-pink-200 bg-clip-text text-transparent">
            <Typewriter
              loop={0}
              words={IAM[language]}
              cursor
              typeSpeed={125}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="py-4">{t('mainText')}</p>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center xl:items-center">
            <Image
              src={laptop}
              alt="Laptop image"
              priority
              className="w-auto h-75 md:h-125 xl:w-full xl:h-auto"
            />
          </div>
        </div>
      </Grid>
    </Section>
  );
}

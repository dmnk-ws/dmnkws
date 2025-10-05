import React from 'react';
import Carousel from '@/components/portfolio/Carousel';
import Header from '@/components/section/Header';
import Section from '@/components/section/Section';

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <Header header="portfolio" />
      <Carousel />
    </Section>
  );
}

import React from 'react';
import Carousel from '@/components/portfolio/Carousel';
import Header from '@/components/section/Header';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] py-16 flex flex-col justify-center"
    >
      <Header header="portfolio" />
      <Carousel />
    </section>
  );
}

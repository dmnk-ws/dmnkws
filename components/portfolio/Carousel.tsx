'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Card from './Card';
import Chevron from './Chevron';
import { getProjects } from '@/constants/portfolio/projects';
import { useTranslation } from '@/context/TranslationContext';

const CARD_WIDTH_DESKTOP = 400;
const CARD_WIDTH_MOBILE = 300;
const GAP_DESKTOP = 32;
const GAP_MOBILE = 16;
const CHEVRON_WIDTH = 48;
const MOBILE_BREAKPOINT = 640;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const projects = useMemo(() => getProjects(t), [t]);
  const projectsLength = projects.length;
  const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const gap = isMobile ? GAP_MOBILE : GAP_DESKTOP;

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!sliderRef.current || isScrolling) return;

      const newIndex = Math.max(0, Math.min(index, maxIndex));
      const chevronOffset = !isMobile && newIndex > 0 ? CHEVRON_WIDTH : 0;
      const scrollLeft = newIndex * (cardWidth + gap) - chevronOffset;

      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });

      setIsScrolling(true);
      setCurrentIndex(newIndex);
      setTimeout(() => setIsScrolling(false), 500);
    },
    [isScrolling, maxIndex, isMobile, cardWidth, gap]
  );

  const handlePrevious = useCallback(() => {
    scrollToIndex(currentIndex - 1);
  }, [currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(currentIndex + 1);
  }, [currentIndex, scrollToIndex]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      if (!sliderRef.current) return;

      const currentCardWidth = mobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
      const currentGap = mobile ? GAP_MOBILE : GAP_DESKTOP;
      const containerWidth = sliderRef.current.clientWidth - (mobile ? 32 : 64);
      const cardsVisible = Math.floor(
        containerWidth / (currentCardWidth + currentGap - (mobile ? 0 : CHEVRON_WIDTH))
      );
      const actualCardsVisible = Math.max(1, Math.min(cardsVisible, projectsLength));

      setMaxIndex(Math.max(0, projectsLength - actualCardsVisible));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [projectsLength]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return undefined;

    const handleScroll = () => {
      if (!sliderRef.current) return;

      const scrollLeft = sliderRef.current.scrollLeft;
      const chevronOffset = isMobile ? 0 : CHEVRON_WIDTH;
      const adjustedScrollLeft = Math.max(0, scrollLeft - chevronOffset);
      const newIndex = Math.round(adjustedScrollLeft / (cardWidth + gap));

      setCurrentIndex(Math.min(newIndex, maxIndex));
    };

    slider.addEventListener('scroll', handleScroll);

    return () => slider.removeEventListener('scroll', handleScroll);
  }, [isScrolling, maxIndex, isMobile, cardWidth, gap]);

  return (
    <div className="relative">
      {!isMobile && (
        <Chevron
          orientation="left"
          isDisabled={currentIndex === 0}
          onClick={handlePrevious}
          width={CHEVRON_WIDTH}
        />
      )}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto p-8 sm:p-8 px-4 snap-x snap-mandatory"
        style={{
          gap,
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {projects.map((project) => (
          <Card key={project.title} project={project} width={cardWidth} />
        ))}
      </div>
      {!isMobile && (
        <Chevron
          orientation="right"
          isDisabled={currentIndex >= maxIndex}
          onClick={handleNext}
          width={CHEVRON_WIDTH}
        />
      )}
    </div>
  );
}

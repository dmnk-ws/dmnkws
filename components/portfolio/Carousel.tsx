'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Card from './Card';
import Chevron from './Chevron';
import { getProjects } from '@/constants/portfolio/projects';
import { useTranslation } from '@/context/TranslationContext';

const CARD_WIDTH = 400;
const GAP = 32;
const CHEVRON_WIDTH = 48;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [maxIndex, setMaxIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const projects = useMemo(() => getProjects(t), [t]);
  const projectsLength = projects.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!sliderRef.current || isScrolling) return;

      const newIndex = Math.max(0, Math.min(index, maxIndex));
      const chevronOffset = newIndex > 0 ? CHEVRON_WIDTH : 0;
      const scrollLeft = newIndex * (CARD_WIDTH + GAP) - chevronOffset;

      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });

      setIsScrolling(true);
      setCurrentIndex(newIndex);
      setTimeout(() => setIsScrolling(false), 500);
    },
    [isScrolling, maxIndex]
  );

  const handlePrevious = useCallback(() => {
    scrollToIndex(currentIndex - 1);
  }, [currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(currentIndex + 1);
  }, [currentIndex, scrollToIndex]);

  useEffect(() => {
    const calculateMaxIndex = () => {
      if (!sliderRef.current) return;

      const containerWidth = sliderRef.current.clientWidth - 64;
      const cardsVisible = Math.floor(
        containerWidth / (CARD_WIDTH + GAP - CHEVRON_WIDTH)
      );
      const actualCardsVisible = Math.max(1, Math.min(cardsVisible, projectsLength));

      setMaxIndex(Math.max(0, projectsLength - actualCardsVisible));
    };

    calculateMaxIndex();
    window.addEventListener('resize', calculateMaxIndex);

    return () => window.removeEventListener('resize', calculateMaxIndex);
  }, [projectsLength]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return undefined;

    const handleScroll = () => {
      if (!sliderRef.current) return;

      const scrollLeft = sliderRef.current.scrollLeft;
      const adjustedScrollLeft = Math.max(0, scrollLeft - CHEVRON_WIDTH);
      const newIndex = Math.round(adjustedScrollLeft / (CARD_WIDTH + GAP));

      setCurrentIndex(Math.min(newIndex, maxIndex));
    };

    slider.addEventListener('scroll', handleScroll);

    return () => slider.removeEventListener('scroll', handleScroll);
  }, [isScrolling, maxIndex]);

  return (
    <div className="relative">
      <Chevron
        orientation="left"
        isDisabled={currentIndex === 0}
        onClick={handlePrevious}
        width={CHEVRON_WIDTH}
      />
      <div
        ref={sliderRef}
        className="flex overflow-x-auto p-8"
        style={{
          gap: GAP,
          scrollbarWidth: 'none',
        }}
      >
        {projects.map((project) => (
          <Card key={project.title} project={project} width={CARD_WIDTH} />
        ))}
      </div>
      <Chevron
        orientation="right"
        isDisabled={currentIndex >= maxIndex}
        onClick={handleNext}
        width={CHEVRON_WIDTH}
      />
    </div>
  );
}

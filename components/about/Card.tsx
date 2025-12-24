'use client';

import { forwardRef, memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { Item } from '@/components/section/About';
import Chip from '@/components/about/Chip';

interface CardProps extends Item {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isHighlighted?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      dateRange,
      title,
      company,
      companyUrl,
      description,
      technologies,
      onMouseEnter,
      onMouseLeave,
      isHighlighted = false,
    }: CardProps,
    ref
  ) => {
    const handleCardClick = useCallback(() => {
      window.open(companyUrl, '_blank', 'noopener,noreferrer');
    }, [companyUrl]);

    return (
      <div
        ref={ref}
        className={`group py-12 px-0 md:p-12 rounded-lg cursor-pointer ${
          isHighlighted
            ? 'bg-gray-800/50 backdrop-blur-sm'
            : 'hover:bg-gray-800/30 hover:backdrop-blur-sm'
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleCardClick}
      >
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="lg:w-1/4 mb-4 lg:mb-0">
            <div className="text-sm text-gray-400 tracking-widest">{dateRange}</div>
          </div>
          <div className="lg:w-3/4">
            <div className="mb-4">
              <h3
                className={`text-lg font-semibold ${
                  isHighlighted
                    ? 'text-white'
                    : 'group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent'
                }`}
              >
                {title}
              </h3>
              <div className="mt-2 font-medium text-sm inline-flex items-center gap-2">
                <span className="text-white group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent">
                  {company}
                </span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="px-2 w-3 h-3 text-white group-hover:text-pink-600"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((label) => (
                <Chip key={label} text={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default memo(Card);

import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ChevronProps {
  orientation: 'right' | 'left';
  isDisabled: boolean;
  onClick: () => void;
  width: number;
}

function Chevron({ orientation, isDisabled, onClick, width }: ChevronProps) {
  return (
    <div
      className="absolute top-0 z-10 bg-(--background) backdrop-blur-sm h-full transition-all duration-500 flex items-center justify-center"
      style={{
        width: `${width}px`,
        [orientation]: isDisabled ? `-${width}px` : '0px',
      }}
    >
      <button
        onClick={onClick}
        className={`w-6 h-24 rounded bg-gray-800 hover:bg-gray-700 transition-all duration-700 shadow-lg cursor-pointer ${
          isDisabled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <FontAwesomeIcon
          icon={orientation === 'right' ? faChevronRight : faChevronLeft}
          className="w-5 h-5 text-white"
        />
      </button>
    </div>
  );
}

export default memo(Chevron);

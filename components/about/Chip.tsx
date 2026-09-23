import React, { memo } from 'react';

interface ChipProps {
  text: string;
  className?: string;
}

function Chip({ text, className = '' }: ChipProps) {
  return (
    <span
      className={`px-3 py-1 bg-gradient-to-r from-pink-600/75 to-indigo-600/75 text-xs font-medium rounded-xl text-white ${className}`}
    >
      {text}
    </span>
  );
}

export default memo(Chip);

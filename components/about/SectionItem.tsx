import { memo } from 'react';
import type { Item } from '@/components/section/About';

interface SectionItemProps {
  item: Item;
  isActive: boolean;
  onItemClick: () => void;
}

function SectionItem({ item, isActive, onItemClick }: SectionItemProps) {
  return (
    <div
      className={`group cursor-pointer transition-all duration-200 ${
        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
      }`}
      onClick={onItemClick}
    >
      <div className="flex items-start space-x-3">
        <div
          className={`h-px transition-all duration-200 flex-shrink-0 mt-2 ${
            isActive ? 'bg-white w-16' : 'bg-gray-400 w-12'
          }`}
        />
        <div className="flex-1 min-w-0">
          <div
            className={`text-xs font-semibold transition-colors duration-200 ${
              isActive ? 'text-white' : 'text-gray-300 group-hover:text-gray-300'
            }`}
          >
            {item.title}
          </div>
          <div
            className={`text-xs transition-colors duration-200 ${
              isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-500'
            }`}
          >
            {item.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SectionItem);

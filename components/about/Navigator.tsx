'use client';

import { memo, useCallback, useState } from 'react';
import SectionItem from '@/components/about/SectionItem';
import type { Item, Section } from '@/components/section/About';

interface NavigatorProps {
  sections: Section[];
  onActiveItemChange: (item: Item) => void;
}

function Navigator({ sections, onActiveItemChange }: NavigatorProps) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleItemClick = useCallback(
    (sectionIndex: number, itemIndex: number) => {
      setActiveSectionIndex(sectionIndex);
      setActiveItemIndex(itemIndex);
      onActiveItemChange(sections[sectionIndex].items[itemIndex]);
    },
    [sections, onActiveItemChange]
  );

  return (
    <div className="space-y-8 my-16">
      {sections.map((section, sectionIndex) => (
        <div key={section.title}>
          <h4 className="text-md md:text-lg font-bold mb-4">{section.title}</h4>
          <nav className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <SectionItem
                key={item.title}
                item={item}
                isActive={
                  activeSectionIndex === sectionIndex && activeItemIndex === itemIndex
                }
                onItemClick={() => handleItemClick(sectionIndex, itemIndex)}
              />
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
}

export default memo(Navigator);

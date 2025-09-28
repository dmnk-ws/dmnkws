'use client';

import { useCallback, useState } from 'react';
import Card from '../about/Card';
import Navigator from '../about/Navigator';
import { EXPERIENCES } from '@/constants/about/experiences';
import { EDUCATION } from '@/constants/about/education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/section/Header';

export interface Item {
  dateRange: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

export interface Section {
  title: string;
  items: Item[];
}

const sections: Section[] = [
  { title: 'experience', items: EXPERIENCES },
  { title: 'education', items: EDUCATION },
];

export default function About() {
  const [activeItem, setActiveItem] = useState<Item>(EXPERIENCES[0]);

  const handleActiveItemChange = useCallback((item: Item) => {
    setActiveItem(item);
  }, []);

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] flex items-center justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full place-items-center">
        <div className="lg:col-span-1">
          <div className="prose prose-lg text-white mb-8">
            <Header header="dominik wies" />
            <h2 className="text-xl md:text-3xl font-bold mb-4">[software developer]</h2>
            <p>
              When I&apos;m not at the computer, I&apos;m usually improving my piano
              skills, reading, hanging out with my wife and two cats, or battling the
              Empire.
            </p>
          </div>
          <Navigator sections={sections} onActiveItemChange={handleActiveItemChange} />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-indigo-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer transition-all"
          >
            <span className="pr-2">View full resume</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <div className="lg:col-span-1">
          <Card {...activeItem} isHighlighted={false} />
        </div>
      </div>
    </section>
  );
}

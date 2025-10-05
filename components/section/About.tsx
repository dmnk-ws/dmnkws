'use client';

import { useCallback, useState } from 'react';
import Card from '../about/Card';
import Navigator from '../about/Navigator';
import { EXPERIENCES } from '@/constants/about/experiences';
import { EDUCATION } from '@/constants/about/education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/section/Header';
import Section from '@/components/section/Section';
import Grid from '@/components/section/Grid';

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
    <Section id="about" grid>
      <Grid>
        <div className="flex flex-col justify-center">
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
          <div>
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
        </div>
        <div className="flex items-center justify-center">
          <Card {...activeItem} isHighlighted={false} />
        </div>
      </Grid>
    </Section>
  );
}

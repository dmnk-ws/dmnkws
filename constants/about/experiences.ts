import { Item } from '@/components/section/About';
import { TFunction } from '@/context/TranslationContext';

export const getExperiences = (t: TFunction): Item[] => [
  {
    dateRange: '2024 — ' + t('present').toUpperCase(),
    title: t('occupation'),
    company: 'EELOY AG',
    companyUrl: 'https://www.eeloy.com/',
    description: t('experienceDescriptionPresent'),
    technologies: [
      'TypeScript',
      'React',
      'PHP',
      'Symfony',
      'Doctrine',
      'MySQL',
      'PHPStan',
      'PHPUnit',
      'Playwright',
      'Git',
      'Docker',
    ],
  },
  {
    dateRange: '2024 — 2024',
    title: t('experienceTitleResearch'),
    company: 'EELOY AG',
    companyUrl: 'https://www.eeloy.com/',
    description: t('experienceDescriptionThesis'),
    technologies: ['Python', 'Scikit-Learn', 'TensorFlow', 'pandas', 'numpy'],
  },
  {
    dateRange: '2022 — 2024',
    title: t('experienceTitleIntern'),
    company: 'EELOY AG',
    companyUrl: 'https://www.eeloy.com/',
    description: t('experienceDescriptionIntern'),
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP',
      'MySQL',
      'Symfony',
      'Twig',
      'Git',
    ],
  },
];

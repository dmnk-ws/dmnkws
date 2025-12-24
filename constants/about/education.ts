import { Item } from '@/components/section/About';
import { TFunction } from '@/context/TranslationContext';

export const getEducation = (t: TFunction): Item[] => [
  {
    dateRange: '2025 — PRESENT',
    title: t('educationTitleMaster'),
    company: 'Hochschule Fulda – University of Applied Sciences',
    companyUrl: 'https://www.hs-fulda.de/',
    description: t('educationDescriptionMaster'),
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'Angular',
      'Vue',
      'Jasmine',
      'Java',
      'Spring',
      'Python',
      'numpy',
      'tensorflow',
    ],
  },
  {
    dateRange: '2020 — 2024',
    title: t('educationTitleBachelor'),
    company: 'Hochschule Fulda – University of Applied Sciences',
    companyUrl: 'https://www.hs-fulda.de/',
    description: t('educationDescriptionBachelor'),
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'NodeJS', 'Java', 'C', 'SQL'],
  },
  {
    dateRange: '2022 — 2023',
    title: t('educationTitleExchange'),
    company: 'Linnéuniversitetet',
    companyUrl: 'https://lnu.se/',
    description: t('educationDescriptionExchange'),
    technologies: ['Python', 'Java', 'Git'],
  },
];

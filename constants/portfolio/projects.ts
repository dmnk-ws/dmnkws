import type { Project } from '@/components/portfolio/Card';
import mobile from '../../assets/images/mobile.jpg';
import { TFunction } from '@/context/TranslationContext';

export const getProjects = (t: TFunction): Project[] => [
  {
    title: 'Multi-Model Chat',
    description: t('multiModelDescription'),
    githubUrl: 'https://github.com/dmnk-ws/',
  },
  {
    title: t('clvTitle'),
    description: t('clvDescription'),
    githubUrl: 'https://github.com/dmnk-ws/clv-model',
  },
  {
    title: 'Moviebase',
    description: t('movieBaseDescription'),
    img: mobile,
    githubUrl: 'https://github.com/dmnk-ws/moviebase',
  },
  {
    title: 'GroBro',
    description: t('groBroDescription'),
    githubUrl: 'https://github.com/dmnk-ws/',
  },
];

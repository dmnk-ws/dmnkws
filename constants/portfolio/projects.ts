import type { Project } from '@/components/portfolio/Card';
import movieBase from '../../assets/images/moviebase.png';
import groBro from '../../assets/images/grobro.png';
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
    img: movieBase,
    githubUrl: 'https://github.com/dmnk-ws/moviebase',
  },
  {
    title: 'GroBro',
    description: t('groBroDescription'),
    img: groBro,
    githubUrl: 'https://github.com/dmnk-ws/',
  },
];

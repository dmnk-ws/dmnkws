import type { Project } from '@/components/portfolio/Card';
import movieBase from '../../assets/images/moviebase.png';
import groBro from '../../assets/images/grobro.png';
import crave from '../../assets/images/crave.png';
import aiChatbot from '../../assets/images/ai-chatbot.png';
import { TFunction } from '@/context/TranslationContext';

export const getProjects = (t: TFunction): Project[] => [
  {
    title: 'Crave',
    description: t('craveDescription'),
    img: crave,
    githubUrl: 'https://github.com/dmnk-ws/crave',
    technologies: [
      'TypeScript',
      'Web Components',
      'Vite',
      'React',
      'Vue',
      'PHP',
      'Symfony',
      'API Platform',
      'Doctrine',
      'MySQL',
      'Docker',
    ],
  },
  {
    title: 'Multicloud IaC',
    description: t('multicloudDescription'),
    githubUrl: 'https://github.com/dmnk-ws/multicloud-iac',
    technologies: [
      'Terraform',
      'Kubernetes',
      'AWS EKS',
      'OpenStack',
      'RKE2',
      'NGINX Ingress',
      'Docker',
    ],
  },
  {
    title: 'Multi-Model Chat',
    description: t('multiModelDescription'),
    img: aiChatbot,
    githubUrl: 'https://github.com/dmnk-ws/ai-chatbot',
    technologies: ['Next.js', 'TypeScript', 'React', 'OpenAI', 'Anthropic', 'Mistral'],
  },
  {
    title: t('clvTitle'),
    description: t('clvDescription'),
    githubUrl: 'https://github.com/dmnk-ws/clv-model',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'pandas', 'numpy'],
  },
  {
    title: 'Moviebase',
    description: t('movieBaseDescription'),
    img: movieBase,
    githubUrl: 'https://github.com/dmnk-ws/moviebase',
    technologies: ['TypeScript', 'React', 'Vite'],
  },
  {
    title: 'GroBro',
    description: t('groBroDescription'),
    img: groBro,
    githubUrl: 'https://github.com/dmnk-ws/grobro',
    technologies: ['JavaScript', 'NodeJS', 'Express', 'Pug'],
  },
];

import type { Project } from '@/components/portfolio/Card';
import mobile from '../../assets/images/mobile.jpg';

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    img: mobile,
    githubUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS', 'PWA'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Analytics platform for social media content performance with automated reporting and competitor analysis features.',
    technologies: ['Python', 'Django', 'React', 'D3.js', 'Redis', 'Celery'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Crypto Portfolio Tracker',
    description:
      'Real-time cryptocurrency portfolio tracking with price alerts, profit/loss calculations, and market analysis tools.',
    technologies: ['React Native', 'TypeScript', 'CoinGecko API', 'SQLite', 'Expo'],
    githubUrl: 'https://github.com/yourusername/crypto-tracker',
  },
  {
    title: 'AI Content Generator',
    description:
      'AI-powered content generation tool for marketers and writers with customizable templates and export options.',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Supabase', 'Vercel AI SDK'],
    githubUrl: 'https://github.com/yourusername/ai-content-generator',
  },
];

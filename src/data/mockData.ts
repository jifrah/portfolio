import { Project, BlogPost, TimelineItem, Certification, Technology } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Boxing Punch Motion Detection',
    description: 'AI-powered system detecting and analyzing boxing movements in real-time, improving training efficiency by 40%',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop',
    category: 'dataScience',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Ultralytics', 'Matplotlib'],
    details: 'Developed a real-time motion detection system that analyzes boxing techniques using computer vision. The system provides instant feedback on form, speed, and power, helping athletes improve their performance. Implemented custom neural networks achieving 95% accuracy in punch classification.',
    link: 'https://github.com/example/boxing-detection',
    year: '2023'
  },
  {
    id: '2',
    title: 'Luxury Hotel Digital Transformation',
    description: 'Led digital transformation increasing guest satisfaction by 35% and operational efficiency by 28%',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    category: 'product',
    technologies: ['Product Strategy', 'UX Design', 'Agile', 'Change Management'],
    details: 'Spearheaded the digital transformation of a luxury hotel chain, implementing mobile check-in, IoT room controls, and personalized guest experiences. Managed cross-functional teams and stakeholder alignment across 15 properties.',
    link: 'https://example.com/case-study',
    year: '2023'
  },
  {
    id: '3',
    title: 'Microfinance Platform Redesign',
    description: 'Redesigned loan application process reducing completion time by 60% and increasing conversion by 45%',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    category: 'product',
    technologies: ['User Research', 'Figma', 'A/B Testing', 'Analytics'],
    details: 'Complete overhaul of the microfinance platform focusing on accessibility and user experience. Implemented progressive disclosure and simplified workflows for users with limited digital literacy.',
    link: 'https://example.com/microfinance-case',
    year: '2023'
  },
  {
    id: '4',
    title: 'Portfolio Website Development',
    description: 'Built a modern, responsive portfolio website with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    category: 'webDevelopment',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Contentful'],
    details: 'Developed a high-performance portfolio website with CMS integration, dynamic content loading, and modern animations. Achieved 98 Lighthouse performance score.',
    link: 'https://github.com/example/portfolio',
    year: '2024'
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Human Side of Digital Transformation',
    excerpt: 'Why focusing on people, not technology, is the key to successful digital transformation in luxury hospitality...',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    slug: 'human-side-digital-transformation'
  },
  {
    id: '2',
    title: 'Leveraging AI Without Losing the Personal Touch',
    excerpt: 'How luxury brands can implement AI while maintaining the human connections that define premium experiences...',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop',
    slug: 'ai-personal-touch'
  }
];

export const mockTimeline: TimelineItem[] = [
  {
    id: '1',
    company: 'Adie (French microfinance non-profit)',
    logo: 'https://via.placeholder.com/100x100/E60000/FFFFFF?text=A',
    period: '2023 - now',
    position: 'Product Manager',
    description: 'Hello, I\'m Jérémy Ifrah, an accomplished Senior Product Manager with extensive business expertise and a solid foundation in data science.\n\nKnown for my adaptability and quick learning, I excel in developing innovative digital experiences that drive success.'
  },
  {
    id: '2',
    company: 'IE - School of Science and Technology',
    logo: 'https://via.placeholder.com/100x100/0076CE/FFFFFF?text=IE',
    period: '2022 - 2023',
    position: 'MSc Business Analytics and Big Data',
    description: 'Hello, I\'m Jérémy Ifrah, an accomplished Senior Product Manager with extensive business expertise and a solid foundation in data science.\n\nKnown for my adaptability and quick learning, I excel in developing innovative digital experiences that drive success.'
  },
  {
    id: '3',
    company: 'IE - Business School',
    logo: 'https://via.placeholder.com/100x100/0076CE/FFFFFF?text=IE',
    period: '2021 - 2022',
    position: 'Master of Business Administration',
    description: 'Hello, I\'m Jérémy Ifrah, an accomplished Senior Product Manager with extensive business expertise and a solid foundation in data science.\n\nKnown for my adaptability and quick learning, I excel in developing innovative digital experiences that drive success.'
  }
];

export const mockCertifications: Certification[] = [
  { id: '1', name: 'AWS Certified Solutions Architect', org: 'Amazon Web Services', logo: 'AWS' },
  { id: '2', name: 'Google Data Analytics Professional', org: 'Google', logo: 'Google' },
  { id: '3', name: 'Azure Data Scientist Associate', org: 'Microsoft', logo: 'Azure' }
];

export const mockTechnologies: Technology[] = [
  { id: '1', name: 'Python' },
  { id: '2', name: 'TensorFlow' },
  { id: '3', name: 'PyTorch' },
  { id: '4', name: 'SQL' },
  { id: '5', name: 'AWS' },
  { id: '6', name: 'React' },
  { id: '7', name: 'Node.js' },
  { id: '8', name: 'Docker' },
  { id: '9', name: 'Kubernetes' },
  { id: '10', name: 'Tableau' },
  { id: '11', name: 'Power BI' },
  { id: '12', name: 'Git' }
];
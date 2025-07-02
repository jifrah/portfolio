export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'product' | 'dataScience' | 'webDevelopment';
  technologies: string[];
  details: string;
  link: string;
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export interface TimelineItem {
  id: string;
  company: string;
  logo: string;
  period: string;
  position: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  org: string;
  logo: string;
}

export interface Technology {
  id: string;
  name: string;
  icon?: string;
}

export type ProjectCategory = Project['category'];
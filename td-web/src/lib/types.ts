export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'design' | 'compliance';
  features: string[];
  process?: string[];
  faqs?: FAQ[];
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  readTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'branding' | 'compliance';
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

import { Service, Testimonial, BlogPost, PortfolioItem, TeamMember, FAQ } from './types';

export const services: Service[] = [
  // Web & Digital Services
  {
    id: 'custom-websites',
    title: 'Custom Website Design',
    description: 'Professional, responsive websites tailored to your business needs and brand identity.',
    category: 'web',
    icon: '🌐',
    features: [
      'Mobile-first responsive design',
      'SEO-optimized structure',
      'Fast loading speeds',
      'User-friendly CMS integration',
      'Cross-browser compatibility',
      'Security best practices'
    ],
    process: [
      'Discovery & requirements gathering',
      'Design mockups & approval',
      'Development & testing',
      'Content integration',
      'Launch & training'
    ],
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer: 'Typically 2-4 weeks depending on complexity and content readiness.'
      },
      {
        question: 'Do you provide website maintenance?',
        answer: 'Yes, we offer monthly maintenance packages to keep your site secure and updated.'
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Complete online store setup with payment integration and inventory management.',
    category: 'web',
    icon: '🛒',
    features: [
      'Secure payment gateway integration',
      'Product catalog management',
      'Order tracking system',
      'Inventory management',
      'Customer account portal',
      'Mobile shopping experience'
    ],
    process: [
      'Business requirements analysis',
      'Platform selection & setup',
      'Product catalog creation',
      'Payment & shipping integration',
      'Testing & launch'
    ]
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Improve your website visibility and rankings on search engines.',
    category: 'web',
    icon: '📈',
    features: [
      'Keyword research & strategy',
      'On-page optimization',
      'Technical SEO audit',
      'Local SEO setup',
      'Content optimization',
      'Performance tracking'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive online marketing strategies to grow your business.',
    category: 'web',
    icon: '📱',
    features: [
      'Social media marketing',
      'Google Ads management',
      'Email marketing campaigns',
      'Content marketing',
      'Analytics & reporting',
      'Conversion optimization'
    ]
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Keep your website secure, updated, and performing optimally.',
    category: 'web',
    icon: '🔧',
    features: [
      'Regular security updates',
      'Performance monitoring',
      'Backup management',
      'Content updates',
      'Bug fixes',
      'Uptime monitoring'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and engagement.',
    category: 'web',
    icon: '🎨',
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Visual design creation',
      'Usability testing',
      'Design system development',
      'Accessibility compliance'
    ]
  },

  // Design & Branding Services
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Unique, memorable logos that represent your brand identity.',
    category: 'design',
    icon: '🎯',
    features: [
      'Multiple design concepts',
      'Vector file formats',
      'Color variations',
      'Brand guidelines',
      'Print-ready files',
      'Social media versions'
    ]
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Complete brand identity package including colors, fonts, and guidelines.',
    category: 'design',
    icon: '🏢',
    features: [
      'Logo design & variations',
      'Color palette development',
      'Typography selection',
      'Brand guidelines document',
      'Business card design',
      'Letterhead design'
    ]
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Professional business card design and print coordination.',
    category: 'design',
    icon: '💼',
    features: [
      'Custom design creation',
      'Print-ready files',
      'Multiple finish options',
      'Fast turnaround',
      'Bulk printing available',
      'Design revisions included'
    ]
  },
  {
    id: 'flyers-posters',
    title: 'Flyers & Posters',
    description: 'Eye-catching promotional materials for events and marketing campaigns.',
    category: 'design',
    icon: '📋',
    features: [
      'Custom design layouts',
      'High-resolution files',
      'Print coordination',
      'Multiple size options',
      'Brand consistency',
      'Quick turnaround'
    ]
  },
  {
    id: 'labels-packaging',
    title: 'Labels & Packaging',
    description: 'Professional packaging design that stands out on shelves.',
    category: 'design',
    icon: '📦',
    features: [
      'Product label design',
      'Packaging mockups',
      'Print specifications',
      'Regulatory compliance',
      'Brand integration',
      'Material recommendations'
    ]
  },

  // Business Compliance Services
  {
    id: 'company-registration',
    title: 'Company Registration (CIPC)',
    description: 'Fast, reliable company registration services for new businesses.',
    category: 'compliance',
    icon: '🏛️',
    features: [
      'Name reservation',
      'Company registration',
      'MOI preparation',
      'Share certificate issuance',
      'Tax registration assistance',
      'Bank account opening support'
    ],
    process: [
      'Name search & reservation',
      'Document preparation',
      'CIPC submission',
      'Registration completion',
      'Document delivery'
    ],
    faqs: [
      {
        question: 'How long does company registration take?',
        answer: 'Usually 3-5 working days after name approval.'
      },
      {
        question: 'What documents are required?',
        answer: 'ID copies, proof of address, and business details.'
      }
    ]
  },
  {
    id: 'bbbee-certificates',
    title: 'B-BBEE Certificates',
    description: 'B-BBEE affidavit and certificate services for small businesses.',
    category: 'compliance',
    icon: '📊',
    features: [
      'B-BBEE affidavit preparation',
      'Exempted micro enterprise certificates',
      'QSE certificate assistance',
      'Scorecard analysis',
      'Compliance guidance',
      'Annual renewal support'
    ]
  },
  {
    id: 'annual-returns',
    title: 'CIPC Annual Returns',
    description: 'Timely filing of annual returns to keep your company in good standing.',
    category: 'compliance',
    icon: '📅',
    features: [
      'Annual return preparation',
      'Financial statement review',
      'CIPC submission',
      'Compliance monitoring',
      'Penalty avoidance',
      'Status updates'
    ]
  },
  {
    id: 'tax-clearance',
    title: 'SARS Tax Clearance',
    description: 'Assistance with tax clearance certificates and SARS compliance.',
    category: 'compliance',
    icon: '🏦',
    features: [
      'Tax clearance application',
      'SARS registration assistance',
      'Compliance check',
      'Document preparation',
      'Status tracking',
      'Renewal reminders'
    ]
  },
  {
    id: 'beneficial-ownership',
    title: 'Beneficial Ownership Registration',
    description: 'Register beneficial ownership information as required by law.',
    category: 'compliance',
    icon: '👥',
    features: [
      'Beneficial ownership registration',
      'CIPC compliance filing',
      'Document preparation',
      'Annual updates',
      'Regulatory guidance',
      'Penalty avoidance'
    ]
  },
  {
    id: 'company-reinstatement',
    title: 'Company Reinstatement',
    description: 'Restore deregistered companies back to active status.',
    category: 'compliance',
    icon: '🔄',
    features: [
      'Deregistration analysis',
      'Document preparation',
      'CIPC application',
      'Compliance restoration',
      'Status monitoring'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mokoena',
    company: 'Mokoena Trading',
    role: 'Managing Director',
    content: 'Thabo Digital transformed our online presence completely. Our new website has increased customer inquiries by 300% and the SEO work they did has us ranking on the first page of Google. Professional, reliable, and affordable!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Johannes Ledwaba',
    company: 'Ledwaba Construction',
    role: 'CEO',
    content: 'The team at Thabo Digital helped us register our company and set up our entire digital infrastructure. From CIPC registration to website launch, they made everything seamless. Highly recommend their one-stop service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Grace Ndlovu',
    company: 'Grace Beauty Spa',
    role: 'Owner',
    content: 'Working with Thabo Digital was the best decision for my business. They designed a beautiful logo, created stunning marketing materials, and built a website that perfectly captures our brand. Exceptional service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Michael van der Merwe',
    company: 'VDM Logistics',
    role: 'Operations Manager',
    content: 'Thabo Digital\'s compliance services saved us so much time and stress. They handled our B-BBEE certificate, annual returns, and tax clearance efficiently. Professional service with great attention to detail.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Features Every South African Business Website Needs in 2024',
    excerpt: 'Discover the must-have features that will make your business website stand out and convert visitors into customers.',
    content: 'Full article content here...',
    author: 'Thabo Mokoena',
    date: '2024-01-15',
    category: 'Web Design',
    tags: ['web design', 'business', 'south africa'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    slug: 'essential-website-features-south-africa-2024',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Step-by-Step Guide to Company Registration in South Africa',
    excerpt: 'Everything you need to know about registering your company with CIPC, from name reservation to final documentation.',
    content: 'Full article content here...',
    author: 'Sarah Mokoena',
    date: '2024-01-10',
    category: 'Business Compliance',
    tags: ['cipc', 'company registration', 'compliance'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop',
    slug: 'company-registration-guide-south-africa',
    readTime: '12 min read'
  },
  {
    id: '3',
    title: 'SEO Tips for Local Businesses: How to Rank Higher in Limpopo',
    excerpt: 'Learn proven strategies to improve your local search rankings and attract more customers in Limpopo and surrounding areas.',
    content: 'Full article content here...',
    author: 'Thabo Mokoena',
    date: '2024-01-05',
    category: 'SEO',
    tags: ['seo', 'local business', 'limpopo'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    slug: 'seo-tips-local-businesses-limpopo',
    readTime: '10 min read'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Mokoena Trading E-commerce Platform',
    description: 'Complete e-commerce solution for a local trading company',
    category: 'web',
    client: 'Mokoena Trading',
    challenge: 'Local trading company needed an online presence to expand beyond physical store limitations.',
    solution: 'Developed a comprehensive e-commerce platform with inventory management, payment integration, and mobile optimization.',
    results: [
      '300% increase in sales within 6 months',
      'Expanded customer base to national level',
      'Reduced operational costs by 40%'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    slug: 'mokoena-trading-ecommerce'
  },
  {
    id: '2',
    title: 'Ledwaba Construction Brand Identity',
    description: 'Complete brand identity and marketing materials',
    category: 'branding',
    client: 'Ledwaba Construction',
    challenge: 'Construction company needed professional branding to compete for larger contracts.',
    solution: 'Created comprehensive brand identity including logo, business cards, letterheads, and vehicle branding.',
    results: [
      'Successfully secured R5M+ in new contracts',
      'Improved professional credibility',
      'Enhanced brand recognition'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
    slug: 'ledwaba-construction-branding'
  },
  {
    id: '3',
    title: 'Grace Beauty Spa Complete Business Setup',
    description: 'Company registration, compliance, and digital presence',
    category: 'compliance',
    client: 'Grace Beauty Spa',
    challenge: 'New business owner needed complete business setup from registration to online presence.',
    solution: 'Handled CIPC registration, B-BBEE certificate, tax registration, and created complete digital presence.',
    results: [
      'Business launched in under 2 weeks',
      'Full compliance achieved',
      'Strong online presence established'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
    slug: 'grace-beauty-spa-business-setup'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Thabo Mokoena',
    role: 'Founder & Lead Developer',
    bio: 'With over 8 years of experience in web development and digital marketing, Thabo is passionate about helping South African businesses succeed online.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/thabo-mokoena',
      twitter: 'https://twitter.com/thabo_digital'
    }
  },
  {
    id: '2',
    name: 'Sarah Mokoena',
    role: 'Business Development Manager',
    bio: 'Sarah specializes in business compliance and registration services, ensuring clients meet all regulatory requirements efficiently.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/sarah-mokoena',
      twitter: 'https://twitter.com/sarah_compliance'
    }
  },
  {
    id: '3',
    name: 'Johannes Ledwaba',
    role: 'Senior Web Developer',
    bio: 'Johannes brings 6 years of full-stack development experience, specializing in React, Node.js, and e-commerce solutions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/johannes-ledwaba',
      twitter: 'https://twitter.com/johannes_dev'
    }
  },
  {
    id: '4',
    name: 'Grace Ndlovu',
    role: 'Creative Director',
    bio: 'Grace leads our design team with expertise in brand identity, UI/UX design, and creative strategy.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/grace-ndlovu',
      twitter: 'https://twitter.com/grace_creative'
    }
  }
];

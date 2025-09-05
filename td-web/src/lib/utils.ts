export function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(amount);
}

export function generateMetaTags({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  noIndex = false,
}: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}) {
  const siteName = 'Thabo Digital';
  const siteUrl = 'https://thabodigital.co.za';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: ['Thabo Digital', 'South Africa', 'web design', 'digital agency', ...keywords].join(', '),
    authors: [{ name: 'Thabo Digital' }],
    openGraph: {
      title: fullTitle,
      description,
      url: siteUrl,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
      locale: 'en_ZA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Thabo Digital',
    description: 'Full-service digital agency offering web design, e-commerce, SEO, branding, and business compliance services in South Africa.',
    url: 'https://thabodigital.co.za',
    telephone: '+27-71-234-5678',
    email: 'info@thabodigital.co.za',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Tzaneen',
      addressRegion: 'Limpopo',
      postalCode: '0850',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.8333,
      longitude: 30.1667,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    priceRange: 'R',
    areaServed: {
      '@type': 'State',
      name: 'Limpopo',
    },
    sameAs: [
      'https://www.facebook.com/thabodigital',
      'https://www.linkedin.com/company/thabo-digital',
      'https://twitter.com/thabo_digital',
    ],
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string) {
  const phoneRegex = /^(\+27|0)[1-9][0-9]{8}$/;
  return phoneRegex.test(phone);
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

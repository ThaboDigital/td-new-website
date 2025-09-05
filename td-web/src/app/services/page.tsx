import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import { ServiceCategories } from '@/components/services/ServiceCategories';
import { CTASection } from '@/components/home/CTASection';
import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'Services - Thabo Digital',
  description: 'Comprehensive digital services including web design, SEO, branding, and business compliance. CIPC registration, B-BBEE certificates, and more for South African businesses.',
  keywords: ['web design services', 'SEO optimization', 'CIPC registration', 'B-BBEE certificates', 'branding services', 'tzaneen', 'limpopo'],
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <ServicesList />
      <CTASection />
    </>
  );
}

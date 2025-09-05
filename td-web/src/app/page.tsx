import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { Stats } from '@/components/home/Stats';
import { Testimonials } from '@/components/home/Testimonials';
import { BlogPreview } from '@/components/home/BlogPreview';
import { CTASection } from '@/components/home/CTASection';
import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'Thabo Digital - Full-Service Digital Agency in Tzaneen, Limpopo',
  description: 'Professional web design, e-commerce, SEO, branding, and business compliance services. CIPC registration, B-BBEE certificates, and digital marketing for South African businesses.',
  keywords: ['web design tzaneen', 'digital agency limpopo', 'CIPC registration', 'B-BBEE certificates', 'SEO services south africa'],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
}

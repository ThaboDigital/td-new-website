import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'Portfolio - Thabo Digital',
  description: 'View our portfolio of successful projects including websites, branding, and business compliance solutions for South African businesses.',
  keywords: ['portfolio', 'web design projects', 'branding portfolio', 'case studies', 'south african businesses'],
});

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  );
}

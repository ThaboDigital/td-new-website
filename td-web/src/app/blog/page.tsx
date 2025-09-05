import { BlogHero } from '@/components/blog/BlogHero';
import { BlogList } from '@/components/blog/BlogList';
import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'Blog - Thabo Digital',
  description: 'Expert insights on web design, SEO, digital marketing, and business compliance in South Africa. Tips for small businesses and entrepreneurs.',
  keywords: ['blog', 'web design tips', 'SEO guide', 'business compliance', 'south africa', 'digital marketing'],
});

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}

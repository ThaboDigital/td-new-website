import { TeamSection } from '@/components/about/TeamSection';
import { MissionValues } from '@/components/about/MissionValues';
import { WhyChooseUs } from '@/components/about/WhyChooseUs';
import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'About Us - Thabo Digital',
  description: 'Learn about Thabo Digital, your trusted digital agency in Tzaneen, Limpopo. Our mission, values, and commitment to helping South African businesses succeed online.',
  keywords: ['about us', 'tzaneen digital agency', 'limpopo web design', 'south african business', 'mission and values'],
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Thabo Digital</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted digital partner in Tzaneen, Limpopo. We help South African businesses thrive in the digital age with professional web design, SEO, and compliance services.
          </p>
        </div>
      </section>

      <MissionValues />
      <WhyChooseUs />
      <TeamSection />
    </>
  );
}

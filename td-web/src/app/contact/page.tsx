import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'Contact Us - Thabo Digital',
  description: 'Get in touch with Thabo Digital for web design, SEO, branding, and business compliance services. Located in Tzaneen, Limpopo, serving South Africa.',
  keywords: ['contact', 'tzaneen', 'limpopo', 'web design quote', 'CIPC registration help'],
});

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to take your business to the next level? Let's discuss your project and create a solution that works for you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Us</h2>
            <p className="text-xl text-slate-600">
              Located in Tzaneen, Limpopo - Serving businesses across South Africa
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143482.6590197608!2d30.0667!3d-23.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec1b9b4e3e5e3e5%3A0x1e4b4b4b4b4b4b4b!2sTzaneen%2C%20Limpopo%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thabo Digital Location - Tzaneen, Limpopo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

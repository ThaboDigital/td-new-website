import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'Terms of Service - Thabo Digital',
  description: 'Terms and conditions for using Thabo Digital website and services. Service agreements, payment terms, and usage policies.',
  keywords: ['terms of service', 'terms and conditions', 'service agreement', 'south africa'],
});

export default function TermsOfServicePage() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-lg mb-6">
            <strong>Last updated: {new Date().toLocaleDateString('en-ZA')}</strong>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Thabo Digital website and services, you agree to be bound by these Terms of Service. 
            If you do not agree with any part of these terms, you may not use our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Services Description</h2>
          <p>Thabo Digital provides the following services:</p>
          <ul>
            <li>Website design and development</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Digital marketing services</li>
            <li>Logo design and branding</li>
            <li>Business compliance services (CIPC registration, B-BBEE certificates, etc.)</li>
            <li>Business consulting and advisory services</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Payment Terms</h2>
          <ul>
            <li>Payment is required as per the agreed payment schedule</li>
            <li>We accept EFT, cash, and mobile payments</li>
            <li>Prices are quoted in South African Rand (ZAR)</li>
            <li>All prices include VAT unless otherwise stated</li>
            <li>50% deposit required for projects over R5,000</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Project Timeline</h2>
          <ul>
            <li>Project timelines are estimates and may vary based on complexity</li>
            <li>Client delays in providing content or feedback may extend timelines</li>
            <li>Rush jobs may incur additional fees</li>
            <li>Major scope changes may require timeline adjustments</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Respond to requests for feedback within agreed timeframes</li>
            <li>Ensure they have rights to use any content they provide</li>
            <li>Make payments according to the agreed schedule</li>
            <li>Communicate any concerns promptly</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Intellectual Property</h2>
          <ul>
            <li>All original work created by Thabo Digital remains our property until full payment is received</li>
            <li>Upon full payment, ownership of completed work transfers to the client</li>
            <li>We retain the right to showcase completed work in our portfolio</li>
            <li>Third-party assets (stock photos, plugins) may have separate licensing terms</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            Thabo Digital shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. 
            Our total liability shall not exceed the amount paid by the client for the specific service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of South Africa. 
            Any disputes shall be subject to the exclusive jurisdiction of the South African courts.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>Email: info@thabodigital.co.za</li>
            <li>Phone: +27 71 234 5678</li>
            <li>Business Hours: Monday - Friday, 8:00 AM - 5:00 PM</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this website.
          </p>
        </div>
      </div>
    </section>
  );
}

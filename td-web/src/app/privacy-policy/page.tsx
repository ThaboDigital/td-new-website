import { generateMetaTags } from '@/lib/utils';

export const metadata = generateMetaTags({
  title: 'Privacy Policy - Thabo Digital',
  description: 'Privacy policy for Thabo Digital website and services. How we collect, use, and protect your personal information in compliance with POPIA.',
  keywords: ['privacy policy', 'POPIA compliance', 'data protection', 'south africa'],
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-lg mb-6">
            <strong>Last updated: {new Date().toLocaleDateString('en-ZA')}</strong>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            Thabo Digital ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services, 
            in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, company details</li>
            <li><strong>Business Information:</strong> Company registration details, business requirements</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
            <li><strong>Communication Data:</strong> Messages, inquiries, and feedback</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process your inquiries and requests</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Send you relevant updates and marketing communications (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Data Protection and Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Secure data transmission (HTTPS encryption)</li>
            <li>Regular security updates and monitoring</li>
            <li>Limited access to personal information</li>
            <li>Staff training on data protection</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your data only:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>With trusted service providers who assist in our operations</li>
            <li>To protect our rights and safety</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Your Rights Under POPIA</h2>
          <p>Under POPIA, you have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Object to the processing of your data</li>
            <li>Request deletion of your information</li>
            <li>Lodge a complaint with the Information Regulator</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Cookies and Tracking</h2>
          <p>
            We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or your personal information, please contact us:
          </p>
          <ul>
            <li>Email: info@thabodigital.co.za</li>
            <li>Phone: +27 71 234 5678</li>
            <li>Business Hours: Monday - Friday, 8:00 AM - 5:00 PM</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Compliance with Laws</h2>
          <p>
            This Privacy Policy complies with the Protection of Personal Information Act (POPIA) of South Africa and other applicable data protection laws.
          </p>
        </div>
      </div>
    </section>
  );
}

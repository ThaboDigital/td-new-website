import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import Link from 'next/link';
import { Service } from '@/lib/types';

export function ServicesList() {
  const webServices = services.filter((s: Service) => s.category === 'web');
  const designServices = services.filter((s: Service) => s.category === 'design');
  const complianceServices = services.filter((s: Service) => s.category === 'compliance');

  const ServiceCategory = ({ title, services, id }: { title: string; services: Service[]; id: string }) => (
    <section id={id} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            Professional {title.toLowerCase()} tailored for South African businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 text-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="space-y-16">
      <ServiceCategory title="Web & Digital Services" services={webServices} id="web-services" />
      <ServiceCategory title="Design & Branding" services={designServices} id="design-services" />
      <ServiceCategory title="Business Compliance" services={complianceServices} id="compliance-services" />
    </div>
  );
}

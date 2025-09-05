'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/lib/data';
import { classNames } from '@/lib/utils';

const serviceCategories = [
  {
    id: 'web',
    title: 'Web & Digital',
    description: 'Professional websites, e-commerce, and digital marketing solutions',
    icon: '🌐',
    color: 'bg-blue-500',
  },
  {
    id: 'design',
    title: 'Design & Branding',
    description: 'Creative logos, brand identity, and marketing materials',
    icon: '🎨',
    color: 'bg-purple-500',
  },
  {
    id: 'compliance',
    title: 'Business Compliance',
    description: 'CIPC registration, B-BBEE certificates, and compliance services',
    icon: '🏛️',
    color: 'bg-green-500',
  },
];

export function ServicesOverview() {
  const getServicesByCategory = (category: string) => {
    return services.filter(service => service.category === category).slice(0, 3);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything Your Business Needs to Succeed
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive digital and compliance services tailored for South African businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-2xl mr-4`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  <p className="text-slate-600 text-sm">{category.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {getServicesByCategory(category.id).map((service) => (
                  <li key={service.id} className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-slate-700">{service.title}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/services#${category.id}`}
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
              >
                View all {category.title} services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="btn-primary text-lg px-8 py-4"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

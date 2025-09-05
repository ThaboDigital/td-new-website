import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    id: 'web',
    title: 'Web & Digital Services',
    description: 'Professional websites, e-commerce, SEO, and digital marketing solutions',
    icon: '🌐',
    color: 'bg-blue-500',
    href: '#web-services'
  },
  {
    id: 'design',
    title: 'Design & Branding',
    description: 'Creative logos, brand identity, and marketing materials',
    icon: '🎨',
    color: 'bg-purple-500',
    href: '#design-services'
  },
  {
    id: 'compliance',
    title: 'Business Compliance',
    description: 'CIPC registration, B-BBEE certificates, and compliance services',
    icon: '🏛️',
    color: 'bg-green-500',
    href: '#compliance-services'
  }
];

export function ServiceCategories() {
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
            Our Service Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything your business needs to succeed in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
              <Link
                href={category.href}
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
              >
                Explore {category.title}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

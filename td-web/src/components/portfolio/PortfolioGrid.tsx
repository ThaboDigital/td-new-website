import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioItems } from '@/lib/data';
import Link from 'next/link';

export function PortfolioGrid() {
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
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've helped businesses across South Africa succeed online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  <Link href={`/portfolio/${project.slug}`} className="hover:text-primary-500 transition-colors">
                    {project.title}
                  </Link>
                </h3>

                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {project.client}
                  </span>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm"
                  >
                    View case study
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Ready to showcase your success story?
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}

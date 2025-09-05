import { motion } from 'framer-motion';

export function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white section-padding">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insights & Tips
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Expert advice on web design, SEO, digital marketing, and business compliance for South African businesses
          </p>
        </motion.div>
      </div>
    </section>
  );
}

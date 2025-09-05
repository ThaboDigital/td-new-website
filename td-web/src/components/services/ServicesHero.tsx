import { motion } from 'framer-motion';

export function ServicesHero() {
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Complete digital solutions for South African businesses. From professional websites to CIPC registration, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#web-services" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Web & Digital
            </a>
            <a href="#design-services" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold transition-colors">
              Design & Branding
            </a>
            <a href="#compliance-services" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold transition-colors">
              Business Compliance
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

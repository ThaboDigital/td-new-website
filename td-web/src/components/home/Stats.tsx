'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '500+', label: 'Websites Built', suffix: '' },
  { number: '200+', label: 'Companies Registered', suffix: '' },
  { number: '98', label: 'Client Satisfaction', suffix: '%' },
  { number: '5+', label: 'Years Experience', suffix: '' },
];

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-500">
      {isInView && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      )}
    </div>
  );
}

export function Stats() {
  return (
    <section className="section-padding bg-primary-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              <p className="text-white/80 mt-2 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

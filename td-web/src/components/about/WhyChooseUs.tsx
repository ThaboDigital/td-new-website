import { motion } from 'framer-motion';

const reasons = [
  {
    title: "One-Stop Solution",
    content: "From web design to CIPC registration, we handle all your digital and compliance needs under one roof. No need to juggle multiple service providers.",
    icon: "🏢",
    color: "bg-blue-500"
  },
  {
    title: "Local Expertise",
    content: "Based in Tzaneen, Limpopo, we understand the unique challenges and opportunities facing South African businesses. We speak your language and know your market.",
    icon: "🇿🇦",
    color: "bg-green-500"
  },
  {
    title: "Affordable Pricing",
    content: "We believe professional digital services should be accessible to all businesses. Our competitive pricing ensures you get maximum value for your investment.",
    icon: "💰",
    color: "bg-orange-500"
  },
  {
    title: "Fast Turnaround",
    content: "We understand that time is money in business. Our streamlined processes ensure quick delivery without compromising on quality.",
    icon: "⚡",
    color: "bg-yellow-500"
  },
  {
    title: "Proven Results",
    content: "With 500+ websites built and 200+ companies registered, we have the experience and track record to deliver results that drive your business forward.",
    icon: "📈",
    color: "bg-purple-500"
  },
  {
    title: "Ongoing Support",
    content: "Our relationship doesn't end at delivery. We provide continuous support, maintenance, and guidance to ensure your long-term success.",
    icon: "🤝",
    color: "bg-red-500"
  }
];

export function WhyChooseUs() {
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
            Why Choose Thabo Digital?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What sets us apart from other digital agencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 ${reason.color} rounded-lg flex items-center justify-center mb-4 text-xl`}>
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

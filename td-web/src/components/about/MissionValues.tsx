import { motion } from 'framer-motion';

const missionValues = [
  {
    title: "Our Mission",
    content: "To empower South African businesses with professional digital solutions that drive growth, enhance visibility, and simplify compliance. We believe every business deserves a strong online presence and reliable business support services.",
    icon: "🎯",
    color: "bg-blue-500"
  },
  {
    title: "Our Vision",
    content: "To become the leading digital agency in Limpopo and beyond, known for helping small businesses and entrepreneurs succeed in the digital economy through affordable, high-quality services.",
    icon: "👁️",
    color: "bg-purple-500"
  },
  {
    title: "Our Values",
    content: "Speed, transparency, affordability, and results. We prioritize clear communication, fair pricing, and delivering measurable outcomes that help our clients' businesses thrive.",
    icon: "💎",
    color: "bg-green-500"
  }
];

export function MissionValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Mission & Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What drives us to help South African businesses succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionValues.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

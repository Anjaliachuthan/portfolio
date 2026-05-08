import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiDatabase, FiLayers } from "react-icons/fi";

const About = () => {
  const stats = [
    { label: "Code", icon: FiCode, value: "Modern Stack" },
    { label: "Mobile", icon: FiSmartphone, value: "Cross-Platform" },
    { label: "Data", icon: FiDatabase, value: "Scalable DB" },
    { label: "UI/UX", icon: FiLayers, value: "Premium Feel" },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Discovery</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Bridging the Gap Between <span className="text-gradient">Mobile & Web.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I am a dedicated developer with a core focus on **React Native** for cross-platform mobile solutions. I complement this with modern **React** web applications and scalable **Python Django** backends, ensuring a seamless experience across all platforms.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-6 rounded-3xl border border-white/5">
                  <stat.icon className="text-secondary text-2xl mb-4" />
                  <p className="text-white font-bold">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 glass p-4">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                alt="Working"
                className="w-full h-full object-cover rounded-[48px] opacity-60 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            {/* Absolute element */}
            {/* <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl border border-white/10 hidden md:block">
              <p className="text-4xl font-bold text-white mb-1">99%</p>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Travidux Technologies Pvt Ltd",
    period: "July 2024 – March 2026",
    location: "In-Office",
  },
  {
    title: "Trainee Software Engineer",
    company: "Quest Innovative Solutions",
    period: "Dec 2023 – June 2024",
    location: "In-Office",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-[40px] border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all"></div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <FiBriefcase />
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-gray-400">
                  <div className="flex items-center gap-2 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/5 text-sm">
                    <FiCalendar className="text-secondary" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-xs ml-2">
                    <FiMapPin />
                    {exp.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

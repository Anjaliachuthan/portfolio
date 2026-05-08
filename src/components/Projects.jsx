import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Mini Learning Management System",
    description: "A high-performance cross-platform mobile application for learning and development coursers enrollment bookmark, built with React Native and in-app local notifications for users about coursers. ",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/Anjaliachuthan/mini-lms",
    live: "#"
  },
  {
    title: "SpiceKartel Online Website",
    description: "Scalable E-commerce API backend built with Django REST Framework, featuring automated inventory and payment flows.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tags: ["Django", "PostgreSQL", "AWS", "ReactJS"],
    github: "https://github.com/Anjaliachuthan/spices_project",
    live: "https://spicekartel.co.in/"
  },
  {
    title: "Nexus Dashboard",
    description: "Enterprise-level React analytics dashboard with real-time data visualization and secure API integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "Tailwind", "D3.js"],
    github: "https://github.com/",
    live: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-dark bg-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 md:mt-0"
          >
            <a href="https://github.com/Anjaliachuthan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 group transition-all">
              View All Projects <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/5] glass border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all"
                    >
                      <FiExternalLink />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass text-white flex items-center justify-center text-xl hover:bg-white/10 transition-all"
                    >
                      <FiGithub />
                    </motion.a>
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

export default Projects;
import { motion } from "framer-motion";
import { 
  SiReact, SiJavascript, SiDjango, SiPython, 
  SiPostgresql, SiVercel, SiGithub, SiTypescript,
  SiHtml5, SiCss, SiRedux, SiGit, SiGitlab, SiJira
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
  { name: "Agile", icon: SiJira, color: "#0052CC" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            My Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="glass p-8 rounded-[32px] flex flex-col items-center justify-center gap-4 group transition-all duration-300"
            >
              <div
                className="text-5xl transition-transform duration-500 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20 bg-dark bg-mesh"
    >
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Available for hire</span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-bold leading-tight tracking-tight text-white mb-8">
            Building Mobile &
            <span className="block text-gradient">Web Excellence.</span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-3xl mb-12">
            Hi, I'm <span className="text-white font-semibold underline decoration-primary underline-offset-8">Anjali</span>. A specialized <span className="text-white">React Native</span> developer crafting high-performance mobile apps, paired with robust <span className="text-white">React</span> web frontends and <span className="text-white">Django</span> backends.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-white text-dark px-10 py-5 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5"
            >
              View My Work
              <FiArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="glass px-10 py-5 rounded-2xl flex items-center gap-3 text-white font-semibold hover:bg-white/10 transition-all"
            >
              <FiDownload />
              Resume
            </motion.a>
          </div>

          <div className="flex gap-8 mt-12 text-3xl text-gray-400">
            {[
              { icon: FaGithub, href: "https://github.com/Anjaliachuthan" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/anjali-achuthan" },
              { icon: FaTwitter, href: "https://twitter.com" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#fff' }}
                className="transition-all"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
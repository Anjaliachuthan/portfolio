import { motion } from "framer-motion";
import { FiMail, FiMessageSquare, FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass p-12 md:p-20 rounded-[60px] overflow-hidden border border-white/10"
        >
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Let's Connect</p>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Ready to start your next <span className="text-gradient">project?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                I'm currently available for freelance work and full-time positions. Let's build something amazing together.
              </p>

              <div className="flex gap-4">
                {[
                  { Icon: FaGithub, href: "https://github.com/Anjaliachuthan" },
                  { Icon: FaLinkedin, href: "https://linkedin.com/in/anjali-achuthan" },
                  { Icon: FaTwitter, href: "https://twitter.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-xl text-white transition-all"
                  >
                    <social.Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:anjaliachuthan2000@gmail.com"
                className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <FiMail className="text-3xl text-primary" />
                  <FiArrowRight className="text-xl text-gray-500 group-hover:text-white group-hover:translate-x-2 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-white">Email Me</h3>
                <p className="text-gray-500">anjaliachuthan2000@gmail.com</p>
              </a>

              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-secondary/50 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <FiMessageSquare className="text-3xl text-secondary" />
                  <FiArrowRight className="text-xl text-gray-500 group-hover:text-white group-hover:translate-x-2 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-white">Contact Number</h3>
                <p className="text-gray-500">+91 7592814801</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
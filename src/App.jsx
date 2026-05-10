import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Link, Mail, Phone } from "lucide-react";

function App() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a,black_60%)]"></div>

        {/* Blur Effect */}
        <div className="absolute top-32 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl w-full"
        >
          {/* Navbar */}
          <nav className="flex justify-between items-center mb-24">
            <h1 className="text-xl font-bold tracking-widest">
              JOSÉ EDUARDO
            </h1>

            <div className="hidden md:flex gap-8 text-sm text-gray-300">
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-4"
              >
                FullStack Developer
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                JOSÉ <br />
                EDUARDO
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg"
              >
                Desenvolvedor FullStack apaixonado por interfaces modernas,
                inteligência artificial e experiências digitais premium.
              </motion.p>

              {/* Buttons */}
              <div className="flex gap-4 mt-10">
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-full font-medium text-black">
                  Ver Projetos
                </button>

                <button className="px-6 py-3 border border-white/20 hover:border-cyan-400 transition rounded-full">
                  Download CV
                </button>
              </div>

              {/* Socials */}
              <div className="flex gap-5 mt-10 text-gray-400">
                <a
                  href="https://github.com/JoseEduardo-max"
                  target="_blank"
                >
                  <GitBranch className="hover:text-cyan-400 transition" />
                </a>

                <a
                  href="https://www.linkedin.com/in/josé-eduardo-araújo/"
                  target="_blank"
                >
                  <Link className="hover:text-cyan-400 transition" />
                </a>

                <a href="mailto:jeduardoff2@gmail.com">
                  <Mail className="hover:text-cyan-400 transition" />
                </a>

                <a href="tel:+5585986502586">
                  <Phone className="hover:text-cyan-400 transition" />
                </a>
              </div>
            </div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-[320px] h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                  alt="Setup"
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
          >
            <ArrowDown />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 py-24"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl font-bold mb-8">
              Criando experiências modernas e inteligentes
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Sou desenvolvedor FullStack focado em criar aplicações modernas,
              escaláveis e visualmente impactantes. Tenho experiência com React,
              Node.js, APIs REST e desenvolvimento de interfaces premium.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Tecnologias
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                "React",
                "Node.js",
                "JavaScript",
                "Python",
                "Tailwind",
                "MySQL",
                "PostgreSQL",
                "Git",
                "Jest",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { personal } from '@/data'
import { fadeUp, fadeDown, staggerContainer } from '@/animations/variants'

function Orb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.08, 1],
        y: [0, -20, 0],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

const SOCIAL_LINKS = [
  { label: 'GH', href: personal.github, title: 'GitHub' },
  { label: 'LI', href: personal.linkedin, title: 'LinkedIn' },
  { label: 'EM', href: `mailto:${personal.email}`, title: 'Email' },
]

export function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ padding: '6rem 2rem 4rem' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          className="w-[600px] h-[600px] -top-[10%] -left-[15%]"
          style={{ background: 'radial-gradient(circle, rgba(59,127,255,0.25), transparent 70%)', filter: 'blur(100px)' }}
          delay={0}
        />
        <Orb
          className="w-[500px] h-[500px] top-[30%] -right-[10%]"
          style={{ background: 'radial-gradient(circle, rgba(0,207,255,0.15), transparent 70%)', filter: 'blur(100px)' }}
          delay={3}
        />
        <Orb
          className="w-[400px] h-[400px] bottom-0 left-[35%]"
          style={{ background: 'radial-gradient(circle, rgba(100,60,255,0.12), transparent 70%)', filter: 'blur(100px)' }}
          delay={5}
        />
        <div className="absolute inset-0 grid-lines-bg" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-[2] max-w-4xl w-full"
        variants={staggerContainer(0.12, 0)}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeDown} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{
              background: 'rgba(59,127,255,0.08)',
              border: '1px solid rgba(59,127,255,0.25)',
              color: '#3b7fff',
              padding: '0.35rem 1rem',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--cyan)', animation: 'blink 2s infinite' }}
            />
            Disponível para projetos
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp}>
          <h1
            className="font-syne font-extrabold leading-none"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', letterSpacing: '-0.04em' }}
          >
            <span className="block" style={{ color: 'var(--text)' }}>
              JOSÉ EDUARDO
            </span>
            <span
              className="block gradient-text"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}
            >
              ARAÚJO
            </span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          className="font-syne font-semibold tracking-widest uppercase mt-3"
          style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.3rem)', color: 'var(--cyan)', letterSpacing: '0.15em' }}
        >
          {personal.role}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 mx-auto font-light leading-relaxed"
          style={{
            color: 'var(--muted)',
            fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}
        >
          {personal.subtitle}
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <motion.button
            onClick={scrollToProjects}
            className="flex items-center gap-2 font-medium text-sm text-white rounded-lg px-8 py-3 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #3b7fff, #00cfff)',
              boxShadow: '0 0 30px rgba(59,127,255,0.3)',
            }}
            whileHover={{ y: -2, boxShadow: '0 0 50px rgba(59,127,255,0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Projetos
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2 font-medium text-sm rounded-lg px-8 py-3 transition-all duration-300"
            style={{
              border: '1px solid var(--border-3)',
              color: 'var(--text)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{ y: -2, borderColor: '#3b7fff', color: '#00cfff' }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={16} />
            Download CV
          </motion.button>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={fadeUp}
          className="flex gap-3 justify-center mt-8"
        >
          {SOCIAL_LINKS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== 'EM' ? '_blank' : undefined}
              rel="noreferrer"
              title={s.title}
              className="w-10 h-10 flex items-center justify-center rounded-lg
                         text-xs font-bold tracking-wide transition-all duration-200"
              style={{
                border: '1px solid var(--border-2)',
                color: 'var(--muted)',
              }}
              whileHover={{
                y: -3,
                borderColor: '#00cfff',
                color: '#00cfff',
                background: 'rgba(0,207,255,0.06)',
              }}
            >
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--dim)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(var(--cyan), transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  )
}
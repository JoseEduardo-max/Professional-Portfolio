import { motion } from 'framer-motion'
import { skills } from '@/data'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { skillBarVariants, staggerContainer, fadeUp } from '@/animations/variants'

function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="relative rounded-2xl p-5 text-center overflow-hidden transition-colors duration-300 group"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -5,
        scale: 1.02,
        borderColor: 'rgba(59,127,255,0.3)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(59,127,255,0.08)',
      }}
    >
      {/* Hover bg gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(59,127,255,0.04), transparent)' }}
      />

      {/* Icon */}
      <motion.div
        className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center font-syne font-extrabold text-sm transition-all duration-300"
        style={{
          background: 'var(--surface-2)',
          border: '1px solid var(--border-2)',
          color: 'var(--cyan)',
        }}
        whileHover={{
          background: 'rgba(59,127,255,0.12)',
          borderColor: 'rgba(59,127,255,0.3)',
          boxShadow: '0 0 20px rgba(59,127,255,0.2)',
        }}
      >
        {skill.short}
      </motion.div>

      {/* Name */}
      <p
        className="text-sm font-medium relative z-10"
        style={{ color: 'var(--text)', letterSpacing: '0.02em' }}
      >
        {skill.name}
      </p>

      {/* Bar */}
      <div
        className="h-0.5 rounded-sm mt-3 overflow-hidden"
        style={{ background: 'var(--border)' }}
      >
        <motion.div
          className="h-full rounded-sm"
          style={{ background: 'linear-gradient(90deg, #3b7fff, #00cfff)' }}
          variants={skillBarVariants(skill.level)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        />
      </div>

      {/* Level */}
      <p
        className="text-xs mt-1.5 font-light"
        style={{ color: 'var(--dim)' }}
      >
        {skill.level}%
      </p>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-[2]"
      style={{ background: 'var(--black)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-28">
        <RevealOnScroll>
          <SectionLabel>Habilidades</SectionLabel>
          <h2
            className="font-syne font-extrabold mb-3"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
          >
            Stack <span className="gradient-text">Técnica</span>
          </h2>
          <p
            className="mb-12 font-light"
            style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 480 }}
          >
            Tecnologias que uso para construir produtos modernos e escaláveis.
          </p>
        </RevealOnScroll>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
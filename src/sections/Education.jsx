import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/data'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Education() {
  return (
    <section
      id="education"
      className="relative z-[2]"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-28">
        <RevealOnScroll>
          <SectionLabel>Formação</SectionLabel>
          <h2
            className="font-syne font-extrabold mb-12"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
          >
            Educação &{' '}
            <span className="gradient-text">Certificações</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative rounded-2xl p-8 overflow-hidden group"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(59,127,255,0.3)',
              }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(59,127,255,0.03), transparent)' }}
              />

              {/* Badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-syne font-extrabold text-sm mb-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,127,255,0.15), rgba(0,207,255,0.08))',
                  border: '1px solid rgba(59,127,255,0.2)',
                  color: 'var(--cyan)',
                }}
              >
                {item.short}
              </div>

              <p
                className="text-xs font-medium tracking-widest uppercase mb-2"
                style={{ color: 'var(--cyan)' }}
              >
                {item.period}
              </p>
              <h3
                className="font-syne font-bold text-lg mb-1"
                style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
              >
                {item.institution}
              </h3>
              <p
                className="text-sm font-light"
                style={{ color: 'var(--muted)' }}
              >
                {item.course}
              </p>

              <span
                className="inline-block mt-4 text-xs font-medium tracking-wider uppercase rounded-full px-3 py-1"
                style={{
                  background: item.ongoing ? 'rgba(0,207,255,0.08)' : 'rgba(59,127,255,0.08)',
                  border: `1px solid ${item.ongoing ? 'rgba(0,207,255,0.2)' : 'rgba(59,127,255,0.2)'}`,
                  color: item.ongoing ? 'var(--cyan)' : '#3b7fff',
                }}
              >
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { experience } from '@/data'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { timelineItem, staggerContainer } from '@/animations/variants'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-[2]"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-28">
        <RevealOnScroll>
          <SectionLabel>Carreira</SectionLabel>
          <h2
            className="font-syne font-extrabold mb-16"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
          >
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
        </RevealOnScroll>

        <div className="relative pl-8 max-w-3xl">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #3b7fff, #00cfff, transparent)' }}
          />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative pb-12 pl-8 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Dot */}
              <div
                className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full"
                style={{
                  background: 'var(--cyan)',
                  transform: 'translateX(-50%) translateX(1px)',
                  boxShadow: '0 0 16px rgba(0,207,255,0.6)',
                }}
              />

              {/* Card */}
              <motion.div
                className="rounded-2xl p-7 transition-all duration-300"
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                }}
                whileHover={{
                  x: 4,
                  borderColor: 'rgba(59,127,255,0.3)',
                }}
              >
                <p
                  className="text-xs font-medium tracking-widest uppercase mb-2"
                  style={{ color: 'var(--cyan)' }}
                >
                  {item.period}
                </p>
                <h3
                  className="font-syne font-bold text-xl mb-1"
                  style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
                >
                  {item.role}
                </h3>
                <p
                  className="text-sm font-light mb-5"
                  style={{ color: 'var(--muted)' }}
                >
                  {item.company} · {item.location}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.description.map((d, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm font-light leading-relaxed"
                      style={{ color: 'var(--muted)' }}
                    >
                      <span
                        className="text-xs mt-0.5 flex-shrink-0"
                        style={{ color: '#3b7fff' }}
                      >
                        ▸
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
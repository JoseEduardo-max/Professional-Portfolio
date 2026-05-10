import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { about, personal } from '@/data'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '@/animations/variants'

export function About() {
  return (
    <section
      id="about"
      className="relative z-[2]"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Visual Column */}
          <RevealOnScroll variants={fadeLeft}>
            <div className="flex flex-col gap-6">
              {/* Avatar card */}
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  background: 'var(--surface-2)',
                  borderColor: 'var(--border-2)',
                  maxWidth: 320,
                  aspectRatio: '3/4',
                }}
              >
                {/* Glow */}
                <div
                  className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(59,127,255,0.3), transparent)', filter: 'blur(40px)' }}
                />

                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative">
                  {/* Watermark */}
                  <span
                    className="absolute bottom-0 right-0 font-syne font-extrabold pointer-events-none select-none"
                    style={{ fontSize: '8rem', color: 'rgba(59,127,255,0.04)', lineHeight: 1, letterSpacing: '-0.05em' }}
                  >
                    JE
                  </span>

                  {/* Avatar */}
                  <motion.div
                    className="relative w-28 h-28 rounded-full flex items-center justify-center font-syne font-extrabold text-2xl text-white z-10"
                    style={{ background: 'linear-gradient(135deg, #3b7fff, #00cfff)' }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 0, repeat: 0 }}
                  >
                    JE
                    {/* Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: '1px solid rgba(0,207,255,0.3)', inset: '-4px' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center px-6 z-10">
                    {about.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium rounded-full px-3 py-1"
                        style={{
                          background: 'rgba(59,127,255,0.08)',
                          border: '1px solid rgba(59,127,255,0.2)',
                          color: '#3b7fff',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3" style={{ maxWidth: 320 }}>
                {about.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-5 py-4"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                  >
                    <p
                      className="font-syne font-extrabold text-2xl"
                      style={{ color: 'var(--cyan)' }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-xs mt-0.5 font-light"
                      style={{ color: 'var(--muted)' }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Text Column */}
          <RevealOnScroll variants={fadeRight} delay={0.15}>
            <SectionLabel>Sobre mim</SectionLabel>
            <h2
              className="font-syne font-extrabold mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              Quem sou{' '}
              <span className="gradient-text">eu?</span>
            </h2>

            <div className="flex flex-col gap-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="leading-loose font-light"
                  style={{ color: 'var(--muted)', fontSize: '0.97rem', lineHeight: 1.85 }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="flex gap-4 mt-10 flex-wrap">
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm font-medium text-white rounded-lg px-7 py-3"
                style={{ background: 'linear-gradient(135deg, #3b7fff, #00cfff)' }}
                whileHover={{ y: -2, boxShadow: '0 0 30px rgba(59,127,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Ver projetos <ArrowRight size={15} />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium rounded-lg px-7 py-3 transition-all duration-200"
                style={{ border: '1px solid var(--border-3)', color: 'var(--text)' }}
                whileHover={{ borderColor: '#3b7fff', color: '#00cfff', y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contato
              </motion.button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
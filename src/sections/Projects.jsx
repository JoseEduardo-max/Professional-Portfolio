import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionLabel } from '@/components/ui/SectionLabel'

const MOCKUP_COLORS = {
  blue: { line: 'linear-gradient(90deg, #3b7fff, #00cfff)', btn: 'rgba(59,127,255,0.4)' },
  cyan: { line: 'linear-gradient(90deg, #00cfff, #3b7fff)', btn: 'rgba(0,207,255,0.4)' },
  purple: { line: 'linear-gradient(90deg, #8b5cf6, #3b7fff)', btn: 'rgba(139,92,246,0.4)' },
}

function MockupWindow({ color = 'blue' }) {
  const c = MOCKUP_COLORS[color]
  return (
    <div className="w-[85%] rounded-xl overflow-hidden" style={{ background: 'var(--surface-3)', border: '1px solid var(--border-2)', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}>
      {/* Title bar */}
      <div className="h-7 flex items-center gap-1.5 px-3" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f57' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#28c840' }} />
      </div>
      {/* Body */}
      <div className="p-3 flex flex-col gap-1.5">
        <div className="h-1.5 rounded-full w-[70%]" style={{ background: c.line, opacity: 0.7 }} />
        <div className="h-1.5 rounded-full" style={{ background: 'var(--border-3)', width: '90%' }} />
        <div className="h-1.5 rounded-full" style={{ background: 'var(--border-3)', width: '55%' }} />
        <div className="h-1.5 rounded-full" style={{ background: 'var(--border-3)', width: '75%' }} />
        <div className="h-1.5 rounded-full" style={{ background: 'var(--border-3)', width: '40%' }} />
        <div className="flex gap-2 mt-1">
          <div className="h-4 w-12 rounded" style={{ background: c.btn }} />
          <div className="h-4 w-12 rounded" style={{ background: 'var(--border-3)' }} />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        borderColor: 'rgba(59,127,255,0.3)',
        boxShadow: '0 30px 70px rgba(0,0,0,0.7), 0 0 40px rgba(59,127,255,0.07)',
      }}
    >
      {/* Mockup area */}
      <div
        className="h-48 relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--surface-2)' }}
      >
        <MockupWindow color={project.mockupColor} />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(transparent, rgba(10,10,16,0.9))' }}
        />
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium rounded-md px-2 py-1"
              style={{
                background: 'rgba(59,127,255,0.07)',
                border: '1px solid rgba(59,127,255,0.18)',
                color: '#3b7fff',
                letterSpacing: '0.03em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="font-syne font-bold text-lg mb-2"
          style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm font-light leading-relaxed mb-5"
          style={{ color: 'var(--muted)', lineHeight: 1.7 }}
        >
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-lg transition-all duration-200"
            style={{ border: '1px solid var(--border-2)', color: 'var(--muted)' }}
            whileHover={{ borderColor: '#3b7fff', color: '#00cfff' }}
          >
            <Github size={14} />
            GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-lg transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, rgba(59,127,255,0.15), rgba(0,207,255,0.1))',
              border: '1px solid rgba(59,127,255,0.3)',
              color: '#00cfff',
            }}
            whileHover={{
              background: 'linear-gradient(135deg, #3b7fff, #00cfff)',
              color: '#fff',
              borderColor: 'transparent',
              boxShadow: '0 0 20px rgba(59,127,255,0.4)',
            }}
          >
            <ExternalLink size={14} />
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-[2]"
      style={{ background: 'var(--black)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-28">
        <RevealOnScroll>
          <SectionLabel>Portfólio</SectionLabel>
          <h2
            className="font-syne font-extrabold mb-3"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
          >
            Projetos <span className="gradient-text">em Destaque</span>
          </h2>
          <p
            className="mb-12 font-light"
            style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 480 }}
          >
            Soluções construídas com foco em qualidade, escalabilidade e experiência do usuário.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
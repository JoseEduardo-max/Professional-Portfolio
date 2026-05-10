import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '@/data'

export function Footer() {
  return (
    <footer
      className="border-t relative z-[2]"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-6 flex flex-wrap items-center justify-between gap-4">
        <div
          className="font-syne font-extrabold text-base"
          style={{ letterSpacing: '-0.02em', color: 'var(--text)' }}
        >
          JE<span style={{ color: 'var(--cyan)' }}>.</span>
        </div>

        <p style={{ color: 'var(--dim)', fontSize: '0.78rem', fontWeight: 300 }}>
          © {new Date().getFullYear()} José Eduardo Araújo · Fortaleza, CE
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-[#00cfff]"
            style={{ color: 'var(--dim)', fontSize: '0.78rem' }}
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-[#00cfff]"
            style={{ color: 'var(--dim)', fontSize: '0.78rem' }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="transition-colors duration-200 hover:text-[#00cfff]"
            style={{ color: 'var(--dim)', fontSize: '0.78rem' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
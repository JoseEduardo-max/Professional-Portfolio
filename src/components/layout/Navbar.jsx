import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollY } from '@/hooks/useScrollY'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/utils/cn'

const NAV_LINKS = [
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
  { id: 'education', label: 'Educação' },
  { id: 'contact', label: 'Contato' },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export function Navbar() {
  const scrollY = useScrollY()
  const activeId = useScrollSpy(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 60

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] border-b"
        animate={
          scrolled
            ? {
                backgroundColor: 'rgba(5,5,8,0.85)',
                backdropFilter: 'blur(24px)',
                borderColor: 'rgba(255,255,255,0.05)',
              }
            : {
                backgroundColor: 'rgba(5,5,8,0)',
                backdropFilter: 'blur(0px)',
                borderColor: 'rgba(255,255,255,0)',
              }
        }
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ padding: '1.1rem 3rem' }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-syne font-extrabold text-lg tracking-tight text-[#f0f0f8] cursor-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            JE<span style={{ color: 'var(--cyan)' }}>.</span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-9 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    'text-xs font-medium tracking-widest uppercase transition-colors duration-200 cursor-none',
                    activeId === link.id
                      ? 'text-[#00cfff]'
                      : 'text-[#8080a0] hover:text-[#f0f0f8]'
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            onClick={() => scrollTo('contact')}
            className="hidden md:flex items-center border text-[#f0f0f8] text-xs font-medium
                       tracking-wider uppercase px-5 py-2 rounded-md transition-all duration-200
                       cursor-none hover:bg-[#3b7fff] hover:border-[#3b7fff]"
            style={{ borderColor: 'var(--border-3)' }}
            whileHover={{ boxShadow: '0 0 20px rgba(59,127,255,0.35)' }}
          >
            Contratar
          </motion.button>

          {/* Burger */}
          <button
            className="md:hidden text-[#f0f0f8] cursor-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(5,5,8,0.98)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-syne text-3xl font-bold text-[#f0f0f8] hover:text-[#00cfff] transition-colors cursor-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
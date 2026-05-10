import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { personal } from '@/data'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { fadeLeft, fadeRight } from '@/animations/variants'

const CONTACT_ITEMS = [
  {
    icon: <Phone size={18} />,
    label: 'Telefone',
    value: personal.phone,
    href: `tel:+55${personal.phone.replace(/\D/g, '')}`,
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'JoseEduardo-max',
    href: personal.github,
    external: true,
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'José Eduardo Araújo',
    href: personal.linkedin,
    external: true,
  },
]

function ContactItem({ item }) {
  return (
    <motion.a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      className="flex items-center gap-4 p-5 rounded-2xl no-underline transition-all duration-200"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        color: 'inherit',
      }}
      whileHover={{
        x: 4,
        borderColor: 'rgba(59,127,255,0.3)',
        background: 'var(--surface-2)',
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: 'rgba(59,127,255,0.1)',
          border: '1px solid rgba(59,127,255,0.2)',
          color: '#3b7fff',
        }}
      >
        {item.icon}
      </div>
      <div>
        <p
          className="text-xs font-medium tracking-widest uppercase mb-0.5"
          style={{ color: 'var(--muted)', letterSpacing: '0.1em' }}
        >
          {item.label}
        </p>
        <p className="text-sm" style={{ color: 'var(--text)' }}>
          {item.value}
        </p>
      </div>
    </motion.a>
  )
}

function InputField({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs font-medium tracking-widest uppercase"
        style={{ color: 'var(--muted)', letterSpacing: '0.1em' }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

const inputStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border-2)',
  borderRadius: '10px',
  padding: '0.85rem 1.1rem',
  color: 'var(--text)',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.9rem',
  outline: 'none',
  fontWeight: 300,
  transition: 'all 0.2s',
  width: '100%',
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="relative z-[2]"
      style={{ background: 'var(--black)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-28">
        <RevealOnScroll>
          <SectionLabel>Contato</SectionLabel>
          <h2
            className="font-syne font-extrabold mb-3"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
          >
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p
            className="mb-12 font-light"
            style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 480 }}
          >
            Aberto a oportunidades, projetos freelance e colaborações. Respondo em até 24h.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <RevealOnScroll variants={fadeLeft}>
            <div className="flex flex-col gap-3">
              {CONTACT_ITEMS.map((item) => (
                <ContactItem key={item.label} item={item} />
              ))}
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll variants={fadeRight} delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <InputField label="Nome">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59,127,255,0.5)'
                    e.target.style.background = 'var(--surface-2)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59,127,255,0.07)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-2)'
                    e.target.style.background = 'var(--surface)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </InputField>

              <InputField label="Email">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59,127,255,0.5)'
                    e.target.style.background = 'var(--surface-2)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59,127,255,0.07)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-2)'
                    e.target.style.background = 'var(--surface)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </InputField>

              <InputField label="Mensagem">
                <textarea
                  placeholder="Olá José, gostaria de conversar sobre..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59,127,255,0.5)'
                    e.target.style.background = 'var(--surface-2)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59,127,255,0.07)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-2)'
                    e.target.style.background = 'var(--surface)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </InputField>

              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 w-full text-white font-medium text-sm rounded-xl py-4"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, #0f6e56, #1d9e75)'
                    : 'linear-gradient(135deg, #3b7fff, #00cfff)',
                }}
                whileHover={{ y: -2, boxShadow: '0 0 40px rgba(59,127,255,0.45)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Mensagem enviada com sucesso!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensagem
                  </>
                )}
              </motion.button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export function Button({ children, variant = 'primary', className, href, onClick, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-dm font-medium text-sm rounded-lg transition-all duration-300 no-underline'

  const variants = {
    primary:
      'bg-gradient-to-r from-[#3b7fff] to-[#00cfff] text-white px-8 py-3 shadow-[0_0_30px_rgba(59,127,255,0.3)] hover:shadow-[0_0_50px_rgba(59,127,255,0.5)] hover:-translate-y-0.5',
    outline:
      'border border-[rgba(255,255,255,0.16)] text-[#f0f0f8] px-8 py-3 hover:border-[#3b7fff] hover:text-[#00cfff] hover:-translate-y-0.5 backdrop-blur-sm',
    ghost:
      'text-[#8080a0] hover:text-[#00cfff] px-4 py-2',
    small:
      'border border-[rgba(255,255,255,0.09)] text-[#8080a0] px-4 py-2 text-xs rounded-lg hover:border-[#3b7fff] hover:text-[#00cfff]',
  }

  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Tag>
  )
}
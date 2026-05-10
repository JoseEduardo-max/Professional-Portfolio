import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'

export function RevealOnScroll({ children, variants = fadeUp, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
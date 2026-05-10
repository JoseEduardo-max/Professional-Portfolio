import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollY } from '@/hooks/useScrollY'

export function BackToTop() {
  const scrollY = useScrollY()
  const visible = scrollY > 400

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center
                     border border-[rgba(255,255,255,0.16)] rounded-xl
                     text-[#8080a0] hover:border-[#3b7fff] hover:text-[#00cfff]
                     transition-colors duration-200"
          style={{ background: 'var(--surface)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
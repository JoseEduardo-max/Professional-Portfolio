// ─── FADE VARIANTS ───────────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── STAGGER CONTAINER ────────────────────────────────────────────────────────
export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

// ─── SCALE VARIANTS ───────────────────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── HERO TEXT CHAR ANIMATION ─────────────────────────────────────────────────
export const heroChar = {
  hidden: { opacity: 0, y: 60, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── CARD HOVER ───────────────────────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
export const navbarVariants = {
  top: {
    backgroundColor: 'rgba(5, 5, 8, 0)',
    backdropFilter: 'blur(0px)',
    borderBottomColor: 'rgba(255,255,255,0)',
  },
  scrolled: {
    backgroundColor: 'rgba(5, 5, 8, 0.85)',
    backdropFilter: 'blur(24px)',
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
}

// ─── LOADING SCREEN ───────────────────────────────────────────────────────────
export const loadingExit = {
  opacity: [1, 1, 0],
  y: [0, 0, -20],
  transition: { duration: 0.8, times: [0, 0.7, 1], ease: 'easeInOut' },
}

// ─── SKILL BAR ────────────────────────────────────────────────────────────────
export const skillBarVariants = (level) => ({
  hidden: { width: '0%' },
  visible: {
    width: `${level}%`,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
})

// ─── TIMELINE ITEM ────────────────────────────────────────────────────────────
export const timelineItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}
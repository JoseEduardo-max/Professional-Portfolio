import { useEffect, useRef, useState } from 'react'

export function useCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    const animate = () => {
      const { x: mx, y: my } = mousePos.current
      let { x: rx, y: ry } = ringPos.current
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ringPos.current = { x: rx, y: ry }
      ring.style.left = Math.round(rx) + 'px'
      ring.style.top = Math.round(ry) + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    const addHoverListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, [data-cursor-hover], .skill-card, .project-card'
      )
      targets.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true))
        el.addEventListener('mouseleave', () => setHovering(false))
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    // Re-attach after a tick so dynamic content is available
    setTimeout(addHoverListeners, 500)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { dotRef, ringRef, hovering }
}
import { useState, useEffect } from 'react'

export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: options.rootMargin || '-20% 0px -60% 0px',
        threshold: options.threshold || 0,
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, options.rootMargin, options.threshold])

  return activeId
}
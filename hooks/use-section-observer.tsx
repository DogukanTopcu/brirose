'use client'

import { useEffect, useRef } from 'react'

export function useSectionObserver(onIntersect: (id: string) => void) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            onIntersect(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [onIntersect])
}


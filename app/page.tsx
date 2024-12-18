'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/home/section'
import { Navigation } from '@/components/home/navigation'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('section-1')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
      <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-accent md:text-black text-white">
        <Navigation currentSection={currentSection} />
        
        <Section
          id="section-1"
          titleKey="section1.title"
          subtitleKey="section1.subtitle"
          buttonTextKey="section1.button"
          imageSrc1="/img1.jpg"
          imageSrc2="/img2.jpg"
        />
        <Section
          id="section-2"
          titleKey="section2.title"
          subtitleKey="section2.subtitle"
          buttonTextKey="section2.button"
          imageSrc1="/img1.jpg"
          imageSrc2="/img2.jpg"
        />
        <Section
          id="section-3"
          titleKey="section3.title"
          subtitleKey="section3.subtitle"
          buttonTextKey="section3.button"
          imageSrc1="/img1.jpg"
          imageSrc2="/img2.jpg"
        />
        <Section
          id="section-4"
          titleKey="section4.title"
          subtitleKey="section4.subtitle"
          buttonTextKey="section4.button"
          imageSrc1="/img1.jpg"
          imageSrc2="/img2.jpg"
        />
        <Section
          id="section-5"
          titleKey="section5.title"
          subtitleKey="section5.subtitle"
          buttonTextKey="section5.button"
          imageSrc1="/img1.jpg"
          imageSrc2="/img2.jpg"
        />
        <Section
          id="section-6"
          titleKey="section6.title"
          subtitleKey="section6.subtitle"
          buttonTextKey="section6.button"
          imageSrc1="/img1.jpg"
          imageSrc2="/img2.jpg"
        />
      </main>
  )
}


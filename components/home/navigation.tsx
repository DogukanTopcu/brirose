'use client'

import { Instagram, Menu } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { LanguageSwitcher } from './language-btn'

interface NavigationProps {
  currentSection: string
}

export function Navigation({ currentSection }: NavigationProps) {
  const { t } = useLanguage()

  const sections = [
    { id: 'section-1', label: t('nav.home') },
    { id: 'section-2', label: t('nav.collection') },
    { id: 'section-3', label: t('nav.about') },
  ]

  return (
    <>
      {/* Logo and Menu */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between p-6  md:p-12">
        <Link href="/" className="text-2xl font-bold text-white">
          Brirose 🌹
        </Link>
        <div className='flex justify-center items-center gap-4'>
            <button className="text-white">
            <Menu className="h-6 w-6" />
            </button>
            <LanguageSwitcher />
        </div>
      </div>

      {/* Section Indicators */}
      <div className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 mix-blend-difference md:flex">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block h-3 w-3 rounded-full transition-all ${
              currentSection === section.id
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to ${section.label}`}
          />
        ))}
        
        {/* Social Links */}
        <div className="mt-8">
          <a
            href="#"
            className="text-white/75 hover:text-white transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  )
}


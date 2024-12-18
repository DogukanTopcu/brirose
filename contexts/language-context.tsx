'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'tr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.collection': 'Collection',
    'nav.about': 'About',
    'section1.title': 'The Beauty of Nature & is in Your Body',
    'section1.subtitle': 'Like the light reflecting from a diamond, our Autumn 2021 bridal collection is inspired by inner beauty.',
    'section1.button': 'COLLECTION',
    'section2.title': 'Timeless Elegance',
    'section2.subtitle': 'Discover our collection of timeless pieces that celebrate natural beauty.',
    'section2.button': 'DISCOVER',
    'section3.title': 'Crafted with Love',
    'section3.subtitle': 'Every piece is meticulously designed to enhance your natural beauty.',
    'section3.button': 'LEARN MORE',
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.collection': 'Koleksiyon',
    'nav.about': 'Hakkında',
    'section1.title': 'Doğanın Güzelliği & Vücudunuzda',
    'section1.subtitle': 'Pırlantadan yansıyan ışık gibi, Sonbahar 2021 gelinlik koleksiyonumuz, içten yansıyan güzellikten ilham aldı.',
    'section1.button': 'KOLEKSİYON',
    'section2.title': 'Zamansız Zarafet',
    'section2.subtitle': 'Doğal güzelliği kutlayan zamansız parçalardan oluşan koleksiyonumuzu keşfedin.',
    'section2.button': 'KEŞFET',
    'section3.title': 'Sevgiyle Tasarlandı',
    'section3.subtitle': 'Her parça, doğal güzelliğinizi artırmak için özenle tasarlandı.',
    'section3.button': 'DAHA FAZLA BİLGİ',
  },
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}


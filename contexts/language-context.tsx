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
    'section1.title': 'Customer-Centric Approach',
    'section1.subtitle': 'Brirose places each customer\'s unique style and dreams at the forefront. We create designs tailored to your needs and expectations to make your special day unforgettable. At Brirose, every design is brought to life with a customer-centric approach.',
    'section1.button': 'LEARN MORE',
    'section2.title': 'High-Quality and Unique Craftsmanship',
    'section2.subtitle': 'With carefully selected fabrics and meticulously crafted details, each piece brings together elegance and craftsmanship. Brirose redefines grace with its fine craftsmanship, making your special day truly unforgettable.',
    'section2.button': 'LEARN MORE',
    'section3.title': 'Professional Support with Trust and Passion',
    'section3.subtitle': 'Brirose takes the responsibility of accompanying your special moments with passion. With a reliable approach, we provide professional support throughout the entire process, from design to delivery. We work diligently to turn your dreams into reality, offering not just a garment, but an unforgettable experience.',
    'section3.button': 'LEARN MORE',
    'section4.title': 'Custom Orders and Fast Delivery Options',
    'section4.subtitle': 'Brirose offers tailored solutions to meet your specific requests, ensuring timely delivery on your desired date. With both custom orders and fast delivery options, we ensure every detail reaches you on time.',
    'section4.button': 'LEARN MORE',
    'section5.title': 'High Customer Satisfaction',
    'section5.subtitle': 'Brirose prioritizes customer satisfaction by providing high-quality service at every step. Not only through design, but also through building a secure relationship with our clients and offering professional support, we ensure long-term satisfaction.',
    'section5.button': 'LEARN MORE',
    'section6.title': 'Sustainability and Eco-Friendly Production',
    'section6.subtitle': 'Brirose focuses on eco-friendly production processes, using sustainable materials and maintaining ecological balance. By offering environmentally conscious collections, we combine elegance with respect for nature.',
    'section6.button': 'LEARN MORE',
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.collection': 'Koleksiyon',
    'nav.about': 'Hakkında',
    'section1.title': 'Müşteri Odaklı Yaklaşım',
    'section1.subtitle': 'Brirose, her müşterinin benzersiz tarzını ve hayallerini ön planda tutar. Özel günlerinizi unutulmaz kılmak için ihtiyaçlarınıza ve beklentilerinize uygun tasarımlar oluştururuz. Brirose’da her tasarım, müşteri odaklı bir anlayışla hayata geçirilir.',
    'section1.button': 'DAHA FAZLA BİLGİ',
    'section2.title': 'Kaliteli ve Özgün İşçilik',
    'section2.subtitle': 'En kaliteli kumaşlar ve özenle işlenmiş detaylarla her bir parça zarafeti ve ustalığı bir araya getirir. Brirose, ince işçiliğiyle zarafeti yeniden tanımlar ve özel günlerinizi unutulmaz kılar.',
    'section2.button': 'DAHA FAZLA BİLGİ',
    'section3.title': 'Güven ve Tutku ile Profesyonel Destek',
    'section3.subtitle': 'Brirose, özel anlarınıza eşlik etmenin sorumluluğunu tutkuyla taşır. Her müşterisine güven veren bir yaklaşımla, tasarımdan teslimata kadar tüm süreç boyunca profesyonel destek sağlar. Hayallerinizi kusursuz bir şekilde gerçeğe dönüştürmek için titizlikle çalışır ve yalnızca bir kıyafet değil, unutulmaz anılar için bir deneyim sunar.',
    'section3.button': 'DAHA FAZLA BİLGİ',
    'section4.title': 'Özel Sipariş ve Hızlı Teslimat Seçenekleri',
    'section4.subtitle': 'Brirose, taleplerinize özel çözümler sunarak, istenilen tarih ve zamana kadar teslimat garantisi verir. Hem özel siparişler hem de hızlı teslimat seçenekleriyle, her detaya zamanında ulaşmanızı sağlar.',
    'section4.button': 'DAHA FAZLA BİLGİ',
    'section5.title': 'Yüksek Müşteri Memnuniyeti',
    'section5.subtitle': 'Brirose, müşteri memnuniyetini ön planda tutarak, her süreçte yüksek kaliteli hizmet sunar. Sadece tasarım değil, aynı zamanda müşteriyle kurulan güvenli ilişki ve profesyonel destekle de uzun vadeli memnuniyet sağlanır.',
    'section5.button': 'DAHA FAZLA BİLGİ',
    'section6.title': 'Sürdürülebilirlik ve Çevre Dostu Üretim',
    'section6.subtitle': 'Brirose, çevre dostu üretim süreçlerine odaklanarak, sürdürülebilir malzemeler kullanır ve ekolojik dengeyi gözetir. Çevre bilincine sahip koleksiyonlar sunarak, hem şıklığı hem de doğaya saygıyı bir araya getirir.',
    'section6.button': 'DAHA FAZLA BİLGİ',
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


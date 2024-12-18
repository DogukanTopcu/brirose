'use client'

import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
        className='text-black'
        variant="link"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
    >
        {language === 'en' ? 'TR' : 'EN'}
    </Button>
  )
}


'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { FadeIn } from './fade-in'
import { useLanguage } from '@/contexts/language-context'

interface SectionProps {
  id: string
  titleKey: string
  subtitleKey?: string
  buttonTextKey?: string
  imageSrc1: string
  imageSrc2: string
  className?: string
  children?: React.ReactNode
}

export function Section({
  id,
  titleKey,
  subtitleKey,
  buttonTextKey,
  imageSrc1,
  imageSrc2,
  className,
  children
}: SectionProps) {
  const { t } = useLanguage()

  return (
    <section
      id={id}
      className={cn(
        "relative min-h-screen w-full snap-start overflow-hidden",
        className
      )}
    >
      <div className="relative h-screen w-full md:grid md:grid-cols-2">
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center bg-black/50 px-6 md:bg-transparent md:px-16 lg:px-24">
          <FadeIn>
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {t(titleKey)}
              </h2>
              {subtitleKey && (
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {t(subtitleKey)}
                </p>
              )}
              {buttonTextKey && (
                <div className="mt-10">
                  <button className="text-base font-semibold leading-7 hover:opacity-80">
                    {t(buttonTextKey)}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              )}
              {children}
            </div>
          </FadeIn>
        </div>
        
        {/* Images */}
        <div className="absolute inset-0 md:relative md:h-full">
          <div className="grid h-full grid-cols-2 gap-2">
            <div className="relative h-full w-full">
              <Image
                src={imageSrc1}
                alt={t(titleKey) + " - Image 1"}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src={imageSrc2}
                alt={t(titleKey) + " - Image 2"}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState, useRef, useEffect } from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile"
}

export function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle clicking outside to close the menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef])

  const handleLanguageChange = (newLocale: string) => {
    // Close the menu first to prevent any visual glitches
    setIsOpen(false)
    
    // Use the Next.js router to navigate to the new locale
    router.push(pathname, { locale: newLocale })
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button 
        variant="outline" 
        size="sm" 
        className={`flex items-center gap-1 ${
          variant === "desktop" ? "h-8 px-2 text-xs sm:text-sm" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative h-4 w-5 overflow-hidden">
          {locale === 'en' && <Image src="/assets/images/flag/en.svg" alt="English" fill className="object-cover" />}
          {locale === 'tr' && <Image src="/assets/images/flag/tr.svg" alt="Türkçe" fill className="object-cover" />}
          {locale === 'de' && <Image src="/assets/images/flag/de.svg" alt="Deutsch" fill className="object-cover" />}
          {locale === 'es' && <Image src="/assets/images/flag/es.svg" alt="Español" fill className="object-cover" />}
          {locale === 'nl' && <Image src="/assets/images/flag/nl.svg" alt="Nederlands" fill className="object-cover" />}
        </div>
        <span className={variant === "desktop" ? "ml-1 hidden xs:inline" : "ml-1"}>
          {locale === 'en' && 'EN'}
          {locale === 'tr' && 'TR'}
          {locale === 'de' && 'DE'}
          {locale === 'nl' && 'NL'}
          {locale === 'es' && 'ES'}        </span>
        <ChevronDown className={variant === "desktop" ? "h-3 w-3 sm:h-4 sm:w-4" : "h-4 w-4"} />
      </Button>
      
      {isOpen && (
        <div 
          className="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
          style={{
            right: variant === "desktop" ? 0 : 'auto',
            left: variant === "mobile" ? 0 : 'auto',
            top: '100%',
            marginTop: '0.5rem'
          }}
        >
          <button 
            className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full text-left"
            onClick={() => handleLanguageChange('en')}
          >
            <div className="relative h-4 w-5 overflow-hidden">
              <Image src="/assets/images/flag/en.svg" alt="English" fill className="object-cover" />
            </div>
            <span>English</span>
          </button>
          <button 
            className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full text-left"
            onClick={() => handleLanguageChange('tr')}
          >
            <div className="relative h-4 w-5 overflow-hidden">
              <Image src="/assets/images/flag/tr.svg" alt="Türkçe" fill className="object-cover" />
            </div>
            <span>Türkçe</span>
          </button>
          <button 
            className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full text-left"
            onClick={() => handleLanguageChange('de')}
          >
            <div className="relative h-4 w-5 overflow-hidden">
              <Image src="/assets/images/flag/de.svg" alt="Deutsch" fill className="object-cover" />
            </div>
            <span>Deutsch</span>
          </button>
          <button 
            className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full text-left"
            onClick={() => handleLanguageChange('es')}
          >
            <div className="relative h-4 w-5 overflow-hidden">
              <Image src="/assets/images/flag/es.svg" alt="Español" fill className="object-cover" />
            </div>
            <span>Español</span>
          </button>
          <button 
            className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full text-left"
            onClick={() => handleLanguageChange('nl')}
          >
            <div className="relative h-4 w-5 overflow-hidden">
              <Image src="/assets/images/flag/nl.svg" alt="Nederlands" fill className="object-cover" />
            </div>
            <span>Nederlands</span>
          </button>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { LanguageSwitcher } from "./language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations("common.navigation")
  const promoT = useTranslations("common.promo")
  
  // Add CSS variable for header height to allow mobile menu to calculate height correctly
  useEffect(() => {
    document.documentElement.style.setProperty('--header-height', isOpen ? '56px' : '0px')
    
    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 text-center text-xs sm:text-sm relative">
        <span className="hidden xs:inline">{promoT("limitedOffer")}: </span>{promoT("offerText")}
        <Button variant="link" size="sm" className="text-white font-bold ml-1 sm:ml-2 p-0 sm:p-1 h-auto" asChild>
          <Link href="/pricing">{promoT("buyButton")} →</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-white hover:bg-white/20 p-0.5"
          onClick={() => document.querySelector(".bg-gradient-to-r")?.classList.add("hidden")}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-base sm:text-xl">ECU Tuning Portal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("home")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("corporate")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/features" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("features")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("pricing")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("gallery")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("contact")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center ml-2 sm:ml-4 space-x-1 sm:space-x-2">
              <LanguageSwitcher variant="desktop" />

              {/* ModeToggle removed - using only dark mode */}
              <Button size="sm" className="h-8 text-xs sm:text-sm hidden sm:flex" asChild>
                <Link href="/trial">
                  Try it Free <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              className="ml-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b shadow-lg fixed top-[var(--header-height)] left-0 right-0 h-[calc(100vh-var(--header-height))] z-50 overflow-auto">
          <div className="container mx-auto px-4 py-6 space-y-0">
            <div className="flex items-center justify-between mb-4">
              <LanguageSwitcher variant="mobile" />
              {/* ModeToggle removed - using only dark mode */}
            </div>
            
            <div className="grid grid-cols-1 gap-1">
              <Link href="/" className="flex items-center py-3 px-2 rounded-md hover:bg-muted transition-colors">
                <span className="text-base font-medium">{t("home")}</span>
              </Link>
              <Link href="/about" className="flex items-center py-3 px-2 rounded-md hover:bg-muted transition-colors">
                <span className="text-base font-medium">{t("corporate")}</span>
              </Link>
              <Link href="/features" className="flex items-center py-3 px-2 rounded-md hover:bg-muted transition-colors">
                <span className="text-base font-medium">{t("features")}</span>
              </Link>
              <Link href="/pricing" className="flex items-center py-3 px-2 rounded-md hover:bg-muted transition-colors">
                <span className="text-base font-medium">{t("pricing")}</span>
              </Link>
              <Link href="/gallery" className="flex items-center py-3 px-2 rounded-md hover:bg-muted transition-colors">
                <span className="text-base font-medium">{t("gallery")}</span>
              </Link>
              <Link href="/contact" className="flex items-center py-3 px-2 rounded-md hover:bg-muted transition-colors">
                <span className="text-base font-medium">{t("contact")}</span>
              </Link>
            </div>
            
            <div className="pt-6 pb-2">
              <Button className="w-full" asChild>
                <Link href="/trial">
                  Try it Free for 7 Days <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

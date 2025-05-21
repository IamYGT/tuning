"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
  
  // Function to update header heights
  const updateHeaderHeights = () => {
    // Get the banner height if visible
    const banner = document.querySelector(".bg-gradient-to-r");
    const bannerHeight = banner && !banner.classList.contains("hidden") ? banner.clientHeight : 0;
    
    // Get the main header height (without banner)
    const headerContainer = document.querySelector(".container.mx-auto");
    const headerHeight = headerContainer ? headerContainer.clientHeight : 56;
    
    // Set CSS variables
    document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--total-header-height', `${bannerHeight + headerHeight}px`);
  }
  
  // Add CSS variables for header and banner height to allow mobile menu to calculate height correctly
  useEffect(() => {
    // Update header heights
    updateHeaderHeights();
    
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
  
  // Add a resize listener to update header heights when window is resized
  useEffect(() => {
    const handleResize = () => {
      updateHeaderHeights();
    }
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

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
      className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 shadow-md"
    >
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 text-center text-xs sm:text-sm relative">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 mr-2">
          {promoT("promoLabel")}
        </span>
        <span className="hidden xs:inline">{promoT("limitedOffer")}: </span>{promoT("offerText")}
        <Button variant="link" size="sm" className="text-white font-bold ml-1 sm:ml-2 p-0 sm:p-1 h-auto" asChild>
          <Link href="/pricing">{promoT("buyButton")} →</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-white hover:bg-white/20 p-0.5"
          onClick={() => {
            document.querySelector(".bg-gradient-to-r")?.classList.add("hidden");
            // Banner kapandığında CSS değişkenlerini hemen güncelle
            setTimeout(updateHeaderHeights, 0);
          }}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/assets/images/logo/ecu.svg" 
                alt="ECU Tuning Portal Logo" 
                width={52} 
                height={52} 
                className="h-10 w-auto md:h-12 transition-all duration-200" 
              />

            </Link>
          </div>

          {/* Desktop Navigation - Show on large screens (lg and up) */}
          <div className="hidden lg:flex items-center justify-between w-full pl-8">
            <nav className="flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-wrap">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/" className={navigationMenuTriggerStyle()}>
                        {t("home")}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/about" className={navigationMenuTriggerStyle()}>
                        {t("corporate")}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/features" className={navigationMenuTriggerStyle()}>
                        {t("features")}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                        {t("pricing")}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/gallery" className={navigationMenuTriggerStyle()}>
                        {t("gallery")}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/contact" className={navigationMenuTriggerStyle()}>
                        {t("contact")}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-3 ml-4">
              <LanguageSwitcher variant="desktop" />

              {/* ModeToggle removed - using only dark mode */}
              <Button size="sm" className="h-8 text-xs sm:text-sm flex whitespace-nowrap" asChild>
                <Link href="/trial">
                  {t("tryFree")} <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Medium Screen Navigation - Show on medium screens (md) */}
          <div className="hidden md:flex lg:hidden items-center ml-auto space-x-2">
            <LanguageSwitcher variant="desktop" />
            
            <Button size="sm" className="h-8 text-xs sm:text-sm flex whitespace-nowrap" asChild>
              <Link href="/trial">
                {t("tryFree")} <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            
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

          {/* Mobile Navigation Toggle - Show on small screens (sm and below) */}
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
        <div className="lg:hidden bg-background border-b shadow-lg fixed top-[var(--total-header-height)] left-0 right-0 h-[calc(100vh-var(--total-header-height))] z-50 overflow-auto">
          <div className="container mx-auto px-4 py-6 space-y-0">
            <div className="flex items-center justify-between mb-4">
              <LanguageSwitcher variant="mobile" />
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
                  {t("tryFree")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link } from "@/i18n/navigation"

export default function Footer() {
  const t = useTranslations("common.footer");
  const nav = useTranslations("common.navigation");
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          <div>
            <div className="mb-3 sm:mb-4">
              <Image 
                src="/assets/images/logo/ecu.svg" 
                alt="ECU Tuning Portal Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              {t("about")}
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-5">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t("links")}</h3>
            <ul className="grid gap-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("corporate")}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("pricing")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t("resources")}</h3>
            <ul className="grid gap-2 text-sm sm:text-base">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("helpCenter")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("documentation")}
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("videoTutorials")}
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("communityForum")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t("subscribe")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{t("subscribeText")}</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder={t("emailPlaceholder")} className="bg-background h-9 sm:h-10 text-sm" />
              <Button size="sm" className="h-9 sm:h-10 text-sm">{t("subscribeButton")}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              {t("terms")}
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              {t("cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

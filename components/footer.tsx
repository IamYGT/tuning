"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link, usePathname } from "@/i18n/navigation"

// `next-intl`'in Link bileşeninin beklediği `href` türünü tanımla
type Pathname = React.ComponentProps<typeof Link>["href"];

export default function Footer() {
  const tFooter = useTranslations("common.footer");
  const tNav = useTranslations("common.navigation");
  const pathname = usePathname();

  // Ana sayfa dışındaki sayfalarda daha kısa metni kullan
  const aboutText = pathname === "/" ? tFooter("about") : tFooter("about_short");

  // Hataları önlemek için tüm linklerin `routing.ts`'de tanımlı yolları kullanmasını sağla
  const quickLinks: { href: Pathname; label: string }[] = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("corporate") },
    { href: "/features", label: tNav("features") },
    { href: "/pricing", label: tNav("pricing") },
    { href: "/contact", label: tNav("contact") },
  ];

  // Bu linklerin henüz sayfası olmadığı için geçici olarak `/contact`'a yönlendir
  const resourceLinks: { href: Pathname; label: string }[] = [
    { href: "/contact", label: tFooter("helpCenter") },
    { href: "/contact", label: tFooter("faq") },
    { href: "/contact", label: tFooter("documentation") },
    { href: "/contact", label: tFooter("videoTutorials") },
    { href: "/contact", label: tFooter("communityForum") },
  ];

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
              {aboutText}
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-5">
              <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{tFooter("links")}</h3>
            <ul className="grid gap-2 text-sm sm:text-base">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{tFooter("resources")}</h3>
            <ul className="grid gap-2 text-sm sm:text-base">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{tFooter("subscribe")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{tFooter("subscribeText")}</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder={tFooter("emailPlaceholder")} className="bg-background h-9 sm:h-10 text-sm" />
              <Button size="sm" className="h-9 sm:h-10 text-sm">{tFooter("subscribeButton")}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} {tFooter("copyright")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
              {tFooter("terms")}
            </Link>
            <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
              {tFooter("privacy")}
            </Link>
            <Link href={"/"} className="text-muted-foreground hover:text-primary transition-colors">
              {tFooter("cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

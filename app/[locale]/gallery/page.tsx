"use client"

import { useTranslations } from "next-intl"
import { ImageSlider } from "@/components/image-slider"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function GalleryPage() {
  const t = useTranslations("Gallery")
  
  // Gallery images
  const images = [
    "/assets/images/galery/1.avif",
    "/assets/images/galery/2.avif",
    "/assets/images/galery/3.avif",
    "/assets/images/galery/4.avif",
    "/assets/images/galery/5.avif"
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto">
          <ImageSlider images={images} autoPlayInterval={6000} />
        </div>
      </section>

      {/* CTA Section */}
    <section className="py-16 bg-gradient-to-r from-red-900/70 to-orange-900/70">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-10 text-gray-200">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-white text-red-900 hover:bg-gray-200" asChild>
            <Link href="/trial">
              {t('cta.primaryButton')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/pricing">{t('cta.secondaryButton')}</Link>
          </Button>
        </div>
      </div>
    </section>
    </div>
  )
}
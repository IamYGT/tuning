"use client"

import { useTranslations } from "next-intl"
import { ImageSlider } from "@/components/image-slider"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { ArrowRight, Check, PlayIcon } from "lucide-react"

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

      {/* Video Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Video Left Side */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl group cursor-pointer">
                {/* Kapak resmi */}
                <a 
                  href="https://www.youtube.com/watch?v=nRXDRadgO4c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="ECU Tuning Portal Video"
                  className="block w-full"
                >
                  <div className="relative">
                    <Image
                      src="/assets/images/contact-image.jpg"
                      alt="ECU Tuning Portal Video"
                      width={300}
                      height={300}
                      className="w-full h-auto max-w-md mx-auto group-hover:opacity-90 transition-opacity duration-300"
                      priority
                    />
                    
                    {/* Karanlık gradyan kaplama */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  {/* Oynat butonu */}
                  <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 pointer-events-auto">
                      <PlayIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Content Right Side */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-4xl font-bold mb-4">{t("content.video.title") || "High performance"}</h2>
              <h3 className="text-3xl font-bold text-primary mb-6">{t("content.video.subtitle") || "Easy to manage."}</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{t("content.video.feature1.title") || "Easy Customer Management"}</h4>
                    <p className="text-muted-foreground">
                      {t("content.video.feature1.description") || "You can examine the files of the customers, see their credits, see what they wrote in the support system. You can also add or delete credits."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{t("content.video.feature2.title") || "16 Different Language Support"}</h4>
                    <p className="text-muted-foreground">
                      {t("content.video.feature2.description") || "Our system is integrated into English, Spanish, German, Dutch, Russian, Arabic, Portuguese, French, Hebrew, Italian, Slovak, Hungarian, Czech, Polish, Greek and Turkish languages."}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" className="bg-primary text-white hover:bg-primary/90" asChild>
                  <Link href="/trial">
                    {t("content.video.primaryButton") || "7-Day Free Trial"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
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
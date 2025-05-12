import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import BrandMarquee from "@/components/brand-marquee"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function Hero() {
  const t = useTranslations('home.hero');
  
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
      {/* Dark background with layered red glowing radial effects */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 to-transparent opacity-70" />
        <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-700/10 to-transparent opacity-50" />
        <div className="absolute right-1/3 bottom-1/3 w-1/3 h-1/3 bg-gradient-radial from-red-600/10 to-transparent opacity-40" />
      </div>

      {/* Light grid texture overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5 z-5" />

      {/* Content gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-20" />

      <div className="container relative z-30 px-4 py-16 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              {t('mainTitle')}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-white">{t('subtitle')}</p>
            <p className="text-lg mb-4 text-gray-300">
              {t('description')}
            </p>
            <p className="text-lg mb-8 text-gray-300 font-bold">
              {t('tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/trial">
                  {t('cta')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">{t('secondaryCta')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-4" asChild>
                <Link href="https://tuningwebsite.com" aria-label="Tuning Website" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/assets/images/website.png" 
                    alt="Tuning Website" 
                    width={100} 
                    height={100} 
                    className="object-contain" 
                  />
                </Link>
              </Button>


            </div>
          </div>
          
          {/* Image on the right side */}
          <div className="relative w-full md:w-2/5 h-[300px] md:h-[400px]">
            <Image 
              src="/assets/images/call.png.avif"
              alt="ECU Tuning Support"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Brand Marquee */}
        <div className="mt-16">
          <BrandMarquee />
        </div>
      </div>
    </section>
  )
}
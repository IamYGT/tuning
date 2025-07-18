import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function CTASection() {
  const t = useTranslations('home.cta');

  return (
    <section className="py-16 bg-gradient-to-r from-custom-red-900/70 to-orange-900/70">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('title')}</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-10 text-gray-200">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-white text-custom-red-900 hover:bg-gray-200" asChild>
            <Link href="/trial">
              {t('primaryButton')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/contact">{t('secondaryButton')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { generateFullHreflangs } from "@/lib/hreflang"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowRight, PlayIcon, Check, Users, FileText, Code, Clock } from "lucide-react"

// Generate metadata for SEO
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Corporate' });
  const hreflangs = generateFullHreflangs('/about', resolvedParams.locale);

  return {
    title: t('hero.title'),
    description: t('hero.description'),
    alternates: {
      canonical: hreflangs.canonical,
      languages: hreflangs.languages
    },
    openGraph: {
      title: t('hero.title'),
      description: t('hero.description'),
      images: ['/assets/images/logo.svg'],
    },
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Corporate' });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-background py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] bg-repeat opacity-20"></div>
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 rounded-full backdrop-blur-sm">
              <p className="text-sm font-medium text-primary">
                {t("hero.label")}
              </p>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mb-8 text-lg text-gray-300 md:text-xl">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/contact">
                  {t("hero.primaryButton")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/features">
                  {t("hero.secondaryButton")}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("content.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("content.paragraph1")}</p>
                <p>{t("content.paragraph2")}</p>
                <p>{t("content.paragraph3")}</p>
                <p>{t("content.paragraph4")}</p>
                <p>{t("content.paragraph5")}</p>
                <p>{t("content.paragraph6")}</p>
                <p className="font-medium text-primary">{t("content.paragraph7")}</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-t from-muted/30 to-background">
              <div className="aspect-video relative">
                <Image
                  src="/assets/images/logo.svg"
                  alt="ECU Tuning Portal Team"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">2016</div>
                  <div className="text-sm text-muted-foreground">{t("content.stat1")}</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">{t("content.stat2")}</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">{t("content.stat3")}</div>
                </div>
              </div>
            </div>
          </div>
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
                  title="ECU Tuning Portal Video"
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
                    <h4 className="font-medium text-lg">{t("content.video.feature1.title")}</h4>
                    <p className="text-muted-foreground">
                      {t("content.video.feature1.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{t("content.video.feature2.title")}</h4>
                    <p className="text-muted-foreground">
                      {t("content.video.feature2.description")}
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

      {/* Brand Logos Section */}
      <section className="py-12 bg-muted/10">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">{t("content.brands.title") || "Our Trusted Brands"}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[...Array(20)].map((_, index) => (
              <a
                key={index + 1}
                href="https://tuningwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                title={`Brand Logo ${index + 1}`}
                className="group transition-all duration-300 flex items-center justify-center"
              >
                <div className="relative w-full h-12 sm:h-14 md:h-16 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125">
                  <Image
                    src={`/assets/images/brand/${index + 1}.png.avif`}
                    alt={`Brand Logo ${index + 1}`}
                    fill
                    className="object-contain"
                    loading="lazy" // priority yerine lazy loading
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-slate-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">{t("content.stats.title") || "Our Statistics"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Stat Box 1 - Happy Customers */}
            <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/50 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-primary hover:shadow-md hover:shadow-primary/10">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3" />
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">1000+</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">{t("content.stats.customers") || "Happy Customers"}</p>
            </div>

            {/* Stat Box 2 - Number of Files */}
            <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/50 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-primary hover:shadow-md hover:shadow-primary/10">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3" />
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">15,000+</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">{t("content.stats.files") || "Number of Files"}</p>
            </div>

            {/* Stat Box 3 - Lines of Code */}
            <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/50 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-primary hover:shadow-md hover:shadow-primary/10">
              <Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3" />
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">500K+</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">{t("content.stats.code") || "Lines of Code"}</p>
            </div>

            {/* Stat Box 4 - Years of Experience */}
            <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/50 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-primary hover:shadow-md hover:shadow-primary/10">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3" />
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">8+</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">{t("content.stats.experience") || "Years of Experience"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/70 to-orange-900/70">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  {t("content.cta.title")}
                </h2>
                <p className="text-base sm:text-lg mb-8 text-gray-200">
                  {t("content.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="default" className="bg-white text-red-900 hover:bg-gray-200" asChild>
                    <Link href="/trial">
                      {t("content.cta.primaryButton")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/contact">
                      {t("content.cta.secondaryButton")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="/assets/images/call.png.avif"
                  alt="Call to action"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                  loading="lazy" // priority yerine lazy loading
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

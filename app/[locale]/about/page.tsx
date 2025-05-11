"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  const t = useTranslations("Corporate")

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
                <Link href="#about">
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
                  src="/assets/images/eculogo.png"
                  alt="ECU Tuning Portal Team"
                  fill
                  className="object-cover rounded-lg"
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
    </div>
  )
}

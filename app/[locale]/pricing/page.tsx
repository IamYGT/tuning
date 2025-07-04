import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { generateFullHreflangs } from "@/lib/hreflang"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Generate metadata for SEO
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Pricing' });
  const hreflangs = generateFullHreflangs('/pricing', resolvedParams.locale);

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: hreflangs.canonical,
      languages: hreflangs.languages
    },
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
  };
}

export default async function PricingPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Pricing' });

  // Pricing features array
  const features = [
    "unlimitedCustomers",
    "unlimitedFiles",
    "languages",
    "payment",
    "vehicles",
    "pCodes",
    "boschCodes",
    "supportSystem",
    "invoiceSystem",
    "creditSystem",
    "notificationSystem",
    "techSupport"
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {t("label")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center max-w-6xl mx-auto relative z-10">
            {/* One-time Plan */}
            <div className="relative rounded-lg p-8 flex flex-col border-2 border-zinc-700 bg-zinc-950 ring-2 ring-primary/20 shadow-xl shadow-primary/20 transform transition-all duration-300 hover:translate-y-[-8px] max-w-md w-full">
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <div className="bg-primary text-white px-4 py-1 text-xs font-medium rounded-full">
                  {t("popular")}
                </div>
              </div>

              <h3 className="text-center text-2xl font-bold mb-6 text-gray-300">{t("oneTime")}</h3>

              <div className="mb-8 text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold text-white">€{t("oneTimePrice")}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{t("oneTimeDescription")}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                    <span className="text-sm text-gray-300">{t(`features.${feature}`)}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white mt-auto py-3 text-lg">
                <Link href={`https://api.whatsapp.com/send?phone=905466367027&text=Merhaba,%20${t("oneTime")}%20paket%20hakkında%20bilgi%20almak%20istiyorum.`} target="_blank" rel="noopener noreferrer" className="w-full">
                  {t("buyButton")} →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto bg-zinc-950 border border-zinc-800 rounded-xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t("cta.title")}</h2>

            <div className="space-y-6 mb-8 text-muted-foreground">
              <p className="text-base md:text-lg">
                {t("cta.description1")}
              </p>
              <p className="text-base md:text-lg">
                {t("cta.description2")}
              </p>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/trial" className="w-full">
                  {t("cta.buttonText")} →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

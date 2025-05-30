import { useTranslations } from "next-intl"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import ContactInfoCard from "@/components/contact-info-card"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { locale: string } }) {
  // Hata mesajı "params should be awaited before using its properties" şeklinde.
  // Bu, params nesnesinin özelliklerine erişmeden önce kendisinin await edilmesi gerektiğini belirtir.
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Contact' });
  
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: `${t('titleMain')} | ECU Tuning Portal`,
    description: t('subtitle'),
    openGraph: {
      title: `${t('titleMain')} | ECU Tuning Portal`,
      description: t('subtitle'),
      images: ['/assets/images/call.png.avif'],
    },
  } as Metadata;
}

// Lazy load client components
const ContactForm = dynamic(() => import("@/components/contact-form"), {
  loading: () => <FormSkeleton />
})

const ContactMap = dynamic(() => import("@/components/contact-map"), {
  loading: () => <MapSkeleton />
})

// Skeleton loaders
function FormSkeleton() {
  return (
    <div className="bg-card rounded-lg shadow-md p-8 animate-pulse">
      <div className="h-8 bg-muted rounded w-40 mb-6"></div>
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="h-4 bg-muted rounded w-24 mb-2"></div>
            <div className="h-10 bg-muted rounded w-full"></div>
          </div>
        ))}
        <div className="h-10 bg-primary/30 rounded w-full"></div>
      </div>
    </div>
  )
}

function MapSkeleton() {
  return (
    <div className="bg-card rounded-lg shadow-md p-2 h-full min-h-[400px] overflow-hidden flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-10 h-10 bg-muted rounded-full mb-4"></div>
        <div className="h-2 bg-muted rounded w-24 mb-2.5"></div>
        <div className="h-2 bg-muted rounded w-32"></div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const t = useTranslations("Contact")

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {t("titleLabel")} {t("titleMain")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {t("subtitle")}
          </h1>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-muted/5">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Card - Phone */}
            <ContactInfoCard
              icon={Phone}
              title={t("contactInfo.phoneTitle")}
              description={t("contactInfo.phoneDesc")}
              contactInfo="+90 546 636 7027"
              link="tel:+905466367027"
            />

            {/* Contact Card - Email */}
            <ContactInfoCard
              icon={Mail}
              title={t("contactInfo.emailTitle")}
              description={t("contactInfo.emailDesc")}
              contactInfo="info@ecutuningportal.com"
              link="mailto:info@ecutuningportal.com"
            />

            {/* Contact Card - Address */}
            <ContactInfoCard
              icon={MapPin}
              title={t("contactInfo.addressTitle")}
              description={t("contactInfo.addressDesc")}
              contactInfo="İncilipınar Mahallesi, Şehit Mehmet Öter Cad. Kepkepzade, Park İş Merkezi, B No: 7, 27500 Şehitkamil/Gaziantep, Türkiye"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form - Lazy Loaded */}
            <ContactForm />

            {/* Google Map - Lazy Loaded */}
            <ContactMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-muted/30 to-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                {t("cta.description")}
              </p>
              <h3 className="text-2xl font-bold mb-6"></h3>
              <p className="text-lg mb-8 text-muted-foreground">
                {t("cta.description2")}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/trial">
                    {t("cta.primaryButton")}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/pricing">
                    {t("cta.secondaryButton")}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-t from-muted/30 to-background">
              <Image
                src="/assets/images/call.png.avif"
                alt="ECU Tuning Portal"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

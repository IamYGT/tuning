import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { generateFullHreflangs } from "@/lib/hreflang"

// Generate metadata for Features page
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Features' });
  const hreflangs = generateFullHreflangs('/features', resolvedParams.locale);

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
    },
  };
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}

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
  const tMetadata = await getTranslations({ locale: resolvedParams.locale, namespace: 'metadata' });
  const hreflangs = generateFullHreflangs('/features', resolvedParams.locale);

  return {
    title: tMetadata('features'),
    description: tMetadata('featuresDescription'),
    alternates: {
      canonical: hreflangs.canonical,
      languages: hreflangs.languages
    },
    openGraph: {
      title: tMetadata('features'),
      description: tMetadata('featuresDescription'),
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

import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { generateFullHreflangs } from "@/lib/hreflang"

// Generate metadata for Trial page
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Trial' });
  const hreflangs = generateFullHreflangs('/trial', resolvedParams.locale);

  return {
    title: t('title.tryFree'),
    description: t('description'),
    alternates: {
      canonical: hreflangs.canonical,
      languages: hreflangs.languages
    },
    openGraph: {
      title: t('title.tryFree'),
      description: t('description'),
      images: ['/assets/images/call.png.avif'],
    },
  };
}

export default function TrialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}

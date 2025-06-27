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
  const tMetadata = await getTranslations({ locale: resolvedParams.locale, namespace: 'metadata' });
  const hreflangs = generateFullHreflangs('/trial', resolvedParams.locale);

  return {
    title: tMetadata('trial'),
    description: tMetadata('trialDescription'),
    alternates: {
      canonical: hreflangs.canonical,
      languages: hreflangs.languages
    },
    openGraph: {
      title: tMetadata('trial'),
      description: tMetadata('trialDescription'),
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

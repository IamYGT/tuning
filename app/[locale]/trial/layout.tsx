import type { Metadata } from "next"
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Base metadata from root layout
const baseMetadata = {
  description: "Professional ECU tuning portal for automotive tuning professionals",
  icons: {
    icon: [
      { url: '/favicon/ecutuning/favicon.ico' },
      { url: '/favicon/ecutuning/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/ecutuning/apple-touch-icon.png' }
    ],
    other: [
      { rel: 'manifest', url: '/favicon/ecutuning/site.webmanifest' },
    ]
  }
};

// Trial page metadata generator
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  // Await params before accessing its properties
  const paramsData = await params;
  const locale = paramsData.locale;

  // Validate the locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  // Trial page specific metadata
  const title = messages.metadata?.trial || 'Free Trial | ECU Tuning Portal';
  const description = messages.metadata?.trialDescription || 'Start your free trial of our professional ECU tuning services';

  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: '/trial',
      languages: Object.fromEntries(
        routing.locales.map(locale => {
          const path = routing.pathnames['/trial'][locale as keyof typeof routing.pathnames['/trial']];
          return [locale, `/${locale}${path}`];
        })
      ),
    },
  };
}

export default function TrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  )
}

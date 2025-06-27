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

// Contact page metadata generator
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

  // Contact page specific metadata
  const title = messages.metadata?.contact || 'Contact Us | ECU Tuning Portal';
  const description = messages.metadata?.contactDescription || 'Get in touch with our professional ECU tuning team for inquiries and support';

  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: '/contact',
      languages: Object.fromEntries(
        routing.locales.map(locale => {
          const path = routing.pathnames['/contact'][locale as keyof typeof routing.pathnames['/contact']];
          return [locale, `/${locale}${path}`];
        })
      ),
    },
  };
}

export default function ContactLayout({
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

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

// Gallery page metadata generator
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

  // Gallery page specific metadata
  const title = messages.metadata?.gallery || 'Gallery | ECU Tuning Portal';
  const description = messages.metadata?.galleryDescription || 'View images and examples of our professional ECU tuning solutions';

  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: '/gallery',
      languages: Object.fromEntries(
        routing.locales.map(locale => {
          const path = routing.pathnames['/gallery'][locale as keyof typeof routing.pathnames['/gallery']];
          return [locale, `/${locale}${path}`];
        })
      ),
    },
  };
}

export default function GalleryLayout({
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

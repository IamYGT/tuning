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

// About page metadata generator
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  // Hata mesajına göre params nesnesinin özelliklerine erişmeden önce await ile çözümlenmesi gerekiyor.
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

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

  // About page specific metadata
  const title = messages.metadata?.about || 'About Us | ECU Tuning Portal';
  const description = messages.metadata?.aboutDescription || 'Learn more about our professional ECU tuning services and expertise';

  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: '/about',
      languages: Object.fromEntries(
        routing.locales.map(locale => {
          const path = routing.pathnames['/about'][locale as keyof typeof routing.pathnames['/about']];
          return [locale, `/${locale}${path}`];
        })
      ),
    },
  };
}

export default function AboutLayout({
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

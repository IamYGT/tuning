import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import "@/styles/features.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import WhatsAppButton from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


export const metadata: Metadata = {
  title: "Advanced ECU Tuning Portal",
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
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Next.js 14+ requires dynamic params to be handled asynchronously
  // Await params before accessing its properties
  const paramsData = await params;
  const locale = paramsData.locale;
  
  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <BackToTop />
              <WhatsAppButton />
            </div>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

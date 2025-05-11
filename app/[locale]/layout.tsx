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
  description: "Professional ECU tuning portal for automotive tuning professionals"
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
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

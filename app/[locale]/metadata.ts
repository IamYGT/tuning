import { Metadata } from "next"
import { hasLocale } from "next-intl"
import { routing } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return {
      title: "ECU Tuning Portal | Professional Tuning System Service"
    };
  }
  
  return {
    title: messages.metadata?.home || "ECU Tuning Portal | Professional Tuning System Service",
    description: "Professional ECU tuning portal for automotive tuning professionals"
  };
}

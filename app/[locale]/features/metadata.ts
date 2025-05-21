import { Metadata } from "next"
import { hasLocale } from "next-intl"
import { routing } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    return {
      title: "Features | ECU Tuning Portal"
    };
  }
  
  return {
    title: messages.metadata?.features || "Features | ECU Tuning Portal",
    description: "Explore the advanced features of ECU Tuning Portal designed for automotive tuning professionals"
  };
}

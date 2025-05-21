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
      title: "Free 7-Day Trial | ECU Tuning Portal"
    };
  }
  
  return {
    title: messages.metadata?.trial || "Free 7-Day Trial | ECU Tuning Portal",
    description: "Start your free 7-day trial of ECU Tuning Portal and explore all premium features"
  };
}

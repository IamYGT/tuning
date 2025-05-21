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
      title: "Pricing & Plans | ECU Tuning Portal"
    };
  }
  
  return {
    title: messages.metadata?.pricing || "Pricing & Plans | ECU Tuning Portal",
    description: "View our pricing plans and special offers for ECU Tuning Portal"
  };
}

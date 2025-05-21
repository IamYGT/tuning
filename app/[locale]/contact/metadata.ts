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
      title: "Contact Us | ECU Tuning Portal"
    };
  }
  
  return {
    title: messages.metadata?.contact || "Contact Us | ECU Tuning Portal",
    description: "Get in touch with our team for any questions about ECU Tuning Portal"
  };
}

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
      title: "About Us | ECU Tuning Portal"
    };
  }
  
  return {
    title: messages.metadata?.about || "About Us | ECU Tuning Portal",
    description: "Learn more about ECU Tuning Portal, our mission, vision and team"
  };
}

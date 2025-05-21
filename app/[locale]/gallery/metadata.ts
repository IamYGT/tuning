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
      title: "Gallery | ECU Tuning Portal"
    };
  }
  
  return {
    title: messages.metadata?.gallery || "Gallery | ECU Tuning Portal",
    description: "Explore our portfolio of successful projects and customer vehicles"
  };
}

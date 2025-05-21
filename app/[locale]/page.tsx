import TestimonialCarousel from "@/components/testimonial-carousel"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Features from "@/components/features"
import Languages from "@/components/languages"
import CTASection from "@/components/cta-section"
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';


export default function Home() {
  const t = useTranslations('home');
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Languages />
      <Stats />
      <TestimonialCarousel />
      <CTASection />
    </div>
  )
}

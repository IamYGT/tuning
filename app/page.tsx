import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Features from "@/components/features"
import Languages from "@/components/languages"
import CTASection from "@/components/cta-section"

export default function Home() {
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

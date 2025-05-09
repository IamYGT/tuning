import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Features from "@/components/features"
import Languages from "@/components/languages"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Languages />
      <Stats />

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Tuning Professionals</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/70 to-orange-900/70">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Tuning Business?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-200">
            Join thousands of tuning professionals who have elevated their business with our advanced platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-red-900 hover:bg-gray-200" asChild>
              <Link href="/register">
                Try It Free for 7 Days <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight, Car, FileText, CreditCard, Users, LifeBuoy, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="ECU Tuning Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-20" />

        <div className="container relative z-30 px-4 py-16 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Professional ECU Tuning Portal
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-white">Advanced Tuning Portal v5.0</p>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Take your tuning business to the next level with our comprehensive platform designed for professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/10">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Tuning Professionals</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Customer Management System</h3>
              <p className="text-muted-foreground">Easily add, edit and delete your customers, and you can also add credits.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Advanced Credit System</h3>
              <p className="text-muted-foreground">Customize credits and ensure your customers can purchase easily.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">EVC Control & Sales System</h3>
              <p className="text-muted-foreground">Add credits to your customers via the EVC API and manage their sales.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">File Tracking System</h3>
              <p className="text-muted-foreground">Edit incoming files and check their content.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">16 Different Language Options</h3>
              <p className="text-muted-foreground">Use the system in 16 different languages to reach a global audience.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">6 Different Payment Methods</h3>
              <p className="text-muted-foreground">Supports payment methods such as Paypal, Stripe, Mollie, Iyzico and BTC Coin.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Advanced Billing System</h3>
              <p className="text-muted-foreground">Manage your transactions with automatic or manual invoicing options.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">17,583 Thousand Vehicle Data</h3>
              <p className="text-muted-foreground">Provide your customers with comprehensive information using a wide vehicle database.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Support Request System</h3>
              <p className="text-muted-foreground">Easily manage your customers' support requests.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Email and SMS Notifications</h3>
              <p className="text-muted-foreground">Receive email and SMS notifications about file uploads and support requests.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Customer Discount System</h3>
              <p className="text-muted-foreground">Add special discounts, markups, and extra bonuses to customer groups.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">and more</h3>
              <p className="text-muted-foreground">Provide a more professional and user-friendly system with 8 additional modules.</p>
            </div>
          </div>
        </div>
      </section>



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

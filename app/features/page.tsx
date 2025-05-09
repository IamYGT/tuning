"use client"

import Features from "@/app/features/features_component"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Animation */}
      <section className="relative w-full py-20 flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto text-center">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Özelliklerimiz</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              ECU Tuning Portal'ın profesyonel özelliklerini keşfedin ve işinizi bir üst seviyeye taşıyın.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className="py-16 bg-muted/5">
        <div className="container px-4 mx-auto">
          <Features />
        </div>
      </section>

      {/* CTA Section with Button */}
      <section className="py-16 bg-gradient-to-t from-muted/30 to-background">
        <div className="container px-4 mx-auto text-center animate-fadeIn opacity-0" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Hazır mısınız?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            ECU Tuning Portal'ın sunduğu tüm özellikleri keşfettiniz. Şimdi fiyatlandırmayı inceleyerek size uygun planı seçin.
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/pricing">
              Fiyatlandırmayı Görüntüle <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

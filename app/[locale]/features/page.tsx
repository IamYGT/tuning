"use client"

import Features from "../features/features_component"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";

export default function FeaturesPage() {
  const t = useTranslations('Features');
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent flash

  useEffect(() => {
    // Check if we're on client-side
    if (typeof window !== 'undefined') {
      // Function to check if device is mobile
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768); // md breakpoint is typically 768px
      };

      // Initial check
      checkIfMobile();

      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);

      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Animation (only on desktop) */}
      <section className="relative w-full py-20 flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto text-center">
          <div className={isMobile ? "opacity-100" : "animate-fadeIn opacity-0"} style={!isMobile ? { animationDelay: '0.1s' } : {}}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('intro.title')}</h2>
            <p className="text-lg text-muted-foreground mb-12">{t('intro.description')}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">{t('benefits.item1.title')}</h3>
              <p className="text-muted-foreground">{t('benefits.item1.description')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">{t('benefits.item2.title')}</h3>
              <p className="text-muted-foreground">{t('benefits.item2.description')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">{t('benefits.item3.title')}</h3>
              <p className="text-muted-foreground">{t('benefits.item3.description')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">{t('benefits.item4.title')}</h3>
              <p className="text-muted-foreground">{t('benefits.item4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <Features />
        </div>
      </section>

      {/* CTA Section with Button (animation only on desktop) */}
      <section className="py-16 bg-gradient-to-t from-muted/30 to-background">
        <div
          className={isMobile ? "container px-4 mx-auto text-center opacity-100" : "container px-4 mx-auto text-center animate-fadeIn opacity-0"}
          style={!isMobile ? { animationDelay: '0.5s' } : {}}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            {t('cta.description')}
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/pricing">
              {t('cta.buttonText')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

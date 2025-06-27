"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"

interface Testimonial {
  id: number
  nameKey: string
  companyKey: string
  rating: number
  textKey: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    nameKey: "testimonial1.name",
    companyKey: "testimonial1.company",
    rating: 5,
    textKey: "testimonial1.text",
  },
  {
    id: 2,
    nameKey: "testimonial2.name",
    companyKey: "testimonial2.company",
    rating: 5,
    textKey: "testimonial2.text",
  },
  {
    id: 3,
    nameKey: "testimonial3.name",
    companyKey: "testimonial3.company",
    rating: 4,
    textKey: "testimonial3.text",
  },
]

export default function TestimonialCarousel() {
  const t = useTranslations('home.testimonials');

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-3 shadow-md">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.11 13.6501L13.69 10.0601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('title')}</span>
            </div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('heading')}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="relative">
          {/* Desktop view - 3 column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-muted bg-background h-full">
                <CardContent className="p-4 h-full">
                  <div className="flex flex-col items-center text-center">

                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base mb-4">{t(testimonial.textKey)}</p>
                    <h3 className="font-bold">{t(testimonial.nameKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(testimonial.companyKey)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile view - horizontally scrollable */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex space-x-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-72 flex-shrink-0">
                  <Card className="border border-muted bg-background h-full">
                    <CardContent className="p-4 h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm sm:text-base mb-4">{t(testimonial.textKey)}</p>
                        <h3 className="font-bold">{t(testimonial.nameKey)}</h3>
                        <p className="text-sm text-muted-foreground">{t(testimonial.companyKey)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

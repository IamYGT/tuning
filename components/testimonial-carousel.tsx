"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  company: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    company: "Performance Tuning Ltd",
    rating: 5,
    text: "This ECU tuning portal has completely transformed how we manage our tuning files and customer relationships. The interface is intuitive and the vehicle database is comprehensive.",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    company: "AutoTech Solutions",
    rating: 5,
    text: "The credit system and billing features have made our business operations much more efficient. Customer support is excellent and always responsive.",
  },
  {
    id: 3,
    name: "Thomas Weber",
    company: "German Tuning Specialists",
    rating: 4,
    text: "We've been using this platform for over a year now and it has significantly improved our workflow. The file management system is particularly impressive.",
  },
]

export default function TestimonialCarousel() {

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 text-red-500 text-sm font-medium mb-3 shadow-md backdrop-blur-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>MÜŞTERİ YORUMLARI</span>
            </div>
          </span>
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
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base mb-4">{testimonial.text}</p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base mb-4">{testimonial.text}</p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  company: string
  image: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    company: "Performance Tuning Ltd",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "This ECU tuning portal has completely transformed how we manage our tuning files and customer relationships. The interface is intuitive and the vehicle database is comprehensive.",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    company: "AutoTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The credit system and billing features have made our business operations much more efficient. Customer support is excellent and always responsive.",
  },
  {
    id: 3,
    name: "Thomas Weber",
    company: "German Tuning Specialists",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "We've been using this platform for over a year now and it has significantly improved our workflow. The file management system is particularly impressive.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border border-muted bg-background">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
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
                    <p className="text-lg mb-4">{testimonial.text}</p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`w-2 h-2 rounded-full p-0 ${current === index ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function BrandMarquee() {
  const t = useTranslations('home.brands');
  const [width, setWidth] = useState(0)
  const brandImages = Array.from({ length: 20 }, (_, i) => `/assets/images/brand/${i + 1}.png.avif`)

  // Duplicate the array to create a seamless loop for desktop
  const duplicatedBrands = [...brandImages, ...brandImages]

  useEffect(() => {
    // Set the width of the container for animation
    const updateWidth = () => {
      const marqueeContainer = document.querySelector(".marquee-container")
      if (marqueeContainer) {
        setWidth(marqueeContainer.scrollWidth / 2)
      }
    }

    // Initial check
    updateWidth()

    // Add event listener for resize
    window.addEventListener('resize', updateWidth)

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  // Mobile view - grid layout with manual scroll
  const mobileView = (
    <div className="overflow-x-auto pb-4 hide-scrollbar">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 min-w-max px-4">
        {brandImages.map((src, index) => (
          <div key={index} className="h-12 w-32 relative mx-auto">
            <Image
              src={src}
              alt={`Brand logo ${index + 1}`}
              width={128}
              height={48}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )

  // Desktop view - animated marquee
  const desktopView = (
    <div className="marquee-container relative flex overflow-hidden">
      <motion.div
        className="flex items-center gap-8 min-w-full"
        animate={{ x: -width }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {duplicatedBrands.map((src, index) => (
          <div key={index} className="flex-shrink-0 h-12 w-32 relative">
            <Image
              src={src}
              alt={`Brand logo ${index % brandImages.length + 1}`}
              width={128}
              height={48}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )

  return (
    <div className="overflow-hidden py-6">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-center text-gray-300 mb-4">{t('title')}</h2>
      </div>
      {/* Show mobile view on small screens, desktop view on larger screens */}
      <div className="md:hidden">{mobileView}</div>
      <div className="hidden md:block">{desktopView}</div>
    </div>
  )
}

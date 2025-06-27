"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "../hooks/use-media-query"
import { X } from "lucide-react"

interface ImageSliderProps {
  images: string[]
  autoPlayInterval?: number
}

export const ImageSlider = ({
  images,
  autoPlayInterval = 5000
}: ImageSliderProps) => {
  const t = useTranslations("Gallery")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const dragThreshold = 100 // Drag threshold (pixels)

  // Automatic sliding at regular intervals (desktop only)
  useEffect(() => {
    if (!isDesktop) return

    const startAutoPlay = () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)

      autoPlayRef.current = setTimeout(() => {
        const newIndex = (currentIndex + 1) % images.length
        setCurrentIndex(newIndex)
      }, autoPlayInterval)
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [currentIndex, images.length, autoPlayInterval, isDesktop])

  // Go to previous image
  const prevSlide = () => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
  }

  // Go to next image
  const nextSlide = () => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
  }

  // Go to specific image
  const goToSlide = (index: number) => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    setCurrentIndex(index)
  }

  // Arrange to show only 3 images: previous, current, and next
  const getVisibleImages = () => {
    // Calculate previous, current, and next image indices
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    const nextIndex = (currentIndex + 1) % images.length

    // Return only 3 images: previous, current, and next
    return [
      { src: images[prevIndex], position: -1, index: prevIndex },
      { src: images[currentIndex], position: 0, index: currentIndex },
      { src: images[nextIndex], position: 1, index: nextIndex }
    ]
  }

  const visibleImages = getVisibleImages()

  // Function to be called when drag is completed
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isDesktop) return // Disable drag functionality on desktop

    const { offset } = info

    // Drag to right (previous image)
    if (offset.x > dragThreshold) {
      prevSlide()
    }
    // Drag to left (next image)
    else if (offset.x < -dragThreshold) {
      nextSlide()
    }
  }

  return (
    <div className="relative w-full overflow-hidden py-12">
      <motion.div
        ref={containerRef}
        className="flex items-center justify-center w-full h-[450px] md:h-[600px] px-4"
        drag={!isDesktop ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {visibleImages.map((item) => {
          const isCenter = item.position === 0

          return (
            <motion.div
              key={item.src}
              className={`absolute cursor-pointer transition-all duration-500 ${isCenter
                ? "z-20 scale-100 brightness-100 shadow-2xl shadow-primary/50 border-2 border-primary/20"
                : "z-10 scale-50 brightness-20"
                }`}
              style={{
                x: `calc(${item.position * 100}% + ${item.position * 60}px)`,
              }}
              whileHover={!isDesktop && !isCenter ? { scale: 0.85 } : {}}
              onClick={() => !isCenter && goToSlide(item.index)}
              transition={{ duration: 0.5 }}
            >
              <div
                className="relative w-[320px] md:w-[500px] h-[320px] md:h-[500px] rounded-lg overflow-hidden"
                onClick={() => {
                  if (isCenter) {
                    setSelectedImage(item.src)
                  } else {
                    goToSlide(item.index)
                  }
                }}
              >
                <Image
                  src={item.src}
                  alt={t("imageAlt", { index: item.index + 1 })}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 400px"
                  priority={isCenter}
                  loading={isCenter ? "eager" : "lazy"}
                />
                {isCenter && (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 text-white px-3 py-2 rounded-full text-sm">
                      {t("clickToZoom")}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        aria-label={t("prevImage")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        aria-label={t("nextImage")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-gray-400"
              }`}
            aria-label={t("goToImage", { index: index + 1 })}
          />
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] rounded-lg overflow-hidden touch-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] md:h-[80vh]">
                <Image
                  src={selectedImage}
                  alt={t("zoomedImage")}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label={t("closeZoom")}
              >
                <X className="w-7 h-7 md:w-6 md:h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

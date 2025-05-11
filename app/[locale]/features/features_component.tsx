"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Users, CreditCard, BarChart3, FileText, Languages, CreditCard as PaymentIcon, FileCheck, BarChart, MessageSquare, BellRing, Percent, MoreHorizontal } from "lucide-react"
import { useTranslations } from "next-intl"

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
  reverse?: boolean
  animate?: boolean
  isHovered?: boolean
  onHover?: (isHovered: boolean) => void
  index: number
}

const FeatureItem = ({ 
  title, 
  description, 
  icon, 
  reverse = false, 
  animate = false,
  isHovered = false,
  onHover,
  index
}: FeatureProps) => {
  return (
    <div 
      className={clsx(
        "flex flex-col items-center gap-6 p-6 rounded-xl border relative bg-black/20",
        "transition-all duration-500 cursor-pointer group",
        {
          "opacity-0 animate-fadeInLeft": animate && (index % 2 === 0),
          "opacity-0 animate-fadeInRight": animate && (index % 2 !== 0),
          "border-primary shadow-xl -translate-y-2 scale-105 z-10": isHovered,
          "border-border/30": !isHovered,
          "opacity-40": !isHovered && onHover !== undefined // Fade out non-hovered items
        }
      )}
      onMouseEnter={() => onHover && onHover(true)}
      onMouseLeave={() => onHover && onHover(false)}
      data-wow-delay="0.2s"
    >
      <div className="flex justify-center items-center h-16 w-16 text-primary transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <div className="w-full text-center">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-500 group-hover:text-primary">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default function Features() {
  const t = useTranslations('Features.items');
  const pathname = usePathname()
  // Check if we're on the features page regardless of language
  const isFeaturePage = true // We're already in the features directory component
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  useEffect(() => {
    // Sadece features sayfasında animasyonları uygula
    if (!isFeaturePage) return
    
    // Animasyon için görünürlük kontrolü
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animasyon sınıfı zaten CSS'de tanımlı, sadece opacity'yi kaldır
          entry.target.classList.remove('opacity-0')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    // Tüm özellik öğelerini gözlemle
    document.querySelectorAll('.opacity-0').forEach(item => {
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [isFeaturePage])

  const features = [
    {
      key: "customerManagement",
      icon: <Users className="h-12 w-12 stroke-primary" />
    },
    {
      key: "advancedCredit",
      icon: <CreditCard className="h-12 w-12 stroke-primary" />,
      reverse: true
    },
    {
      key: "evcControl",
      icon: <BarChart3 className="h-12 w-12 stroke-primary" />
    },
    {
      key: "fileTracking",
      icon: <FileText className="h-12 w-12 stroke-primary" />,
      reverse: true
    },
    {
      key: "languageOptions",
      icon: <Languages className="h-12 w-12 stroke-primary" />
    },
    {
      key: "paymentMethods",
      icon: <PaymentIcon className="h-12 w-12 stroke-primary" />,
      reverse: true
    },
    {
      key: "advancedInvoice",
      icon: <BarChart className="h-12 w-12 stroke-primary" />,
      reverse: true
    },
    {
      key: "vehicleDatabase",
      icon: <BarChart3 className="h-12 w-12 stroke-primary" />
    },
    {
      key: "supportSystem",
      icon: <MessageSquare className="h-12 w-12 stroke-primary" />,
      reverse: true
    },
    {
      key: "notifications",
      icon: <BellRing className="h-12 w-12 stroke-primary" />
    },
    {
      key: "discountSystem",
      icon: <Percent className="h-12 w-12 stroke-primary" />,
      reverse: true
    },
    {
      key: "andMore",
      icon: <MoreHorizontal className="h-12 w-12 stroke-primary" />,
      reverse: true
    }
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-out-siblings">
        {features.map((feature, index) => (
          <FeatureItem 
            key={index}
            index={index}
            title={t(`${feature.key}.title`)}
            description={t(`${feature.key}.description`)}
            icon={feature.icon}
            reverse={index % 2 === 0 ? false : true}
            animate={isFeaturePage}
            isHovered={hoveredIndex === index}
            onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
          />
        ))}
      </div>
    </div>
  )
}
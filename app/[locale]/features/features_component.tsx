"use client"

import { Users, FileText, Code, Clock, CreditCard, Globe, Bell, Percent, ShieldCheck, BarChart3, Truck, Database } from "lucide-react"
import { useTranslations } from "next-intl"

export default function FeaturesComponent() {
  const t = useTranslations('FeaturesPage');

  const features = [
    { icon: Users, title: t('customerManagement.title'), description: t('customerManagement.description') },
    { icon: FileText, title: t('advancedCredit.title'), description: t('advancedCredit.description') },
    { icon: Code, title: t('fileTracking.title'), description: t('fileTracking.description') },
    { icon: Clock, title: t('advancedInvoice.title'), description: t('advancedInvoice.description') },
    { icon: CreditCard, title: t('paymentMethods.title'), description: t('paymentMethods.description') },
    { icon: Globe, title: t('languageOptions.title'), description: t('languageOptions.description') },
    { icon: Bell, title: t('notifications.title'), description: t('notifications.description') },
    { icon: Percent, title: t('discountSystem.title'), description: t('discountSystem.description') },
    { icon: ShieldCheck, title: t('supportSystem.title'), description: t('supportSystem.description') },
    { icon: BarChart3, title: t('evcControl.title'), description: t('evcControl.description') },
    { icon: Truck, title: t('automaticDelivery.title'), description: t('automaticDelivery.description') },
    { icon: Database, title: t('vehicleDatabase.title'), description: t('vehicleDatabase.description') },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
          <div className="flex items-start mb-4">
            <div className="bg-primary/20 p-3 rounded-lg mr-4">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
            </div>
          </div>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
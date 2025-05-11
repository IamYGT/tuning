"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const t = useTranslations("Contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    toast({
      title: t("form.successTitle"),
      description: t("form.successMessage"),
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {t("titleLabel")} {t("titleMain")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {t("subtitle")}
          </h1>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-muted/5">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Card - Phone */}
            <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image 
                  src="/assets/images/call.png.avif" 
                  alt="Phone" 
                  width={28} 
                  height={28} 
                  className="text-primary" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contactInfo.phoneTitle")}</h3>
              <p className="text-muted-foreground mb-4">{t("contactInfo.phoneDesc")}</p>
              <Link href="tel:+905466367027" className="text-primary hover:underline">
                +90 546 636 7027
              </Link>
            </div>

            {/* Contact Card - Email */}
            <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contactInfo.emailTitle")}</h3>
              <p className="text-muted-foreground mb-4">{t("contactInfo.emailDesc")}</p>
              <Link href="mailto:info@ecutuningportal.com" className="text-primary hover:underline">
                info@ecutuningportal.com
              </Link>
            </div>

            {/* Contact Card - Address */}
            <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contactInfo.addressTitle")}</h3>
              <p className="text-muted-foreground mb-4">{t("contactInfo.addressDesc")}</p>
              <p className="text-sm">
                İncilipınar Mahallesi, Şehit Mehmet Öter Cad. Kepkepzade, Park İş Merkezi, B No: 7, 27500 Şehitkamil/Gaziantep, Türkiye
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-card rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">{t("form.title")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t("form.nameLabel")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("form.namePlaceholder")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t("form.emailLabel")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("form.emailPlaceholder")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t("form.subjectLabel")}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("form.subjectPlaceholder")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("form.messageLabel")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("form.messagePlaceholder")}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t("form.submitButton")}
                </Button>
              </form>
            </div>

            {/* Google Map */}
            <div className="bg-card rounded-lg shadow-md p-2 h-full min-h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395361!2d37.383222!3d37.059444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e6b4f7f18c0d%3A0x68c8afb253911a78!2sPark%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1652345678901!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-muted/30 to-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                {t("cta.description")}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/trial">
                    {t("cta.primaryButton")}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/pricing">
                    {t("cta.secondaryButton")}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-t from-muted/30 to-background">
              <Image
                src="/assets/images/call.png.avif"
                alt="ECU Tuning Portal"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

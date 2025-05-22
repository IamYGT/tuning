"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const t = useTranslations("Contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+90",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCountryCodeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, countryCode: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      // Send the form data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (data.success) {
        // Show success message that disappears after 5 seconds
        toast({
          title: t("form.successTitle"),
          description: t("form.successMessage"),
          duration: 2000 // 2 seconds
        })
        
        // Reset the form
        setFormData({ name: "", email: "", countryCode: "+90", phone: "", message: "" })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Show error message that disappears after 5 seconds
      toast({
        title: t("form.errorTitle") || "Error",
        description: t("form.errorMessage") || "There was a problem sending your message. Please try again later.",
        variant: "destructive",
        duration: 3000 // 3 seconds
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            {t("form.phoneLabel")}
          </label>
          <div className="flex">
            <div className="w-[200px] mr-2">
              <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="+90" />
                </SelectTrigger>
                <SelectContent>
                  {/* Common country codes first for better performance */}
                  <SelectItem value="+90">Türkiye +90</SelectItem>
                  <SelectItem value="+1">USA/Canada +1</SelectItem>
                  <SelectItem value="+44">United Kingdom +44</SelectItem>
                  <SelectItem value="+49">Deutschland +49</SelectItem>
                  <SelectItem value="+33">France +33</SelectItem>
                  <SelectItem value="+31">Nederland +31</SelectItem>
                  <SelectItem value="+34">España +34</SelectItem>
                  <SelectItem value="+39">Italy +39</SelectItem>
                  <SelectItem value="+7">Russia +7</SelectItem>
                  <SelectItem value="+86">China +86</SelectItem>
                  <SelectItem value="+91">India +91</SelectItem>
                  {/* Additional country codes */}
                  <SelectItem value="+20">Egypt +20</SelectItem>
                  <SelectItem value="+27">South Africa +27</SelectItem>
                  <SelectItem value="+30">Greece +30</SelectItem>
                  <SelectItem value="+32">Belgium +32</SelectItem>
                  <SelectItem value="+36">Hungary +36</SelectItem>
                  <SelectItem value="+40">Romania +40</SelectItem>
                  <SelectItem value="+41">Switzerland +41</SelectItem>
                  <SelectItem value="+43">Austria +43</SelectItem>
                  <SelectItem value="+45">Denmark +45</SelectItem>
                  <SelectItem value="+46">Sweden +46</SelectItem>
                  <SelectItem value="+47">Norway +47</SelectItem>
                  <SelectItem value="+48">Poland +48</SelectItem>
                  <SelectItem value="+51">Peru +51</SelectItem>
                  <SelectItem value="+52">Mexico +52</SelectItem>
                  <SelectItem value="+54">Argentina +54</SelectItem>
                  <SelectItem value="+55">Brazil +55</SelectItem>
                  <SelectItem value="+56">Chile +56</SelectItem>
                  <SelectItem value="+57">Colombia +57</SelectItem>
                  <SelectItem value="+60">Malaysia +60</SelectItem>
                  <SelectItem value="+61">Australia +61</SelectItem>
                  <SelectItem value="+62">Indonesia +62</SelectItem>
                  <SelectItem value="+63">Philippines +63</SelectItem>
                  <SelectItem value="+64">New Zealand +64</SelectItem>
                  <SelectItem value="+65">Singapore +65</SelectItem>
                  <SelectItem value="+66">Thailand +66</SelectItem>
                  <SelectItem value="+81">Japan +81</SelectItem>
                  <SelectItem value="+82">South Korea +82</SelectItem>
                  <SelectItem value="+84">Vietnam +84</SelectItem>
                  <SelectItem value="+92">Pakistan +92</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("form.phonePlaceholder")}
              required
              className="flex-1"
            />
          </div>
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
  )
}

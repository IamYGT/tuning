"use client"

import { useState, useEffect, useActionState } from "react" // useActionState eklendi
import { useFormStatus } from "react-dom" // useFormState kaldırıldı, useFormStatus ayrı kaldı
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// Select bileşenleri artık kullanılmayacaksa kaldırılabilir, ancak diğer form elemanları için kalabilir.
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


interface FormState {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  resetKey?: string
}

async function submitForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Server Action içinde useTranslations doğrudan kullanılamaz.
  // Dil çevirilerini ya API'ye parametre olarak geçmeli ya da API tarafında halletmelisiniz.

  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string, // countryCode artık phone içinde olacak
    message: formData.get("message") as string,
  }

  // Sunucu tarafında telefon numarası doğrulaması eklenebilir
  if (rawFormData.phone && !isValidPhoneNumber(rawFormData.phone)) {
    return { success: false, message: "Invalid phone number.", errors: { phone: ["Please enter a valid phone number."] } }
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawFormData),
    })

    const data = await response.json()

    if (data.success) {
      return { success: true, message: data.message || "Form submitted successfully!", resetKey: Date.now().toString() }
    } else {
      return { success: false, message: data.error || "Failed to send message.", errors: data.errors }
    }
  } catch {
    return { success: false, message: "An unexpected error occurred." }
  }
}

function SubmitButton() {
  const { pending } = useFormStatus()
  const t = useTranslations("Contact")
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? t("form.submittingButton") : t("form.submitButton")}
    </Button>
  )
}

export default function ContactForm() {
  const t = useTranslations("Contact")
  const initialState: FormState = { success: false, message: "", resetKey: Date.now().toString() }
  const [state, formAction] = useActionState(submitForm, initialState) // useFormState -> useActionState olarak değiştirildi

  const [internalFormData, setInternalFormData] = useState<{
    name: string
    email: string
    phone: string | undefined // react-phone-number-input string | undefined döner
    message: string
  }>({
    name: "",
    email: "",
    phone: undefined, // Başlangıç değeri undefined olabilir
    message: "",
  })

  useEffect(() => {
    if (state.success) {
      toast({
        title: t("form.successTitle"),
        description: state.message || t("form.successMessage"),
        duration: 2000,
      })
      // Reset form fields
      setInternalFormData({ name: "", email: "", phone: undefined, message: "" })
    } else if (state.message && !state.success && state.resetKey !== initialState.resetKey) { // Show error only if it's a new error
      toast({
        title: t("form.errorTitle"),
        description: state.message || t("form.errorMessage"),
        variant: "destructive",
        duration: 3000,
      })
    }
  }, [state, t, initialState.resetKey])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setInternalFormData((prev) => ({ ...prev, [name]: value }))
  }

  // react-phone-number-input için özel bir handler
  const handlePhoneChange = (value: string | undefined) => {
    setInternalFormData((prev) => ({ ...prev, phone: value }))
  }

  return (
    <div className="bg-card rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">{t("form.title")}</h2>
      <form action={formAction} className="space-y-6" key={state.resetKey}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t("form.nameLabel")}
          </label>
          <Input
            id="name"
            name="name"
            value={internalFormData.name}
            onChange={handleChange}
            placeholder={t("form.namePlaceholder")}
            required
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
          {state.errors?.name && (
            <p id="name-error" className="text-sm text-red-500 mt-1">
              {state.errors.name.join(", ")}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {t("form.emailLabel")}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={internalFormData.email}
            onChange={handleChange}
            placeholder={t("form.emailPlaceholder")}
            required
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
          {state.errors?.email && (
            <p id="email-error" className="text-sm text-red-500 mt-1">
              {state.errors.email.join(", ")}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            {t("form.phoneLabel")}
          </label>
          {/*
            react-phone-number-input kendi içinde bir input render eder.
            Shadcn/ui Input bileşeniyle sarmalamak veya stil vermek için
            inputComponent prop'unu kullanabilir veya CSS ile doğrudan stilleyebilirsiniz.
            Basitlik adına, şimdilik varsayılan stili kullanıyoruz.
            name="phone" prop'u FormData'ya eklenmesi için önemlidir.
          */}
          <PhoneInput
            name="phone" // Bu prop FormData için gerekli
            id="phone"
            placeholder={t("form.phonePlaceholder")}
            value={internalFormData.phone}
            onChange={handlePhoneChange}
            defaultCountry="US" // Varsayılan ülke kodu ABD olarak değiştirildi
            inputComponent={Input} // Shadcn/UI Input bileşenini kullan
            // className prop'u kaldırıldı veya sadece sarmalayıcı için gerekli stiller bırakılabilir.
            // Örneğin, bayrak ve input arasındaki boşluk gibi durumlar için gerekirse ek bir sarmalayıcı ve stil eklenebilir.
            // Şimdilik temel entegrasyonu yapıyoruz.
            // className="phone-input-container" // Gerekirse dış sarmalayıcı için özel bir sınıf
            required
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}

          />
          {state.errors?.phone && (
            <p id="phone-error" className="text-sm text-red-500 mt-1">
              {state.errors.phone.join(", ")}
            </p>
          )}
          {/* countryCode için ayrı bir hata mesajı alanı artık gerekmeyebilir, phone hatası bunu kapsayabilir */}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t("form.messageLabel")}
          </label>
          <Textarea
            id="message"
            name="message"
            value={internalFormData.message}
            onChange={handleChange}
            placeholder={t("form.messagePlaceholder")}
            rows={5}
            required
            aria-describedby={state.errors?.message ? "message-error" : undefined}
          />
          {state.errors?.message && (
            <p id="message-error" className="text-sm text-red-500 mt-1">
              {state.errors.message.join(", ")}
            </p>
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}

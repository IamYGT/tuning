"use client";

import { useState, useEffect, useActionState } from "react"; // useActionState eklendi, useForm kaldırılacak
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
// react-hook-form FormField vb. importları kaldırıldı.
// Shadcn UI Form, FormItem, FormControl, FormMessage gibi context'e bağlı bileşenler yerine temel bileşenler kullanılacak.
import { Label } from "@/components/ui/label"; // Shadcn Label import edildi
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"; // isValidPhoneNumber eklendi
import "react-phone-number-input/style.css";

// Form state arayüzü
interface TrialFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>; // Zod hataları için
  resetKey?: string;
}

// Zod şeması (Server Action içinde kullanılacak)
const trialFormSchema = z.object({
  name: z.string().min(2, "Adınız en az 2 karakter olmalıdır."), // Mesajları i18n ile yönetmek daha iyi olur, şimdilik sabit.
  email: z.string().email("Lütfen geçerli bir e-posta adresi girin."),
  phone: z.string().optional().refine(val => !val || isValidPhoneNumber(val || ""), { // val undefined olabilir, bu yüzden val || ""
    message: "Lütfen geçerli bir telefon numarası girin.",
  }),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır."),
});

// Server Action
async function submitTrialForm(
  prevState: TrialFormState,
  formData: FormData
): Promise<TrialFormState> {
  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string || undefined,
    message: formData.get("message") as string,
  };

  const validationResult = trialFormSchema.safeParse(rawFormData);

  if (!validationResult.success) {
    const fieldErrors: Record<string, string[] | undefined> = {};
    validationResult.error.issues.forEach(issue => {
      const path = issue.path.join(".");
      if (!fieldErrors[path]) {
        fieldErrors[path] = [];
      }
      fieldErrors[path]?.push(issue.message);
    });
    return {
      success: false,
      message: "Doğrulama başarısız. Lütfen formu kontrol edin.", // i18n
      errors: fieldErrors,
      resetKey: prevState.resetKey
    };
  }

  // Doğrulama başarılı, API çağrısını yap (simülasyon)
  try {
    // Sunucuya gönderilen deneme formu verileri (simülasyon)
    // Örnek API çağrısı:
    // const response = await fetch('/api/submit-trial', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(validationResult.data),
    // });
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   return { success: false, message: errorData.message || "API hatası oluştu.", resetKey: prevState.resetKey };
    // }
    // const resultData = await response.json();

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simüle edilmiş ağ gecikmesi

    return {
      success: true,
      message: "Deneme talebiniz başarıyla gönderildi!", // i18n, veya API'den gelen mesaj: resultData.message
      resetKey: Date.now().toString(), // Formu sıfırlamak için yeni anahtar
    };
  } catch {
    // Deneme formu gönderilirken hata oluştu
    return {
      success: false,
      message: "Form gönderilirken beklenmedik bir hata oluştu.", // i18n
      resetKey: prevState.resetKey
    };
  }
}

export default function TrialPage() {
  const t = useTranslations("Trial");
  const initialState: TrialFormState = { success: false, message: "", errors: {}, resetKey: Date.now().toString() };
  const [state, formAction] = useActionState(submitTrialForm, initialState);

  const [internalFormData, setInternalFormData] = useState({
    name: "",
    email: "",
    phone: undefined as string | undefined,
    message: "",
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: t("form.successTitle"),
        description: state.message || t("form.successMessage"), // state.message öncelikli
        duration: 2000,
      });
      setInternalFormData({ name: "", email: "", phone: undefined, message: "" }); // Formu sıfırla
    } else if (state.message && !state.success && state.resetKey !== initialState.resetKey) {
      toast({
        title: t("form.errorTitle"),
        description: state.message || t("form.errorMessage"), // state.message öncelikli
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [state, t, initialState.resetKey]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInternalFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setInternalFormData((prev) => ({ ...prev, phone: value }));
  };

  function SubmitButtonContent() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
            {t("form.submittingButton")}
          </>
        ) : (
          t("form.submitButton")
        )}
      </>
    );
  }

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Dark background with layered red glowing radial effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 to-transparent opacity-70" />
        <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-700/10 to-transparent opacity-50" />
        <div className="absolute right-1/3 bottom-1/3 w-1/3 h-1/3 bg-gradient-radial from-red-600/10 to-transparent opacity-40" />
      </div>

      {/* Light grid texture overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5 z-5" />

      {/* Content gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-20" />

      <div className="container relative z-30 mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Bilgi Bölümü */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                <span className="block">{t("title.days") || "7 Days"}</span>
                <span className="block text-[#f05545]">{t("title.tryFree") || "Try It Free"}</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                {t("subtitle")}
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">{t("description")}</p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#f05545] p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    {t("features.fileManagement.title")}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t("features.fileManagement.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#f05545] p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    {t("features.customerTools.title")}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t("features.customerTools.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#f05545] p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    {t("features.secureData.title")}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t("features.secureData.description")}
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#f05545] hover:bg-[#d03535] text-white rounded-md px-6 py-3"
            >
              {t("startNowButton")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Sağ Taraf - Form Bölümü */}
          <div className="rounded-lg p-8 shadow-xl bg-zinc-800/90 backdrop-blur-sm border border-zinc-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              {t("form.title")}
            </h2>
            <form action={formAction} className="space-y-8" key={state.resetKey}>
              <div>
                <Label htmlFor="name" className="text-white">
                  {t("form.namePlaceholder")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t("form.namePlaceholder")}
                  value={internalFormData.name}
                  onChange={handleInputChange}
                  className="mt-1 bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                  aria-describedby="name-error"
                />
                {state.errors?.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400">{state.errors.name.join(", ")}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  {t("form.emailPlaceholder")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder={t("form.emailPlaceholder")}
                  type="email"
                  value={internalFormData.email}
                  onChange={handleInputChange}
                  className="mt-1 bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                  aria-describedby="email-error"
                />
                {state.errors?.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400">{state.errors.email.join(", ")}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">
                  {t("form.phonePlaceholder")}
                </Label>
                <PhoneInput
                  id="phone"
                  name="phone"
                  placeholder={t("form.phonePlaceholder")}
                  value={internalFormData.phone}
                  onChange={handlePhoneChange}
                  defaultCountry="US"
                  inputComponent={Input}
                  // PhoneInput sarmalayıcısı için stiller:
                  // Diğer Input'lar `h-10` (Shadcn varsayılanı) yüksekliğindedir.
                  // `flex items-center` bayrağın ve input'un dikeyde ortalanmasına yardımcı olur.
                  // `rounded-md border border-zinc-600 bg-zinc-700` diğer inputlarla aynı temel görünümü sağlar.
                  // `focus-within:` stilleri, sarmalayıcının da odaklandığında tepki vermesini sağlar.
                  // `inputComponent` olarak verilen `Input` kendi `bg-zinc-700`, `text-white`, `placeholder:text-gray-400` stillerini zaten getirecektir.
                  // Bu nedenle bu stilleri PhoneInput'un dış className'inde tekrarlamaya gerek yok, sadece kenarlık ve genel yapı için.
                  // Dış sarmalayıcının arka planını transparent ve kenarlığını da border-input yapalım (önceki başarılı durum).
                  // inputComponent olan Input, kendi bg-zinc-700 arka planını koruyacaktır.
                  className="flex h-10 items-center rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                  aria-describedby="phone-error"
                />
                {state.errors?.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-400">{state.errors.phone.join(", ")}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  {t("form.messagePlaceholder")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("form.messagePlaceholder")}
                  className="mt-1 resize-none bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                  value={internalFormData.message}
                  onChange={handleInputChange}
                  aria-describedby="message-error"
                />
                {state.errors?.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">{state.errors.message.join(", ")}</p>
                )}
              </div>

              <Button
                type="submit"
                className="bg-[#f05545] hover:bg-[#d03535] text-white rounded-md px-6 py-3 w-full"
              >
                <SubmitButtonContent />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


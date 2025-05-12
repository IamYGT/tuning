"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Check, Mail, User, Phone } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TrialPage() {
  const t = useTranslations("Trial")
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+90",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCountryCodeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, countryCode: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      // Burada gerçek bir API çağrısı yapılabilir
      // Şimdilik sadece başarılı bir yanıt simüle ediyoruz
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Başarılı mesajı göster
      toast({
        title: t("form.successTitle"),
        description: t("form.successMessage"),
        duration: 2000 // 2 saniye
      })
      
      // Formu sıfırla
      setFormData({ name: "", email: "", countryCode: "+90", phone: "", message: "" })
    } catch (error) {
      console.error('Error sending form:', error)
      
      // Hata mesajı göster
      toast({
        title: t("form.errorTitle") || "Hata",
        description: t("form.errorMessage") || "Form gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
        duration: 3000 // 3 saniye
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Dark background with layered red glowing radial effects */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 to-transparent opacity-70" />
        <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-700/10 to-transparent opacity-50" />
        <div className="absolute right-1/3 bottom-1/3 w-1/3 h-1/3 bg-gradient-radial from-red-600/10 to-transparent opacity-40" />
      </div>

      {/* Light grid texture overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5 z-5" />

      {/* Content gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-20" />
      
      <div className="container relative z-30 mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Bilgi Bölümü */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl font-bold text-white">
                <span className="block">7 Days</span>
                <span className="block text-[#f05545]">Try It Free</span>
              </h1>
              <h2 className="text-2xl font-semibold">
                {t("subtitle")}
              </h2>
            </div>
            
            <p className="text-gray-300">
              {t("description")}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#f05545] p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
                <div>
                  <h3 className="font-medium">{t("features.fileManagement.title")}</h3>
                  <p className="text-sm text-gray-400">{t("features.fileManagement.description")}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-[#f05545] p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
                <div>
                  <h3 className="font-medium">{t("features.customerTools.title")}</h3>
                  <p className="text-sm text-gray-400">{t("features.customerTools.description")}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-[#f05545] p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
                <div>
                  <h3 className="font-medium">{t("features.secureData.title")}</h3>
                  <p className="text-sm text-gray-400">{t("features.secureData.description")}</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#f05545] hover:bg-[#d03535] text-white rounded-md px-6 py-3"
            >
              {t("startNowButton")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Sağ Taraf - Form Bölümü */}
          <div className="bg-[#2d3748] rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">{t("form.title")}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex items-center border border-gray-600 rounded-md bg-[#1e2533] p-2 mb-4">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("form.namePlaceholder")}
                    required
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="flex items-center border border-gray-600 rounded-md bg-[#1e2533] p-2 mb-4">
                  <div className="flex w-full">
                    <div className="w-[120px] mr-2">
                      <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
                        <SelectTrigger className="border-0 bg-transparent focus:ring-0 text-white">
                          <SelectValue placeholder="+90" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px] overflow-y-auto">
                          <SelectItem value="+90">Türkiye +90</SelectItem>
                          <SelectItem value="+1">USA/Canada +1</SelectItem>
                          <SelectItem value="+44">UK +44</SelectItem>
                          <SelectItem value="+49">Deutschland +49</SelectItem>
                          <SelectItem value="+31">Nederland +31</SelectItem>
                          <SelectItem value="+34">España +34</SelectItem>
                          <SelectItem value="+93">Afghanistan +93</SelectItem>
                          <SelectItem value="+355">Albania +355</SelectItem>
                          <SelectItem value="+213">Algeria +213</SelectItem>
                          <SelectItem value="+376">Andorra +376</SelectItem>
                          <SelectItem value="+244">Angola +244</SelectItem>
                          <SelectItem value="+54">Argentina +54</SelectItem>
                          <SelectItem value="+374">Armenia +374</SelectItem>
                          <SelectItem value="+61">Australia +61</SelectItem>
                          <SelectItem value="+43">Austria +43</SelectItem>
                          <SelectItem value="+994">Azerbaijan +994</SelectItem>
                          <SelectItem value="+973">Bahrain +973</SelectItem>
                          <SelectItem value="+880">Bangladesh +880</SelectItem>
                          <SelectItem value="+375">Belarus +375</SelectItem>
                          <SelectItem value="+32">Belgium +32</SelectItem>
                          <SelectItem value="+501">Belize +501</SelectItem>
                          <SelectItem value="+229">Benin +229</SelectItem>
                          <SelectItem value="+975">Bhutan +975</SelectItem>
                          <SelectItem value="+591">Bolivia +591</SelectItem>
                          <SelectItem value="+387">Bosnia and Herzegovina +387</SelectItem>
                          <SelectItem value="+267">Botswana +267</SelectItem>
                          <SelectItem value="+55">Brazil +55</SelectItem>
                          <SelectItem value="+359">Bulgaria +359</SelectItem>
                          <SelectItem value="+226">Burkina Faso +226</SelectItem>
                          <SelectItem value="+257">Burundi +257</SelectItem>
                          <SelectItem value="+855">Cambodia +855</SelectItem>
                          <SelectItem value="+237">Cameroon +237</SelectItem>
                          <SelectItem value="+238">Cape Verde +238</SelectItem>
                          <SelectItem value="+236">Central African Republic +236</SelectItem>
                          <SelectItem value="+235">Chad +235</SelectItem>
                          <SelectItem value="+56">Chile +56</SelectItem>
                          <SelectItem value="+86">China +86</SelectItem>
                          <SelectItem value="+57">Colombia +57</SelectItem>
                          <SelectItem value="+269">Comoros +269</SelectItem>
                          <SelectItem value="+242">Congo +242</SelectItem>
                          <SelectItem value="+506">Costa Rica +506</SelectItem>
                          <SelectItem value="+385">Croatia +385</SelectItem>
                          <SelectItem value="+53">Cuba +53</SelectItem>
                          <SelectItem value="+357">Cyprus +357</SelectItem>
                          <SelectItem value="+420">Czech Republic +420</SelectItem>
                          <SelectItem value="+45">Denmark +45</SelectItem>
                          <SelectItem value="+253">Djibouti +253</SelectItem>
                          <SelectItem value="+593">Ecuador +593</SelectItem>
                          <SelectItem value="+20">Egypt +20</SelectItem>
                          <SelectItem value="+503">El Salvador +503</SelectItem>
                          <SelectItem value="+240">Equatorial Guinea +240</SelectItem>
                          <SelectItem value="+291">Eritrea +291</SelectItem>
                          <SelectItem value="+372">Estonia +372</SelectItem>
                          <SelectItem value="+251">Ethiopia +251</SelectItem>
                          <SelectItem value="+679">Fiji +679</SelectItem>
                          <SelectItem value="+358">Finland +358</SelectItem>
                          <SelectItem value="+33">France +33</SelectItem>
                          <SelectItem value="+241">Gabon +241</SelectItem>
                          <SelectItem value="+220">Gambia +220</SelectItem>
                          <SelectItem value="+995">Georgia +995</SelectItem>
                          <SelectItem value="+233">Ghana +233</SelectItem>
                          <SelectItem value="+30">Greece +30</SelectItem>
                          <SelectItem value="+299">Greenland +299</SelectItem>
                          <SelectItem value="+502">Guatemala +502</SelectItem>
                          <SelectItem value="+224">Guinea +224</SelectItem>
                          <SelectItem value="+245">Guinea-Bissau +245</SelectItem>
                          <SelectItem value="+592">Guyana +592</SelectItem>
                          <SelectItem value="+509">Haiti +509</SelectItem>
                          <SelectItem value="+504">Honduras +504</SelectItem>
                          <SelectItem value="+852">Hong Kong +852</SelectItem>
                          <SelectItem value="+36">Hungary +36</SelectItem>
                          <SelectItem value="+354">Iceland +354</SelectItem>
                          <SelectItem value="+91">India +91</SelectItem>
                          <SelectItem value="+62">Indonesia +62</SelectItem>
                          <SelectItem value="+98">Iran +98</SelectItem>
                          <SelectItem value="+964">Iraq +964</SelectItem>
                          <SelectItem value="+353">Ireland +353</SelectItem>
                          <SelectItem value="+972">Israel +972</SelectItem>
                          <SelectItem value="+39">Italy +39</SelectItem>
                          <SelectItem value="+225">Ivory Coast +225</SelectItem>
                          <SelectItem value="+81">Japan +81</SelectItem>
                          <SelectItem value="+962">Jordan +962</SelectItem>
                          <SelectItem value="+7">Kazakhstan +7</SelectItem>
                          <SelectItem value="+254">Kenya +254</SelectItem>
                          <SelectItem value="+965">Kuwait +965</SelectItem>
                          <SelectItem value="+996">Kyrgyzstan +996</SelectItem>
                          <SelectItem value="+856">Laos +856</SelectItem>
                          <SelectItem value="+371">Latvia +371</SelectItem>
                          <SelectItem value="+961">Lebanon +961</SelectItem>
                          <SelectItem value="+266">Lesotho +266</SelectItem>
                          <SelectItem value="+231">Liberia +231</SelectItem>
                          <SelectItem value="+218">Libya +218</SelectItem>
                          <SelectItem value="+423">Liechtenstein +423</SelectItem>
                          <SelectItem value="+370">Lithuania +370</SelectItem>
                          <SelectItem value="+352">Luxembourg +352</SelectItem>
                          <SelectItem value="+853">Macau +853</SelectItem>
                          <SelectItem value="+389">Macedonia +389</SelectItem>
                          <SelectItem value="+261">Madagascar +261</SelectItem>
                          <SelectItem value="+265">Malawi +265</SelectItem>
                          <SelectItem value="+60">Malaysia +60</SelectItem>
                          <SelectItem value="+960">Maldives +960</SelectItem>
                          <SelectItem value="+223">Mali +223</SelectItem>
                          <SelectItem value="+356">Malta +356</SelectItem>
                          <SelectItem value="+222">Mauritania +222</SelectItem>
                          <SelectItem value="+230">Mauritius +230</SelectItem>
                          <SelectItem value="+52">Mexico +52</SelectItem>
                          <SelectItem value="+373">Moldova +373</SelectItem>
                          <SelectItem value="+377">Monaco +377</SelectItem>
                          <SelectItem value="+976">Mongolia +976</SelectItem>
                          <SelectItem value="+382">Montenegro +382</SelectItem>
                          <SelectItem value="+212">Morocco +212</SelectItem>
                          <SelectItem value="+258">Mozambique +258</SelectItem>
                          <SelectItem value="+95">Myanmar +95</SelectItem>
                          <SelectItem value="+264">Namibia +264</SelectItem>
                          <SelectItem value="+977">Nepal +977</SelectItem>
                          <SelectItem value="+64">New Zealand +64</SelectItem>
                          <SelectItem value="+505">Nicaragua +505</SelectItem>
                          <SelectItem value="+227">Niger +227</SelectItem>
                          <SelectItem value="+234">Nigeria +234</SelectItem>
                          <SelectItem value="+850">North Korea +850</SelectItem>
                          <SelectItem value="+47">Norway +47</SelectItem>
                          <SelectItem value="+968">Oman +968</SelectItem>
                          <SelectItem value="+92">Pakistan +92</SelectItem>
                          <SelectItem value="+970">Palestine +970</SelectItem>
                          <SelectItem value="+507">Panama +507</SelectItem>
                          <SelectItem value="+675">Papua New Guinea +675</SelectItem>
                          <SelectItem value="+595">Paraguay +595</SelectItem>
                          <SelectItem value="+51">Peru +51</SelectItem>
                          <SelectItem value="+63">Philippines +63</SelectItem>
                          <SelectItem value="+48">Poland +48</SelectItem>
                          <SelectItem value="+351">Portugal +351</SelectItem>
                          <SelectItem value="+974">Qatar +974</SelectItem>
                          <SelectItem value="+40">Romania +40</SelectItem>
                          <SelectItem value="+7">Russia +7</SelectItem>
                          <SelectItem value="+250">Rwanda +250</SelectItem>
                          <SelectItem value="+966">Saudi Arabia +966</SelectItem>
                          <SelectItem value="+221">Senegal +221</SelectItem>
                          <SelectItem value="+381">Serbia +381</SelectItem>
                          <SelectItem value="+232">Sierra Leone +232</SelectItem>
                          <SelectItem value="+65">Singapore +65</SelectItem>
                          <SelectItem value="+421">Slovakia +421</SelectItem>
                          <SelectItem value="+386">Slovenia +386</SelectItem>
                          <SelectItem value="+252">Somalia +252</SelectItem>
                          <SelectItem value="+27">South Africa +27</SelectItem>
                          <SelectItem value="+82">South Korea +82</SelectItem>
                          <SelectItem value="+211">South Sudan +211</SelectItem>
                          <SelectItem value="+94">Sri Lanka +94</SelectItem>
                          <SelectItem value="+249">Sudan +249</SelectItem>
                          <SelectItem value="+597">Suriname +597</SelectItem>
                          <SelectItem value="+268">Swaziland +268</SelectItem>
                          <SelectItem value="+46">Sweden +46</SelectItem>
                          <SelectItem value="+41">Switzerland +41</SelectItem>
                          <SelectItem value="+963">Syria +963</SelectItem>
                          <SelectItem value="+886">Taiwan +886</SelectItem>
                          <SelectItem value="+992">Tajikistan +992</SelectItem>
                          <SelectItem value="+255">Tanzania +255</SelectItem>
                          <SelectItem value="+66">Thailand +66</SelectItem>
                          <SelectItem value="+228">Togo +228</SelectItem>
                          <SelectItem value="+216">Tunisia +216</SelectItem>
                          <SelectItem value="+993">Turkmenistan +993</SelectItem>
                          <SelectItem value="+256">Uganda +256</SelectItem>
                          <SelectItem value="+380">Ukraine +380</SelectItem>
                          <SelectItem value="+971">United Arab Emirates +971</SelectItem>
                          <SelectItem value="+598">Uruguay +598</SelectItem>
                          <SelectItem value="+998">Uzbekistan +998</SelectItem>
                          <SelectItem value="+58">Venezuela +58</SelectItem>
                          <SelectItem value="+84">Vietnam +84</SelectItem>
                          <SelectItem value="+967">Yemen +967</SelectItem>
                          <SelectItem value="+260">Zambia +260</SelectItem>
                          <SelectItem value="+263">Zimbabwe +263</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center flex-1">
                      <Phone className="h-5 w-5 text-gray-400 mr-2" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("form.phonePlaceholder")}
                        required
                        className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center border border-gray-600 rounded-md bg-[#1e2533] p-2 mb-4">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("form.emailPlaceholder")}
                    required
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="border border-gray-600 rounded-md bg-[#1e2533] p-2">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("form.messagePlaceholder")}
                    className="min-h-[120px] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#f05545] hover:bg-[#d03535] text-white py-3 rounded-md"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                    {t("form.submittingButton")}
                  </>
                ) : (
                  t("form.submitButton")
                )}
              </Button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                {t("form.privacyNotice")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

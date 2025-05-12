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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
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
                          <SelectItem value="+90">Türkiye +90</SelectItem>
                          <SelectItem value="+1">USA/Canada +1</SelectItem>
                          <SelectItem value="+7">Russia +7</SelectItem>
                          <SelectItem value="+20">Egypt +20</SelectItem>
                          <SelectItem value="+27">South Africa +27</SelectItem>
                          <SelectItem value="+30">Greece +30</SelectItem>
                          <SelectItem value="+31">Nederland +31</SelectItem>
                          <SelectItem value="+32">Belgium +32</SelectItem>
                          <SelectItem value="+33">France +33</SelectItem>
                          <SelectItem value="+34">España +34</SelectItem>
                          <SelectItem value="+36">Hungary +36</SelectItem>
                          <SelectItem value="+39">Italy +39</SelectItem>
                          <SelectItem value="+40">Romania +40</SelectItem>
                          <SelectItem value="+41">Switzerland +41</SelectItem>
                          <SelectItem value="+43">Austria +43</SelectItem>
                          <SelectItem value="+44">United Kingdom +44</SelectItem>
                          <SelectItem value="+45">Denmark +45</SelectItem>
                          <SelectItem value="+46">Sweden +46</SelectItem>
                          <SelectItem value="+47">Norway +47</SelectItem>
                          <SelectItem value="+48">Poland +48</SelectItem>
                          <SelectItem value="+49">Deutschland +49</SelectItem>
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
                          <SelectItem value="+86">China +86</SelectItem>
                          <SelectItem value="+91">India +91</SelectItem>
                          <SelectItem value="+92">Pakistan +92</SelectItem>
                          <SelectItem value="+93">Afghanistan +93</SelectItem>
                          <SelectItem value="+94">Sri Lanka +94</SelectItem>
                          <SelectItem value="+95">Myanmar +95</SelectItem>
                          <SelectItem value="+98">Iran +98</SelectItem>
                          <SelectItem value="+212">Morocco +212</SelectItem>
                          <SelectItem value="+213">Algeria +213</SelectItem>
                          <SelectItem value="+216">Tunisia +216</SelectItem>
                          <SelectItem value="+218">Libya +218</SelectItem>
                          <SelectItem value="+220">Gambia +220</SelectItem>
                          <SelectItem value="+221">Senegal +221</SelectItem>
                          <SelectItem value="+222">Mauritania +222</SelectItem>
                          <SelectItem value="+223">Mali +223</SelectItem>
                          <SelectItem value="+224">Guinea +224</SelectItem>
                          <SelectItem value="+225">Ivory Coast +225</SelectItem>
                          <SelectItem value="+226">Burkina Faso +226</SelectItem>
                          <SelectItem value="+227">Niger +227</SelectItem>
                          <SelectItem value="+228">Togo +228</SelectItem>
                          <SelectItem value="+229">Benin +229</SelectItem>
                          <SelectItem value="+230">Mauritius +230</SelectItem>
                          <SelectItem value="+231">Liberia +231</SelectItem>
                          <SelectItem value="+232">Sierra Leone +232</SelectItem>
                          <SelectItem value="+233">Ghana +233</SelectItem>
                          <SelectItem value="+234">Nigeria +234</SelectItem>
                          <SelectItem value="+235">Chad +235</SelectItem>
                          <SelectItem value="+236">Central African Republic +236</SelectItem>
                          <SelectItem value="+237">Cameroon +237</SelectItem>
                          <SelectItem value="+238">Cape Verde +238</SelectItem>
                          <SelectItem value="+239">São Tomé and Príncipe +239</SelectItem>
                          <SelectItem value="+240">Equatorial Guinea +240</SelectItem>
                          <SelectItem value="+241">Gabon +241</SelectItem>
                          <SelectItem value="+242">Republic of the Congo +242</SelectItem>
                          <SelectItem value="+243">Democratic Republic of the Congo +243</SelectItem>
                          <SelectItem value="+244">Angola +244</SelectItem>
                          <SelectItem value="+245">Guinea-Bissau +245</SelectItem>
                          <SelectItem value="+246">British Indian Ocean Territory +246</SelectItem>
                          <SelectItem value="+248">Seychelles +248</SelectItem>
                          <SelectItem value="+249">Sudan +249</SelectItem>
                          <SelectItem value="+250">Rwanda +250</SelectItem>
                          <SelectItem value="+251">Ethiopia +251</SelectItem>
                          <SelectItem value="+252">Somalia +252</SelectItem>
                          <SelectItem value="+253">Djibouti +253</SelectItem>
                          <SelectItem value="+254">Kenya +254</SelectItem>
                          <SelectItem value="+255">Tanzania +255</SelectItem>
                          <SelectItem value="+256">Uganda +256</SelectItem>
                          <SelectItem value="+257">Burundi +257</SelectItem>
                          <SelectItem value="+258">Mozambique +258</SelectItem>
                          <SelectItem value="+260">Zambia +260</SelectItem>
                          <SelectItem value="+261">Madagascar +261</SelectItem>
                          <SelectItem value="+262">Reunion +262</SelectItem>
                          <SelectItem value="+263">Zimbabwe +263</SelectItem>
                          <SelectItem value="+264">Namibia +264</SelectItem>
                          <SelectItem value="+265">Malawi +265</SelectItem>
                          <SelectItem value="+266">Lesotho +266</SelectItem>
                          <SelectItem value="+267">Botswana +267</SelectItem>
                          <SelectItem value="+268">Swaziland +268</SelectItem>
                          <SelectItem value="+269">Comoros +269</SelectItem>
                          <SelectItem value="+290">Saint Helena +290</SelectItem>
                          <SelectItem value="+291">Eritrea +291</SelectItem>
                          <SelectItem value="+297">Aruba +297</SelectItem>
                          <SelectItem value="+298">Faroe Islands +298</SelectItem>
                          <SelectItem value="+299">Greenland +299</SelectItem>
                          <SelectItem value="+350">Gibraltar +350</SelectItem>
                          <SelectItem value="+351">Portugal +351</SelectItem>
                          <SelectItem value="+352">Luxembourg +352</SelectItem>
                          <SelectItem value="+353">Ireland +353</SelectItem>
                          <SelectItem value="+354">Iceland +354</SelectItem>
                          <SelectItem value="+355">Albania +355</SelectItem>
                          <SelectItem value="+356">Malta +356</SelectItem>
                          <SelectItem value="+357">Cyprus +357</SelectItem>
                          <SelectItem value="+358">Finland +358</SelectItem>
                          <SelectItem value="+359">Bulgaria +359</SelectItem>
                          <SelectItem value="+370">Lithuania +370</SelectItem>
                          <SelectItem value="+371">Latvia +371</SelectItem>
                          <SelectItem value="+372">Estonia +372</SelectItem>
                          <SelectItem value="+373">Moldova +373</SelectItem>
                          <SelectItem value="+374">Armenia +374</SelectItem>
                          <SelectItem value="+375">Belarus +375</SelectItem>
                          <SelectItem value="+376">Andorra +376</SelectItem>
                          <SelectItem value="+377">Monaco +377</SelectItem>
                          <SelectItem value="+378">San Marino +378</SelectItem>
                          <SelectItem value="+380">Ukraine +380</SelectItem>
                          <SelectItem value="+381">Serbia +381</SelectItem>
                          <SelectItem value="+382">Montenegro +382</SelectItem>
                          <SelectItem value="+383">Kosovo +383</SelectItem>
                          <SelectItem value="+385">Croatia +385</SelectItem>
                          <SelectItem value="+386">Slovenia +386</SelectItem>
                          <SelectItem value="+387">Bosnia and Herzegovina +387</SelectItem>
                          <SelectItem value="+389">North Macedonia +389</SelectItem>
                          <SelectItem value="+420">Czech Republic +420</SelectItem>
                          <SelectItem value="+421">Slovakia +421</SelectItem>
                          <SelectItem value="+423">Liechtenstein +423</SelectItem>
                          <SelectItem value="+500">Falkland Islands +500</SelectItem>
                          <SelectItem value="+501">Belize +501</SelectItem>
                          <SelectItem value="+502">Guatemala +502</SelectItem>
                          <SelectItem value="+503">El Salvador +503</SelectItem>
                          <SelectItem value="+504">Honduras +504</SelectItem>
                          <SelectItem value="+505">Nicaragua +505</SelectItem>
                          <SelectItem value="+506">Costa Rica +506</SelectItem>
                          <SelectItem value="+507">Panama +507</SelectItem>
                          <SelectItem value="+508">Saint Pierre and Miquelon +508</SelectItem>
                          <SelectItem value="+509">Haiti +509</SelectItem>
                          <SelectItem value="+590">Guadeloupe +590</SelectItem>
                          <SelectItem value="+591">Bolivia +591</SelectItem>
                          <SelectItem value="+592">Guyana +592</SelectItem>
                          <SelectItem value="+593">Ecuador +593</SelectItem>
                          <SelectItem value="+595">Paraguay +595</SelectItem>
                          <SelectItem value="+597">Suriname +597</SelectItem>
                          <SelectItem value="+598">Uruguay +598</SelectItem>
                          <SelectItem value="+599">Netherlands Antilles +599</SelectItem>
                          <SelectItem value="+670">East Timor +670</SelectItem>
                          <SelectItem value="+672">Norfolk Island +672</SelectItem>
                          <SelectItem value="+673">Brunei +673</SelectItem>
                          <SelectItem value="+674">Nauru +674</SelectItem>
                          <SelectItem value="+675">Papua New Guinea +675</SelectItem>
                          <SelectItem value="+676">Tonga +676</SelectItem>
                          <SelectItem value="+677">Solomon Islands +677</SelectItem>
                          <SelectItem value="+678">Vanuatu +678</SelectItem>
                          <SelectItem value="+679">Fiji +679</SelectItem>
                          <SelectItem value="+680">Palau +680</SelectItem>
                          <SelectItem value="+681">Wallis and Futuna +681</SelectItem>
                          <SelectItem value="+682">Cook Islands +682</SelectItem>
                          <SelectItem value="+683">Niue +683</SelectItem>
                          <SelectItem value="+685">Samoa +685</SelectItem>
                          <SelectItem value="+686">Kiribati +686</SelectItem>
                          <SelectItem value="+687">New Caledonia +687</SelectItem>
                          <SelectItem value="+688">Tuvalu +688</SelectItem>
                          <SelectItem value="+689">French Polynesia +689</SelectItem>
                          <SelectItem value="+690">Tokelau +690</SelectItem>
                          <SelectItem value="+691">Micronesia +691</SelectItem>
                          <SelectItem value="+692">Marshall Islands +692</SelectItem>
                          <SelectItem value="+850">North Korea +850</SelectItem>
                          <SelectItem value="+852">Hong Kong +852</SelectItem>
                          <SelectItem value="+853">Macau +853</SelectItem>
                          <SelectItem value="+855">Cambodia +855</SelectItem>
                          <SelectItem value="+856">Laos +856</SelectItem>
                          <SelectItem value="+880">Bangladesh +880</SelectItem>
                          <SelectItem value="+886">Taiwan +886</SelectItem>
                          <SelectItem value="+960">Maldives +960</SelectItem>
                          <SelectItem value="+961">Lebanon +961</SelectItem>
                          <SelectItem value="+962">Jordan +962</SelectItem>
                          <SelectItem value="+963">Syria +963</SelectItem>
                          <SelectItem value="+964">Iraq +964</SelectItem>
                          <SelectItem value="+965">Kuwait +965</SelectItem>
                          <SelectItem value="+966">Saudi Arabia +966</SelectItem>
                          <SelectItem value="+967">Yemen +967</SelectItem>
                          <SelectItem value="+968">Oman +968</SelectItem>
                          <SelectItem value="+970">Palestine +970</SelectItem>
                          <SelectItem value="+971">United Arab Emirates +971</SelectItem>
                          <SelectItem value="+972">Israel +972</SelectItem>
                          <SelectItem value="+973">Bahrain +973</SelectItem>
                          <SelectItem value="+974">Qatar +974</SelectItem>
                          <SelectItem value="+975">Bhutan +975</SelectItem>
                          <SelectItem value="+976">Mongolia +976</SelectItem>
                          <SelectItem value="+977">Nepal +977</SelectItem>
                          <SelectItem value="+992">Tajikistan +992</SelectItem>
                          <SelectItem value="+993">Turkmenistan +993</SelectItem>
                          <SelectItem value="+994">Azerbaijan +994</SelectItem>
                          <SelectItem value="+995">Georgia +995</SelectItem>
                          <SelectItem value="+996">Kyrgyzstan +996</SelectItem>
                          <SelectItem value="+998">Uzbekistan +998</SelectItem>
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

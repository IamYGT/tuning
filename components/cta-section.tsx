import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900/70 to-orange-900/70">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Hemen Portalı Deneyin!</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-10 text-gray-200">
          Ecu Tuning Portal ile işinizi bir üst seviyeye taşıyın! En gelişmiş özelliklerle donatılmış 19 modül, 
          profesyonellerin ihtiyaçlarını karşılamak üzere tasarlandı. Ecu Tuning Portal v4.2 ile müşteri dosyalarınızı 
          daha etkili yönetin ve iş süreçlerinizi optimize edin. Müşteri Yönetim Sistemi, Gelişmiş Kredi Sistemi ve daha fazlası sizi bekliyor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-white text-red-900 hover:bg-gray-200" asChild>
            <Link href="/register">
              7 Gün Ücretsiz Deneyin <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/contact">Satış Ekibiyle İletişime Geçin</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, FileText, Code, Clock, CreditCard, Globe, Bell, Percent, ShieldCheck, BarChart3, Truck, Database } from "lucide-react"
import Link from "next/link"

export default function Features() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 text-red-500 text-sm font-medium mb-3 shadow-md backdrop-blur-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>ÖZELLİKLER</span>
            </div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Özelliklerimiz</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
            Profesyonel bir tuning dosya hizmet portalı olarak, ECU Tuning Portal 19 farklı özellikle sektörde en kapsamlı hizmeti sunmaktadır. 
            Operasyonlarınızı verimlilik ve güvenilirlikle optimize edin.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12">
          {/* Feature Box 1 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">Müşteri Yönetim Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Müşterilerinizi kolayca ekleyin, düzenleyin, silin ve ayrıca kredi ekleyebilirsiniz.</p>
          </div>
          
          {/* Feature Box 2 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">Gelişmiş Kredi Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Kredileri özelleştirin ve müşterilerinizin kolayca satın almasını sağlayın.</p>
          </div>
          
          {/* Feature Box 3 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">Dosya Takip Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Gelen dosyaları düzenleyin ve içeriklerini kontrol edin.</p>
          </div>
          
          {/* Feature Box 4 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">Gelişmiş Fatura Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">İşlemlerinizi otomatik veya manuel faturalama seçenekleriyle yönetin.</p>
          </div>

          {/* Additional Features */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">6 Farklı Ödeme Yöntemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Paypal, Stripe, Mollie, Iyzico ve BTC Coin gibi ödeme yöntemlerini destekler.</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">16 Farklı Dil Seçeneği</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Sistemi 16 farklı dilde kullanarak global bir kitleye ulaşın.</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">E-posta ve SMS Bildirimleri</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Dosya yüklemeleri ve destek talepleri hakkında e-posta ve SMS bildirimleri alın.</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">Müşteri İndirim Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Müşteri gruplarına özel indirimler, fiyat artışları ve ekstra bonuslar ekleyin.</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">Destek Talep Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Müşterilerinizin destek taleplerini kolayca yönetin.</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">EVC Kontrol ve Satış Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">EVC API aracılığıyla müşterilerinize kredi ekleyin ve satışlarını yönetin.</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">Otomatik Teslimat Sistemi</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">İşlemler tamamlandığında dosyaların otomatik olarak teslim edilmesini sağlayın.</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/30 bg-black/20 backdrop-blur-sm hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center sm:text-left">17,583 Araç Veritabanı</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Geniş bir araç veritabanı kullanarak müşterilerinize kapsamlı bilgi sağlayın.</p>
          </div>
        </div>
        
        {/* Discover All Features Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10" asChild>
            <Link href="/features">
              Tüm Özelliklerimizi Keşfet <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
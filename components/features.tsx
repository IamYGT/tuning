import { Button } from "@/components/ui/button"
import { ArrowRight, Users, FileText, Code, Clock, CreditCard, Globe, Bell, Percent, ShieldCheck, BarChart3, Truck, Database } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function Features() {
  const t = useTranslations('home.features');
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-3 shadow-md">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('title')}</span>
            </div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12">
          {/* Feature Box 1 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.customerManagement.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.customerManagement.description')}</p>
          </div>

          {/* Feature Box 2 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.advancedCredit.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.advancedCredit.description')}</p>
          </div>

          {/* Feature Box 3 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.fileTracking.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.fileTracking.description')}</p>
          </div>

          {/* Feature Box 4 */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.advancedInvoice.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.advancedInvoice.description')}</p>
          </div>

          {/* Additional Features */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.paymentMethods.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.paymentMethods.description')}</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.languageOptions.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.languageOptions.description')}</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.notifications.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.notifications.description')}</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.discountSystem.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.discountSystem.description')}</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.supportSystem.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.supportSystem.description')}</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.evcControl.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.evcControl.description')}</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.automaticDelivery.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.automaticDelivery.description')}</p>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mb-2 sm:mb-0 sm:mr-3 md:mr-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">{t('items.vehicleDatabase.title')}</h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{t('items.vehicleDatabase.description')}</p>
          </div>
        </div>

        {/* Discover All Features Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <Link href="/features">
              {t('cta')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
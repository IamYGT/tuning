import { Users, FileText, Code, Clock } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Stats() {
  const t = useTranslations('home.stats');
  return (
    <section className="relative py-16 overflow-hidden bg-background">
      {/* Background effects matching hero section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/10 to-transparent opacity-50" />
        <div className="absolute left-1/3 top-1/2 w-1/3 h-1/3 bg-gradient-radial from-red-700/10 to-transparent opacity-30" />
      </div>

      {/* Light grid texture overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5 z-5" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-3 shadow-md">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13V17M12 9V17M16 5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('title')}</span>
            </div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('heading')}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {/* Stat Box 1 - Happy Customers */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/50 bg-black/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-red-500 hover:shadow-md hover:shadow-red-500/10">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-2 sm:mb-3" />
            <h3 className="text-3xl sm:text-4xl font-bold text-red-500 mb-1 sm:mb-2">1000+</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">{t('customers')}</p>
          </div>

          {/* Stat Box 2 - Number of Files */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/50 bg-black/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-red-500 hover:shadow-md hover:shadow-red-500/10">
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-2 sm:mb-3" />
            <h3 className="text-3xl sm:text-4xl font-bold text-red-500 mb-1 sm:mb-2">15,000+</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">{t('files')}</p>
          </div>

          {/* Stat Box 3 - Lines of Code */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/50 bg-black/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-red-500 hover:shadow-md hover:shadow-red-500/10">
            <Code className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-2 sm:mb-3" />
            <h3 className="text-3xl sm:text-4xl font-bold text-red-500 mb-1 sm:mb-2">500K+</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">{t('code')}</p>
          </div>

          {/* Stat Box 4 - Years of Experience */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg border border-red-500/50 bg-black/40 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-red-500 hover:shadow-md hover:shadow-red-500/10">
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-2 sm:mb-3" />
            <h3 className="text-3xl sm:text-4xl font-bold text-red-500 mb-1 sm:mb-2">8+</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">{t('experience')}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
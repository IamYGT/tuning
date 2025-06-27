import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Languages() {
  const t = useTranslations('home.languages');
  const flags = [
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "de", name: "Deutsch" },
    { code: "nl", name: "Nederlands" },
    { code: "ru", name: "Русский" },
    { code: "ar", name: "العربية" },
    { code: "pt", name: "Português" },
    { code: "fr", name: "Français" },
    { code: "pl", name: "Polski" },
    { code: "it", name: "Italiano" },
    { code: "hu", name: "Magyar" },
    { code: "sk", name: "Slovenčina" },
    { code: "cz", name: "Čeština" },
    { code: "gr", name: "Ελληνικά" },
    { code: "il", name: "עברית" },
  ]

  return (
    <section className="py-16 bg-background">
      {/* Dark background with layered red glowing radial effects */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 to-transparent opacity-70" />
        <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-700/10 to-transparent opacity-50" />
        <div className="absolute right-1/3 bottom-1/3 w-1/3 h-1/3 bg-gradient-radial from-red-600/10 to-transparent opacity-40" />
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/10 to-transparent opacity-50" />
        {/* Light grid texture overlay */}
        <div className="absolute inset-0 opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="p-8 rounded-xl bg-black/40 border border-gray-800 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-3 shadow-md">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3C14.5013 5.46452 15.9228 8.66283 16 12C15.9228 15.3372 14.5013 18.5355 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3C9.49872 5.46452 8.07725 8.66283 8 12C8.07725 15.3372 9.49872 18.5355 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t('title')}</span>
                </div>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('heading')}</h2>
              <p className="text-lg text-gray-300 mb-8">
                {t('description')}
              </p>

              <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-8">
                {flags.slice(0, 8).map((flag) => (
                  <div key={flag.code} className="flex items-center justify-center">
                    <div className="w-12 h-8 sm:w-14 sm:h-10 relative overflow-hidden rounded-md border border-gray-700 hover:border-red-500 transition-all cursor-pointer">
                      <Image
                        src={`/assets/images/flag/${flag.code}.svg`}
                        alt={flag.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
                {flags.slice(8, 16).map((flag) => (
                  <div key={flag.code} className="flex items-center justify-center">
                    <div className="w-12 h-8 sm:w-14 sm:h-10 relative overflow-hidden rounded-md border border-gray-700 hover:border-red-500 transition-all cursor-pointer">
                      <Image
                        src={`/assets/images/flag/${flag.code}.svg`}
                        alt={flag.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 relative">
              {/* Desktop image - hidden on mobile */}
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl md:-mr-8 md:translate-x-8 hidden md:block">
                <Image
                  src="/assets/images/language.avif"
                  alt="Language Interface"
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
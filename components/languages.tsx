import Image from "next/image"

export default function Languages() {
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
              <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 text-red-500 text-sm font-medium mb-3 shadow-md backdrop-blur-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>DİL DESTEĞİ</span>
                </div>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">16 Farklı Dil ile Uluslararası çalışın.</h2>
              <p className="text-lg text-gray-300 mb-8">
                Sistemimizde bulunan 16 farklı dil ile bütün dünyadaki insanlara hitap edin.
              </p>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                {flags.slice(0, 8).map((flag) => (
                  <div key={flag.code} className="flex items-center justify-center">
                    <div className="w-14 h-10 relative overflow-hidden rounded-md border border-gray-700 hover:border-red-500 transition-all cursor-pointer">
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

              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {flags.slice(8, 16).map((flag) => (
                  <div key={flag.code} className="flex items-center justify-center">
                    <div className="w-14 h-10 relative overflow-hidden rounded-md border border-gray-700 hover:border-red-500 transition-all cursor-pointer">
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
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl md:-mr-8 md:translate-x-8">
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
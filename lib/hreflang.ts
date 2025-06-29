import { routing } from "@/i18n/routing";

export interface HreflangData {
  canonical: string;
  languages: Record<string, string>;
}

/**
 * Verilen pathname için tüm dillerin hreflang URL'lerini generate eder
 * @param pathname - Mevcut sayfa path'i (örn: "/about", "/pricing")
 * @param currentLocale - Mevcut dil
 * @returns Hreflang data objesi
 */
export function generateHreflangs(
  pathname: string,
  currentLocale: string
): HreflangData {
  const languages: Record<string, string> = {};

  // Her dil için URL'leri oluştur
  routing.locales.forEach((locale) => {
    let localizedPath = pathname;

    // routing.pathnames'de tanımlı path mappings'i kontrol et
    if (
      routing.pathnames &&
      routing.pathnames[pathname as keyof typeof routing.pathnames]
    ) {
      const pathMapping =
        routing.pathnames[pathname as keyof typeof routing.pathnames];
      if (
        pathMapping &&
        typeof pathMapping === "object" &&
        pathMapping[locale as keyof typeof pathMapping]
      ) {
        localizedPath = pathMapping[
          locale as keyof typeof pathMapping
        ] as string;
      }
    }

    // URL'yi oluştur ve sondaki eğik çizgiyi kaldır (ana sayfa hariç)
    let finalPath: string;
    if (locale === routing.defaultLocale) {
      finalPath = localizedPath;
    } else {
      finalPath = `/${locale}${localizedPath}`;
    }

    // Ana sayfa (`/`) dışındaki tüm yollarda sondaki eğik çizgiyi kaldır
    if (finalPath !== "/" && finalPath.endsWith("/")) {
      finalPath = finalPath.slice(0, -1);
    }

    languages[locale] = finalPath;
  });

  // Canonical URL'yi belirle (mevcut locale'in URL'si)
  const canonical = languages[currentLocale];

  return {
    canonical,
    languages,
  };
}

/**
 * Base domain ile birlikte full URL'leri generate eder
 * @param pathname - Sayfa path'i
 * @param currentLocale - Mevcut dil
 * @param baseUrl - Base URL (opsiyonel)
 * @returns Full URL'ler ile hreflang data
 */
export function generateFullHreflangs(
  pathname: string,
  currentLocale: string,
  baseUrl: string = "https://ecutuningportal.com"
): HreflangData {
  const hreflangs = generateHreflangs(pathname, currentLocale);

  return {
    canonical: `${baseUrl}${hreflangs.canonical}`,
    languages: Object.fromEntries(
      Object.entries(hreflangs.languages).map(([locale, path]) => [
        locale,
        `${baseUrl}${path}`,
      ])
    ),
  };
}

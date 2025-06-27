import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr", "de", "nl", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      tr: "/hakkimizda",
      de: "/uber-uns",
      nl: "/over-ons",
      es: "/sobre-nosotros",
    },
    "/contact": {
      en: "/contact",
      tr: "/iletisim",
      de: "/kontakt",
      nl: "/contact",
      es: "/contacto",
    },
    "/features": {
      en: "/features",
      tr: "/ozellikler",
      de: "/funktionen",
      nl: "/functies",
      es: "/caracteristicas",
    },
    "/pricing": {
      en: "/pricing",
      tr: "/fiyatlandirma",
      de: "/preise",
      nl: "/prijzen",
      es: "/precios",
    },
    "/gallery": {
      en: "/gallery",
      tr: "/galeri",
      de: "/galerie",
      nl: "/galerij",
      es: "/galeria",
    },
    "/trial": {
      en: "/trial",
      tr: "/deneme",
      de: "/test",
      nl: "/probeer",
      es: "/prueba",
    },
  },
});

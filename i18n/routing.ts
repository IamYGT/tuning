import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'tr', 'de', 'nl', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  // Use the root directory
  localePrefix: 'always',
  // Define path mappings for different locales
  pathnames: {
    '/': {
      en: '/',
      tr: '/',
      de: '/',
      nl: '/',
      es: '/'
    },
    '/about': {
      en: '/about',
      tr: '/hakkimizda',
      de: '/uber-uns',
      nl: '/over-ons',
      es: '/sobre-nosotros'
    },
    '/contact': {
      en: '/contact',
      tr: '/iletisim',
      de: '/kontakt',
      nl: '/contact',
      es: '/contacto'
    },
    '/features': {
      en: '/features',
      tr: '/ozellikler',
      de: '/funktionen',
      nl: '/functies',
      es: '/caracteristicas'
    },
    '/pricing': {
      en: '/pricing',
      tr: '/fiyatlandirma',
      de: '/preise',
      nl: '/prijzen',
      es: '/precios'
    },
    '/gallery': {
      en: '/gallery',
      tr: '/galeri',
      de: '/galerie',
      nl: '/galerij',
      es: '/galeria'
    },
    '/trial': {
      en: '/trial',
      tr: '/deneme',
      de: '/test',
      nl: '/probeer',
      es: '/prueba'
    }
  },
});
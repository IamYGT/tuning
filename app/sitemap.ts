import { MetadataRoute } from 'next'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ecutuningportal.com'
  const currentDate = new Date().toISOString()
  
  // Sitemap girişleri
  return [
    // İngilizce (varsayılan)
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/features`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/trial`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    
    // Türkçe
    { url: `${baseUrl}/tr`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 1.0 },
    { url: `${baseUrl}/tr/hakkimizda`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/tr/iletisim`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/tr/ozellikler`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/tr/galeri`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${baseUrl}/tr/fiyatlandirma`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/tr/deneme`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    
    // Almanca
    { url: `${baseUrl}/de`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 1.0 },
    { url: `${baseUrl}/de/uber-uns`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/de/kontakt`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/de/funktionen`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/de/galerie`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${baseUrl}/de/preise`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/de/test`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    
    // Hollandaca
    { url: `${baseUrl}/nl`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 1.0 },
    { url: `${baseUrl}/nl/over-ons`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/nl/contact`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/nl/functies`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/nl/galerij`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${baseUrl}/nl/prijzen`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/nl/probeer`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    
    // İspanyolca
    { url: `${baseUrl}/es`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 1.0 },
    { url: `${baseUrl}/es/sobre-nosotros`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/es/contacto`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${baseUrl}/es/caracteristicas`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/es/galeria`, lastModified: currentDate, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${baseUrl}/es/precios`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    { url: `${baseUrl}/es/prueba`, lastModified: currentDate, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
  ]
}

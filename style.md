# 🎨 ECU Tuning Portal - Stil Rehberi

## 📋 Genel Bakış

Bu dokuman ECU Tuning Portal projesinin renk paleti, tipografi ve stil kurallarını içerir. Proje **dark mode** odaklı olarak tasarlanmış olup, modern ve profesyonel bir otomotiv teması benimser.

---

## 🎯 Ana Renk Paleti

### 🔴 Primary Renk (#C83333)
**Ana marka rengi** - Otomotiv endüstrisinin güçlü ve dinamik karakterini yansıtan kırmızı ton

```css
/* CSS Custom Properties */
--primary: 0 62% 50%;  /* HSL değeri */

/* Tailwind Custom Red Paleti */
custom-red-50:  #FCECEC
custom-red-100: #F6D0D0
custom-red-200: #EEAAAA
custom-red-300: #E68484
custom-red-400: #DD5E5E
custom-red-500: #C83333  ← ANA RENK
custom-red-600: #A32A2A
custom-red-700: #7D2020
custom-red-800: #571717
custom-red-900: #320E0E
```

### 🌈 Renk Kullanım Alanları

#### Ana Renk (#C83333) Kullanımı:
- ✅ Header top banner
- ✅ Primary button backgrounds
- ✅ İstatistik kartları border ve text
- ✅ Icon renkleri
- ✅ Hover effect'leri
- ✅ Gradient başlangıç noktaları
- ✅ Form hata mesajları

#### Destekleyici Renkler:
- **Orange (#FB923C)** - Gradient geçişleri ve accent rengi
- **WhatsApp Green (#25D366)** - WhatsApp butonu için özel

---

## 🖤 Neutral & Background Renkler

### Dark Theme (Varsayılan)
```css
/* Background Hierarchy */
--background: 222.2 84% 4.9%;     /* Ana dark background */
--card: 222.2 84% 4.9%;           /* Kart backgrounds */
--secondary: 217.2 32.6% 17.5%;   /* İkincil elementler */

/* Slate Tonları */
bg-slate-900    /* Header background */
bg-slate-800    /* Border renkleri */
bg-slate-700    /* Hover states */

/* Gray Tonları */
bg-gray-900     /* Section backgrounds */
text-gray-200   /* Subtitle text */
text-gray-300   /* Body text */
text-gray-400   /* Placeholder text */
border-gray-700 /* Default borders */
border-gray-800 /* Card borders */

/* Black Overlays */
bg-black/40     /* Semi-transparent overlays */
bg-black/80     /* Modal overlays */
bg-zinc-700     /* Form input backgrounds */
```

### Light Theme
```css
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
```

---

## 📝 Typography

### Text Colors
```css
/* Ana Text Renkleri */
text-white      /* Ana başlıklar, önemli metinler */
text-foreground /* Normal metin (theme-aware) */
text-gray-300   /* Body text, açıklamalar */
text-gray-200   /* Subtitle text */
text-gray-400   /* Placeholder, meta text */

/* Themed Colors */
text-primary-foreground  /* Primary button text */
text-muted-foreground   /* Muted text */
text-accent-foreground  /* Accent text */
```

### Font Hierarchy
- **H1:** `text-4xl md:text-6xl font-bold` - Ana başlıklar
- **H2:** `text-3xl md:text-4xl font-bold` - Section başlıkları  
- **H3:** `text-xl font-semibold` - Alt başlıklar
- **Body:** `text-base` - Normal metin
- **Small:** `text-sm` - Meta bilgiler

---

## 🏷️ Component Stilleri

### Buttons
```css
/* Primary Button */
bg-primary text-primary-foreground hover:bg-primary/90

/* Outline Button */
border border-input bg-background hover:bg-accent

/* Secondary Button */
bg-secondary text-secondary-foreground hover:bg-secondary/80

/* CTA Özel Button */
bg-white text-custom-red-900 hover:bg-gray-200
```

### Cards & Containers
```css
/* İstatistik Kartları */
border border-custom-red/50 
bg-black/40 
backdrop-blur-sm
hover:border-custom-red 
hover:shadow-md hover:shadow-custom-red/10

/* Feature Kartları */
border border-primary/30 
bg-card/80 
backdrop-blur-sm
hover:border-primary/70

/* Container */
bg-black/40 border border-gray-800 backdrop-blur-sm
```

### Forms
```css
/* Input Fields */
bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400

/* Labels */
text-white

/* Error Messages */
text-custom-red (form errors)
text-custom-red-400 (trial page errors)
```

---

## 🌟 Special Effects

### Gradient Backgrounds
```css
/* Hero Section Gradients */
bg-gradient-radial from-custom-red-900/20 to-transparent
bg-gradient-radial from-custom-red-700/10 to-transparent  
bg-gradient-radial from-custom-red-600/10 to-transparent

/* CTA Section */
bg-gradient-to-r from-custom-red-900/70 to-orange-900/70

/* Header Banner */
background-color: #C83333 (solid color)

/* Hero Title Gradient */
bg-gradient-to-r from-custom-red to-orange-500
```

### Overlay Effects
```css
/* Grid Pattern */
bg-[url('/grid-pattern.png')] bg-repeat opacity-5

/* Dark Overlays */
bg-black/80  /* Modal backgrounds */
bg-black/40  /* Content overlays */
bg-white/20  /* Light overlays */
```

---

## 🔧 Tailwind CSS Konfigürasyonu

### Custom Renk Tanımları
```typescript
// tailwind.config.ts
colors: {
  'custom-red': {
    DEFAULT: '#C83333',
    50: '#FCECEC',
    // ... diğer tonlar
    900: '#320E0E',
  }
}
```

### CSS Variables
```css
/* app/globals.css */
:root {
  --primary: 0 62% 50%;
  --ring: 0 62% 50%;
}

.dark {
  --primary: 0 62% 50%;
  --ring: 0 62% 50%;
}
```

---

## 🎯 Kullanım Best Practices

### ✅ Yapılması Gerekenler
- Ana renk (#C83333) tutarlı kullanımı
- Dark theme öncelikli tasarım
- Accessibility için yeterli contrast oranları
- Semantic color isimlendirmeleri

### ❌ Yapılmaması Gerekenler
- Ana renk dışında rastgele kırmızı tonlar
- Light theme'de dark spesifik renkler
- Çok fazla farklı gray tonu karışımı
- Gradient abuse (aşırı gradient kullanımı)

---

## 📱 Responsive Considerations

### Mobile First Approach
- Text boyutları: `text-sm md:text-base lg:text-lg`
- Padding/Margin: `p-3 sm:p-4 md:p-6`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Hover States
- Desktop: Hover effects aktif
- Mobile: Touch-friendly, subtle feedback

---

## 🔍 Brand Identity

### Marka Karakteri
- **Modern** - Contemporary design language
- **Professional** - Otomotiv sektörü güvenilirliği  
- **Dynamic** - Performance ve hız hissi
- **Technical** - Engineering expertise

### Color Psychology
- **Kırmızı (#C83333):** Güç, performans, tutku
- **Dark Background:** Profesyonellik, premium his
- **Orange Accent:** Enerji, dinamizm
- **White Text:** Temizlik, açıklık

---

## 📊 Renk Kullanım İstatistikleri

### En Çok Kullanılan Renkler
1. **#C83333** (Ana kırmızı) - %35
2. **Gray tones** (200-900) - %25  
3. **Black/White** - %20
4. **Slate tones** (700-900) - %15
5. **Orange accents** - %5

### Tema Dağılımı
- **Dark Mode:** %95 (Ana tema)
- **Light Mode:** %5 (Fallback)

---

*Son güncelleme: 2025-01-27*
*Proje: ECU Tuning Portal*
*Ana renk: #C83333* 
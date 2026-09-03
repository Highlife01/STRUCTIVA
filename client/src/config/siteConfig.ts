/**
 * STRUCTIVA — Global Site Configuration
 * Central single source of truth for SEO, canonical URLs, contact NAP, and language registry.
 */

export const SITE_URL = "https://www.structiva.com.tr";
export const PRODUCTION_CANONICAL_HOST = "https://www.structiva.com.tr";

export const COMPANY_INFO = {
  brandName: "STRUCTIVA",
  tagline: "Engineered Steel Structures",
  legalName: "STRUCTIVA Çelik Yapı Sanayi A.Ş.",
  establishedYear: 1985,
  adanaFacilities: "Structiva Tesisleri Adana",
  address: {
    street: "Organize Sanayi Bölgesi (AOSB), Çelik İmalat Caddesi No:12",
    city: "Adana",
    postalCode: "01350",
    country: "Türkiye",
    countryCode: "TR",
    googleMapsUrl: "https://maps.google.com/?q=Adana+Organize+Sanayi+Bolgesi"
  },
  contact: {
    primaryEmail: "info@structiva.com.tr",
    exportEmail: "info@structiva.com.tr",
    primaryPhone: "+90 532 055 09 45",
    whatsappPhone: "+90 532 055 09 45",
    whatsappLink: "https://wa.me/905320550945?text=Merhaba,%20STRUCTIVA%20%C3%A7elik%20yap%C4%B1%20ve%20hangar%20modelleriniz%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20teklifi%20almak%20istiyorum.",
    workingHours: "Pazartesi - Cumartesi: 08:00 - 18:00 (GMT+3) | Global Export Desk 7/24"
  },
  certifications: [
    { name: "EN 1090-2:2018", scope: "Execution Class EXC3 & EXC4 Structural Steel" },
    { name: "CE Mark", scope: "Construction Products Regulation (CPR 305/2011/EU)" },
    { name: "ISO 9001:2015", scope: "Quality Management System" },
    { name: "ISO 14001:2015", scope: "Environmental Management" },
    { name: "ISO 45001:2018", scope: "Occupational Health & Safety" },
    { name: "AISC 360-16", scope: "Specification for Structural Steel Buildings" },
    { name: "ASTM A792 / A792M", scope: "Galvalume Plus® 55% Al-Zn Coated Steel" }
  ],
  capacity: {
    annualTonnage: "25.000 Metric Tons",
    maxClearSpan: "45 Meters (148 ft)",
    exportReach: "50+ Countries Worldwide",
    logisticsPort: "Mediterranean Deep-Water Container Terminal"
  }
};

export interface LanguageDef {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
  hreflang: string;
  isRTL?: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageDef[] = [
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr", hreflang: "tr" },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr", hreflang: "en" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr", hreflang: "de" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr", hreflang: "fr" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr", hreflang: "es" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr", hreflang: "it" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", dir: "ltr", hreflang: "pt" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", dir: "ltr", hreflang: "nl" },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", dir: "ltr", hreflang: "pl" },
  { code: "ro", name: "Romanian", nativeName: "Română", flag: "🇷🇴", dir: "ltr", hreflang: "ro" },
  { code: "bg", name: "Bulgarian", nativeName: "Български", flag: "🇧🇬", dir: "ltr", hreflang: "bg" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", flag: "🇬🇷", dir: "ltr", hreflang: "el" },
  { code: "cs", name: "Czech", nativeName: "Čeština", flag: "🇨🇿", dir: "ltr", hreflang: "cs" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", flag: "🇭🇺", dir: "ltr", hreflang: "hu" },
  { code: "sr", name: "Serbian", nativeName: "Srpski", flag: "🇷🇸", dir: "ltr", hreflang: "sr" },
  { code: "hr", name: "Croatian", nativeName: "Hrvatski", flag: "🇭🇷", dir: "ltr", hreflang: "hr" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", dir: "ltr", hreflang: "ru" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦", dir: "ltr", hreflang: "uk" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl", hreflang: "ar", isRTL: true },
  { code: "fa", name: "Persian", nativeName: "فارسی", flag: "🇮🇷", dir: "rtl", hreflang: "fa", isRTL: true },
  { code: "he", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱", dir: "rtl", hreflang: "he", isRTL: true },
  { code: "zh", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳", dir: "ltr", hreflang: "zh-Hans" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr", hreflang: "ja" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", dir: "ltr", hreflang: "ko" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr", hreflang: "hi" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr", hreflang: "id" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾", dir: "ltr", hreflang: "ms" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", dir: "ltr", hreflang: "vi" },
  { code: "th", name: "Thai", nativeName: "ไทย", flag: "🇹🇭", dir: "ltr", hreflang: "th" },
  { code: "az", name: "Azerbaijani", nativeName: "Azərbaycanca", flag: "🇦🇿", dir: "ltr", hreflang: "az" }
];

export const DEFAULT_LANGUAGE = "tr";

export function getLanguage(code?: string): LanguageDef {
  if (!code) return SUPPORTED_LANGUAGES[0];
  const normalized = code.toLowerCase().split("-")[0];
  return (
    SUPPORTED_LANGUAGES.find((l) => l.code === normalized || l.hreflang === code) ||
    SUPPORTED_LANGUAGES[0]
  );
}

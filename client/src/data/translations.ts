export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageOption[] = [
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", dir: "ltr" },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", dir: "ltr" },
  { code: "ro", name: "Romanian", nativeName: "Română", flag: "🇷🇴", dir: "ltr" },
  { code: "bg", name: "Bulgarian", nativeName: "Български", flag: "🇧🇬", dir: "ltr" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", flag: "🇬🇷", dir: "ltr" },
  { code: "cs", name: "Czech", nativeName: "Čeština", flag: "🇨🇿", dir: "ltr" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", flag: "🇭🇺", dir: "ltr" },
  { code: "sr", name: "Serbian", nativeName: "Srpski", flag: "🇷🇸", dir: "ltr" },
  { code: "hr", name: "Croatian", nativeName: "Hrvatski", flag: "🇭🇷", dir: "ltr" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "fa", name: "Persian", nativeName: "فارسی", flag: "🇮🇷", dir: "rtl" },
  { code: "he", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱", dir: "rtl" },
  { code: "zh", name: "Chinese", nativeName: "简体中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", dir: "ltr" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾", dir: "ltr" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", dir: "ltr" },
  { code: "th", name: "Thai", nativeName: "ไทย", flag: "🇹🇭", dir: "ltr" },
  { code: "az", name: "Azerbaijani", nativeName: "Azərbaycanca", flag: "🇦🇿", dir: "ltr" }
];

export type { TranslationDict } from "./locales/core";
import { coreTranslations, TranslationDict } from "./locales/core";
import { europeanTranslations } from "./locales/european";
import { middleEasternTranslations } from "./locales/middleEastern";
import { asianTranslations } from "./locales/asian";

export const TRANSLATIONS: Record<string, TranslationDict> = {
  ...coreTranslations,
  ...europeanTranslations,
  ...middleEasternTranslations,
  ...asianTranslations,
};

/**
 * Universal safe translation retriever.
 * Checks requested language, then falls back to English, then Turkish, then returns key.
 */
export function getTranslation(lang: string, key: string): string {
  const normalized = (lang || "tr").toLowerCase().split("-")[0];
  
  if (TRANSLATIONS[normalized] && TRANSLATIONS[normalized][key]) {
    return TRANSLATIONS[normalized][key];
  }
  
  if (TRANSLATIONS["en"] && TRANSLATIONS["en"][key]) {
    return TRANSLATIONS["en"][key];
  }

  if (TRANSLATIONS["tr"] && TRANSLATIONS["tr"][key]) {
    return TRANSLATIONS["tr"][key];
  }

  return key;
}

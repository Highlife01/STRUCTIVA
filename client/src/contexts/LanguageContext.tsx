import React, { createContext, useCallback, useContext, useState, useEffect } from "react";
import { useLocation } from "wouter";
import { LANGUAGES, LanguageOption, getTranslation } from "../data/translations";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getLanguage } from "../config/siteConfig";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  currentLangObj: LanguageOption;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [location] = useLocation();
  const pathLanguage = location.split("/")[1];
  const urlLanguage = SUPPORTED_LANGUAGES.some((lang) => lang.code === pathLanguage)
    ? pathLanguage
    : DEFAULT_LANGUAGE;
  const [language, setLanguageState] = useState<string>(urlLanguage);

  const currentLangObj = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const isRTL = currentLangObj.dir === "rtl";

  const setLanguage = useCallback((lang: string) => {
    if (!SUPPORTED_LANGUAGES.some((supported) => supported.code === lang)) return;
    setLanguageState(lang);
    try {
      localStorage.setItem("structiva_lang", lang);
    } catch {
      // Language navigation also works when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    setLanguage(urlLanguage);
  }, [urlLanguage, setLanguage]);

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = getLanguage(language).hreflang;
  }, [language, isRTL]);

  const t = (key: string) => {
    return getTranslation(language, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentLangObj, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

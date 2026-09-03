import React, { createContext, useContext, useState, useEffect } from "react";
import { LANGUAGES, LanguageOption, getTranslation } from "../data/translations";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  currentLangObj: LanguageOption;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => {
    return localStorage.getItem("structiva_lang") || "tr";
  });

  const currentLangObj = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const isRTL = currentLangObj.dir === "rtl";

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("structiva_lang", lang);
    const targetObj = LANGUAGES.find((l) => l.code === lang);
    if (targetObj) {
      document.documentElement.dir = targetObj.dir;
      document.documentElement.lang = targetObj.code;
    }
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
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

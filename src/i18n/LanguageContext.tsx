import { createContext, useState, useEffect, type ReactNode } from "react";
import { type Locale } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
});

function detectLocale(): Locale {
  const saved = localStorage.getItem("chef-ai-lang");
  if (saved === "ru" || saved === "uz" || saved === "en") {
    return saved;
  }

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ru")) return "ru";
  if (browserLang.startsWith("uz")) return "uz";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("chef-ai-lang", newLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

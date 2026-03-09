import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

export function useTranslation() {
  const { locale, setLocale } = useContext(LanguageContext);
  const t = translations[locale];

  return { t, locale, setLocale };
}

import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { useTranslation } from "../../i18n/useTranslation";
import type { Locale } from "../../i18n/translations";

const locales: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation();
  const id = useId();

  return (
    <div
      className={cn(
        "relative flex items-center gap-0.5 rounded-xl border border-card-border bg-white/90 p-0.5 backdrop-blur-xl",
        className
      )}
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          className={cn(
            "relative z-10 cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-200",
            locale === code
              ? "text-white"
              : "text-muted hover:text-heading"
          )}
        >
          {locale === code && (
            <motion.div
              layoutId={`lang-indicator-${id}`}
              className="absolute inset-0 rounded-lg bg-primary shadow-sm"
              transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
}

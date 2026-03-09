import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { StoreButtons } from "../ui/StoreButtons";
import { useTranslation } from "../../i18n/useTranslation";
import type { Locale } from "../../i18n/translations";

import heroRu from "../../assets/screenshots/hero block image ru.png";
import heroEn from "../../assets/screenshots/hero block image eng.png";
import heroUz from "../../assets/screenshots/hero block image uzb.png";

const heroImages: Record<Locale, string> = {
  ru: heroRu,
  en: heroEn,
  uz: heroUz,
};

export function Hero() {
  const { t, locale } = useTranslation();

  return (
    <BackgroundGradient containerClassName="min-h-screen pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold leading-[1.1] text-brand-stone-900 md:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-stone-500 md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <StoreButtons />
            </div>
          </motion.div>

          {/* Phone mockup — language-dependent */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={heroImages[locale]}
              alt="AI Chef app"
              className="w-[280px] drop-shadow-2xl md:w-[340px]"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </BackgroundGradient>
  );
}

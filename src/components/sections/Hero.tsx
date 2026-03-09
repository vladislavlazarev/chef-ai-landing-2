import { motion } from "framer-motion";
import { Star } from "lucide-react";
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

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section className="bg-page-bg pt-32 pb-20 lg:min-h-screen lg:pb-24">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/[0.12] px-3.5 py-1.5">
            <Star size={14} className="fill-gold stroke-gold" />
            <span className="text-[13px] font-medium text-[#92700A]">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mt-5 text-[40px] font-extrabold leading-[1.08] tracking-[-0.02em] text-heading sm:text-5xl md:text-[56px] lg:text-[64px]"
          >
            {t.hero.title.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 max-w-[480px] text-lg leading-relaxed text-muted mx-auto lg:mx-0"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Store buttons */}
          <motion.div {...fadeUp(0.3)} className="mt-8 flex justify-center lg:justify-start">
            <StoreButtons />
          </motion.div>

          {/* Trust line */}
          <motion.p {...fadeUp(0.35)} className="mt-4 text-[13px] text-muted">
            {t.hero.trust}
          </motion.p>
        </div>

        {/* Phone */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Glow behind phone */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.08)_0%,transparent_70%)]" />
          <img
            src={heroImages[locale]}
            alt="AI Chef app"
            className="relative w-[280px] animate-float md:w-[320px] lg:w-[360px]"
            style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.10))" }}
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}

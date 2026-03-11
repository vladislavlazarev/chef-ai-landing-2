import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "../../i18n/useTranslation";
import type { Locale } from "../../i18n/translations";

import step1En from "../../assets/screenshots/banner 1 eng.png";
import step2En from "../../assets/screenshots/banner 2 eng.png";
import step3En from "../../assets/screenshots/banner 3 eng.png";

import step1Ru from "../../assets/screenshots/banner 1 ru + uzb.png";
import step2Ru from "../../assets/screenshots/banner 2 ru + uzb.png";
import step3Ru from "../../assets/screenshots/banner 3 ru + uzb.png";

const screenshotsEn = [step1En, step2En, step3En];
const screenshotsRu = [step1Ru, step2Ru, step3Ru];

const screenshotsByLocale: Record<Locale, string[]> = {
  en: screenshotsEn,
  ru: screenshotsRu,
  uz: screenshotsRu,
};

export function HowItWorks() {
  const { t, locale } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const screenshots = screenshotsByLocale[locale];

  const steps = [
    { num: "01", ...t.howItWorks.step1 },
    { num: "02", ...t.howItWorks.step2 },
    { num: "03", ...t.howItWorks.step3 },
  ];

  return (
    <section ref={ref} className="bg-page-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] font-bold text-heading md:text-[40px]">
            {t.howItWorks.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-lg text-muted">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={i}
                className={`flex flex-col items-center gap-10 lg:gap-16 ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-semibold text-heading md:text-[28px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[400px] text-base leading-relaxed text-body mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Screenshot */}
                <div className="flex-shrink-0">
                  <img
                    src={screenshots[i]}
                    alt={`Step ${i + 1}`}
                    className="w-[240px] rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:w-[280px]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

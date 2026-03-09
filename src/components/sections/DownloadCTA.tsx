import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { StoreButtons } from "../ui/StoreButtons";
import { useTranslation } from "../../i18n/useTranslation";

export function DownloadCTA() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref}>
      <BackgroundGradient containerClassName="py-20 md:py-28" interactive={false}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.h2
            className="text-3xl font-extrabold text-brand-stone-900 md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {t.cta.title}
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-brand-stone-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.cta.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StoreButtons />
          </motion.div>
        </div>
      </BackgroundGradient>
    </section>
  );
}

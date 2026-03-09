import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { StoreButtons } from "../ui/StoreButtons";
import { useTranslation } from "../../i18n/useTranslation";

export function DownloadCTA() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [t.cta.free, t.cta.noAds, t.cta.offline];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, #FFFDF7 0%, rgba(254,243,199,0.4) 50%, rgba(253,230,138,0.3) 100%)",
      }}
    >
      <div className="mx-auto max-w-[600px] px-4 text-center">
        <motion.h2
          className="text-4xl font-extrabold leading-[1.12] text-heading md:text-[44px]"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.cta.title}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.cta.subtitle}
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StoreButtons />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {badges.map((label, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#E0D5C8] px-3.5 py-1.5 text-[13px] text-muted"
            >
              <Check size={14} className="text-green-600" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

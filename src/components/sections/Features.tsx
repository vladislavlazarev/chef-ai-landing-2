import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Mic, Search, Sparkles, WifiOff, Heart } from "lucide-react";
import { useTranslation } from "../../i18n/useTranslation";

const featureConfig = [
  { key: "photo" as const, icon: Camera, bg: "bg-[#FEF3C7]", color: "text-[#D97706]", large: true },
  { key: "voice" as const, icon: Mic, bg: "bg-[#FFEDD5]", color: "text-[#EA580C]", large: false },
  { key: "search" as const, icon: Search, bg: "bg-[#FEF9C3]", color: "text-[#CA8A04]", large: false },
  { key: "recipes" as const, icon: Sparkles, bg: "bg-[#FFE4E6]", color: "text-[#E11D48]", large: true },
  { key: "offline" as const, icon: WifiOff, bg: "bg-[#DBEAFE]", color: "text-[#2563EB]", large: false },
  { key: "diet" as const, icon: Heart, bg: "bg-[#FCE7F3]", color: "text-[#DB2777]", large: false },
];

export function Features() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-section-alt py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] font-bold text-heading md:text-[40px]">
            {t.features.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-lg text-muted">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureConfig.map((feat, i) => {
            const Icon = feat.icon;
            const feature = t.features[feat.key];
            return (
              <motion.div
                key={feat.key}
                className={`group rounded-2xl border border-card-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${
                  feat.large ? "lg:col-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${feat.bg} ${feat.color}`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-heading">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

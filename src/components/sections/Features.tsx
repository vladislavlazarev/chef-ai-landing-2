import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Mic, Search, Sparkles } from "lucide-react";
import { useTranslation } from "../../i18n/useTranslation";
import { GlowingEffect } from "../ui/GlowingEffect";

const featureKeys = ["photo", "voice", "search", "recipes"] as const;

const featureConfig = [
  {
    icon: Camera,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
    hoverBg: "group-hover:bg-amber-100",
  },
  {
    icon: Mic,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
    hoverBg: "group-hover:bg-orange-100",
  },
  {
    icon: Search,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    hoverBg: "group-hover:bg-yellow-100",
  },
  {
    icon: Sparkles,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-500",
    hoverBg: "group-hover:bg-rose-100",
  },
];

export function Features() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-white py-20 md:py-28" ref={ref}>
      {/* Smooth fade-in from gradient sections */}
      <div className="pointer-events-none absolute top-0 left-0 -z-0 h-24 w-full bg-gradient-to-b from-brand-cream to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          className="text-center text-3xl font-bold text-brand-stone-900 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.features.title}
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {featureKeys.map((key, i) => {
            const { icon: Icon, bgColor, iconColor, hoverBg } =
              featureConfig[i];
            const feature = t.features[key];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative rounded-2xl border border-gray-200/60 p-1.5 md:rounded-[1.25rem] md:p-2">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white p-6 md:p-7">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${bgColor} ${iconColor} ${hoverBg} transition-all duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-brand-stone-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-stone-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

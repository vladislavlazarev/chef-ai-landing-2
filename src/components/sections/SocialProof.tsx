import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Star, ChefHat, Globe } from "lucide-react";
import { useTranslation } from "../../i18n/useTranslation";

function AnimatedNumber({ target, suffix = "", decimals = 0, inView }: { target: number; suffix?: string; decimals?: number; inView: boolean }) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  const formatted = decimals > 0
    ? value.toFixed(decimals)
    : Math.floor(value).toLocaleString();

  return <>{formatted}{suffix}</>;
}

export function SocialProof() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { icon: Download, value: 5000, suffix: "+", label: t.socialProof.downloads, decimals: 0 },
    { icon: Star, value: 4.8, suffix: "", label: t.socialProof.rating, decimals: 1 },
    { icon: ChefHat, value: 1000, suffix: "+", label: t.socialProof.recipes, decimals: 0 },
    { icon: Globe, value: 3, suffix: "", label: t.socialProof.languages, decimals: 0 },
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-section-alt py-10 md:py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-6 px-4 md:grid-cols-4 md:gap-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center ${
              i < stats.length - 1 ? "md:border-r md:border-[#E8D5C0]" : ""
            }`}
          >
            <stat.icon size={22} className="mb-2 text-primary" />
            <span className="text-[28px] font-bold text-heading md:text-[32px]">
              <AnimatedNumber
                target={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                inView={isInView}
              />
            </span>
            <span className="mt-1 text-[13px] font-medium text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

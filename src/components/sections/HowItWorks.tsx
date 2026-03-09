import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "../../i18n/useTranslation";

import banner1RuUz from "../../assets/screenshots/banner 1 ru + uzb.png";
import banner2RuUz from "../../assets/screenshots/banner 2 ru + uzb.png";
import banner3RuUz from "../../assets/screenshots/banner 3 ru + uzb.png";
import banner4RuUz from "../../assets/screenshots/banner 4 ru + uzb.png";
import banner1En from "../../assets/screenshots/banner 1 eng.png";
import banner2En from "../../assets/screenshots/banner 2 eng.png";
import banner3En from "../../assets/screenshots/banner 3 eng.png";
import banner4En from "../../assets/screenshots/banner 4 eng.png";

const bannerSets = {
  ru: [banner1RuUz, banner2RuUz, banner3RuUz, banner4RuUz],
  uz: [banner1RuUz, banner2RuUz, banner3RuUz, banner4RuUz],
  en: [banner1En, banner2En, banner3En, banner4En],
} as const;

export function HowItWorks() {
  const { t, locale } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const banners = bannerSets[locale];
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  // Auto-advance every 4 seconds, pause when tab is hidden
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(next, 4000);
    };

    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [next]);

  // Reset to 0 when language changes
  useEffect(() => {
    setCurrent(0);
  }, [locale]);

  const getStyle = (index: number): React.CSSProperties => {
    const total = banners.length;
    let diff = index - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      return {
        transform: "perspective(1200px) rotateY(0deg) translateX(-50%) scale(1)",
        zIndex: 10,
        opacity: 1,
      };
    }

    const sign = diff > 0 ? 1 : -1;

    if (absDiff === 1) {
      return {
        transform: `perspective(1200px) rotateY(${sign * -10}deg) translateX(calc(-50% + ${sign * 55}%)) scale(0.88)`,
        zIndex: 5,
        opacity: 0.5,
      };
    }

    return {
      transform: `perspective(1200px) rotateY(${sign * -18}deg) translateX(calc(-50% + ${sign * 105}%)) scale(0.75)`,
      zIndex: 1,
      opacity: 0.2,
    };
  };

  return (
    <>
      {/* Smooth transition from white to cream */}
      <div className="h-24 bg-gradient-to-b from-white to-brand-cream" />

      <section className="bg-brand-cream pb-20 md:pb-28" ref={ref}>
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            className="text-center text-3xl font-bold text-brand-stone-900 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {t.howItWorks.title}
          </motion.h2>

          {/* 3D Carousel */}
          <motion.div
            className="relative mt-14"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Carousel container — clip sides only, let height flow naturally */}
            <div className="relative mx-auto overflow-x-clip overflow-y-visible" style={{ paddingBottom: "clamp(238px, 47vw, 468px)" }}>
              {banners.map((src, i) => {
                const style = getStyle(i);
                const isActive = i === current;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-0 w-[42%] max-w-[306px] cursor-pointer sm:w-[32%] md:w-[25%]"
                    style={{
                      ...style,
                      transition:
                        "transform 0.6s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.5s ease",
                    }}
                    onClick={() => setCurrent(i)}
                  >
                    <img
                      src={src}
                      alt={`Step ${i + 1}`}
                      className="w-full select-none"
                      style={{
                        borderRadius: "1rem",
                        boxShadow: isActive
                          ? "0 25px 60px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(245,197,24,0.12)"
                          : "0 10px 30px -8px rgba(0,0,0,0.08)",
                      }}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full border border-gray-200 bg-white p-3 shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 md:left-6"
              aria-label="Previous"
            >
              <ChevronLeft
                size={18}
                strokeWidth={2.5}
                className="text-brand-stone-700"
              />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full border border-gray-200 bg-white p-3 shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 md:right-6"
              aria-label="Next"
            >
              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="text-brand-stone-700"
              />
            </button>

            {/* Step indicator */}
            <div className="mt-8 flex items-center justify-center gap-2.5">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`cursor-pointer rounded-full transition-all duration-400 ${
                    i === current
                      ? "h-2.5 w-10 bg-brand-amber shadow-sm"
                      : "h-2.5 w-2.5 bg-brand-stone-900/15 hover:bg-brand-stone-900/25"
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smooth transition from cream to next section */}
      <div className="h-24 bg-gradient-to-b from-brand-cream to-brand-cream-dark" />
    </>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "../../i18n/useTranslation";

import banner1En from "../../assets/screenshots/banner 1 eng.png";
import banner2En from "../../assets/screenshots/banner 2 eng.png";
import banner3En from "../../assets/screenshots/banner 3 eng.png";
import banner4En from "../../assets/screenshots/banner 4 eng.png";

import banner1Ru from "../../assets/screenshots/banner 1 ru + uzb.png";
import banner2Ru from "../../assets/screenshots/banner 2 ru + uzb.png";
import banner3Ru from "../../assets/screenshots/banner 3 ru + uzb.png";
import banner4Ru from "../../assets/screenshots/banner 4 ru + uzb.png";

const bannersEn = [banner1En, banner2En, banner3En, banner4En];
const bannersRu = [banner1Ru, banner2Ru, banner3Ru, banner4Ru];

const offsets = [0, -8, 0, -8];

export function Screenshots() {
  const { t, locale } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const screens = locale === "en" ? bannersEn : bannersRu;

  return (
    <section ref={ref} className="bg-section-alt py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <motion.h2
          className="mb-12 text-center text-[32px] font-bold text-heading md:text-[40px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.screenshots.title}
        </motion.h2>

        {/* Gallery */}
        <motion.div
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:justify-center lg:overflow-visible"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {screens.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-center"
              style={{ transform: `translateY(${offsets[i]}px)` }}
            >
              <img
                src={src}
                alt={`App screen ${i + 1}`}
                className="w-[200px] rounded-[2rem] border-[3px] border-heading shadow-[0_8px_32px_rgba(0,0,0,0.08)] lg:w-[220px]"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}

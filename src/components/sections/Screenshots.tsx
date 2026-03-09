import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "../../i18n/useTranslation";

import screen1 from "../../assets/screenshots/Главная.png";
import screen2 from "../../assets/screenshots/Айфон - 1.png";
import screen3 from "../../assets/screenshots/Список ингредиентов.png";
import screen4 from "../../assets/screenshots/Карточка генерации.png";
import screen5 from "../../assets/screenshots/Айфон - 2.png";

const screens = [screen1, screen2, screen3, screen4, screen5];
const offsets = [0, -8, 0, -8, 0];

export function Screenshots() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

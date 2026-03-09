import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslation } from "../../i18n/useTranslation";

export function Testimonials() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-page-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] font-bold text-heading md:text-[40px]">
            {t.testimonials.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-lg text-muted">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl border border-card-border bg-white p-7"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Decorative quote */}
              <span className="absolute top-4 right-5 font-serif text-[60px] leading-none text-gold/15 select-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-gold stroke-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-5 text-[15px] italic leading-[1.7] text-body">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="text-[15px] font-semibold text-heading">
                  {item.name}
                </p>
                <p className="text-[13px] text-muted">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

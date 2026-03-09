import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { StoreButtons } from "../ui/StoreButtons";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "../../i18n/useTranslation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 z-50"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`mx-auto max-w-[1200px] rounded-2xl border border-card-border bg-white/85 px-5 py-3 backdrop-blur-xl transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="font-cursive text-2xl">
            <span className="text-heading">Chef</span>
            <span className="text-primary"> AI</span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <a
              href="#"
              className="inline-flex h-10 cursor-pointer items-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {t.nav.download}
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cursor-pointer rounded-xl p-2 text-heading transition-colors hover:bg-gray-100"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col items-center gap-3 pt-4 pb-2">
                <StoreButtons className="flex-col" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

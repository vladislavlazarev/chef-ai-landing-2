import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { StoreButtons } from "../ui/StoreButtons";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200/60 bg-white/85 px-5 py-3 shadow-lg shadow-black/[0.03] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-cursive text-2xl text-brand-stone-900">
            Chef
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher />
            <StoreButtons />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cursor-pointer rounded-xl p-2 text-brand-stone-700 transition-colors hover:bg-gray-100"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col items-center gap-3 pt-4 pb-2">
                <StoreButtons />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

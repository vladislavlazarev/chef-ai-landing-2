import { useTranslation } from "../../i18n/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-stone-900 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <a href="#" className="font-cursive text-2xl text-white">
            Chef
          </a>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="#"
              className="cursor-pointer transition-colors duration-200 hover:text-white"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="cursor-pointer transition-colors duration-200 hover:text-white"
            >
              {t.footer.terms}
            </a>
            <a
              href="#"
              className="cursor-pointer transition-colors duration-200 hover:text-white"
            >
              {t.footer.support}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AI Chef. {t.footer.rights}.
        </div>
      </div>
    </footer>
  );
}

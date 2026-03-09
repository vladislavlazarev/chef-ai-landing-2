import { Instagram } from "lucide-react";
import { StoreButtons } from "../ui/StoreButtons";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "../../i18n/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  const links = [
    { label: t.footer.privacy, href: "#" },
    { label: t.footer.terms, href: "#" },
    { label: t.footer.support, href: "#" },
    { label: t.footer.contact, href: "#" },
  ];

  return (
    <footer className="bg-footer-bg pt-16 pb-8 text-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="font-cursive text-2xl text-white">
              Chef <span className="text-gold">AI</span>
            </a>
            <p className="mt-2 text-sm text-muted">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Store & social */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <StoreButtons className="[&_div]:h-10 [&_div]:text-xs" />
            <a
              href="https://www.instagram.com/chefai_uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-[#2A2520]" />

        {/* Bottom */}
        <div className="mt-5 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-[13px] text-[#6A6460]">
            &copy; {new Date().getFullYear()} Chef AI. {t.footer.rights}.
          </p>
          <LanguageSwitcher className="border-[#2A2520] bg-transparent" />
        </div>
      </div>
    </footer>
  );
}

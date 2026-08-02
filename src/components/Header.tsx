import { useState } from "react";
import { BUSINESS } from "../data/business";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#zonas", label: "Zonas" },
  { href: "#conocenos", label: "Conócenos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto-directo", label: "Contactar" },
];

const navLinkClass =
  "inline-flex items-center whitespace-nowrap text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] transition hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 rounded";

const mobileNavLinkClass =
  "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/78 shadow-[0_10px_30px_rgba(2,6,23,0.42)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/72">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/25 to-slate-950/10" />

      <div className="relative hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
          <a
            href="/"
            className="hidden shrink-0 text-sm font-bold uppercase tracking-[0.2em] text-white md:block md:w-[210px]"
          >
            Extradivertion
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden flex-1 items-center justify-center gap-8 text-[16px] font-semibold tracking-[0.03em] md:flex lg:gap-10"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#formulario"
            className="rounded-full bg-sky-700 px-6 py-3.5 text-[16px] font-semibold text-white shadow-[0_14px_34px_rgba(3,105,161,0.42)] transition hover:-translate-y-0.5 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:min-w-[210px] md:text-center"
          >
            Pedir presupuesto
          </a>
        </div>
      </div>

      <div className="relative md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_18px_rgba(0,0,0,0.20)]"
          >
            Extradivertion
          </a>

          <div className="flex items-center gap-2">
            <a
              href="#formulario"
              className="rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Presupuesto
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? "Cerrar" : "Menú"}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Navegación móvil"
            className="border-t border-white/10 bg-slate-950/96 px-4 py-3 backdrop-blur-xl"
          >
            <div className="grid gap-2">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMobileMenu} className={mobileNavLinkClass}>
                  {link.label}
                </a>
              ))}
              <a
                href={BUSINESS.whatsappHref}
                onClick={closeMobileMenu}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

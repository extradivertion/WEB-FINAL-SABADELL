import { BUSINESS } from "../data/business";
import type { PageConfig } from "../data/pageConfigs";
import { useHeroRotation } from "../hooks/useHeroRotation";
import { CtaButton } from "./ui";

export default function Hero({ pageConfig }: { pageConfig: PageConfig }) {
  const currentImage = useHeroRotation(pageConfig.heroImages.length);

  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950">
      {pageConfig.heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          fetchPriority={index === 0 ? "high" : "low"}
          loading="eager"
          decoding={index === 0 ? "sync" : "async"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-950/38 to-slate-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.08),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="animate-fade-in-up text-[34px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-7xl xl:text-8xl">
            <span className="block">{pageConfig.heroLine1}</span>
            <span className="mt-2 block bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_8px_26px_rgba(56,189,248,0.25)] md:mt-3">
              {pageConfig.heroLine2}
            </span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-lg md:mt-7 md:text-[23px] md:leading-9"
            style={{ animationDelay: "0.12s" }}
          >
            {pageConfig.heroSubtitle}
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10"
            style={{ animationDelay: "0.24s" }}
          >
            <CtaButton href="#formulario" size="lg" variant="solid-invert" className="w-full sm:w-auto">
              Pedir presupuesto
            </CtaButton>
            <CtaButton href={BUSINESS.whatsappHref} size="lg" variant="outline-dark" className="w-full sm:w-auto">
              Hablar por WhatsApp
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

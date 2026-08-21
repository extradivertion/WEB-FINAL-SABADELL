import { BUSINESS } from "../data/business";
import type { PageConfig } from "../data/pageConfigs";
import { useHeroRotation } from "../hooks/useHeroRotation";
import { CtaButton, InstantReplyBadge, LightningIcon, WhatsAppIcon } from "./ui";

export default function Hero({ pageConfig }: { pageConfig: PageConfig }) {
  const currentImage = useHeroRotation(pageConfig.heroImages.length);
  const [subtitleLead, ...subtitleRest] = pageConfig.heroSubtitle.split(". ");
  const subtitleTail = subtitleRest.join(". ");

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden bg-slate-950 md:min-h-[calc(100svh-6.75rem)]"
    >
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

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:pt-[clamp(1.5rem,5vh,3.5rem)] md:pb-[clamp(4.5rem,11vh,6rem)]">
        <div className="mx-auto max-w-5xl text-center">
          <h1
            className="text-[38px] font-display uppercase leading-[0.92] tracking-[0.005em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)] sm:text-6xl md:text-[clamp(3.25rem,min(7.6vw,13.5vh),7rem)]"
          >
            <span className="block">{pageConfig.heroLine1}</span>
            <span className="mt-2 block bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_8px_26px_rgba(56,189,248,0.25)] md:mt-3">
              {pageConfig.heroLine2}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-xl font-semibold leading-9 text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-2xl md:mt-[clamp(0.75rem,2.5vh,1.75rem)] md:text-[clamp(1.25rem,min(2.4vw,3.7vh),2.15rem)] md:leading-tight">
            {subtitleTail ? (
              <>
                <span className="text-sky-200/90">
                  ¡{subtitleLead}!
                </span>
                <br />
                {subtitleTail}
              </>
            ) : (
              pageConfig.heroSubtitle
            )}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5 md:mt-[clamp(2.5rem,4.8vh,3rem)]">
            <CtaButton href="#formulario" size="xl" variant="solid-invert" pulse className="w-full sm:w-auto">
              <InstantReplyBadge />
              <LightningIcon />
              Pedir presupuesto
            </CtaButton>
            <CtaButton href={BUSINESS.whatsappHref} size="xl" variant="outline-dark" className="w-full sm:w-auto">
              <WhatsAppIcon />
              Hablar por WhatsApp
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

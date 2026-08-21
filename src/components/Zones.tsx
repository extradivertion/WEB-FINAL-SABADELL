import type { PageConfig } from "../data/pageConfigs";
import { NAV_SERVICES, NAV_ZONES } from "../data/content";
import { BUSINESS } from "../data/business";
import { ArrowRightIcon, CtaButton, GlowBlobs, GradientText, LightningIcon, MapPinIcon, WhatsAppIcon } from "./ui";

const HIGHLIGHTS = [
  { value: "Barcelona", label: "zona principal" },
  { value: "Vallès", label: "cobertura habitual" },
  { value: "A medida", label: "según evento" },
];

export default function Zones({ pageConfig }: { pageConfig: PageConfig }) {
  return (
    <section id="zonas" className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-3" style={{ scrollMarginTop: "90px" }}>
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)] md:p-10 lg:p-12">
        <GlowBlobs />

        {/* Bloque superior: discurso a la izquierda, datos y acción a la derecha */}
        <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
              <MapPinIcon className="h-3.5 w-3.5" />
              Zonas de servicio
            </p>

            <h2 className="mt-4 font-display text-[32px] uppercase leading-[0.95] tracking-[0.005em] text-slate-950 sm:text-5xl md:text-6xl">
              {pageConfig.zoneHeadingMain}
              <GradientText className="block">{pageConfig.zoneHeadingHighlight}</GradientText>
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8">
              {pageConfig.zoneParagraph1}
            </p>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8">
              {pageConfig.zoneParagraph2}
            </p>
          </div>

          <div className="grid gap-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border-l-4 border-sky-500 bg-slate-50 px-4 py-3 transition hover:bg-sky-50"
              >
                <p className="font-display text-2xl uppercase leading-none tracking-[0.005em] text-slate-950">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}

            <CtaButton href="#formulario" size="lg" variant="solid" className="mt-2">
              <LightningIcon />
              Consultar disponibilidad
            </CtaButton>
            <CtaButton href={BUSINESS.whatsappHref} size="lg" variant="outline-light">
              <WhatsAppIcon className="h-5 w-5" />
              Preguntar por WhatsApp
            </CtaButton>
          </div>
        </div>

        {/* Panel oscuro a todo el ancho: los chips ocupan la fila entera */}
        <div className="relative isolate mt-8 overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.28)] md:mt-10 md:p-8">
          <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />

          <LinkGroup title="Ciudades donde pinchamos" items={NAV_ZONES} tone="neutral" />

          <div className="mt-7 grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-10">
            <LinkGroup title="Por tipo de evento" items={NAV_SERVICES} tone="accent" />

            <p className="text-[13px] leading-6 text-slate-400">
              ¿No ves tu zona? Escríbenos igualmente: valoramos desplazamiento, horario y necesidades
              técnicas para darte una respuesta realista.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkGroup({
  title,
  items,
  tone,
}: {
  title: string;
  items: { name: string; path: string }[];
  tone: "neutral" | "accent";
}) {
  const toneClasses =
    tone === "accent"
      ? "border-sky-300/25 bg-sky-300/[0.08] text-sky-100 hover:border-sky-300/50 hover:bg-sky-300/15"
      : "border-white/12 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/[0.12]";

  return (
    <div>
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300/80">{title}</p>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={`group inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 md:text-sm ${toneClasses}`}
          >
            {item.name}
            <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}

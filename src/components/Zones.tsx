import type { PageConfig } from "../data/pageConfigs";
import { NAV_SERVICES, NAV_ZONES } from "../data/content";
import { BUSINESS } from "../data/business";
import { CtaButton, GlowBlobs, GradientText } from "./ui";

export default function Zones({ pageConfig }: { pageConfig: PageConfig }) {
  return (
    <section id="zonas" className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-12" style={{ scrollMarginTop: "90px" }}>
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
        <GlowBlobs />

        <div className="relative grid gap-4 p-4 md:gap-6 md:p-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-stretch">
          <div className="rounded-[1.45rem] border border-slate-100 bg-gradient-to-br from-white via-sky-50/40 to-white p-5 md:rounded-[1.75rem] md:p-8 lg:p-9">
            <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.20em] text-sky-700 backdrop-blur md:px-4 md:text-xs md:tracking-[0.28em]">
              Zonas de servicio
            </p>

            <h2 className="mt-4 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              {pageConfig.zoneHeadingMain}
              <GradientText className="block">{pageConfig.zoneHeadingHighlight}</GradientText>
            </h2>

            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8">
              {pageConfig.zoneParagraph1}
            </p>

            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8">
              {pageConfig.zoneParagraph2}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 md:mt-7">
              <div className="rounded-[1.25rem] border border-sky-100 bg-white/80 p-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                <p className="text-xl font-black text-sky-700">Barcelona</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">zona principal</p>
              </div>
              <div className="rounded-[1.25rem] border border-sky-100 bg-white/80 p-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                <p className="text-xl font-black text-sky-700">Vallès</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">cobertura habitual</p>
              </div>
              <div className="rounded-[1.25rem] border border-sky-100 bg-white/80 p-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                <p className="text-xl font-black text-sky-700">A medida</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">según evento</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href="#formulario" variant="solid">
                Consultar disponibilidad
              </CtaButton>
              <CtaButton href={BUSINESS.whatsappHref} variant="outline-light">
                Preguntar por WhatsApp
              </CtaButton>
            </div>
          </div>

          <div className="flex h-full rounded-[1.45rem] bg-slate-950 p-4 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] md:rounded-[1.75rem] md:p-5 lg:p-6">
            <div className="flex min-h-full w-full flex-col rounded-[1.2rem] border border-white/12 bg-white/[0.04] p-4 text-center backdrop-blur md:rounded-[1.45rem] md:p-4">
              <p className="mb-3 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300/80">
                Ciudades
              </p>
              <div className="grid flex-1 auto-rows-fr grid-cols-2 gap-2.5 md:gap-3">
                {NAV_ZONES.map((zone) => (
                  <a
                    key={zone.name}
                    href={zone.path}
                    className="group flex min-h-[58px] items-center justify-center rounded-[1rem] border border-white/18 bg-white/[0.075] px-3 py-3 text-center shadow-[0_10px_20px_rgba(0,0,0,0.18)] ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-sky-200/35 hover:bg-white/[0.11] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 md:min-h-[64px] md:px-3.5 md:py-3.5"
                  >
                    <p className="text-[14px] font-bold leading-5 text-white md:text-[15px]">{zone.name}</p>
                  </a>
                ))}
              </div>

              <p className="mb-3 mt-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300/80">
                Servicios
              </p>
              <div className="grid auto-rows-fr grid-cols-2 gap-2.5 md:gap-3">
                {NAV_SERVICES.map((service) => (
                  <a
                    key={service.name}
                    href={service.path}
                    className="group flex min-h-[52px] items-center justify-center rounded-[1rem] border border-sky-300/25 bg-sky-300/[0.08] px-3 py-3 text-center shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-sky-300/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
                  >
                    <p className="text-[13px] font-bold leading-5 text-sky-100 md:text-[14px]">{service.name}</p>
                  </a>
                ))}
              </div>

              <div className="mt-3 rounded-[1.15rem] border border-sky-300/20 bg-sky-300/10 p-3.5 md:mt-4 md:rounded-[1.25rem] md:p-4">
                <p className="text-sm font-semibold leading-6 text-sky-50">
                  Si no ves tu zona, escríbenos igualmente. Valoramos desplazamiento, horario y necesidades técnicas
                  para darte una respuesta realista.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

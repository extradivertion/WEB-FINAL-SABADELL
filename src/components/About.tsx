import { BUSINESS } from "../data/business";
import { CtaButton, DiscIcon, GradientText, InstantReplyBadge, LightningIcon, WhatsAppIcon } from "./ui";

const STATS = [
  { value: "Desde 2022", label: "Creando ambiente" },
  { value: "+50 eventos/año", label: "En Barcelona y Vallès Occidental" },
  { value: "Atención directa", label: "Respuesta rápida por WhatsApp" },
];

export default function About() {
  return (
    <section
      id="conocenos"
      className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white via-sky-50/70 to-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:rounded-[2rem] md:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
        {/* Discurso */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700 backdrop-blur">
            <DiscIcon className="h-3.5 w-3.5" />
            DJ para eventos desde 2022
          </p>

          <h2 className="mt-4 font-display text-[32px] uppercase leading-[0.95] tracking-[0.005em] text-slate-950 sm:text-5xl md:text-6xl">
            <GradientText>Sobre</GradientText>
            <span className="block">Extradivertion</span>
          </h2>

          {/* Primer párrafo destacado como entradilla */}
          <p className="mt-5 max-w-2xl border-l-4 border-sky-500 pl-5 text-[17px] font-medium leading-8 text-slate-800 md:text-xl md:leading-9">
            Entendemos la música como una parte clave de la experiencia. No se trata solo de pinchar canciones,
            sino de crear el ambiente adecuado para que cada evento tenga identidad, ritmo y una energía que se
            note de verdad.
          </p>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base md:leading-8">
            Trabajamos bodas, eventos privados, corporativos, discotecas y celebraciones a medida en Barcelona y
            Vallès Occidental con una propuesta cuidada, cercana y profesional. Escuchamos lo que necesita cada
            cliente, adaptamos la sesión al espacio y buscamos que todo encaje desde el primer contacto hasta el
            último tema.
          </p>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base md:leading-8">
            Nuestra idea es simple: que organizar la música de tu evento sea fácil, que el resultado se vea
            profesional y que la experiencia se recuerde por cómo se vivió, no solo por cómo sonó.
          </p>

          <div className="mt-8 flex flex-col justify-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <CtaButton href="#formulario" size="xl" variant="solid" pulse className="mt-1 w-full sm:w-auto">
              <InstantReplyBadge />
              <LightningIcon />
              Pedir presupuesto
            </CtaButton>
            <CtaButton href={BUSINESS.whatsappHref} size="xl" variant="outline-light" className="w-full sm:w-auto">
              <WhatsAppIcon />
              Hablar por WhatsApp
            </CtaButton>
          </div>
        </div>

        {/* Panel con foto a sangre y los datos sobre el degradado */}
        <div className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-[0_18px_44px_rgba(15,23,42,0.28)]">
          <img
            src="/dj-locales-discotecas-barcelona.jpg"
            alt="Sesión de DJ de Extradivertion en un local de Barcelona"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/15" />

          <div className="grid gap-3.5 p-6 md:p-7">
            {STATS.map((stat) => (
              <div key={stat.value} className="border-l-4 border-sky-400 pl-4">
                <p className="font-display text-xl uppercase leading-none tracking-[0.005em] text-white md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

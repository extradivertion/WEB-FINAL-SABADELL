import { EVENT_SERVICE_CARDS, type ServiceCard } from "../data/content";
import { ArrowRightIcon, DiscIcon, GradientText } from "./ui";

// Bento asimétrico: la primera ocupa dos columnas, el resto una.
const SPAN_CLASSES = [
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 pb-3 pt-3 md:px-6 md:pb-3 md:pt-4" style={{ scrollMarginTop: "90px" }}>
      {/* Mismo encabezado que zonas, reseñas y FAQ: etiqueta, titular y entradilla */}
      <div className="mb-10 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
          <DiscIcon className="h-3.5 w-3.5" />
          Nuestros servicios
        </p>

        <h2 className="mt-4 text-[30px] font-display uppercase leading-[0.96] tracking-[0.005em] text-slate-950 drop-shadow-[0_2px_10px_rgba(15,23,42,0.06)] sm:text-4xl md:text-6xl">
          DJ para <GradientText>todo tipo</GradientText>
          <span className="block">de eventos</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8">
          Cada evento pide una música distinta. Ponemos el equipo, las luces y una sesión pensada para tu gente,
          sea una boda, una fiesta de empresa o una noche de local.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {EVENT_SERVICE_CARDS.map((card, index) => (
          <ServiceTile key={card.title} card={card} index={index} className={SPAN_CLASSES[index] ?? ""} />
        ))}
      </div>
    </section>
  );
}

function ServiceTile({ card, index, className }: { card: ServiceCard; index: number; className: string }) {
  const isWide = index === 0;

  return (
    <a
      href={card.link}
      className={`group relative isolate flex min-h-[260px] overflow-hidden rounded-3xl bg-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(15,23,42,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 md:min-h-[300px] ${className}`}
    >
      <img
        src={card.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10 transition duration-300 group-hover:from-slate-950 group-hover:via-slate-950/65" />

      <span
        aria-hidden="true"
        className="absolute right-5 top-4 text-[44px] font-display leading-none text-white/15 transition duration-300 group-hover:text-sky-300/40 md:text-[56px]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative mt-auto flex w-full flex-col p-5 md:p-6">
        <h3
          className={`font-display uppercase leading-[0.95] tracking-[0.005em] text-white ${isWide ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}
        >
          {card.title}
        </h3>

        <div className="grid grid-rows-[1fr] transition-all duration-300 md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
          <p className="overflow-hidden text-sm leading-6 text-slate-200 md:text-[15px]">
            <span className="block pt-2">{card.description}</span>
          </p>
        </div>

        <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-200 transition group-hover:gap-3 group-hover:text-white">
          Pedir presupuesto
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

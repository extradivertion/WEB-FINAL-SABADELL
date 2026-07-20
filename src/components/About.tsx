import { GradientText } from "./ui";

const STATS = [
  { value: "Desde 2022", label: "Creando ambiente" },
  { value: "+50 eventos/año", label: "En Barcelona y Vallès Occidental" },
  { value: "Atención directa", label: "Respuesta rápida por WhatsApp" },
];

export default function About() {
  return (
    <section id="conocenos" className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white via-sky-50/70 to-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:rounded-[2rem] md:p-8">
      <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-28 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:items-center">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.20em] text-sky-700 backdrop-blur md:px-4 md:text-xs md:tracking-[0.28em]">
              Extradivertion · DJ para eventos desde 2022
            </p>

            <h2 className="mt-4 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              <GradientText>Sobre</GradientText>
              <span className="block">Extradivertion</span>
            </h2>

            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-slate-700 md:text-lg md:leading-8">
              En Extradivertion entendemos la música como una parte clave de la experiencia. No se trata solo de
              pinchar canciones, sino de crear el ambiente adecuado para que cada evento tenga identidad, ritmo y una
              energía que se note de verdad.
            </p>

            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-700 md:text-lg md:leading-8">
              Trabajamos bodas, eventos privados, corporativos, discotecas y celebraciones a medida en Barcelona y
              Vallès Occidental con una propuesta cuidada, cercana y profesional. Escuchamos lo que necesita cada
              cliente, adaptamos la sesión al espacio y buscamos que todo encaje desde el primer contacto hasta el
              último tema.
            </p>

            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-700 md:text-lg md:leading-8">
              Nuestra idea es simple: que organizar la música de tu evento sea fácil, que el resultado se vea
              profesional y que la experiencia se recuerde por cómo se vivió, no solo por cómo sonó.
            </p>

            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.24)] transition hover:-translate-y-0.5 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[180px] items-center justify-center md:mx-0 md:justify-center">
            <div className="flex aspect-square w-full items-center justify-center rounded-[1.6rem] bg-white p-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <img
                src="/logo-sobre-nosotros.png"
                alt="Logo de Extradivertion, servicio de DJ para eventos en Barcelona"
                width={160}
                height={160}
                loading="lazy"
                decoding="async"
                className="max-h-[120px] w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[1.35rem] border border-white bg-white/80 p-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.05)]"
            >
              <p className="text-2xl font-black text-sky-700">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

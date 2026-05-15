import { useEffect } from "react";
import type { LocalSeoPage } from "./localSeoPages";

const whatsappHref =
  "https://wa.me/34654685158?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20un%20evento.";

export default function LocalSeoPageView({ page }: { page: LocalSeoPage }) {
  useEffect(() => {
    document.title = page.seoTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", page.seoDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://extradivertion.com${page.path}`);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", page.seoTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", page.seoDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `https://extradivertion.com${page.path}`);
  }, [page]);

  const faqs = [
    {
      question: `¿Cuánto cuesta contratar un DJ para eventos en ${page.city}?`,
      answer:
        "Depende de la fecha, duración, ubicación, número de personas y necesidades técnicas. Preparamos presupuestos a medida para que sepas qué incluye el servicio desde el principio.",
    },
    {
      question: "¿El servicio incluye sonido e iluminación?",
      answer:
        "Sí. Podemos incluir DJ profesional, cabina, mesa de mezclas, equipo de sonido, iluminación y montaje adaptado al espacio del evento.",
    },
    {
      question: "¿Podemos elegir el estilo musical?",
      answer:
        "Sí. Antes del evento hablamos contigo para entender estilos, canciones importantes, tipo de público y temas que prefieres evitar.",
    },
    {
      question: `¿Os desplazáis por ${page.city} y alrededores?`,
      answer:
        "Sí. Revisamos ubicación, horario y necesidades técnicas para darte una respuesta clara sobre disponibilidad y desplazamiento.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-[0_10px_30px_rgba(2,6,23,0.42)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
          <a
            href="/"
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white"
          >
            Extradivertion
          </a>
          <div className="flex items-center gap-2">
            <a href="/" className="hidden text-sm font-semibold text-white/85 transition hover:text-white sm:inline-flex">
              Volver a la home
            </a>
            <a
              href={whatsappHref}
              className="rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.35)] transition hover:bg-sky-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          className="relative overflow-hidden bg-slate-950 text-white"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.64), rgba(15,23,42,0.36)), url('${page.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24">
            <p className="mx-auto mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-100 backdrop-blur">
              Extradivertion · {page.city}
            </p>
            <h1 className="mx-auto max-w-5xl text-[38px] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-7xl">
              {page.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-xl md:leading-9">
              {page.subtitle}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-sky-900 shadow-[0_16px_34px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-100 md:text-base"
              >
                Pedir presupuesto por WhatsApp
              </a>
              <a
                href="mailto:smextradivertion@gmail.com"
                className="rounded-full border border-white/25 bg-white/12 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(2,6,23,0.22)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 md:text-base"
              >
                Escribir por correo
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:rounded-[2rem] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">
                Servicio local
              </p>
              <h2 className="mt-4 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Música, sonido
                <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                  y ambiente cuidado
                </span>
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-slate-700 md:text-lg">{page.description}</p>
              <p className="mt-4 text-[15px] leading-8 text-slate-700 md:text-lg">
                Trabajamos con fiestas privadas, cumpleaños, eventos corporativos, discotecas y celebraciones familiares. El objetivo es que la música encaje con el momento, el público y el estilo del evento.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] md:rounded-[2rem] md:p-6">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
                  Zonas cercanas
                </p>
                <div className="mt-4 grid gap-2">
                  {page.nearby.map((zone) => (
                    <div key={zone} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white">
                      {zone}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:rounded-[2rem] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">
              Qué incluye
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {["DJ profesional", "Equipo de sonido", "Cabina DJ", "Iluminación", "Música adaptada", "Montaje según espacio"].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-sky-100 bg-sky-50/70 p-5 text-center text-base font-bold text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:rounded-[2rem] md:p-8">
            <div className="mb-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">
                Preguntas frecuentes
              </p>
              <h2 className="mt-3 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 sm:text-4xl">
                Dudas sobre contratar DJ en {page.city}
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-[1.1rem] border border-slate-200 bg-slate-50/80 px-4 py-3.5 md:rounded-[1.25rem] md:px-5 md:py-4">
                  <summary className="cursor-pointer list-none text-[15px] font-bold text-slate-950 md:text-base">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

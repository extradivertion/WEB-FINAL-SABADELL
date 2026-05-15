import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { LocalSeoPage } from "./localSeoPages";

const formSubmitAction = "https://formsubmit.co/ajax/smextradivertion@gmail.com";
const whatsappHref =
  "https://wa.me/34654685158?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20un%20evento.";

export default function LocalSeoPageView({ page }: { page: LocalSeoPage }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: page.city,
    guests: "",
    hours: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");

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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = e.target.dataset.field;
    const { value } = e.target;
    if (!field) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(false);
    setFormError("");
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("Nombre", formData.name);
    payload.append("Teléfono", formData.phone);
    payload.append("Email", formData.email);
    payload.append("Tipo de evento", formData.eventType);
    payload.append("Fecha del evento", formData.eventDate || "No indicada");
    payload.append("Ubicación", formData.location || page.city);
    payload.append("Nº de personas aprox.", formData.guests || "No indicado");
    payload.append("Horas de servicio", formData.hours || "No indicado");
    payload.append("Detalles del evento", formData.details || "No indicado");
    payload.append("Página local", page.title);
    payload.append("Página de origen", window.location.href);
    payload.append("_subject", `Nueva solicitud de presupuesto · ${page.title}`);
    payload.append("_replyto", formData.email);
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("_url", "https://extradivertion.com/");

    try {
      const response = await fetch(formSubmitAction, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "No se pudo enviar la solicitud");
      }

      const result = await response.json();
      if (result?.success !== true && result?.success !== "true") {
        throw new Error("No se pudo enviar la solicitud");
      }

      setFormSent(true);
      setFormError("");
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        location: page.city,
        guests: "",
        hours: "",
        details: "",
      });
    } catch (error) {
      console.error(error);
      setFormError(
        "No se pudo enviar la solicitud. Escríbenos por WhatsApp o por correo y revisaremos el formulario. Si estás probando varias veces seguidas, FormSubmit puede bloquear envíos repetidos durante unos minutos."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustItems = [
    { label: "EVENTO A MEDIDA", value: "Personalizado", text: "música adaptada al público" },
    { label: "ZONA", value: page.city, text: "servicio local disponible" },
    { label: "MONTAJE", value: "DJ + equipo", text: "sonido, cabina e iluminación" },
  ];

  const eventCards = [
    {
      title: "Fiestas privadas",
      text: "Cumpleaños, celebraciones familiares, fiestas en locales y eventos privados.",
      image: "/servicio-fiestas.jpg",
    },
    {
      title: "Eventos de empresa",
      text: "Ambiente musical para empresas, cenas, celebraciones internas y eventos corporativos.",
      image: "/servicio-corporativos.jpg",
    },
    {
      title: "Discotecas y sesiones",
      text: "Sesiones adaptadas al público, al horario y al tipo de sala o celebración.",
      image: "/servicio-discoteca.jpg",
    },
  ];

  const includedItems = [
    "DJ profesional",
    "Mesa de mezclas",
    "Cabina DJ",
    "Equipo de sonido",
    "Iluminación",
    "Montaje adaptado",
  ];

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
        "Sí. Revisamos ubicación, horario y necesidades técnicas para darte una respuesta clara sobre disponibilidad, desplazamiento y montaje.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-slate-100 text-slate-900"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-[0_10px_30px_rgba(2,6,23,0.42)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
          <a
            href="/"
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white"
          >
            Extradivertion
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="hidden text-sm font-semibold text-white/85 transition hover:text-white sm:inline-flex"
            >
              Volver a la home
            </a>
            <a
              href="#formulario-local"
              className="rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.35)] transition hover:bg-sky-800"
            >
              Presupuesto
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
                href="#formulario-local"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-sky-900 shadow-[0_16px_34px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-100 md:text-base"
              >
                Pedir presupuesto
              </a>
              <a
                href={whatsappHref}
                className="rounded-full border border-white/25 bg-white/12 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(2,6,23,0.22)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 md:text-base"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="relative -mt-6 z-10 mx-auto max-w-5xl px-4 pb-6 md:px-6">
          <div className="grid gap-3 md:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.35rem] border border-white/40 bg-white/80 px-4 py-4 text-center shadow-[0_16px_34px_rgba(15,23,42,0.10)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(15,23,42,0.14)]"
              >
                <div className="mx-auto inline-flex rounded-full bg-sky-100/90 px-4 py-1.5 shadow-[0_8px_18px_rgba(14,165,233,0.12)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">
                    {item.label}
                  </p>
                </div>
                <p className="mt-3 text-[24px] font-black leading-tight text-slate-950 md:text-[28px]">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[15px] font-semibold leading-5 text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:rounded-[2rem] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">
              Servicio local
            </p>
            <h2 className="mt-4 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              DJ para {page.serviceFocus}
              <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                en {page.city}
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-slate-700 md:text-lg">
              {page.description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="grid gap-5 md:grid-cols-3">
            {eventCards.map((item) => (
              <a
                key={item.title}
                href="#formulario-local"
                className="group relative min-h-[240px] overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:rounded-[1.75rem]"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(2,6,23,0.86), rgba(2,6,23,0.22)), url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative flex h-full min-h-[240px] flex-col items-center justify-end p-6 text-center">
                  <h3 className="text-2xl font-black uppercase leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{item.text}</p>
                  <span className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-[0_10px_25px_rgba(255,255,255,0.18)] transition group-hover:-translate-y-0.5 group-hover:bg-slate-100">
                    Pedir presupuesto
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
            <div className="overflow-hidden rounded-[1.5rem] border border-sky-100 bg-slate-950 p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,0.14)] md:rounded-[2rem] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
                Servicio incluido
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight text-white md:text-4xl">
                <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                  Equipo disponible
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Todo lo necesario para ofrecer una sesión DJ cuidada, profesional y adaptada al espacio de tu evento.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {includedItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 px-4 py-5 text-center text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.20)] backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] md:rounded-[2rem] md:p-6">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
                  Zonas cercanas
                </p>
                <div className="mt-4 grid gap-2">
                  {page.nearby.map((zone) => (
                    <div
                      key={zone}
                      className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white"
                    >
                      {zone}
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-[1.15rem] border border-sky-300/20 bg-sky-300/10 p-4 text-sm font-semibold leading-6 text-sky-50">
                  Si tu evento está cerca de {page.city}, escríbenos y revisamos disponibilidad, desplazamiento y montaje.
                </div>
              </div>
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
                <details
                  key={faq.question}
                  className="rounded-[1.1rem] border border-slate-200 bg-slate-50/80 px-4 py-3.5 md:rounded-[1.25rem] md:px-5 md:py-4"
                >
                  <summary className="cursor-pointer list-none text-[15px] font-bold text-slate-950 md:text-base">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="formulario-local"
          className="border-t border-sky-100 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 px-4 py-10 text-white md:px-6 md:py-14"
        >
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.18)] backdrop-blur md:rounded-[2rem] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
                Presupuesto DJ en {page.city}
              </p>
              <h2 className="mt-3 text-[28px] font-black uppercase leading-[0.96] tracking-tight text-white md:text-5xl">
                Solicita tu propuesta <span className="block text-sky-200">para el evento</span>
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                Déjanos la información básica y te responderemos con una propuesta adaptada para tu evento en {page.city} o alrededores.
              </p>

              <form className="mt-6 grid gap-4" onSubmit={handleSubmit} acceptCharset="UTF-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="Nombre"
                    data-field="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />
                  <input
                    type="tel"
                    name="Teléfono"
                    data-field="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    name="Email"
                    data-field="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />
                  <input
                    type="text"
                    name="Tipo de evento"
                    data-field="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    placeholder="Tipo de evento: cumpleaños, empresa, discoteca..."
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                    <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
                      Fecha del evento
                    </label>
                    <input
                      type="date"
                      name="Fecha del evento"
                      data-field="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-white outline-none"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                    <span className="text-sky-200">📍</span>
                    <input
                      type="text"
                      name="Ubicación"
                      data-field="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder={page.city}
                      className="w-full bg-transparent text-white placeholder:text-slate-300 outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                    <span className="text-sky-200">👤</span>
                    <input
                      type="text"
                      name="Nº de personas aprox."
                      data-field="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="Nº de personas aprox."
                      className="w-full bg-transparent text-white placeholder:text-slate-300 outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                    <span className="text-sky-200">⏱️</span>
                    <select
                      name="Horas de servicio"
                      data-field="hours"
                      value={formData.hours}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-white outline-none"
                    >
                      <option value="" disabled className="text-slate-900">
                        Horas de servicio
                      </option>
                      <option value="2 horas" className="text-slate-900">2 horas</option>
                      <option value="3 horas" className="text-slate-900">3 horas</option>
                      <option value="4 horas" className="text-slate-900">4 horas</option>
                      <option value="5 horas" className="text-slate-900">5 horas</option>
                      <option value="6 horas" className="text-slate-900">6 horas</option>
                      <option value="Más de 6 horas" className="text-slate-900">Más de 6 horas</option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={5}
                  name="Detalles del evento"
                  data-field="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos qué necesitas: interior o exterior, horario, estilo musical, tipo de público, si necesitas equipo de sonido e iluminación o cualquier detalle importante"
                  className="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-sky-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
                </button>

                {formSent && (
                  <div className="rounded-[1.2rem] border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-100">
                    Solicitud enviada correctamente. Te contactaremos lo más rápido posible para preparar una propuesta a medida.
                  </div>
                )}

                {formError && (
                  <div className="rounded-[1.2rem] border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-100">
                    {formError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <a
        href={whatsappHref}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-sky-700 px-4 py-2.5 text-xs font-semibold text-white shadow-2xl transition hover:bg-sky-800 md:bottom-5 md:right-5 md:px-5 md:py-3 md:text-sm"
      >
        WhatsApp
      </a>
    </div>
  );
}

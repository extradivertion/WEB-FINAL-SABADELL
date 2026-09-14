import { useEffect, useState } from "react";
import { BUSINESS } from "../data/business";

export default function WhatsAppFloatingButton() {
  // El boton flota abajo a la derecha, justo donde cae el boton de avanzar del
  // formulario: si coinciden, el dedo abre WhatsApp en vez de pasar de pregunta.
  // Mientras la seccion de contacto esta en pantalla lo escondemos, que ahi ya
  // hay WhatsApp, telefono y correo a la vista.
  const [oculto, setOculto] = useState(false);

  useEffect(() => {
    const contacto = document.getElementById("contacto");
    if (!contacto) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOculto(entry.isIntersecting),
      { rootMargin: "0px 0px -25% 0px" }
    );

    observer.observe(contacto);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={BUSINESS.whatsappHref}
      className={`fixed bottom-4 right-4 z-50 rounded-full bg-sky-700 px-4 py-2.5 text-xs font-semibold text-white shadow-2xl transition duration-300 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:bottom-5 md:right-5 md:px-5 md:py-3 md:text-sm ${
        oculto ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
      aria-hidden={oculto}
      tabIndex={oculto ? -1 : undefined}
      aria-label="Hablar por WhatsApp con Extradivertion"
    >
      WhatsApp
    </a>
  );
}

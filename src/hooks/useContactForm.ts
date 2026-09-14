import { useState, type ChangeEvent, type FormEvent } from "react";
import { BUSINESS } from "../data/business";
import { reportConversionAndRedirect } from "./useGoogleAds";

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  guests: string;
  hours: string;
  venueType: string;
  details: string;
};

const emptyForm = (location: string): ContactFormData => ({
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  location,
  guests: "",
  hours: "",
  venueType: "",
  details: "",
});

/**
 * El campo <input type="date"> entrega la fecha como "2026-10-15". Se
 * construye el Date con los tres numeros por separado y no con `new Date(iso)`,
 * porque esa forma interpreta la cadena como UTC y en España adelanta o
 * atrasa un dia segun la hora.
 */
const formatearFecha = (iso: string) => {
  const [anio, mes, dia] = iso.split("-").map(Number);
  if (!anio || !mes || !dia) return iso;

  const fecha = new Date(anio, mes - 1, dia);
  const largo = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const corto = `${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${anio}`;

  return `${largo.charAt(0).toUpperCase()}${largo.slice(1)} — ${corto}`;
};

const fechaCorta = (iso: string) => {
  const [anio, mes, dia] = iso.split("-").map(Number);
  if (!anio || !mes || !dia) return "";
  return `${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${anio}`;
};

type UseContactFormOptions = {
  defaultLocation: string;
  pageLabel: string;
};

export function useContactForm({ defaultLocation, pageLabel }: UseContactFormOptions) {
  const [formData, setFormData] = useState<ContactFormData>(() => emptyForm(defaultLocation));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = e.target.dataset.field as keyof ContactFormData | undefined;
    const { value } = e.target;
    if (!field) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const setField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    const ubicacion = formData.location || defaultLocation || "No indicada";
    const fecha = formData.eventDate ? formatearFecha(formData.eventDate) : "Sin fecha cerrada";

    const payload = new FormData();

    // Lo primero, lo que hace falta para llamar
    payload.append("👤 Nombre", formData.name);
    payload.append("📞 Teléfono", formData.phone);
    payload.append("✉️ Email", formData.email || "No lo ha dejado");

    // El evento
    payload.append("🎉 Tipo de evento", formData.eventType);
    payload.append("📅 Fecha", fecha);
    payload.append("📍 Dónde se celebra", ubicacion);
    payload.append("👥 Invitados aprox.", formData.guests || "No indicado");
    payload.append("⏱️ Horas de servicio", formData.hours || "No indicado");
    payload.append("🏠 Interior o exterior", formData.venueType || "No indicado");
    payload.append("📝 Lo que nos cuenta", formData.details || "Nada más");

    // Para saber de dónde viene la solicitud
    payload.append("🌐 Página de la web", pageLabel);
    payload.append("🔗 Enlace exacto", window.location.href);

    // Asunto con lo esencial, para identificarlo desde la bandeja de entrada
    const asunto = [
      formData.eventType || "Evento",
      ubicacion !== "No indicada" ? `en ${ubicacion}` : "",
      formData.eventDate ? `· ${fechaCorta(formData.eventDate)}` : "",
      `· ${formData.name}`,
    ]
      .filter(Boolean)
      .join(" ");

    payload.append("_subject", `Presupuesto: ${asunto}`);
    if (formData.email.trim()) {
      // Solo si lo han dejado: un _replyto vacio hace fallar el envio.
      payload.append("_replyto", formData.email.trim());
    }
    payload.append("_template", "box");
    payload.append("_captcha", "false");
    payload.append("_url", `${BUSINESS.siteUrl}/`);

    try {
      const response = await fetch(BUSINESS.formSubmitAction, {
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

      reportConversionAndRedirect(BUSINESS.thankYouPath);
    } catch (error) {
      console.error(error);
      setFormError(
        "No se pudo enviar la solicitud. Escríbenos por WhatsApp o por correo y revisaremos el formulario. Si estás probando varias veces seguidas, FormSubmit puede bloquear envíos repetidos durante unos minutos."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, isSubmitting, formError, handleInputChange, setField, handleSubmit };
}

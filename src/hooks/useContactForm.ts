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
  soundEquipment: string;
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
  soundEquipment: "",
  venueType: "",
  details: "",
});

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

    const payload = new FormData();
    payload.append("Nombre", formData.name);
    payload.append("Teléfono", formData.phone);
    payload.append("Email", formData.email);
    payload.append("Tipo de evento", formData.eventType);
    payload.append("Fecha del evento", formData.eventDate || "No indicada");
    payload.append("Ubicación", formData.location || defaultLocation || "No indicada");
    payload.append("Página local", pageLabel);
    payload.append("Nº de personas aprox.", formData.guests || "No indicado");
    payload.append("Horas de servicio", formData.hours || "No indicado");
    payload.append("Equipo de sonido en el lugar", formData.soundEquipment || "No indicado");
    payload.append("Interior o exterior", formData.venueType || "No indicado");
    payload.append("Detalles del evento", formData.details || "No indicado");
    payload.append("Página de origen", window.location.href);
    payload.append("_subject", "Nueva solicitud de presupuesto · Extradivertion");
    payload.append("_replyto", formData.email);
    payload.append("_template", "table");
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

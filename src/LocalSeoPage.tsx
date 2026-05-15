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
}

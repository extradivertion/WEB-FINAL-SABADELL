import { BUSINESS } from "../data/business";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={BUSINESS.whatsappHref}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-sky-700 px-4 py-2.5 text-xs font-semibold text-white shadow-2xl transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:bottom-5 md:right-5 md:px-5 md:py-3 md:text-sm"
      aria-label="Hablar por WhatsApp con Extradivertion"
    >
      WhatsApp
    </a>
  );
}

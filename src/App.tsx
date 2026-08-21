import { useMemo } from "react";

import { BUSINESS } from "./data/business";
import { getPageConfig } from "./data/pageConfigs";
import { buildFaqs } from "./data/content";
import { useSeoMeta } from "./hooks/useSeoMeta";
import { useClickConversionTracking } from "./hooks/useGoogleAds";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientsCarousel from "./components/ClientsCarousel";
import Services from "./components/Services";
import QuoteCta from "./components/QuoteCta";
import Zones from "./components/Zones";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import DirectContact from "./components/DirectContact";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import ThankYouPage from "./components/ThankYouPage";

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const isThankYouPage = pathname === BUSINESS.thankYouPath;

  // Memoizados para que el efecto de useSeoMeta no se vuelva a ejecutar en cada render.
  const pageConfig = useMemo(() => getPageConfig(pathname), [pathname]);
  const faqs = useMemo(() => buildFaqs(pageConfig), [pageConfig]);

  useSeoMeta(pageConfig, faqs, isThankYouPage);
  useClickConversionTracking();

  if (isThankYouPage) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main>
        <Hero pageConfig={pageConfig} />
        <ClientsCarousel />
        <Services />
        <QuoteCta />

        <Zones pageConfig={pageConfig} />

        <section className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-3">
          <div className="grid gap-6">
            <About />
            <Equipment />
            <Gallery />
            <Testimonials />
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section
          id="contacto"
          className="relative bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 pb-3 pt-20 text-white md:pt-28"
        >
          {/* Fundido de entrada: del gris de la página al azul, sin corte seco */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-100 via-slate-100/45 to-slate-100/0 md:h-28"
          />
          {/* Fundido de salida hacia el negro del pie */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-slate-950/0 to-slate-950 md:h-20"
          />

          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6">
              <ContactForm pageConfig={pageConfig} />
              <DirectContact />
            </div>
          </div>
        </section>
      </main>

      <Footer pageConfig={pageConfig} />
      <WhatsAppFloatingButton />
    </div>
  );
}

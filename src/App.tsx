import { useMemo } from "react";

import { BUSINESS } from "./data/business";
import { getPageConfig } from "./data/pageConfigs";
import { buildFaqs } from "./data/content";
import { useSeoMeta } from "./hooks/useSeoMeta";
import { useClickConversionTracking } from "./hooks/useGoogleAds";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
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
        <TrustBar pageConfig={pageConfig} />
        <Services pageConfig={pageConfig} />

        <section className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-12">
          <Zones pageConfig={pageConfig} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-10">
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
          className="border-t border-sky-100 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-9 md:px-6 md:py-12">
            <div className="grid gap-10">
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

import { BUSINESS, getCanonicalUrl } from "./business";
import type { PageConfig } from "./pageConfigs";
import type { FaqItem } from "./content";

/**
 * Todo lo que va en el <head> de una página. Lo usan useSeoMeta (navegador)
 * y scripts/prerender.mjs (HTML estático de cada ruta), así ambos coinciden.
 */
export type SeoData = {
  title: string;
  description: string;
  robots: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  schema: object | null;
};

export function buildSeoData(pageConfig: PageConfig, faqs: FaqItem[], isThankYouPage: boolean): SeoData {
  const canonicalUrl = getCanonicalUrl(pageConfig.path);

  const base = {
    title: isThankYouPage ? "Solicitud enviada | Extradivertion" : pageConfig.seoTitle,
    description: isThankYouPage
      ? "Gracias por tu solicitud de presupuesto. Te contactaremos lo antes posible."
      : pageConfig.seoDescription,
    robots: isThankYouPage ? "noindex, nofollow" : "index, follow",
    canonicalUrl,
    ogTitle: pageConfig.seoTitle,
    ogDescription: pageConfig.ogDescription,
    ogImage: `${BUSINESS.siteUrl}${pageConfig.heroImages[0]}`,
  };

  if (isThankYouPage) {
    return { ...base, schema: null };
  }

  const localBusinessSchema = {
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    "@id": `${canonicalUrl}#extradivertion`,
    name: BUSINESS.name,
    url: canonicalUrl,
    image: `${BUSINESS.siteUrl}/logo-sobre-nosotros.png`,
    email: BUSINESS.email,
    telephone: BUSINESS.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    areaServed: pageConfig.areaServed,
    description: pageConfig.seoDescription,
    priceRange: "€€",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${pageConfig.heroLine1} ${pageConfig.heroLine2}` },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "DJ para bodas en Barcelona" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "DJ con sonido e iluminación para eventos de empresa" },
      },
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BUSINESS.siteUrl}/` },
      ...(pageConfig.path === "/"
        ? []
        : [{ "@type": "ListItem", position: 2, name: pageConfig.seoTitle.split("|")[0].trim(), item: canonicalUrl }]),
    ],
  };

  return {
    ...base,
    schema: {
      "@context": "https://schema.org",
      "@graph": [localBusinessSchema, faqSchema, breadcrumbSchema],
    },
  };
}

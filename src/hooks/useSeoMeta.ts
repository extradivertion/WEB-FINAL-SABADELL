import { useEffect } from "react";
import { BUSINESS, getCanonicalUrl } from "../data/business";
import type { PageConfig } from "../data/pageConfigs";
import type { FaqItem } from "../data/content";

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
};

export function useSeoMeta(pageConfig: PageConfig, faqs: FaqItem[], isThankYouPage: boolean) {
  const canonicalUrl = getCanonicalUrl(pageConfig.path);

  useEffect(() => {
    document.title = isThankYouPage ? "Solicitud enviada | Extradivertion" : pageConfig.seoTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: isThankYouPage
        ? "Gracias por tu solicitud de presupuesto. Te contactaremos lo antes posible."
        : pageConfig.seoDescription,
    });

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: isThankYouPage ? "noindex, nofollow" : "index, follow",
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: pageConfig.seoTitle,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: pageConfig.ogDescription,
    });

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${BUSINESS.siteUrl}${pageConfig.heroImages[0]}`,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: pageConfig.seoTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: pageConfig.ogDescription,
    });

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    if (isThankYouPage) {
      return;
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
        addressLocality: "Sabadell",
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

    const schema = {
      "@context": "https://schema.org",
      "@graph": [localBusinessSchema, faqSchema, breadcrumbSchema],
    };

    let schemaScript = document.getElementById("extradivertion-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "extradivertion-schema";
      schemaScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, [canonicalUrl, pageConfig, faqs, isThankYouPage]);

  return { canonicalUrl };
}

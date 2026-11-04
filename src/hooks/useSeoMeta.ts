import { useEffect } from "react";
import type { PageConfig } from "../data/pageConfigs";
import type { FaqItem } from "../data/content";
import { buildSeoData } from "../data/seo";

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
  useEffect(() => {
    const seo = buildSeoData(pageConfig, faqs, isThankYouPage);

    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: seo.robots });

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.ogTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.ogDescription });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: seo.canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: seo.ogImage });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.ogTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.ogDescription });

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: seo.canonicalUrl });

    if (!seo.schema) {
      return;
    }

    let schemaScript = document.getElementById("extradivertion-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "extradivertion-schema";
      schemaScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(seo.schema);
  }, [pageConfig, faqs, isThankYouPage]);
}

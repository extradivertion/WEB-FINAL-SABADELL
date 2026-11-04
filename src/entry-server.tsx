import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { BUSINESS } from "./data/business";
import { buildFaqs } from "./data/content";
import { getPageConfig, pageConfigs } from "./data/pageConfigs";
import { buildSeoData } from "./data/seo";

/** Rutas que se generan como HTML estático en el build. */
export const routes = [...pageConfigs.map((page) => page.path), BUSINESS.thankYouPath];

export function render(path: string) {
  const isThankYouPage = path === BUSINESS.thankYouPath;
  const pageConfig = getPageConfig(path);
  const seo = buildSeoData(pageConfig, buildFaqs(pageConfig), isThankYouPage);

  const html = renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>
  );

  return { html, seo };
}

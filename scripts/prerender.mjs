// Genera un HTML estático por ruta después de `vite build`, para que Google
// reciba en cada URL su propio título, descripción, canonical, JSON-LD y el
// texto de la página sin tener que ejecutar JavaScript.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = `${root}dist`;
const serverEntry = `${root}dist-server/entry-server.js`;

const { render, routes } = await import(serverEntry);
const template = await readFile(`${dist}/index.html`, "utf8");

const SEO_BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
if (!SEO_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error("prerender: index.html no tiene el bloque seo:start/seo:end o el <div id=\"root\">");
}

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const headFor = (seo) =>
  [
    `<title>${escapeAttr(seo.title)}</title>`,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    `<meta name="robots" content="${seo.robots}" />`,
    `<link rel="canonical" href="${seo.canonicalUrl}" />`,
    `<meta property="og:title" content="${escapeAttr(seo.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(seo.ogDescription)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${seo.canonicalUrl}" />`,
    `<meta property="og:image" content="${seo.ogImage}" />`,
    `<meta property="og:site_name" content="Extradivertion" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(seo.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(seo.ogDescription)}" />`,
    seo.schema
      ? `<script id="extradivertion-schema" type="application/ld+json">${JSON.stringify(seo.schema).replace(/</g, "\\u003c")}</script>`
      : "",
  ]
    .filter(Boolean)
    .join("\n    ");

for (const route of routes) {
  const { html, seo } = render(route);
  const page = template
    .replace(SEO_BLOCK, headFor(seo))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  // Con cleanUrls en vercel.json, /dj-bodas-barcelona sirve dj-bodas-barcelona.html.
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await writeFile(`${dist}/${file}`, page);
  console.log(`prerender: ${route} -> dist/${file}`);
}

// URLs que no existen: Vercel sirve 404.html con estado 404 y la web pinta la portada.
const notFound = template.replace(
  SEO_BLOCK,
  [
    `<title>Página no encontrada | Extradivertion</title>`,
    `<meta name="robots" content="noindex, follow" />`,
  ].join("\n    ")
);
await writeFile(`${dist}/404.html`, notFound);
console.log("prerender: 404 -> dist/404.html");

await rm(`${root}dist-server`, { recursive: true, force: true });

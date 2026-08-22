/**
 * Build-time head prerenderer.
 *
 * WHY THIS EXISTS
 * ---------------
 * Before this script, every URL on the site returned one byte-identical HTML
 * document: the same <title>, the same description, no canonical, and an empty
 * <body><div id="root"></div></body>. Search engines crawl HTML first and run
 * JavaScript later, so at crawl time no page on the site was distinguishable
 * from any other.
 *
 * This script runs after `vite build` and writes one real static HTML file per
 * public route, each carrying that route's own <title>, description, canonical,
 * Open Graph, Twitter and JSON-LD tags.
 *
 * WHAT IT DOES NOT DO
 * -------------------
 * It only rewrites <head>. The <body> is left exactly as Vite emitted it, so
 * the identical, unmodified React app boots and renders every page. No markup,
 * styling, animation, routing, authentication or application behaviour is
 * affected in any way.
 *
 * Body content is deliberately NOT server-rendered: `src/lib/auth.ts` reads
 * `sessionStorage` during render, so SSR would require editing authentication
 * code. See SEO_AUDIT_REPORT.md §7.
 */

import { createServer } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

/**
 * Route subtrees intentionally left to the SPA fallback rewrite in vercel.json.
 *
 * These sit behind an authentication guard, their slugs are only meaningful to
 * signed-in users, and they must never be indexed — so there is nothing to
 * prerender. They are listed here so the coverage check below can tell
 * "deliberately excluded" apart from "accidentally forgotten".
 */
const REWRITE_COVERED = ["/client-articles", "/tlc-articles"];

/** Routes prerendered but excluded from the sitemap (portal pages). */
const SITEMAP_EXCLUDED = new Set([
  "/login",
  "/tlc-login",
  "/client-dashboard",
  "/tlc-dashboard",
]);

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const escapeText = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** `<` is escaped so an article title can never terminate the script element. */
const escapeJsonLd = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

/**
 * Strips the placeholder SEO tags that ship in `index.html` so that each
 * generated page ends up with exactly one title, one description and one
 * canonical — never a duplicate pair.
 */
function stripPlaceholderTags(html) {
  return html
    .replace(/[ \t]*<title>[\s\S]*?<\/title>\r?\n?/gi, "")
    .replace(/[ \t]*<meta\s+name="description"[^>]*>\r?\n?/gi, "")
    .replace(/[ \t]*<meta\s+property="og:[^"]*"[^>]*>\r?\n?/gi, "")
    .replace(/[ \t]*<meta\s+name="twitter:[^"]*"[^>]*>\r?\n?/gi, "")
    .replace(/[ \t]*<link\s+rel="canonical"[^>]*>\r?\n?/gi, "");
}

function buildHeadTags({ seo, canonical, jsonLd }) {
  const tags = [
    `<title>${escapeText(seo.title)}</title>`,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
  ];

  // Only emitted where it is actually needed. Indexable pages are left without
  // a robots tag, which is equivalent to the "index, follow" default.
  if (seo.noindex) {
    tags.push(`<meta name="robots" content="noindex, follow" />`);
  }

  tags.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="The Legal Circle" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(seo.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(seo.ogDescription)}" />`,
    // `summary` renders correctly without an image. No og:image is emitted
    // because the repository contains no asset at a usable social-card size,
    // and inventing one is out of scope.
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttr(seo.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(seo.ogDescription)}" />`,
  );

  if (jsonLd) {
    tags.push(
      `<script type="application/ld+json">${escapeJsonLd(jsonLd)}</script>`,
    );
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
}

function renderPage(template, page) {
  const head = buildHeadTags(page);
  const stripped = stripPlaceholderTags(template);

  if (!stripped.includes("</head>")) {
    throw new Error("prerender: dist/index.html has no </head> to inject into");
  }

  return stripped.replace(/[ \t]*<\/head>/, `${head}\n  </head>`);
}

async function writePage(routePath, html) {
  const target =
    routePath === "/"
      ? path.join(DIST, "index.html")
      : path.join(DIST, routePath.replace(/^\//, ""), "index.html");

  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html, "utf8");
}

/**
 * Reads the generated route table and fails the build if a route exists in the
 * app that is neither prerendered nor covered by an explicit rewrite.
 *
 * Without this, adding a route later would silently ship a page that returns a
 * hard 404 at the edge.
 */
async function assertRouteCoverage(prerendered) {
  const source = await fs.readFile(path.join(ROOT, "src", "routeTree.gen.ts"), "utf8");
  const block = source.match(/fullPaths:\s*((?:\s*\|\s*'[^']*')+)/);

  if (!block) {
    throw new Error("prerender: could not read fullPaths from src/routeTree.gen.ts");
  }

  const declared = [...block[1].matchAll(/'([^']*)'/g)].map((m) => m[1]);
  const prerenderedPrefixes = new Set(prerendered);

  const uncovered = declared.filter((route) => {
    if (prerenderedPrefixes.has(route)) return true;
    // Parameterised routes are covered when every concrete instance was written.
    if (route.includes("$")) {
      const prefix = route.slice(0, route.indexOf("$"));
      if ([...prerenderedPrefixes].some((p) => p.startsWith(prefix))) return true;
    }
    return REWRITE_COVERED.some((p) => route === p || route.startsWith(`${p}/`));
  });

  const missing = declared.filter((route) => !uncovered.includes(route));

  if (missing.length) {
    throw new Error(
      `prerender: these routes are neither prerendered nor covered by a rewrite:\n` +
        missing.map((r) => `  - ${r}`).join("\n") +
        `\nAdd them to the prerender list or to REWRITE_COVERED in scripts/prerender.mjs.`,
    );
  }
}

function buildSitemap(urls) {
  const entries = urls
    .map((url) => `  <url>\n    <loc>${escapeText(url)}</loc>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

async function main() {
  const vite = await createServer({
    root: ROOT,
    // The app's own plugins are not needed to read plain data modules, and
    // skipping them keeps this step independent of the app build pipeline.
    configFile: false,
    logLevel: "warn",
    server: { middlewareMode: true },
    appType: "custom",
    resolve: { alias: { "@": path.join(ROOT, "src") } },
    // Only plain data modules are loaded here, so the dependency pre-bundler
    // has nothing useful to do and its scan would warn about route files it
    // was never asked to resolve.
    optimizeDeps: { noDiscovery: true, include: [] },
  });

  try {
    const seoModule = await vite.ssrLoadModule("/src/lib/seo.ts");
    const sd = await vite.ssrLoadModule("/src/lib/structured-data.ts");
    const peopleModule = await vite.ssrLoadModule("/src/data/people.ts");
    const insightsModule = await vite.ssrLoadModule("/src/data/insights.ts");

    const { staticPageSeo, notFoundSeo, canonicalFor, personSeo, insightSeo } = seoModule;
    const { allPeople } = peopleModule;
    const { posts } = insightsModule;

    const template = await fs.readFile(path.join(DIST, "index.html"), "utf8");

    const siteGraph = [sd.organizationSchema(), sd.webSiteSchema()];
    const pages = [];

    for (const [routePath, seo] of Object.entries(staticPageSeo)) {
      pages.push({
        route: routePath,
        seo,
        canonical: canonicalFor(routePath),
        // The firm and website nodes belong on the homepage, which is the
        // canonical entity page the rest of the graph refers back to by @id.
        jsonLd: routePath === "/" ? sd.jsonLdGraph(siteGraph) : undefined,
      });
    }

    for (const person of allPeople) {
      const route = `/our-people/${person.slug}`;
      pages.push({
        route,
        seo: personSeo(person),
        canonical: canonicalFor(route),
        jsonLd: sd.jsonLdGraph([
          sd.personSchema(person),
          sd.breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our People", path: "/our-people" },
            { name: person.name, path: route },
          ]),
        ]),
      });
    }

    for (const post of posts) {
      const route = `/insights/${post.slug}`;
      pages.push({
        route,
        seo: insightSeo(post),
        canonical: canonicalFor(route),
        jsonLd: sd.jsonLdGraph([
          sd.articleSchema(post),
          sd.breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path: route },
          ]),
        ]),
      });
    }

    await assertRouteCoverage(pages.map((p) => p.route));

    for (const page of pages) {
      await writePage(page.route, renderPage(template, page));
    }

    // Served by Vercel with a real HTTP 404 for any unmatched URL, which stops
    // the site reporting soft 404s on ~1,000 obsolete WordPress URLs.
    await fs.writeFile(
      path.join(DIST, "404.html"),
      renderPage(template, {
        seo: notFoundSeo,
        canonical: canonicalFor("/"),
        jsonLd: undefined,
      }),
      "utf8",
    );

    const sitemapUrls = pages
      .filter((p) => !SITEMAP_EXCLUDED.has(p.route) && !p.seo.noindex)
      .map((p) => p.canonical);

    await fs.writeFile(path.join(DIST, "sitemap.xml"), buildSitemap(sitemapUrls), "utf8");

    console.log(
      `prerender: ${pages.length} pages written, ` +
        `${sitemapUrls.length} URLs in sitemap.xml, 404.html emitted`,
    );
  } finally {
    await vite.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

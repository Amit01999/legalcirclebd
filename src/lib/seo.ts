/**
 * Single source of truth for page metadata.
 *
 * Consumed by three places, so that a title/description/canonical can never
 * drift between what a crawler sees and what the browser shows:
 *
 *  1. Route `head:` definitions in `src/routes/*.tsx`
 *  2. `scripts/prerender.mjs`, which bakes these tags into a real static HTML
 *     file per route at build time (what search engines read before running JS)
 *  3. The head sync in `src/routes/__root.tsx`, which keeps the live document
 *     correct across client-side navigations
 *
 * Wording here is carried over verbatim from the metadata that already existed
 * in the project. Nothing has been rewritten.
 *
 * This module must stay free of heavy imports (data modules, assets), because
 * it is pulled into the root client chunk.
 */

export const SITE_URL = "https://www.legalcirclebd.com";
export const SITE_NAME = "The Legal Circle";
export const SITE_LOCALE = "en_US";

export interface PageSeo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  /** Set on private/portal routes that must never be indexed. */
  noindex?: boolean;
}

/**
 * Absolute canonical URL for a route path.
 *
 * Canonical form is lower-case, https, `www`, and without a trailing slash —
 * matching the URLs the app's own <Link> components generate. The site root is
 * the single exception and keeps its slash.
 */
export function canonicalFor(pathname: string): string {
  const path = pathname.replace(/\/+$/, "");
  return path === "" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/** Metadata for every static (non-parameterised) route. */
export const staticPageSeo: Record<string, PageSeo> = {
  "/": {
    title: "The Legal Circle — Full-Service Law Firm in Bangladesh",
    description:
      "The Legal Circle is a full-service law firm in Bangladesh advising on cross-border instructions, corporate, finance, disputes and more.",
    ogTitle: "The Legal Circle",
    ogDescription: "Full-service law firm in Bangladesh.",
  },
  "/about": {
    title: "About Us — The Legal Circle",
    description: "Learn about The Legal Circle, our mission, vision, and recognitions.",
    ogTitle: "About Us — The Legal Circle",
    ogDescription: "About our firm, mission and recognitions.",
  },
  "/practice-areas": {
    title: "Practice Areas — The Legal Circle",
    description:
      "Our practice areas include Banking, Corporate, Disputes, IP, Real Estate, Tax and more.",
    ogTitle: "Practice Areas — The Legal Circle",
    ogDescription: "Comprehensive legal services across all major practice areas.",
  },
  "/our-people": {
    title: "Our People — The Legal Circle",
    description: "Meet the partners, counsel and associates at The Legal Circle.",
    ogTitle: "Our People — The Legal Circle",
    ogDescription: "Our team of barristers, advocates and consultants.",
  },
  "/insights": {
    title: "Insights — The Legal Circle",
    description: "Legal insights, articles and analyses from The Legal Circle.",
    ogTitle: "Insights — The Legal Circle",
    ogDescription: "Articles, updates and legal analyses.",
  },
  "/recognitions": {
    title: "Recognitions — The Legal Circle",
    description: "Recognitions and rankings received by The Legal Circle.",
    ogTitle: "Recognitions — The Legal Circle",
    ogDescription: "Selected recognitions, rankings and awards for The Legal Circle.",
  },
  "/media-coverage": {
    title: "Media Coverage - The Legal Circle",
    description: "Media coverage and updates from The Legal Circle.",
    ogTitle: "Media Coverage - The Legal Circle",
    ogDescription: "Selected media coverage and public updates from The Legal Circle.",
  },
  "/lex-mundi": {
    title: "Lex Mundi — The Legal Circle",
    description: "The Legal Circle is the exclusive Lex Mundi member firm for Bangladesh.",
    ogTitle: "Lex Mundi — The Legal Circle",
    ogDescription: "Member firm of the world's leading network of independent law firms.",
  },
  "/career": {
    title: "Career — The Legal Circle",
    description: "Build your legal career at The Legal Circle.",
    ogTitle: "Career — The Legal Circle",
    ogDescription: "Join our team — career opportunities at a leading Bangladesh law firm.",
  },

  // Portal entry points: reachable without a session, but of no search value
  // and not something the firm wants ranking, so they are explicitly noindex.
  "/login": {
    title: "Login — The Legal Circle",
    description: "Client portal login for The Legal Circle.",
    ogTitle: "Login — The Legal Circle",
    ogDescription: "Client portal access.",
    noindex: true,
  },
  "/tlc-login": {
    title: "TLC Engaged Login — The Legal Circle",
    description: "TLC Engaged client portal login for The Legal Circle.",
    ogTitle: "TLC Engaged Login — The Legal Circle",
    ogDescription: "TLC Engaged client portal access.",
    noindex: true,
  },

  // Authenticated-only routes. Never indexable.
  "/client-dashboard": {
    title: "Client Dashboard — The Legal Circle",
    description: "Client portal dashboard for The Legal Circle.",
    ogTitle: "Client Dashboard — The Legal Circle",
    ogDescription: "Client portal dashboard.",
    noindex: true,
  },
  "/tlc-dashboard": {
    title: "TLC Engaged Dashboard — The Legal Circle",
    description: "TLC Engaged portal dashboard for The Legal Circle.",
    ogTitle: "TLC Engaged Dashboard — The Legal Circle",
    ogDescription: "TLC Engaged portal dashboard.",
    noindex: true,
  },
};

/** Metadata shown when a URL matches no route. */
export const notFoundSeo: PageSeo = {
  title: "Page not found — The Legal Circle",
  description: "The page you're looking for doesn't exist.",
  ogTitle: "Page not found — The Legal Circle",
  ogDescription: "The page you're looking for doesn't exist.",
  noindex: true,
};

/**
 * Metadata for a person profile page.
 *
 * Takes the person as an argument rather than importing `@/data/people`, to
 * keep this module out of the heavy data graph.
 */
export function personSeo(person: { name: string; role?: string }): PageSeo {
  const title = `${person.name} - ${SITE_NAME}`;
  const description = `${person.name}${person.role ? `, ${person.role}` : ""}`;
  return {
    title,
    description,
    ogTitle: title,
    ogDescription: person.role ?? "",
  };
}

/**
 * Converts a `PageSeo` into the meta array shape TanStack Router's `head:`
 * option expects.
 *
 * Routes call this so that the tags baked into the static HTML at build time
 * and the tags applied on client-side navigation come from one definition and
 * cannot drift apart.
 */
export function metaFor(seo: PageSeo) {
  const meta: Array<Record<string, string>> = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.ogTitle },
    { property: "og:description", content: seo.ogDescription },
  ];

  if (seo.noindex) {
    meta.push({ name: "robots", content: "noindex, follow" });
  }

  return meta;
}

/** `head:` value for a static route, keyed by its path. */
export function headFor(pathname: string) {
  const seo = staticPageSeo[pathname];

  if (!seo) {
    throw new Error(`seo: no metadata registered for route "${pathname}"`);
  }

  return { meta: metaFor(seo) };
}

/** Metadata for an insight article page. */
export function insightSeo(post: { title: string; excerpt: string }): PageSeo {
  const title = `${post.title} — ${SITE_NAME}`;
  const description = post.excerpt.slice(0, 160);
  return {
    title,
    description,
    ogTitle: post.title,
    ogDescription: description,
  };
}

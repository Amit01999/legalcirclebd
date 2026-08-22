/**
 * JSON-LD structured data builders.
 *
 * Build-time only — imported exclusively by `scripts/prerender.mjs`, never by
 * the client bundle. Structured data is invisible to users and cannot affect
 * layout, styling or behaviour.
 *
 * EVERY value below is a fact already published on the website. Nothing is
 * invented. Specifically, this file deliberately contains NO ratings, reviews,
 * awards, prices, opening hours, geo-coordinates, founding dates or head-count
 * claims, because none of those are verifiable from the project.
 *
 * Sources for each fact:
 *   - Firm name, address, phone, email .... src/components/Footer.tsx
 *   - Phone, email ........................ src/components/Header.tsx
 *   - Social profiles ..................... src/components/Header.tsx (socialLinks)
 *   - People names and roles .............. src/data/people.ts
 *   - Article titles, dates, authors ...... src/data/insights.ts
 */

import { SITE_NAME, SITE_URL } from "./seo";

/** Postal address exactly as printed in the site footer. */
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "9th Floor, High Tower, 9 Mohakhali C/A",
  addressLocality: "Dhaka",
  postalCode: "1212",
  addressCountry: "BD",
} as const;

/** Contact details exactly as printed in the site header and footer. */
const TELEPHONE = "+880258814311";
const EMAIL = "enquiry@legalcirclebd.com";

/** Social profiles exactly as linked in the site header and footer. */
const SAME_AS = [
  "https://www.facebook.com/thelegalcircle",
  "https://www.linkedin.com/company/the-legal-circle/",
  "https://twitter.com/thelegalcircle",
  "https://www.youtube.com/channel/UCciV0N6qBqXLjFe-HjpgVxw",
];

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The firm itself. `LegalService` is used because it is the specific schema.org
 * type for a law practice and it inherits from both Organization and
 * LocalBusiness, which is what the address and phone belong to.
 */
export function organizationSchema() {
  return {
    "@type": "LegalService",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    address: ADDRESS,
    telephone: TELEPHONE,
    email: EMAIL,
    areaServed: { "@type": "Country", name: "Bangladesh" },
    sameAs: SAME_AS,
  };
}

export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

/**
 * A lawyer or staff member. Only fields actually present on the person's own
 * profile page are emitted — `phone`, `email` and `linkedin` are optional in
 * `src/data/people.ts` and are omitted when absent rather than guessed.
 */
export function personSchema(person: {
  name: string;
  slug: string;
  role: string;
  email?: string;
  telephone?: string;
  phone?: string;
  linkedin?: string;
}) {
  const sameAs = person.linkedin ? [person.linkedin] : undefined;
  const telephone = person.telephone ?? person.phone;

  return prune({
    "@type": "Person",
    "@id": `${SITE_URL}/our-people/${person.slug}#person`,
    name: person.name,
    jobTitle: person.role,
    url: `${SITE_URL}/our-people/${person.slug}`,
    worksFor: { "@id": ORGANIZATION_ID },
    email: person.email,
    telephone,
    sameAs,
  });
}

/**
 * An insight article. Marked `Article` with the firm as publisher.
 *
 * `datePublished` is converted from the human-readable date already displayed
 * on the page (e.g. "July 4, 2026"); it is omitted if it cannot be parsed
 * rather than substituting a placeholder.
 */
export function articleSchema(post: {
  slug: string;
  title: string;
  date: string;
  author?: string;
}) {
  const parsed = new Date(post.date);
  const datePublished = Number.isNaN(parsed.getTime())
    ? undefined
    : parsed.toISOString().slice(0, 10);

  return prune({
    "@type": "Article",
    "@id": `${SITE_URL}/insights/${post.slug}#article`,
    headline: post.title,
    url: `${SITE_URL}/insights/${post.slug}`,
    datePublished,
    author: post.author ? { "@type": "Person", name: post.author } : { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  });
}

/** Breadcrumb trail for nested pages. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === "/" ? "/" : crumb.path}`,
    })),
  };
}

/** Wraps one or more node objects into a single valid JSON-LD graph document. */
export function jsonLdGraph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

/** Drops undefined values so no empty properties reach the output. */
function prune<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as T;
}

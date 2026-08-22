import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { canonicalFor } from "@/lib/seo";

/**
 * Keeps <head> correct across client-side navigations.
 *
 * `scripts/prerender.mjs` bakes the right tags into the static HTML for every
 * route, which is what a crawler reads. But once the SPA takes over, moving
 * between pages does not reload the document, so without this the title,
 * description and canonical would stay frozen on whichever page was loaded
 * first.
 *
 * Tags are **mutated in place**, never appended. That matters: a document must
 * carry exactly one <title>, one description and one canonical. Rendering meta
 * elements through React (or TanStack's <HeadContent />) would append a second
 * copy alongside the prerendered ones, and browsers honour the *first* <title>
 * they find — so the visible title would never update at all.
 *
 * Renders nothing and touches nothing outside <head>, so it cannot affect
 * layout, styling or behaviour.
 */
export function HeadSync() {
  const matches = useRouterState({ select: (state) => state.matches });
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    // Deepest match wins, matching how the build-time metadata is resolved.
    let title: string | undefined;
    let robots: string | undefined;
    const named = new Map<string, string>();
    const properties = new Map<string, string>();

    for (const match of matches) {
      for (const entry of match.meta ?? []) {
        if (!entry) continue;

        if (typeof entry.title === "string") {
          title = entry.title;
        } else if (typeof entry.name === "string" && typeof entry.content === "string") {
          if (entry.name === "robots") robots = entry.content;
          else named.set(entry.name, entry.content);
        } else if (typeof entry.property === "string" && typeof entry.content === "string") {
          properties.set(entry.property, entry.content);
        }
      }
    }

    // No route in the chain supplied a title, which means nothing matched a
    // real page. Leave the prerendered head untouched rather than overwriting
    // a correct 404 head with stale values from the previous page.
    if (!title) return;

    document.title = title;

    const description = named.get("description");
    if (description) setMetaByName("description", description);

    const ogTitle = properties.get("og:title");
    const ogDescription = properties.get("og:description");
    if (ogTitle) {
      setMetaByProperty("og:title", ogTitle);
      setMetaByName("twitter:title", ogTitle);
    }
    if (ogDescription) {
      setMetaByProperty("og:description", ogDescription);
      setMetaByName("twitter:description", ogDescription);
    }

    const canonical = canonicalFor(pathname);
    setCanonical(canonical);
    setMetaByProperty("og:url", canonical);

    // Removed when absent, so a noindex directive picked up on a portal page
    // cannot follow the user onto a public page that must stay indexable.
    if (robots) setMetaByName("robots", robots);
    else document.head.querySelector('meta[name="robots"]')?.remove();
  }, [matches, pathname]);

  return null;
}

function setMetaByName(name: string, content: string) {
  upsertMeta(`meta[name="${name}"]`, "name", name, content);
}

function setMetaByProperty(property: string, content: string) {
  upsertMeta(`meta[property="${property}"]`, "property", property, content);
}

function upsertMeta(selector: string, keyAttr: string, key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(keyAttr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

# SEO Changelog — Before / After

**Date:** 2026-08-21 · Baseline commit `7f5179b`
Detail in `SEO_AUDIT_REPORT.md`, `OLD_TO_NEW_URL_MAP.md`, `SEO_FIX_REPORT.md`.

---

## At a glance

| Signal | Before | After |
|---|---|---|
| Unique `<title>` across the site | **1** (identical on every URL) | **80** |
| Per-page `<meta name="description">` | ❌ one, identical everywhere | ✅ unique per page |
| `<link rel="canonical">` | ❌ absent everywhere | ✅ all 79 pages, absolute HTTPS `www` |
| Open Graph | 3 tags, identical everywhere | ✅ 6 per page incl. `og:url`, `og:site_name` |
| Twitter Card | ❌ none | ✅ `summary` per page |
| JSON-LD structured data | ❌ none | ✅ 26 blocks (`LegalService`, `WebSite`, `Person`, `Article`, `BreadcrumbList`) |
| `robots.txt` | ❌ returned **HTML** with 200 | ✅ real robots.txt + sitemap reference |
| `sitemap.xml` | ❌ returned **HTML** with 200 | ✅ real XML, **75** canonical URLs |
| 301s from old WordPress URLs | ❌ **zero** | ✅ **115 mappings / 230 entries** |
| Non-existent URL | ❌ **HTTP 200** (soft 404) | ✅ **HTTP 404** |
| `noindex` on portal pages | ❌ declared but inert | ✅ actually emitted (5 pages) |
| Trailing-slash policy | ❌ none — `/x` and `/x/` both 200 | ✅ `trailingSlash: false`, one canonical form |
| Route metadata | ❌ computed, then discarded | ✅ prerendered + synced on navigation |

---

## The headline problem

Before — every URL returned byte-identical HTML:

```
/                : adba1d1d391f56ae7d3b10622e954230
/about           : adba1d1d391f56ae7d3b10622e954230
/practice-areas  : adba1d1d391f56ae7d3b10622e954230
/our-people      : adba1d1d391f56ae7d3b10622e954230
/totally-fake-url: adba1d1d391f56ae7d3b10622e954230   ← a URL that doesn't exist
```

After — every URL returns its own document:

```
/                      200  The Legal Circle — Full-Service Law Firm in Bangladesh
/about                 200  About Us — The Legal Circle
/practice-areas        200  Practice Areas — The Legal Circle
/our-people            200  Our People — The Legal Circle
/our-people/masud-khan 200  Masud Khan - The Legal Circle
/insights/faq-on-trusts 200 FAQ on Trusts — The Legal Circle
/nope-xyz              404  Page not found — The Legal Circle
```

---

## `<head>` before and after — `/about`

**Before** (identical to every other page on the site):

```html
<title>The Legal Circle — Full-Service Law Firm in Bangladesh</title>
<meta name="description" content="The Legal Circle is a full-service law firm in Bangladesh…" />
<meta property="og:title" content="The Legal Circle" />
<meta property="og:description" content="Full-service law firm in Bangladesh." />
<meta property="og:type" content="website" />
<!-- no canonical, no twitter card, no structured data -->
```

**After:**

```html
<title>About Us — The Legal Circle</title>
<meta name="description" content="Learn about The Legal Circle, our mission, vision, and recognitions." />
<link rel="canonical" href="https://www.legalcirclebd.com/about" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="The Legal Circle" />
<meta property="og:locale" content="en_US" />
<meta property="og:url" content="https://www.legalcirclebd.com/about" />
<meta property="og:title" content="About Us — The Legal Circle" />
<meta property="og:description" content="About our firm, mission and recognitions." />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="About Us — The Legal Circle" />
<meta name="twitter:description" content="About our firm, mission and recognitions." />
```

Wording is the metadata that already existed in the project — nothing was rewritten.

---

## URL migration

| | Before | After |
|---|---|---|
| `/about-us/` | 200 + rendered "404" | **301** → `/about` |
| `/partners/` | 200 + rendered "404" | **301** → `/our-people#partners` |
| `/lawyers/` | 200 + rendered "404" | **301** → `/our-people` |
| `/masud-khan/` | 200 + rendered "404" | **301** → `/our-people/masud-khan` |
| `/people/anitaghazirahman/` | 200 + rendered "404" | **301** → `/our-people/anita-ghazi-rahman` |
| `/faq-on-trusts/` | 200 + rendered "404" | **301** → `/insights/faq-on-trusts` |
| `/2019/08/08/data-privacy-and-e-commerce/` | 200 + rendered "404" | **301** → `/insights/data-privacy-and-e-commerce` |
| `/portfolio/*`, `/tag/*`, `/category/*` (~1,000 URLs) | 200 (soft 404) | **404** (correct) |
| Spam URLs injected into old WordPress | 200 (soft 404) | **404** (deliberately not redirected) |

Zero loops · zero chains · zero existing routes removed · every destination validated against real data.

---

## Files

**Added (7):** `src/lib/seo.ts` · `src/lib/structured-data.ts` · `src/components/HeadSync.tsx` · `scripts/prerender.mjs` · `public/robots.txt` · `SEO_AUDIT_REPORT.md` · `OLD_TO_NEW_URL_MAP.md`

**Modified (18):** `vercel.json` (redirects + routing) · `package.json` (build step) · `src/routes/__root.tsx` (2 lines) · 15 route files (`head:` metadata only)

**Untouched:** every UI component · all CSS · `src/lib/auth.ts` · `src/data/*` · every form, loader and auth guard · every route path.

---

## Verification

| Check | Result |
|---|---|
| Build | ✅ passes — 79 pages prerendered |
| Lint | ✅ 1,277 → 993 problems; **no new errors** (new files lint clean) |
| Types | ✅ 16 `tsc` errors before **and** after — identical pre-existing set |
| Visible text | ✅ body character count **exact match** on all 14 routes tested |
| Visual | ✅ pixel diff **0.000–0.003%**, identical page dimensions; all diffs isolated to the `animate-bounce` chevron mid-animation |
| Structure | ✅ identical `<h1>`, image, `alt` and link counts on every route |
| Head integrity | ✅ exactly one title / description / canonical per page, before **and** after client-side navigation |
| JSON-LD | ✅ all 26 blocks parse as valid JSON |
| `<body>` | ✅ byte-identical to untouched Vite output in all 80 files |

---

## Not changed — flagged for the firm

1. **Insight pages are stubs** — most read *"To read the full article, Click here."* + an outbound link, where WordPress had full article text. Likely a **co-equal root cause** of the ranking loss; only the firm can restore the content.
2. **10 articles dropped in the migration** — now correctly 404, worth recovering.
3. **No contact page exists** — `/contact-us/` was live on WordPress; the footer shows "Contact Us- Online Form" as unlinked text.
4. **No `og:image`** — needs a 1200×630 asset from the firm.
5. **Phone number mismatch** — header links `tel:+88025881431` but displays `+880258814311`.
6. **Footer "Recognitions" link points to `/about`** — the page is already crawlable via the header, so not changed.
7. **Portal credentials are in the client bundle** (`src/data/credentials.ts`) — security, not SEO; auth was out of scope.

---

**No ranking guarantee.** This restores technical crawl/index signals lost in the migration. Recovery depends on Google re-crawling (typically weeks to months) and on factors outside the codebase. See `SEO_FIX_REPORT.md` §10–11, including the required Google Search Console steps.

# SEO Fix Report — legalcirclebd.com

**Date:** 2026-08-21
**Repository:** `d:\BeproIT\legalcirclebd`
**Baseline commit:** `7f5179b`
**Companion documents:** `SEO_AUDIT_REPORT.md` (findings), `OLD_TO_NEW_URL_MAP.md` (URL migration), `SEO_CHANGELOG.md` (before/after summary)

---

## 1. Root causes discovered

Four technical regressions were introduced by the WordPress → React migration. All four are now fixed.

### 1.1 Every URL served byte-identical HTML — CRITICAL

Measured on the live site before the fix:

```
/                : adba1d1d391f56ae7d3b10622e954230
/about           : adba1d1d391f56ae7d3b10622e954230
/practice-areas  : adba1d1d391f56ae7d3b10622e954230
/insights        : adba1d1d391f56ae7d3b10622e954230
/our-people      : adba1d1d391f56ae7d3b10622e954230
/totally-fake-url: adba1d1d391f56ae7d3b10622e954230
```

Identical MD5 hashes. Every URL — including one that does not exist — returned the same 1,217-byte document with the same `<title>`, the same description, no canonical, and an empty `<body><div id="root"></div></body>`.

Search engines crawl HTML first and execute JavaScript later, often days or weeks later. At crawl time no page on this site was distinguishable from any other. WordPress emitted a unique title, description and canonical on every URL at HTTP-response time.

### 1.2 No 301 redirects from any old WordPress URL — CRITICAL

1,142 archived URLs, including 37 pages and 44 posts declared in the old site's own sitemaps, all returned HTTP 200 and a client-rendered "404 — Page not found". Every backlink and every accumulated ranking signal pointing at those URLs terminated in a soft 404. **This is the most probable single cause of the reported ranking collapse.**

### 1.3 Soft 404 on every non-existent URL — CRITICAL

`vercel.json` contained one blanket rule — `{"source": "/(.*)", "destination": "/index.html"}` — that rewrote *everything* to the SPA shell with HTTP 200, including ~1,000 obsolete WordPress theme URLs (`/portfolio/*`, `/tag/*`, `/category/*`, `/elements-*`).

### 1.4 `robots.txt` and `sitemap.xml` returned HTML — CRITICAL

Neither file existed, and the catch-all rewrite meant they returned the HTML SPA shell with HTTP 200 and `Content-Type: text/html` rather than 404ing.

### 1.5 Contributing factor: route metadata was computed and discarded — HIGH

14 route files already contained correct TanStack Router `head:` definitions. None had any effect, because `<HeadContent />` was never rendered anywhere in the project. Six `noindex` declarations on the private portal routes were equally inert, so **the client dashboards carried no `noindex` at all**.

---

## 2. Files changed

### New files (7)

| File | Purpose |
|---|---|
| `src/lib/seo.ts` | Single source of truth for every page's title, description and canonical |
| `src/lib/structured-data.ts` | JSON-LD builders (build-time only; never enters the client bundle) |
| `src/components/HeadSync.tsx` | Keeps `<head>` correct across client-side navigation |
| `scripts/prerender.mjs` | Post-build step: writes real HTML per route, plus `sitemap.xml` and `404.html` |
| `public/robots.txt` | Real robots.txt |
| `SEO_AUDIT_REPORT.md` | Phase 1 audit |
| `OLD_TO_NEW_URL_MAP.md` | Phase 2 URL migration map |

### Modified files (18)

| File | Change |
|---|---|
| `vercel.json` | 230 redirect entries, `trailingSlash: false`, targeted rewrites replacing the blanket catch-all |
| `package.json` | `build` and `build:dev` now run `node scripts/prerender.mjs` after `vite build` |
| `src/routes/__root.tsx` | One import + one `<HeadSync />` line |
| 13 static route files | `head:` block replaced with `headFor("<path>")` |
| `src/routes/our-people.$slug.tsx` | `head:` block replaced with `metaFor(personSeo(...))` |
| `src/routes/insights.$slug.tsx` | `head:` block replaced with `metaFor(insightSeo(...))` |

Total: **+1,203 / −160 lines**, of which 1,170 added lines are the generated redirect table in `vercel.json`.

**No component JSX, styling, class name, animation, form, API call, authentication path or data module was modified.**

---

## 3. Exact changes made, and why each was necessary

### 3.1 Build-time head prerendering — fixes 1.1 and 1.5

`scripts/prerender.mjs` runs after `vite build`. For each of 79 routes it takes the built shell, strips the placeholder SEO tags, and injects that route's own head:

```html
<title>Anita Ghazi Rahman - The Legal Circle</title>
<meta name="description" content="Anita Ghazi Rahman, Founder, Managing Partner &amp; Senior Advocate..." />
<link rel="canonical" href="https://www.legalcirclebd.com/our-people/anita-ghazi-rahman" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="The Legal Circle" />
<meta property="og:locale" content="en_US" />
<meta property="og:url" content="https://www.legalcirclebd.com/our-people/anita-ghazi-rahman" />
<meta property="og:title" content="Anita Ghazi Rahman - The Legal Circle" />
<meta property="og:description" content="Founder, Managing Partner &amp; Senior Advocate..." />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Anita Ghazi Rahman - The Legal Circle" />
<meta name="twitter:description" content="Founder, Managing Partner &amp; Senior Advocate..." />
<script type="application/ld+json">…</script>
```

Output is written as `dist/<route>/index.html`, the standard static-site layout Vercel serves directly.

**Only `<head>` is rewritten.** The `<body>` is left byte-for-byte as Vite emitted it, so the identical, unmodified React app boots and renders every page exactly as before.

**Why not full server-side rendering of the body?** It was evaluated and rejected as unsafe: `src/lib/auth.ts` reads `sessionStorage` during render and `src/components/Header.tsx` calls `getSession()` while rendering — both throw in Node, so SSR would require editing authentication code. `PageHero` and the homepage hero also animate in from `opacity: 0`, so a server render would ship content at zero opacity. Head-only prerendering carries none of these risks. Rationale is recorded in `SEO_AUDIT_REPORT.md` §7.

**Metadata wording was not rewritten.** Every title and description already present in the project was carried over verbatim into `src/lib/seo.ts`. The one deliberate alignment: the homepage description now uses the wording from `index.html` (the version actually live and seen by Google) rather than the slightly different, never-rendered version in the route file.

### 3.2 A safety check that fails the build on an uncovered route

`assertRouteCoverage()` reads `src/routeTree.gen.ts` and fails the build if any route is neither prerendered nor covered by an explicit rewrite. Without it, adding a route later would silently ship a page returning a hard 404 at the edge.

### 3.3 Client-side head sync — fixes 1.5 for in-app navigation

`src/components/HeadSync.tsx` updates title, description, canonical, `og:url`, `og:title`, `og:description`, Twitter tags and `robots` when the user navigates within the SPA.

Tags are **mutated in place, never appended**. This matters concretely: TanStack Router's own `<HeadContent />` renders meta elements through React, which under React 19 *appends* them to `<head>` alongside the prerendered ones. Browsers honour the **first** `<title>` they find, so the visible title would never have updated, and duplicate canonicals with differing values cause Google to ignore canonicals entirely. Mutation guarantees exactly one of each tag. Verified in a real browser: after client-side navigation the document has `title=1 desc=1 canon=1`.

The component renders `null` and touches nothing outside `<head>`.

Two specific behaviours were built in deliberately:

- **`robots` is removed when absent**, so a `noindex` picked up on `/login` cannot follow the user onto a public page. Verified: `/login` → `noindex, follow`; after navigating to `/about` → `null`.
- **If no matched route supplies a title, the head is left untouched.** This stops a stale title from overwriting a correct prerendered 404 head.

### 3.4 301 redirects — fixes 1.2

`vercel.json` now carries **115 URL mappings expressed as 230 redirect entries** (each mapping listed with and without a trailing slash so an old WordPress URL resolves in a single hop). All are `permanent: true` (301).

Coverage: 29 core pages, 32 people profiles, 53 articles — spanning three generations of the old site (root-level slugs, `/people/{slug}/`, `/dt_team/`, `/project/`, and dated `/YYYY/MM/DD/{slug}/` permalinks).

The redirect table was **generated and validated**, not hand-written. Validation enforced:
- every destination slug exists in `src/data/people.ts` / `src/data/insights.ts`
- no source equals its own destination (no loops)
- no destination is also a source (no chains)
- no duplicate sources

Deliberately **not** redirected, and allowed to return a clean 404: WordPress taxonomy archives (`/category/*`, `/tag/*`, `/author/*`), purchased-theme demo pages (`/portfolio/*`, `/elements-*`), feeds, the pre-2016 PHP site, and — importantly — **spam URLs injected into the old WordPress install** (essay-mill and casino pages), which must not be redirected or their associations would carry onto the current site. Full reasoning in `OLD_TO_NEW_URL_MAP.md` §5.

### 3.5 Real 404 status — fixes 1.3

The blanket `"/(.*)"` catch-all rewrite was removed and replaced with four targeted rewrites covering only the authentication-gated article trees, which must keep working for signed-in users:

```json
{ "source": "/client-articles",        "destination": "/index.html" },
{ "source": "/client-articles/:path*", "destination": "/index.html" },
{ "source": "/tlc-articles",           "destination": "/index.html" },
{ "source": "/tlc-articles/:path*",    "destination": "/index.html" }
```

Every other URL now resolves to a real prerendered file or falls through to `dist/404.html`, which Vercel serves with a genuine HTTP 404. Verified locally: `/nope-xyz` → **404** with `<title>Page not found — The Legal Circle</title>`.

### 3.6 Trailing-slash policy — fixes audit finding 4.7

`"trailingSlash": false` matches the URLs the app's own `<Link>` components already generate, and matches every canonical tag emitted. `/about/` now resolves to `/about` instead of both returning 200 with identical content.

### 3.7 robots.txt — fixes 1.4

`public/robots.txt` allows all public content, points to the production sitemap, and disallows only the four authenticated portal areas.

`/login` and `/tlc-login` are **intentionally not disallowed**: they carry `noindex` instead, and Google can only act on `noindex` if it is allowed to fetch the page. Blocking them in robots.txt would have left them indexable via inbound links with no way to remove them. No CSS or JS is blocked.

### 3.8 sitemap.xml — fixes 1.4

Generated at build time from the live route table and data modules — it cannot drift from reality. Contains **75 URLs**: 9 static pages + 16 people + 50 insights, all absolute `https://www.legalcirclebd.com` canonical URLs.

Excluded: login pages, both dashboards, both gated article trees, redirect sources, and every `noindex` URL. `changefreq` and `priority` are omitted (Google ignores both), and `lastmod` is omitted rather than fabricated.

### 3.9 Structured data — fixes audit finding 4.8

JSON-LD emitted at build time only, so it cannot affect the rendered page:

| Schema | Where | Source of facts |
|---|---|---|
| `LegalService` + `WebSite` | Homepage | `src/components/Footer.tsx`, `src/components/Header.tsx` |
| `Person` + `BreadcrumbList` | 16 profile pages | `src/data/people.ts` |
| `Article` + `BreadcrumbList` | 50 insight pages | `src/data/insights.ts` |

**Nothing was invented.** `src/lib/structured-data.ts` contains no ratings, reviews, awards, prices, opening hours, geo-coordinates, founding dates or head-count claims, because none are verifiable from the project. Optional per-person fields (`email`, `telephone`, `linkedin`) are emitted only where they already exist in the data and omitted otherwise. Article dates are parsed from the date already displayed on the page and omitted if unparseable.

All 26 JSON-LD blocks were parsed and validated as syntactically correct JSON with a `@context`.

---

## 4. Confirmation: visible content was not changed

**Verified by measurement, not assertion.** The site was built at the baseline commit and after the changes, then both builds were loaded in a real browser (Chromium, 1440×900) across 14 routes.

Body text was extracted from the rendered DOM and compared character-for-character:

| Route | Body characters (before → after) |
|---|---|
| `/` | 1710 → 1710 |
| `/about` | 2563 → 2563 |
| `/practice-areas` | 2407 → 2407 |
| `/our-people` | 709 → 709 |
| `/our-people/anita-ghazi-rahman` | 9023 → 9023 |
| `/insights` | 4456 → 4456 |
| `/insights/faq-on-trusts` | 919 → 919 |
| `/recognitions` | 378 → 378 |
| `/media-coverage` | 3067 → 3067 |
| `/lex-mundi` | 1057 → 1057 |
| `/career` | 1952 → 1952 |
| `/login` | 458 → 458 |
| `/tlc-login` | 466 → 466 |
| 404 page | 424 → 424 |

Exact match on all 14. **Not one character of visible copy changed.** No marketing content was rewritten, removed, shortened or added. No keyword stuffing was introduced anywhere — the metadata is the wording that already existed in the project.

---

## 5. Confirmation: design was not changed

Full-page screenshots were captured before and after on all 14 routes and compared pixel-by-pixel:

| Route | Dimensions | Differing pixels | % |
|---|---|---|---|
| `/` | 1440×2767 | 0 | 0.000% |
| `/practice-areas` | 1440×2503 | 0 | 0.000% |
| `/insights` | 1440×5874 | 0 | 0.000% |
| `/insights/faq-on-trusts` | 1440×1650 | 0 | 0.000% |
| `/media-coverage` | 1440×2467 | 0 | 0.000% |
| `/login`, `/tlc-login` | 1440×1271 | 0 | 0.000% |
| 404 page | 1440×1231 | 0 | 0.000% |
| `/our-people/anita-ghazi-rahman` | 1440×4041 | 12 | 0.000% |
| `/about`, `/recognitions`, `/lex-mundi`, `/career` | — | 20 each | 0.001% |
| `/our-people` | 1440×1941 | 97 | 0.003% |

Every page renders at **identical dimensions** — no layout shift anywhere.

The small non-zero counts were investigated rather than waved away. All differing pixels fall inside a ~13×13px box at x 713–726, horizontally centred on the 1440px viewport — the `animate-bounce` `ChevronDown` icon in `PageHero`, caught at a different point in its bounce cycle between the two capture runs. It is animation phase, not a design change.

Also confirmed identical on every route: `<h1>` count and text, total image count, images missing `alt` (0 before, 0 after), and total link count.

Colors, typography, spacing, layout, animations, images, components and responsive behaviour are untouched. No CSS file was modified.

---

## 6. Confirmation: business logic was not changed

- `src/lib/auth.ts` — **not modified**
- `src/data/credentials.ts` — **not modified**
- All `beforeLoad` authentication guards — **not modified**
- All `loader` functions — **not modified**
- Login forms, sign-out handlers, session handling — **not modified**
- `src/data/*` (people, insights, client-articles, tlc-articles) — **not modified**
- All UI components in `src/components/ui/` — **not modified**
- `src/components/Header.tsx`, `Footer.tsx`, `Section.tsx`, `Logo.tsx` — **not modified**
- No API call, form submission or data-handling path was altered
- No route was removed or renamed

The only change inside a route file is the `head:` metadata block. The only change to `__root.tsx` is one import and one `<HeadSync />` element that renders `null`.

Type-checking confirms nothing broke: **16 `tsc` errors before, 16 after** — the identical set, all pre-existing in `client-articles.*` / `tlc-articles.*`, files never touched by this work.

---

## 7. Routes checked

All 14 public and portal routes were loaded in a real browser and served over HTTP from the production build. Every one returns the correct status and its own unique title from raw HTML with JavaScript disabled:

| Route | Status | Title from raw HTML | Canonical |
|---|---|---|---|
| `/` | 200 | The Legal Circle — Full-Service Law Firm in Bangladesh | ✅ |
| `/about` | 200 | About Us — The Legal Circle | ✅ |
| `/practice-areas` | 200 | Practice Areas — The Legal Circle | ✅ |
| `/our-people` | 200 | Our People — The Legal Circle | ✅ |
| `/our-people/{slug}` ×16 | 200 | *(person name)* - The Legal Circle | ✅ |
| `/insights` | 200 | Insights — The Legal Circle | ✅ |
| `/insights/{slug}` ×50 | 200 | *(article title)* — The Legal Circle | ✅ |
| `/recognitions` | 200 | Recognitions — The Legal Circle | ✅ |
| `/media-coverage` | 200 | Media Coverage - The Legal Circle | ✅ |
| `/lex-mundi` | 200 | Lex Mundi — The Legal Circle | ✅ |
| `/career` | 200 | Career — The Legal Circle | ✅ |
| `/login` | 200 | Login — The Legal Circle | ✅ + `noindex` |
| `/tlc-login` | 200 | TLC Engaged Login — The Legal Circle | ✅ + `noindex` |
| `/client-dashboard` | 200 | Client Dashboard — The Legal Circle | ✅ + `noindex` |
| `/tlc-dashboard` | 200 | TLC Engaged Dashboard — The Legal Circle | ✅ + `noindex` |
| `/nope-xyz` | **404** | Page not found — The Legal Circle | `noindex` |

An automated check over all 80 generated HTML files confirmed:

```
HTML files checked : 80
unique titles      : 80      (was 1 for the entire site)
unique canonicals  : 79
pages with robots  : 5       (2 logins, 2 dashboards, 404)
sitemap URLs       : 75
redirects checked  : 230
ALL CHECKS PASSED
```

The check enforced: exactly one `<title>`, one description, one canonical and one `og:title` per page; no duplicate titles; every canonical absolute, HTTPS, on `www.legalcirclebd.com`, and matching its own file path; all JSON-LD parseable; **every `<body>` byte-identical to the untouched Vite output**; every sitemap URL backed by a real file; every redirect destination resolving to a real page; and no redirect source shadowing a real page.

---

## 8. Status summary

| Item | Before | After |
|---|---|---|
| **Sitemap** | Did not exist; `/sitemap.xml` returned HTML with 200 | Real XML, 75 canonical URLs, generated from the live route table, `Content-Type: application/xml` |
| **robots.txt** | Did not exist; returned HTML with 200 | Real robots.txt, allows public content, references production sitemap, disallows only the 4 portal areas |
| **Canonical** | Absent on every page | Present on all 79 pages, absolute HTTPS `www` production URLs. No localhost, no preview domains, no chains, no conflicts with redirects |
| **Structured data** | None | `LegalService` + `WebSite` on homepage, `Person` + breadcrumbs on 16 profiles, `Article` + breadcrumbs on 50 articles. 26 blocks, all valid, all facts verified from the repository |
| **Redirects** | None | 115 mappings / 230 entries, all 301, zero loops, zero chains, all destinations validated |
| **Build** | Passed | **Passes.** `vite build` + prerender, 79 pages, exit 0 |
| **Lint** | 1,277 problems (1,271 errors) | **993 problems (987 errors).** No new errors introduced; the reduction is pre-existing Prettier violations inside the multi-line metadata blocks that were replaced. All three new source files lint clean |
| **Types** | 16 `tsc` errors | 16 `tsc` errors — identical set, all pre-existing in untouched files |
| **Bundle** | 428.00 kB / 133.96 kB gzip | 429.73 kB / 134.77 kB gzip (+0.8 kB gzip) |

---

## 9. Remaining risks and known gaps

Stated plainly, because several of these matter more than anything above.

### 9.1 Article pages are stubs, not articles — likely a co-equal root cause

The old WordPress posts contained **full article text** at root-level URLs. The current `/insights/{slug}` pages are stubs: most `excerpt` values in `src/data/insights.ts` read exactly *"To read the full article, Click here."* followed by an outbound link to LinkedIn, The Financial Express, Mori Hamada or a PDF.

Even with flawless technical SEO, a page whose entire body is one sentence and an external link cannot rank for the queries the original full-text article ranked for. The redirects now restore link equity to these URLs, but the content behind them is thinner than what Google indexed before.

**If the lost rankings were primarily on article and blog queries, this is as significant as the missing redirects, and only the firm can resolve it** by restoring the article bodies. It was not fixed here because doing so means adding visible content, which is outside the agreed scope.

### 9.2 Ten articles were dropped entirely in the migration

These existed on WordPress but are absent from `src/data/insights.ts`, so they return 404 by design: `/sports-laws-of-bangladesh/`, `/citizenship-laws-of-bangladesh/`, `/international-trade-and-usage-of-foreign-exchange/`, `/the-legal-circle-energy-practice-thrives/`, `/procedure-of-making-complaint-under-s-33-of-the-bangladesh-labour-act-2006/`, and five dated 2019 posts. Real legal articles worth recovering.

### 9.3 `/contact-us/` has no equivalent page

`/contact-us/` was live in the old sitemap. The React site has **no contact route at all** — `src/components/Footer.tsx:106` renders `Contact Us- Online Form` as plain, unlinked text. No redirect was created because there is nothing to redirect to, and unrelated pages must not be pointed at the homepage. A contact page is a standard conversion and local-SEO asset; its absence is a migration gap for the firm to close.

### 9.4 Body content still depends on JavaScript rendering

Only `<head>` is prerendered. Page copy is still produced by Google's JavaScript rendering. This is normal and Google handles it, but it is slower than server-rendered HTML and the current approach does not eliminate it. Full body SSR was rejected as unsafe for the reasons in §3.1; if the firm later wants it, the blocker is `sessionStorage` access during render in `src/lib/auth.ts` and `src/components/Header.tsx`.

### 9.5 No `og:image`

The repository's only logo asset is 50×46px — far below the ~1200×630 needed for a social card, and rendering it would look broken. Creating a new image is outside scope. Social shares currently show a text-only card. **Action for the firm:** supply a 1200×630 branded image; wiring it in is a two-line change in `scripts/prerender.mjs`.

### 9.6 Vercel routing behaviour is verified locally, not on Vercel

Redirects, `trailingSlash` and rewrites were validated statically and the static-file/404 behaviour was verified with `serve` (Vercel's own static server), which reproduced correct 200s and a real 404. The `vercel.json` routing rules themselves can only be confirmed on a real deployment. **Verify on a preview deployment before promoting to production** — §11 lists the exact checks.

### 9.7 Two data inconsistencies found during the audit — reported, not changed

- **Phone number mismatch.** `src/components/Header.tsx` links `tel:+88025881431` (11 digits) but displays `+880258814311` (12 digits). One is wrong. The JSON-LD uses the *displayed* number, since that is the published fact. The firm should confirm which is correct — NAP consistency matters for local SEO.
- **Footer link mislabelled.** `src/components/Footer.tsx` renders a link labelled "Recognitions" that points to `/about`, not `/recognitions`. Not changed: `/recognitions` is already reachable and crawlable through the header's About dropdown, so there is no indexing problem to fix, and changing a link's destination changes user-visible behaviour. Worth correcting as a normal bug fix.

### 9.8 Security issue encountered during the audit — reported, not changed

`src/data/credentials.ts` is imported by `src/lib/auth.ts` and bundled into the client JavaScript, so **portal usernames and passwords are readable by anyone who opens the deployed bundle**. This is a security matter, not SEO, and authentication was explicitly out of scope, so nothing was changed. It is raised because it should not go unmentioned.

### 9.9 Recovery timing

Google must re-crawl the old URLs to see the 301s and re-index the current pages. Realistically **several weeks to a few months**, depending on crawl rate. Recovery is not instant and is not guaranteed.

---

## 10. On rankings

**These changes do not guarantee first-page Google rankings, and no such claim is made.**

What this work does is remove migration-caused technical barriers to crawling, indexing and consolidation, and restore the technical signals the WordPress site had. Ranking depends on many factors outside the codebase — competition, backlinks, content depth, domain authority, user engagement and Google's own algorithms.

The content gaps in §9.1 and §9.2 are a genuine limit on what technical work alone can recover.

---

## 11. Google Search Console actions that must be performed manually

These cannot be done from the codebase.

**Immediately after deploying:**

1. **Verify the deployment.** On the Vercel preview URL, confirm: `/about-us/` returns 301 → `/about`; `/nope-xyz` returns 404; `/robots.txt` returns text/plain; `/sitemap.xml` returns XML with 75 URLs; a few people and insight URLs return 200 with their own titles; and that a signed-in user can still open `/client-articles/...` and `/tlc-articles/...`.
2. **Confirm the property is `https://www.legalcirclebd.com`** (Domain property preferred, so all variants are covered).
3. **Submit the sitemap:** Search Console → Sitemaps → add `sitemap.xml`.
4. **Remove the old WordPress sitemaps** if still listed: `sitemap_index.xml`, `page-sitemap.xml`, `post-sitemap.xml`, `category-sitemap.xml`, `author-sitemap.xml`, `liquid-*-sitemap.xml`. They now 404, which is intended.
5. **Request indexing** via URL Inspection for the highest-value pages: `/`, `/about`, `/practice-areas`, `/our-people`, `/insights`, and the most important lawyer profiles. Manual submission is limited per day, so prioritise.
6. **Run URL Inspection → "Test live URL"** on `/about` and one profile page, then open "View crawled page" and confirm Google now sees a unique title, description and canonical in the raw HTML.

**Over the following 4–8 weeks:**

7. **Watch Coverage → "Not found (404)"** — expect a large, *intended* rise as the ~1,000 obsolete theme, taxonomy and spam URLs finally 404 instead of returning 200. This is the fix working, not a regression.
8. **Watch Coverage → "Soft 404"** — this should fall toward zero.
9. **Watch "Page with redirect"** — the 115 mapped old URLs should appear here and then drop out as Google consolidates them.
10. **Check "Duplicate without user-selected canonical"** — should fall sharply now that canonicals exist.
11. **Monitor Performance** filtered to the migrated URLs, comparing against the pre-migration period.

**Also worth doing:**

12. **Bing Webmaster Tools** — submit the same sitemap.
13. **Google Business Profile** — confirm the name, address and phone match the site exactly, once the §9.7 phone discrepancy is resolved.
14. **Update high-value backlinks where possible.** Redirects preserve most equity, but directories, Lex Mundi's member listing and press mentions pointing at old URLs are worth updating at source.
15. **Re-check Core Web Vitals** after a few weeks of field data. The 477 kB / 389 kB / 304 kB profile photographs (audit §4.12) are the clearest remaining LCP win, but recompressing images risks visible change and was deliberately left alone.

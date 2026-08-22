# SEO Audit Report — legalcirclebd.com

**Audit date:** 2026-08-21
**Site audited:** https://www.legalcirclebd.com/
**Repository:** `d:\BeproIT\legalcirclebd` (branch `main`, commit `7f5179b`)
**Scope:** Technical SEO migration audit (WordPress → React). Read-only. No files were modified to produce this report.

---

## 1. Current architecture

| Item | Finding |
|---|---|
| React | 19.2.6 |
| Build system | Vite 7.3.3 (SPA mode, `index.html` + `src/main.tsx` entry) |
| Router | TanStack Router 1.169.2, file-based routes in `src/routes/`, generated `src/routeTree.gen.ts` |
| Rendering mode | **100% client-side. No SSR, no SSG, no prerendering.** |
| Styling | Tailwind CSS 4 |
| Data | Static TypeScript modules in `src/data/` (no CMS, no API) |
| Hosting | **Vercel** (confirmed via `Server: Vercel` response header) |
| Deploy config | `vercel.json` — a single catch-all rewrite |
| Output | `dist/index.html` (1,217 bytes) + hashed assets |
| Main bundle | 428 kB raw / 134 kB gzip |

### Important architectural note

`@tanstack/react-start` (1.167.65), `src/server.ts`, `src/start.ts` and `wrangler.jsonc` are present in the repo — leftovers from a TanStack Start / Cloudflare Workers scaffold. **They are dead code in the current build.** `vite.config.ts` loads only `TanStackRouterVite`, `react`, `tailwindcss` and `tsConfigPaths` — the TanStack Start plugin is *not* registered, so `src/server.ts` is never bundled and no server entry is ever produced or deployed. The site is served on Vercel as a pure static SPA.

**Conclusion:** the current architecture does *not* make proper SEO impossible. It can be fixed without replacing React or the framework (see §7).

---

## 2. Current routes

All routes are derived from `src/routeTree.gen.ts`. There are **21 route paths**, of which **15 are public** and **6 are authentication-gated**.

### Public, indexable

| Route | File | H1 present |
|---|---|---|
| `/` | `src/routes/index.tsx` | Yes (hero) |
| `/about` | `src/routes/about.tsx` | Yes (`PageHero`) |
| `/practice-areas` | `src/routes/practice-areas.tsx` | Yes (`PageHero`) |
| `/our-people` | `src/routes/our-people.tsx` | Yes (`PageHero`) |
| `/our-people/$slug` | `src/routes/our-people.$slug.tsx` | Yes |
| `/insights` | `src/routes/insights.tsx` | Yes (`PageHero`) |
| `/insights/$slug` | `src/routes/insights.$slug.tsx` | Yes |
| `/recognitions` | `src/routes/recognitions.tsx` | Yes (`PageHero`) |
| `/media-coverage` | `src/routes/media-coverage.tsx` | Yes (`PageHero`) |
| `/lex-mundi` | `src/routes/lex-mundi.tsx` | Yes (`PageHero`) |
| `/career` | `src/routes/career.tsx` | Yes (`PageHero`) |

`/our-people/$slug` resolves to **16 people** (`src/data/people.ts`).
`/insights/$slug` resolves to **50 articles** (`src/data/insights.ts`).

**Total indexable public URLs: 9 static pages + 16 people + 50 insights = 75.**

### Public but should not be indexed

| Route | Reason |
|---|---|
| `/login` | Client portal sign-in |
| `/tlc-login` | TLC Engaged portal sign-in |

### Authentication-gated (must never be indexed)

| Route | Guard |
|---|---|
| `/client-dashboard` | `beforeLoad` → `isAuthenticated()` |
| `/client-articles` (+ `/$category`, `/$category/$slug`) | `beforeLoad` → `isAuthenticated()` |
| `/tlc-dashboard` | `beforeLoad` → `isTlcAuthenticated()` |
| `/tlc-articles` (+ `/$category`, `/$category/$slug`) | `beforeLoad` → `isTlcAuthenticated()` |

---

## 3. Current SEO implementation

| Signal | Status |
|---|---|
| `<title>` | **One hardcoded title in `index.html`, identical on every URL** |
| `<meta name="description">` | **One hardcoded description in `index.html`, identical on every URL** |
| `<link rel="canonical">` | **Absent everywhere** |
| `<meta name="robots">` | Absent (no accidental `noindex` — see §4.4) |
| `<meta name="viewport">` | Present and correct |
| `<html lang>` | Present (`en`) |
| Open Graph | Only `og:title`, `og:description`, `og:type` in `index.html` — identical everywhere. No `og:url`, no `og:image`, no `og:site_name` |
| Twitter Card | **Absent** |
| JSON-LD / structured data | **Absent** |
| `robots.txt` | **Does not exist** |
| `sitemap.xml` | **Does not exist** |
| SEO library | **None installed.** No `react-helmet`, no `react-helmet-async` |
| Image `alt` | **All 19 `<img>` elements have `alt`.** Correct. |
| Heading structure | **Every page has exactly one H1.** Correct. |
| Internal linking | Header/Footer use `<Link>` → real `<a href>`. Crawlable. Correct. |
| Domain canonicalisation | apex → `www` returns **308**; `http` → `https` returns **308**. Correct. |
| Dev/preview URL leakage | **None.** No `localhost`, `127.0.0.1`, `vercel.app` or `http://` references in application source. |

### The `head:` blocks are dead code

`src/routes/*.tsx` **already contain 14 TanStack Router `head:` definitions** with per-route titles, descriptions and Open Graph tags — for example `src/routes/about.tsx:6-19` and `src/routes/practice-areas.tsx:7-15`.

**None of them have any effect.** TanStack Router only emits `head:` output where a `<HeadContent />` component is rendered. `HeadContent` is never imported or rendered anywhere in the project (verified by search across `src/**`). The metadata is computed and discarded.

The same applies to the six existing `{ name: "robots", content: "noindex" }` declarations on the gated dashboard/article routes — **they are also inert**, so those private routes are not actually marked `noindex` in any HTML.

---

## 4. Problems found

### 4.1 — CRITICAL: Every URL serves byte-identical HTML

**Evidence (production, live):**

```
/                : adba1d1d391f56ae7d3b10622e954230
/about           : adba1d1d391f56ae7d3b10622e954230
/practice-areas  : adba1d1d391f56ae7d3b10622e954230
/insights        : adba1d1d391f56ae7d3b10622e954230
/our-people      : adba1d1d391f56ae7d3b10622e954230
/totally-fake-url: adba1d1d391f56ae7d3b10622e954230
```

Every URL — including a URL that does not exist — returns the same 1,217-byte document, with the same `<title>`, the same description, and this body:

```html
<body>
  <div id="root"></div>
</body>
```

Google crawls first and renders later, often days or weeks later. At crawl time, every page of this site is indistinguishable from every other page. The WordPress site emitted a unique title, description, canonical and full body copy on every URL at HTTP-response time.

| | |
|---|---|
| **Files responsible** | `index.html`, `vercel.json`, `vite.config.ts`, `src/routes/__root.tsx` |
| **Minimal fix** | Emit a real static HTML file per public route at build time, with that route's own `<title>`, description, canonical, OG/Twitter and JSON-LD in the head. Keep the identical React app hydrating on top. |
| **Changes visible content/design/logic?** | **No.** Head-only. The rendered page is produced by the same unchanged React components. |
| **Expected impact** | Restores per-page identity, snippet quality and duplicate-content separation — the single largest technical regression from the migration. |

---

### 4.2 — CRITICAL: No 301 redirects from the old WordPress URLs

The old WordPress site's own sitemaps (recovered from the Internet Archive) declare **37 pages** and **44 posts**. Wayback's URL index lists **1,142 archived URLs** on the domain.

**Not one of them redirects.** Every old URL returns HTTP 200 and the SPA shell, which then client-side renders "404 — Page not found":

```
/about-us/   -> 200
/partners/   -> 200
/contact-us/ -> 200
/lawyers/    -> 200
/our-people/ -> 200
```

Every backlink, every ranking signal and every piece of accumulated authority pointing at those URLs currently terminates in a soft 404. **This is the most probable single cause of the reported ranking collapse.**

| | |
|---|---|
| **Files responsible** | `vercel.json` (no `redirects` block at all) |
| **Minimal fix** | Add `redirects` entries mapping each old WordPress URL to its current equivalent. Full mapping in `OLD_TO_NEW_URL_MAP.md`. |
| **Changes visible content/design/logic?** | **No.** Edge-level HTTP redirects only. |
| **Expected impact** | Transfers historic link equity and ranking history to the current URLs. Highest-value fix available. |

---

### 4.3 — CRITICAL: Soft 404 on every non-existent URL

`vercel.json` currently contains only:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

This catch-all rewrites **everything** to the SPA shell with HTTP 200. Combined with §4.2, the ~1,000 obsolete WordPress theme URLs (`/portfolio/*`, `/tag/*`, `/category/*`, `/blog/page/*`, `/elements-*`, `/services-*`) all return 200 with a rendered 404 page.

Google classifies these as **soft 404s**, which wastes crawl budget at scale and degrades site quality signals.

| | |
|---|---|
| **Files responsible** | `vercel.json` |
| **Minimal fix** | Replace the blanket catch-all with prerendered files for real routes + targeted rewrites for the auth-gated trees, so unmatched URLs fall through to a real HTTP 404. |
| **Changes visible content/design/logic?** | **No.** The 404 page users see is the existing `NotFoundComponent` from `src/routes/__root.tsx`, unchanged. Only the HTTP status code changes. |
| **Expected impact** | Stops soft-404 accumulation; reclaims crawl budget for real pages. |

---

### 4.4 — CRITICAL: `robots.txt` and `sitemap.xml` return HTML

Neither file exists. Because of the catch-all rewrite they are **not 404s — they return the HTML SPA shell with HTTP 200**:

```
GET /robots.txt   -> 200, Content-Type: text/html, body = <!DOCTYPE html>...
GET /sitemap.xml  -> 200, Content-Type: text/html, body = <!DOCTYPE html>...
```

The old WordPress site had a full Yoast-style sitemap set (`sitemap_index.xml`, `page-sitemap.xml`, `post-sitemap.xml`, `category-sitemap.xml`, `author-sitemap.xml`), all of which now return HTML.

There is **no** `noindex` and **no** `X-Robots-Tag` anywhere (verified against production response headers), so nothing is actively blocking indexing — but discovery has no assistance whatsoever.

| | |
|---|---|
| **Files responsible** | `public/` (neither file present), `vercel.json` |
| **Minimal fix** | Add a real `public/robots.txt`; generate a real `dist/sitemap.xml` at build time from the route table and data files. |
| **Changes visible content/design/logic?** | **No.** |
| **Expected impact** | Restores crawl discovery for all 77 public URLs. |

---

### 4.5 — HIGH: No canonical URLs

No page emits `<link rel="canonical">`. Combined with §4.1 (identical HTML) and §4.3 (everything returns 200), Google has no signal about which URL is authoritative for any piece of content, and near-infinite 200-returning URL variants exist.

| | |
|---|---|
| **Files responsible** | `index.html`, `src/routes/__root.tsx` |
| **Minimal fix** | Emit an absolute `https://www.legalcirclebd.com/...` canonical per route in the prerendered head. |
| **Changes visible content/design/logic?** | **No.** |
| **Expected impact** | Consolidates duplicate URL variants onto one address per page. |

---

### 4.6 — HIGH: Route metadata is computed but discarded

14 route files define correct `head:` metadata that never reaches the document (see §3). Six `noindex` declarations on private routes are equally inert, meaning **the client portal dashboards and gated article pages carry no `noindex` at all**.

| | |
|---|---|
| **Files responsible** | `src/routes/__root.tsx` (no head rendering), all 14 route files |
| **Minimal fix** | Wire the existing metadata into both the build-time prerender and a client-side head sync, preserving the existing wording verbatim. |
| **Changes visible content/design/logic?** | **No.** |
| **Expected impact** | Per-page titles/descriptions become real; private routes become genuinely `noindex`. |

---

### 4.7 — HIGH: No trailing-slash policy

WordPress served every URL **with** a trailing slash (`/about-us/`). The React app links **without** one (`/about`). Vercel currently has no `trailingSlash` setting, so `/about` and `/about/` both return 200 with identical content and neither declares a canonical.

| | |
|---|---|
| **Files responsible** | `vercel.json` |
| **Minimal fix** | Set `"trailingSlash": false` (matching what the app's own `<Link>` components generate) and canonicalise to the non-slash form. |
| **Changes visible content/design/logic?** | **No.** |
| **Expected impact** | Eliminates a systematic duplicate-URL class. |

---

### 4.8 — MEDIUM: No structured data

The old site is gone, so its markup cannot be recovered directly, but a Bangladeshi law firm with a physical address, phone, email and named lawyers would ordinarily have carried `Organization` / `LegalService` / `Person` markup.

All facts needed are already present and verifiable in the repository:

- Name, address, phone, email — `src/components/Footer.tsx` and `src/components/Header.tsx`
- Social profiles — `src/components/Header.tsx`
- People names and roles — `src/data/people.ts`

| | |
|---|---|
| **Files responsible** | No structured data anywhere |
| **Minimal fix** | Emit `LegalService`/`Organization` + `WebSite` on the homepage, `Person` on profile pages, `BreadcrumbList` on nested pages — using **only** facts already displayed on the site. |
| **Changes visible content/design/logic?** | **No.** JSON-LD is invisible. |
| **Expected impact** | Enables knowledge-panel and rich-result eligibility. No ranking guarantee. |

---

### 4.9 — MEDIUM: No Open Graph image, no Twitter Card, no `og:url`

`index.html` supplies only `og:title`, `og:description` and `og:type`, identical across the whole site. There is no `og:image`, so every share of every page renders as a bare link.

| | |
|---|---|
| **Files responsible** | `index.html` |
| **Minimal fix** | Emit per-route `og:url`, `og:site_name`, `og:image` (using an existing asset already in the repo) and `twitter:card`. |
| **Changes visible content/design/logic?** | **No.** |
| **Expected impact** | Restores social preview quality. Indirect SEO value only. |

---

### 4.10 — MEDIUM: Content regression on article pages

This is a **content**, not a technical, finding, and it is reported for the client's awareness — no fix is proposed, because fixing it would require adding visible content, which is out of scope.

The old WordPress posts contained **full article text** at root-level URLs, e.g. `/faq-on-trusts/`, `/data-privacy-and-e-commerce/`, `/framing-a-social-enterprise-law/`.

The current `/insights/$slug` pages are stubs. Most `excerpt` values in `src/data/insights.ts` read exactly:

> "To read the full article, Click here."

…followed by an outbound link to LinkedIn, The Financial Express, Mori Hamada, or a PDF.

Even with perfect technical SEO, a page whose entire body is one sentence and an external link cannot rank for the queries the original full-text article ranked for. **If the client's lost rankings were primarily on article/blog queries, this is a co-equal root cause with §4.2, and only the client can resolve it** by restoring the article bodies.

| | |
|---|---|
| **Files responsible** | `src/data/insights.ts` |
| **Minimal fix** | **None applied.** Out of scope — requires adding visible content. |
| **Expected impact** | N/A. Flagged for client decision. |

---

### 4.11 — MEDIUM: `/contact-us/` has no equivalent page

`/contact-us/` was a real page in the WordPress `page-sitemap.xml`. **The React site has no contact route at all.** `src/components/Footer.tsx:106` renders the text `Contact Us- Online Form` as plain, unlinked text — the link and the form were not migrated.

Per the brief ("Do NOT redirect unrelated pages to the homepage"), no redirect is appropriate: there is no equivalent page to redirect to. Building one would mean adding visible content, which is out of scope.

| | |
|---|---|
| **Files responsible** | `src/components/Footer.tsx`, missing route |
| **Minimal fix** | **None applied.** Flagged for the client — a contact page is a standard conversion and local-SEO asset and its absence is a migration gap. |

---

### 4.12 — LOW: Unoptimised images

Several profile photographs ship at their original scanned size:

| File | Size |
|---|---|
| `Pushpo-Rahman--scaled.jpg` | 477 kB |
| `Anita-Ghazi-Rahman--scaled.jpg` | 389 kB |
| `Gazi-Md.-Rokib-Bin-Hossain-scaled.jpg` | 304 kB |
| `hero-building.jpg` | 249 kB |

They are correctly `alt`-tagged and the client-logo carousel already uses `loading="lazy"`. Recompressing them would be a genuine Core Web Vitals win, but it re-encodes image assets, which risks a visible change.

| | |
|---|---|
| **Minimal fix** | **None applied** — deliberately out of scope under constraint 4 ("do not change images"). Recommended to the client as a separate, visually-reviewed task. |

---

### 4.13 — LOW: Main bundle 428 kB / 134 kB gzip

Route-level code splitting is already enabled (`autoCodeSplitting: true`) and working — the 172 kB `docx-preview` chunk is correctly isolated to the auth-gated article routes and never loads on public pages. This is not an indexing blocker.

| | |
|---|---|
| **Minimal fix** | **None applied.** No SEO justification for further optimisation. |

---

### 4.14 — Non-SEO observation (reported, not fixed)

`src/data/credentials.ts` is imported by `src/lib/auth.ts`, which is bundled into the client JavaScript. **Portal usernames and passwords are therefore readable by anyone** who opens the deployed bundle.

This is a security issue, not an SEO issue, and constraints 5/6 forbid changing authentication. **No change has been made.** It is raised here because it was encountered during the audit and the client should be aware of it.

---

## 5. Severity summary

| # | Problem | Severity | Fix changes UI/logic? |
|---|---|---|---|
| 4.1 | Identical HTML on every URL; empty body | **CRITICAL** | No |
| 4.2 | No 301s from old WordPress URLs | **CRITICAL** | No |
| 4.3 | Soft 404 on every non-existent URL | **CRITICAL** | No |
| 4.4 | `robots.txt` / `sitemap.xml` return HTML | **CRITICAL** | No |
| 4.5 | No canonical URLs | **HIGH** | No |
| 4.6 | Route metadata computed but discarded | **HIGH** | No |
| 4.7 | No trailing-slash policy | **HIGH** | No |
| 4.8 | No structured data | **MEDIUM** | No |
| 4.9 | No OG image / Twitter Card / `og:url` | **MEDIUM** | No |
| 4.10 | Article bodies replaced by outbound stubs | **MEDIUM** | *Not fixed — out of scope* |
| 4.11 | `/contact-us/` has no equivalent | **MEDIUM** | *Not fixed — out of scope* |
| 4.12 | Unoptimised images | **LOW** | *Not fixed — out of scope* |
| 4.13 | Bundle size | **LOW** | *Not fixed — no SEO need* |

---

## 6. What is already correct

Worth stating explicitly, because these need no work and will not be touched:

- Every `<img>` has an `alt` attribute (19/19)
- Every page has exactly one `<h1>`
- Internal navigation uses real crawlable `<a href>` elements
- `apex → www` and `http → https` both 308 correctly
- No `noindex`, no `nofollow`, no `X-Robots-Tag` blocking anything
- No `localhost` / `vercel.app` / preview-domain leakage in source
- `<html lang="en">` and viewport meta are correct
- Route-level code splitting is enabled and working

---

## 7. Architecture verdict

> Constraint 8: *"DO NOT replace React with another framework unless you first prove that the current architecture makes proper SEO impossible."*

**The current architecture does not make proper SEO impossible, and React will not be replaced.**

Every CRITICAL and HIGH finding above is fixable within the existing Vite + React + TanStack Router SPA:

| Finding | Fixable in place? | How |
|---|---|---|
| 4.1 Identical HTML | Yes | Build-time per-route HTML emission (post-`vite build` script) |
| 4.2 Missing 301s | Yes | `vercel.json` `redirects` |
| 4.3 Soft 404s | Yes | `vercel.json` routing + real `404.html` |
| 4.4 robots/sitemap | Yes | `public/robots.txt` + generated `dist/sitemap.xml` |
| 4.5 Canonicals | Yes | Prerendered head |
| 4.6 Dead metadata | Yes | Shared metadata module + client head sync |
| 4.7 Trailing slash | Yes | `vercel.json` `trailingSlash: false` |
| 4.8 Structured data | Yes | Prerendered JSON-LD |
| 4.9 OG/Twitter | Yes | Prerendered head |

**Chosen approach — build-time head prerendering.** After `vite build`, a script writes one real static HTML file per public route (`dist/about/index.html`, `dist/our-people/<slug>/index.html`, …). Each file is the existing built shell with that route's own head injected. The identical, unchanged React app hydrates on top.

**Why not full server-side rendering of the page body?** It was considered and rejected as unsafe under the stated constraints:

- `src/lib/auth.ts` reads `sessionStorage` at module/render time, and `src/components/Header.tsx` calls `getSession()` during render. Both throw in Node. SSR would require editing authentication code — forbidden by constraints 5, 6 and the strict safety rule.
- `PageHero` and the homepage hero animate in from `opacity: 0` via Framer Motion. Server-rendered markup would ship content at zero opacity.
- Hydration mismatches between the logged-out server render and a logged-in client would risk visible flicker.

Head-level prerendering carries none of these risks: it touches only `<head>`, never `<body>`, so it cannot alter rendering, layout, animation, authentication or any application behaviour. Body content continues to be produced by Googlebot's JavaScript rendering, exactly as today.

**Dependencies to be added: zero.** The prerender script uses Vite (already a dependency) to load the TypeScript data modules.

---

## 8. Next step

URL migration mapping is delivered separately in **`OLD_TO_NEW_URL_MAP.md`**, which enumerates every recoverable old WordPress URL and its current equivalent.

No files have been modified at the time of this report.

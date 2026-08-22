# Old WordPress → Current React URL Map

**Produced:** 2026-08-21
**Domain:** `https://www.legalcirclebd.com`

## How this map was derived

The old WordPress installation is gone, so the old URL set was reconstructed from primary sources rather than guessed:

1. **The old site's own XML sitemaps**, recovered from the Internet Archive:
   - `page-sitemap.xml` → 37 page URLs
   - `post-sitemap.xml` → 44 post URLs
2. **The Internet Archive CDX index** for `legalcirclebd.com*` → 1,142 archived URLs returning HTTP 200, covering three successive site generations (a pre-2016 PHP site, a 2016–2018 WordPress theme, and the final WordPress theme).
3. **The current route table** (`src/routeTree.gen.ts`) and data modules (`src/data/people.ts`, `src/data/insights.ts`) for the destination side.

Slug matching between old posts and current insights was computed against the live `slugify()` implementation in `src/data/insights.ts:10-15`, not eyeballed.

## Conventions

- Old WordPress URLs always carried a **trailing slash**. Current React URLs have **no trailing slash** (this is what the app's own `<Link>` components generate). `trailingSlash: false` is being set on Vercel so both forms resolve to one canonical address.
- All redirects are **301 (permanent)**.
- No redirect target is itself a redirect source — **no chains, no loops**.
- Where no genuine equivalent exists, the URL is deliberately allowed to return **404**. Redirecting unrelated pages to the homepage is explicitly avoided.

---

## 1. Core pages

| Old URL | Current URL | Status |
|---|---|---|
| `/` | `/` | Unchanged |
| `/about-us/` | `/about` | 301 |
| `/about/` | `/about` | 301 |
| `/the-firm/` | `/about` | 301 |
| `/practice-areas/` | `/practice-areas` | 301 (normalise slash) |
| `/practice-area/` | `/practice-areas` | 301 |
| `/our-services/` | `/practice-areas` | 301 |
| `/our-people/` | `/our-people` | 301 (normalise slash) |
| `/our-people-2/` | `/our-people` | 301 |
| `/our-people-2-2/` | `/our-people` | 301 |
| `/lawyers/` | `/our-people` | 301 |
| `/people/` | `/our-people` | 301 |
| `/partners/` | `/our-people#partners` | 301 |
| `/insights/` | `/insights` | 301 (normalise slash) |
| `/blog/` | `/insights` | 301 |
| `/publications/` | `/insights` | 301 |
| `/publication/` | `/insights` | 301 |
| `/our-publications/` | `/insights` | 301 |
| `/latest-posts/` | `/insights` | 301 |
| `/recognitions/` | `/recognitions` | 301 (normalise slash) |
| `/recognition/` | `/recognitions` | 301 |
| `/media-coverage/` | `/media-coverage` | 301 (normalise slash) |
| `/news-media/` | `/media-coverage` | 301 |
| `/lex-mundi/` | `/lex-mundi` | 301 (normalise slash) |
| `/lex-mundi-the-legal-circle/` | `/lex-mundi` | 301 |
| `/career/` | `/career` | 301 (normalise slash) |
| `/career-opportunity/` | `/career` | 301 |
| `/homepage/` | `/` | 301 |
| `/our-clients/` | `/` | 301 — see note below |
| `/clients/` | `/` | 301 — see note below |

**Note on `/our-clients/` and `/clients/`:** these are the only redirects that resolve to the homepage. They are *not* an "unrelated page dumped on the homepage" — the client-logo content from those pages is now rendered on the homepage as the "Our Clients" section (`src/routes/index.tsx`, `Clients` component). The destination genuinely holds the content the old URL held.

---

## 2. People pages

The old site used three different URL shapes for lawyer profiles over its lifetime. All three are mapped.

### 2.1 Root-level profile URLs → `/our-people/{slug}`

| Old URL | Current URL |
|---|---|
| `/anita-ghazi/` | `/our-people/anita-ghazi-rahman` |
| `/gazi-rokib/` | `/our-people/gazi-md-rokib-bin-hossain` |
| `/sameera-mahmud/` | `/our-people/sameera-mahmud` |
| `/sameera-m-reza/` | `/our-people/sameera-mahmud` |
| `/pushpo-rahman/` | `/our-people/pushpo-rahman` |
| `/nauriin-ahmed/` | `/our-people/nauriin-ahmed` |
| `/jarif-ahmed/` | `/our-people/jarif-ahmed-rumman` |
| `/masud-khan/` | `/our-people/masud-khan` |
| `/abrar-hasnine/` | `/our-people/abrar-hasnine-rifat` |
| `/taahsina-raisa/` | `/our-people/taahsina-raisa-rabbi` |
| `/taahsina-raisar/` | `/our-people/taahsina-raisa-rabbi` |
| `/nafiul-alam-shupto/` | `/our-people/nafiul-alam-shupto` |
| `/nafiul-alam-shupto-2/` | `/our-people/nafiul-alam-shupto` |
| `/umer-aiman/` | `/our-people/umer-aiman-khan` |
| `/eshrak-e-moazzam/` | `/our-people/eshrak-e-moazzam` |
| `/fahad-ibne-awal/` | `/our-people/fahad-ibne-awal` |
| `/shakil/` | `/our-people/md-moyen-uddin-shakil` |
| `/shohel/` | `/our-people/kutubul-alom-sohel` |
| `/rabiul/` | `/our-people/mahmudul-hasan-rabiul` |

### 2.2 `/people/{slug}/` URLs → `/our-people/{slug}`

| Old URL | Current URL |
|---|---|
| `/people/anitaghazirahman/`, `/people/anita-ghazi-rahman/` | `/our-people/anita-ghazi-rahman` |
| `/people/gazibinrokibhasan/` | `/our-people/gazi-md-rokib-bin-hossain` |
| `/people/sameeramahmudreza/`, `/people/sameera-mahmud-reza/` | `/our-people/sameera-mahmud` |
| `/people/pushporahman/` | `/our-people/pushpo-rahman` |
| `/people/nauriinahmed/` | `/our-people/nauriin-ahmed` |
| `/people/jarifahmedrumman/`, `/people/jarif-ahmed/` | `/our-people/jarif-ahmed-rumman` |
| `/people/masudkhan/`, `/people/masud-khan/` | `/our-people/masud-khan` |
| `/people/abrarhasnine/`, `/people/abrar-hasnine/` | `/our-people/abrar-hasnine-rifat` |
| `/people/taahsinaraisa/` | `/our-people/taahsina-raisa-rabbi` |
| `/people/umeraimankhan/` | `/our-people/umer-aiman-khan` |

### 2.3 Legacy custom-post-type URLs

| Old URL | Current URL |
|---|---|
| `/dt_team/anita-ghazi-rahman-islam/` | `/our-people/anita-ghazi-rahman` |
| `/project/anita-ghazi-rahman/` | `/our-people/anita-ghazi-rahman` |
| `/project/masud-khan/` | `/our-people/masud-khan` |

### 2.4 Former personnel — intentionally NOT redirected

These profiles existed on the old site but the person is not in `src/data/people.ts`, so there is **no equivalent page**. They will return a genuine 404. Redirecting a named individual's profile to a different individual, or to the team index, would be misleading:

`/ahnaf-chowdhury/` · `/karishma-jahan/` · `/syed-razi-nasif/` · `/arafat-hosen-khan/` · `/alfred-christopher/` · `/ahsanul-haq-khan/` · `/mafruha-murphy/` · `/mohibul-chowdhoury/` · `/samit-sharower/` · `/sayd-sazman/` · `/shohag/` · `/people/daniah-khandker/` · `/people/zain-husain/` · `/people/eftakharul-alam/` · `/people/mohibul-hasan/` · `/project/daniah-khandker/` · `/project/zain-husain/`

---

## 3. Articles / posts → `/insights/{slug}`

### 3.1 Slug unchanged (normalise trailing slash only)

| Old URL | Current URL |
|---|---|
| `/understanding-preference-shares-in-practice/` | `/insights/understanding-preference-shares-in-practice` |
| `/bangladesh-chapter-on-global-legal-insights/` | `/insights/bangladesh-chapter-on-global-legal-insights` |
| `/data-digitalisation-and-public-welfare-post-covid-19/` | `/insights/data-digitalisation-and-public-welfare-post-covid-19` |
| `/businesses-during-covid-19-crisis/` | `/insights/businesses-during-covid-19-crisis` |
| `/festival-bonus-amid-covid-19/` | `/insights/festival-bonus-amid-covid-19` |
| `/returning-to-work-during-covid-19/` | `/insights/returning-to-work-during-covid-19` |
| `/easing-repatriation-of-proceeds-from-share-sale/` | `/insights/easing-repatriation-of-proceeds-from-share-sale` |
| `/digitising-the-ngo-affairs-bureau/` | `/insights/digitising-the-ngo-affairs-bureau` |
| `/data-privacy-and-e-commerce/` | `/insights/data-privacy-and-e-commerce` |
| `/bangladesh-style-of-citation-of-legal-authorities/` | `/insights/bangladesh-style-of-citation-of-legal-authorities` |
| `/framing-a-social-enterprise-law/` | `/insights/framing-a-social-enterprise-law` |
| `/bangladesh-section-of-the-international-comparative-guide-to-project-finance-2016/` | `/insights/bangladesh-section-of-the-international-comparative-guide-to-project-finance-2016` |
| `/mr-a-j-o-and-mrs-t-l-v-the-slovak-republic-uncitral-award/` | `/insights/mr-a-j-o-and-mrs-t-l-v-the-slovak-republic-uncitral-award` |
| `/an-easy-conversion/` | `/insights/an-easy-conversion` |
| `/faq-on-trusts/` | `/insights/faq-on-trusts` |
| `/covid-19-government-support-measures/` | `/insights/covid-19-government-support-measures` |
| `/employee-stock-option-eso-a-beneficial-plan-for-both-the-company-and-the-employees/` | `/insights/employee-stock-option-eso-a-beneficial-plan-for-both-the-company-and-the-employees` |
| `/investing-workers-funds-differently-securities-seen-best-choice/` | `/insights/investing-workers-funds-differently-securities-seen-best-choice` |
| `/faq-on-company-law-in-bangladesh/` | `/insights/faq-on-company-law-in-bangladesh` |
| `/fairwork-bangladesh-ratings-2021-labour-standards-in-the-gig-economy/` | `/insights/fairwork-bangladesh-ratings-2021-labour-standards-in-the-gig-economy` |
| `/telecoms-and-media-an-overview-of-regulation-in-44-jurisdictions-worldwide/` | `/insights/telecoms-and-media-an-overview-of-regulation-in-44-jurisdictions-worldwide` |
| `/rehearsing-the-witness-the-bhawal-court-case-testimony-and-evidence/` | `/insights/rehearsing-the-witness-the-bhawal-court-case-testimony-and-evidence` |
| `/safe-investments-in-bangladesh/` | `/insights/safe-investments-in-bangladesh` |
| `/faq-regarding-enforcement-of-foreign-judgement-in-bangladesh/` | `/insights/faq-regarding-enforcement-of-foreign-judgement-in-bangladesh` |
| `/faq-on-owning-real-estate-properties-by-dual-citizenship-holders-in-bangladesh/` | `/insights/faq-on-owning-real-estate-properties-by-dual-citizenship-holders-in-bangladesh` |
| `/lexisnexis-company-law-guide-2018-2019/` | `/insights/lexisnexis-company-law-guide-2018-2019` |
| `/faq-on-digital-bank-guidelines/` | `/insights/faq-on-digital-bank-guidelines` |
| `/are-married-women-barred-from-being-trustees-in-bangladesh/` | `/insights/are-married-women-barred-from-being-trustees-in-bangladesh` |
| `/navigating-legal-waters-independent-contractors-status-in-bangladesh/` | `/insights/navigating-legal-waters-independent-contractors-status-in-bangladesh` |
| `/bringing-more-women-in-boardrooms-can-be-game-changer-in-bd-corporate-arena/` | `/insights/bringing-more-women-in-boardrooms-can-be-game-changer-in-bd-corporate-arena` |
| `/cryptocurrency-conundrum-lessons-from-the-mtfe-scam-in-bangladesh/` | `/insights/cryptocurrency-conundrum-lessons-from-the-mtfe-scam-in-bangladesh` |
| `/directors-in-share-market/` | `/insights/directors-in-share-market` |
| `/independent-directors-the-role-and-its-evolution/` | `/insights/independent-directors-the-role-and-its-evolution` |
| `/ensuring-judicial-oversight-in-lawful-interception/` | `/insights/ensuring-judicial-oversight-in-lawful-interception` |
| `/faq-on-board-meetings/` | `/insights/faq-on-board-meetings` |

### 3.2 Slug changed — old title differs from current title

| Old URL | Current URL | Why |
|---|---|---|
| `/limited-aspect-regarding-tort-actions-by-legalcirclebd/` | `/insights/limited-aspect-regarding-tort-actions-maintainable-under-the-laws-of-bangladesh` | Old slug had a `-by-legalcirclebd` suffix |
| `/limited-aspect-regarding-tort-actions-maintainable-under-the-laws-of-bangladesh/` | same as above | Duplicate old URL |
| `/whats-in-a-trademark-by-legalcircle/` | `/insights/what-s-in-a-trademark` | Apostrophe now slugifies to `-s-` |
| `/festival-bonus-amid-covid-19-legalcircle/` | `/insights/festival-bonus-amid-covid-19` | Old slug had a `-legalcircle` suffix |
| `/workforce-reduction-during-covid-19/` | `/insights/workforce-reduction-during-covid-19-information-for-employers` | Current title carries the subtitle |
| `/the-employment-law-review/` | `/insights/the-employment-law-review-edition-8` | Current title carries the edition number |
| `/bangladesh-section-of-laws-on-telecom/` | `/insights/bangladesh-section-of-laws-on-telecom-and-media-2013` | Current title carries the full name and year |
| `/the-temple-of-preah-vihear-cambodia-v-thailand/` | `/insights/the-temple-of-preah-vihear-cambodia-v-thailand-decision-on-the-request-of-provisional-measures` | Current title carries the subtitle |
| `/faq-on-workers-fund-in-bangladesh/` | `/insights/faq-on-workers-funds-in-bangladesh` | Singular → plural "Funds" |
| `/legal-reform-as-a-catalyst-for-social-enterprise/` | `/insights/legal-reform-as-a-catalyst-for-social-enterprise-an-international-social-enterprise-law-policy-report` | Current title carries the subtitle |
| `/global_ma_trends_report-2022/` | `/insights/global-m-a-trends-report-2022` | Underscores → hyphens; `M&A` → `m-a` |
| `/faq-on-the-administration-and-distribution-of-the-deceased-estate-in-a-foreign-country/` | `/insights/faq-on-administration-and-distribution-of-a-deceased-s-estate-under-bangladesh-law` | Article was retitled |
| `/banking-on-change/` | `/insights/banking-on-change-key-reforms-transforming-bangladesh-s-financial-sector` | Current title carries the subtitle |
| `/bangladesh-chapter-on-global-legal-insights-energy-2021/` | `/insights/bangladesh-chapter-on-global-legal-insights` | Current entry consolidates the series |
| `/an-easy-conversion-2/` | `/insights/an-easy-conversion` | WordPress duplicate-slug artefact |
| `/mr-a-j-o-and-mrs-t-l-v-the-slovak-republic-uncitral-award-2/` | `/insights/mr-a-j-o-and-mrs-t-l-v-the-slovak-republic-uncitral-award` | WordPress duplicate-slug artefact |

### 3.3 Dated permalinks (`/YYYY/MM/DD/{slug}/`)

The old site briefly used dated permalinks before switching to root-level slugs. These are mapped to the same destinations as their root-level twins:

| Old URL | Current URL |
|---|---|
| `/2019/08/08/an-easy-conversion/` | `/insights/an-easy-conversion` |
| `/2019/08/08/data-privacy-and-e-commerce/` | `/insights/data-privacy-and-e-commerce` |
| `/2019/08/08/framing-a-social-enterprise-law/` | `/insights/framing-a-social-enterprise-law` |
| `/2020/12/17/understanding-preference-shares-in-practice/` | `/insights/understanding-preference-shares-in-practice` |
| `/2020/12/17/data-digitalization-and-public-welfare-post-covid-19/` | `/insights/data-digitalisation-and-public-welfare-post-covid-19` |
| `/2020/12/17/bangladesh-chapter-on-global-legal-insights-energy-2021/` | `/insights/bangladesh-chapter-on-global-legal-insights` |

### 3.4 Articles with no current equivalent — intentionally NOT redirected

These posts existed on WordPress but are absent from `src/data/insights.ts`. They return 404:

`/sports-laws-of-bangladesh/` · `/citizenship-laws-of-bangladesh/` · `/international-trade-and-usage-of-foreign-exchange/` · `/the-legal-circle-energy-practice-thrives/` · `/procedure-of-making-complaint-under-s-33-of-the-bangladesh-labour-act-2006/` · `/2019/08/08/challenges-to-enforcement-of-competition-act/` · `/2019/08/08/consumer-protection-and-medical-services/` · `/2019/08/08/do-you-even-work/` · `/2019/08/08/legal-framework-for-samaritans/` · `/2019/08/08/protection-of-trade-secret/`

**These are worth the client's attention** — they are real legal articles that were dropped in the migration and may account for lost long-tail rankings. Restoring them is a content decision, outside the scope of this technical work.

---

## 4. `/contact-us/` — no equivalent exists

`/contact-us/` was a live page in the WordPress `page-sitemap.xml`. Related archived variants: `/contact/`, `/contact-us-2/`, `/contact us.htm`, `/contact_us.php`.

**The current React site has no contact route at all.** `src/components/Footer.tsx:106` renders `Contact Us- Online Form` as plain, unlinked text — the page and its form were not migrated.

**No redirect is being created.** There is no equivalent page, and per the brief unrelated pages must not be redirected to the homepage. The URL will return a clean 404.

This is flagged as a **migration gap for the client to resolve**: a contact page is a standard conversion asset and carries local-SEO value (name/address/phone consistency), and `/contact-us/` is exactly the kind of URL that attracts direct navigation and branded search.

---

## 5. Deliberately NOT redirected (return 404)

Roughly 1,000 of the 1,142 archived URLs fall into these groups. All are allowed to 404, which is the correct signal that the content no longer exists.

| Group | Examples | Why no redirect |
|---|---|---|
| WordPress taxonomy archives | `/category/*`, `/tag/*`, `/author/*` (~400 URLs incl. `/page/2/`, `/page/3/`) | No taxonomy system exists in the React site. Collapsing 400 archive URLs onto `/insights` is a many-to-one mass redirect, which Google commonly reclassifies as a soft 404 — worse than a clean 404. |
| Theme demo content | `/portfolio/*`, `/portfolio-category/*`, `/elements-*`, `/services-*`, `/blog-masonry/`, `/buttons/`, `/dividers/`, `/countdown/`, `/particles/` (~300 URLs) | Never real content — shipped demo pages from the purchased WordPress theme. Should never have been indexed. |
| Paginated archives | `/blog/page/2..5/`, `/portfolios/page/2..6/`, `/publication/page/2/` | No paginated equivalent exists. |
| Feeds | `/feed/`, `/comments/feed/`, `/{slug}/feed/` | No feed is published. |
| WordPress internals | `/8312-revision-v1/`, `/wp-content/*`, `/wp-json/*`, `/admin/login_1.php` | Internal artefacts. |
| Pre-2016 PHP site | `/article.php`, `/case_law.php`, `/chamber.php`, `/counsel.php`, `/client.php`, `/publication.php`, `/specialist_area.php`, `/news_event.php`, `/about us.htm`, `/Specialist Areas.htm` | Two site generations old; long dead, negligible remaining equity. |
| Spam injections | `/2020/07/22/super-essay-anthropology-extended-essay-ib/`, `/2020/08/29/why-was-andrew-jackson-a-bad-president-paper-paperhelp/`, casino/essay-mill URLs | Compromised-content artefacts from the old install. **Must 404** — redirecting them would carry spam associations onto the current site. |
| Old sitemaps | `/sitemap_index.xml`, `/page-sitemap.xml`, `/post-sitemap.xml`, `/category-sitemap.xml`, `/author-sitemap.xml`, `/liquid-*-sitemap.xml` | Superseded by the new `/sitemap.xml`. Old sitemap URLs should 404 so Search Console drops them. |
| Misc dropped pages | `/events/`, `/magazine/`, `/newsletter/`, `/global-outreach/`, `/alerts-messages/`, `/page-coming-soon/`, `/date/`, `/active-tab/`, `/modern/`, `/structure/`, `/split/` | No equivalent, and content unverifiable from the archive — guessing a destination would be speculative. |

---

## 6. Summary

| | Count |
|---|---|
| Old URLs discovered | 1,142 |
| Old URLs with a real current equivalent → **301** | **114** |
| Core pages redirected | 29 |
| People profiles redirected | 32 |
| Articles redirected | 53 |
| Deliberately left to 404 | ~1,028 |
| Redirect chains | 0 |
| Redirect loops | 0 |
| Existing React routes removed | 0 |

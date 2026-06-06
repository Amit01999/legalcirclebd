export interface TlcCategory {
  slug: string;
  label: string;
  type: "practice-area" | "industry";
}

export interface TlcArticle {
  slug: string;
  title: string;
  date: string;
  categorySlug: string;
  image?: string;
  images?: string[];
  content?: string;
  fileUrl?: string;
}

export const tlcPracticeAreaCategories: TlcCategory[] = [
  { slug: "general-corporate", label: "General Corporate", type: "practice-area" },
  { slug: "employment", label: "Employment", type: "practice-area" },
  { slug: "ma-transactions", label: "M&A/ Transactions", type: "practice-area" },
  { slug: "foreign-exchange", label: "Foreign Exchange", type: "practice-area" },
  { slug: "tax", label: "Tax", type: "practice-area" },
  { slug: "securities", label: "Securities", type: "practice-area" },
  { slug: "template-agreements", label: "Template Agreements", type: "practice-area" },
  { slug: "export-and-import", label: "Export and Import (EXIM)", type: "practice-area" },
];

export const tlcIndustryCategories: TlcCategory[] = [
  { slug: "fintech", label: "FinTech", type: "industry" },
  { slug: "e-commerce", label: "E-Commerce", type: "industry" },
  { slug: "logistics", label: "Logistics", type: "industry" },
  { slug: "consultancy", label: "Consultancy", type: "industry" },
  { slug: "transport", label: "Transport", type: "industry" },
  { slug: "rmg", label: "RMG", type: "industry" },
  { slug: "agriculture", label: "Agriculture", type: "industry" },
  { slug: "aviation", label: "Aviation", type: "industry" },
  { slug: "hospitality", label: "Hospitality", type: "industry" },
  { slug: "fb", label: "F&B", type: "industry" },
  { slug: "healthcare", label: "Healthcare", type: "industry" },
  { slug: "pharma", label: "Pharma", type: "industry" },
  { slug: "telecommunications", label: "Telecommunications", type: "industry" },
  { slug: "agency-distribution", label: "Agency & Distribution", type: "industry" },
  {
    slug: "power-energy-infrastructure",
    label: "Power, Energy & Infrastructure",
    type: "industry",
  },
  { slug: "ngo", label: "NGO", type: "industry" },
];

export const tlcAllCategories: TlcCategory[] = [
  ...tlcPracticeAreaCategories,
  ...tlcIndustryCategories,
];

const TLCGC = "/images/tlcgeneralcorporate";

export const tlcArticles: TlcArticle[] = [
  // ── General Corporate ──────────────────────────────────────────────────────
  {
    slug: "dife-entity-registration-requirement",
    title: "DIFE Entity registration requirement",
    date: "February 10, 2022",
    categorySlug: "general-corporate",
    image: `${TLCGC}/DIFE-Entity-registration-requirement_page-0001-792x1024.jpg`,
  },
  {
    slug: "documents-required-for-business-visa",
    title: "Documents required for Business Visa requirement",
    date: "March 5, 2022",
    categorySlug: "general-corporate",
    image: `${TLCGC}/Documents-required-for-Business-Visa-requirement_page-0001-792x1024.jpg`,
  },
  {
    slug: "documents-needed-for-letter-of-credit",
    title: "Documents needed for receiving Letter of Credit",
    date: "April 1, 2022",
    categorySlug: "general-corporate",
    image: `${TLCGC}/Documents-required-for-L_C-opening_page-0001-1-792x1024.jpg`,
  },
  {
    slug: "requirement-of-proprietorship-trade-license",
    title: "Requirement of Proprietorship Trade License",
    date: "May 10, 2022",
    categorySlug: "general-corporate",
    image: `${TLCGC}/Requirements-of-proprietorship-trade-license-792x1024.jpg`,
  },
  {
    slug: "bond-license-checklist",
    title: "Bond License Checklist",
    date: "June 15, 2022",
    categorySlug: "general-corporate",
    image: `${TLCGC}/Bond-License-Checklist_page-0001-727x1024.jpg`,
  },
  {
    slug: "sample-article-general-corporate",
    title: "Sample Article - General Corporate",
    date: "July 1, 2022",
    categorySlug: "general-corporate",
    image: `${TLCGC}/sample article.png`,
  },

  // ── RMG ───────────────────────────────────────────────────────────────────
  {
    slug: "sample-article-rmg",
    title: "Sample Article - RMG",
    date: "April 3, 2022",
    categorySlug: "rmg",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },

  // ── Consultancy ───────────────────────────────────────────────────────────
  {
    slug: "sample-article-consultancy",
    title: "Sample Article - Consultancy",
    date: "April 3, 2022",
    categorySlug: "consultancy",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },

  // ── Logistics ─────────────────────────────────────────────────────────────
  {
    slug: "sample-article-logistics",
    title: "Sample Article - Logistics",
    date: "April 3, 2022",
    categorySlug: "logistics",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },

  // ── E-Commerce ────────────────────────────────────────────────────────────
  {
    slug: "sample-article-e-commerce",
    title: "Sample Article - E-commerce",
    date: "April 3, 2022",
    categorySlug: "e-commerce",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },

  // ── Tax ───────────────────────────────────────────────────────────────────
  {
    slug: "sample-article-tax",
    title: "Sample Article - Tax",
    date: "April 3, 2022",
    categorySlug: "tax",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },

  // ── Foreign Exchange ──────────────────────────────────────────────────────
  {
    slug: "sample-article-foreign-exchange",
    title: "Sample Article - Foreign Exchange",
    date: "April 3, 2022",
    categorySlug: "foreign-exchange",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },

  // ── M&A / Transactions ────────────────────────────────────────────────────
  {
    slug: "sample-article-ma",
    title: "Sample Article - M&A",
    date: "April 3, 2022",
    categorySlug: "ma-transactions",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },

  // ── Employment ─────────────────────────────────────────────────────────────
  {
    slug: "sample-article-employment",
    title: "Sample Article - Employment",
    date: "April 3, 2022",
    categorySlug: "employment",
    content: `<p>Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.</p>`,
  },
];

export function getTlcCategoryBySlug(slug: string): TlcCategory | undefined {
  return tlcAllCategories.find((c) => c.slug === slug);
}

export function getTlcArticlesByCategory(categorySlug: string): TlcArticle[] {
  return tlcArticles.filter((a) => a.categorySlug === categorySlug);
}

export function getTlcArticleBySlug(categorySlug: string, slug: string): TlcArticle | undefined {
  return tlcArticles.find((a) => a.categorySlug === categorySlug && a.slug === slug);
}

export function getTlcAdjacentArticles(article: TlcArticle): {
  prev: TlcArticle | null;
  next: TlcArticle | null;
} {
  const list = getTlcArticlesByCategory(article.categorySlug);
  const idx = list.findIndex((a) => a.slug === article.slug);
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  };
}

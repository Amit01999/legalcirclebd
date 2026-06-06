const GC = "/images/GeneralCorporate";

export interface ClientCategory {
  slug: string;
  label: string;
  type: "practice-area" | "industry";
}

export interface ClientArticle {
  slug: string;
  title: string;
  date: string;
  categorySlug: string;
  image?: string;
  images?: string[];
  content?: string;
  fileUrl?: string;
}

// ── Categories ────────────────────────────────────────────────────────────────

export const practiceAreaCategories: ClientCategory[] = [
  { slug: "general-corporate", label: "General Corporate", type: "practice-area" },
  { slug: "employment", label: "Employment", type: "practice-area" },
  { slug: "ma-transactions", label: "M&A/ Transactions", type: "practice-area" },
  { slug: "foreign-exchange", label: "Foreign Exchange", type: "practice-area" },
  { slug: "tax", label: "Tax", type: "practice-area" },
  { slug: "securities", label: "Securities", type: "practice-area" },
  { slug: "template-agreements", label: "Template Agreements", type: "practice-area" },
  { slug: "export-and-import", label: "Export and Import (EXIM)", type: "practice-area" },
];

export const industryCategories: ClientCategory[] = [
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

export const allCategories: ClientCategory[] = [...practiceAreaCategories, ...industryCategories];

export function getCategoryBySlug(slug: string): ClientCategory | undefined {
  return allCategories.find((c) => c.slug === slug);
}

// ── Articles ──────────────────────────────────────────────────────────────────

export const articles: ClientArticle[] = [
  // ── General Corporate ──────────────────────────────────────────────────────
  {
    slug: "memorandum-of-association",
    title: "Memorandum of Association and Article of Association",
    date: "February 10, 2022",
    categorySlug: "general-corporate",
    fileUrl: "/downloads/Memorandum-of-Association.docx",
  },
  {
    slug: "proprietorship-trade-license",
    title: "Requirement of Proprietorship Trade License",
    date: "February 20, 2022",
    categorySlug: "general-corporate",
    image: `${GC}/proprietorship-trade-license.jpg`,
  },
  {
    slug: "letter-of-credit-opening",
    title: "Letter of Credit Opening – Documents required",
    date: "March 5, 2022",
    categorySlug: "general-corporate",
    image: `${GC}/letter-of-credit.jpg`,
  },
  {
    slug: "bida-registration",
    title: "BIDA : Application for Registration of Industrial Investment Project",
    date: "March 20, 2022",
    categorySlug: "general-corporate",
    fileUrl: "/downloads/BIDA-Registration.pdf",
  },
  {
    slug: "board-resolution-equity-injection",
    title: "Board Resolution for Equity Injection",
    date: "April 2, 2022",
    categorySlug: "general-corporate",
    fileUrl: "/downloads/Board-Resolution-for-Equity.doc",
  },
  {
    slug: "liaison-office-extension",
    title: "Liaison Office Extension – documents required",
    date: "July 5, 2022",
    categorySlug: "general-corporate",
    image: `${GC}/liaison-office-extension.jpg`,
  },
  {
    slug: "bond-license-checklist",
    title: "Bond License Checklist",
    date: "August 1, 2022",
    categorySlug: "general-corporate",
    image: `${GC}/bond-license-checklist.jpg`,
  },
  {
    slug: "dife-entity-registration",
    title: "DIFE Entity registration – Documents required",
    date: "September 13, 2022",
    categorySlug: "general-corporate",
    image: `${GC}/dife-entity-registration.jpg`,
  },
  {
    slug: "reporting-serious-incident",
    title: "Reporting Serious Incident",
    date: "October 3, 2022",
    categorySlug: "general-corporate",
    fileUrl: "/downloads/Serious-Incident-Reporting.docx",
  },
  {
    slug: "notice-of-board-meeting",
    title: "Notice of Board Meeting",
    date: "November 14, 2022",
    categorySlug: "general-corporate",
    fileUrl: "/downloads/Notice_Sample.doc",
  },
  {
    slug: "egm-minutes-change-of-office-address",
    title: "EGM Minutes for Change of Office Address",
    date: "December 5, 2022",
    categorySlug: "general-corporate",
    fileUrl: "/downloads/EGM-Minutes-for-Change-of-Office-Address.doc",
  },
  {
    slug: "egm-minutes-without-normal-notice",
    title: "EGM Minutes of Meeting without normal period of Notice",
    date: "December 12, 2022",
    categorySlug: "general-corporate",
    fileUrl: "/downloads/EGM-Minutes-Short-Notice.doc",
  },
  {
    slug: "business-visa-extension",
    title: "Business Visa Extension – Documents required",
    date: "January 8, 2023",
    categorySlug: "general-corporate",
    image: `${GC}/business-visa-extension.png`,
  },
  {
    slug: "pi-visa-work-permit-renewal",
    title: "PI Visa renewal and Work Permit renewal – Documents required",
    date: "February 2, 2023",
    categorySlug: "general-corporate",
    image: `${GC}/pi-visa-work-permit-renewal.png`,
  },
  {
    slug: "foreign-company-incorporation",
    title: "Foreign Company Incorporation – Information required",
    date: "March 1, 2023",
    categorySlug: "general-corporate",
    image: `${GC}/foreign-company-incorporation.png`,
  },

  // ── Employment ─────────────────────────────────────────────────────────────
  {
    slug: "dife-entity-registration",
    title: "DIFE Entity registration – Documents required",
    date: "February 10, 2022",
    categorySlug: "employment",
    image: "/images/Employment/dife-entity-registration.jpg",
  },
  {
    slug: "appointment-letter-managing-director",
    title: "Appointment Letter : Managing Director",
    date: "March 5, 2022",
    categorySlug: "employment",
    fileUrl: "/downloads/Employment/appointment-letter-managing-director.docx",
  },
  {
    slug: "reporting-serious-incident",
    title: "Reporting Serious Incident",
    date: "April 1, 2022",
    categorySlug: "employment",
    fileUrl: "/downloads/Employment/serious-incident-reporting.docx",
  },
  {
    slug: "work-permit-flowchart",
    title: "Work Permit Flowchart",
    date: "May 10, 2022",
    categorySlug: "employment",
    image: "/images/Employment/work-permit-flowchart.jpg",
  },
  {
    slug: "employee-training-agreement",
    title: "Employee Training Agreement – Template",
    date: "June 15, 2022",
    categorySlug: "employment",
    fileUrl: "/downloads/Employment/employee-training-agreement.docx",
  },
  {
    slug: "appointment-letter-intern",
    title: "Appointment Letter: Intern",
    date: "July 20, 2022",
    categorySlug: "employment",
    fileUrl: "/downloads/Employment/appointment-letter-intern.doc",
  },
  {
    slug: "business-visa-extension",
    title: "Business Visa Extension – Documents required",
    date: "August 5, 2022",
    categorySlug: "employment",
    image: "/images/Employment/business-visa-extension.png",
  },
  {
    slug: "pi-visa-work-permit-renewal",
    title: "PI Visa renewal and Work Permit renewal – Documents required",
    date: "September 1, 2022",
    categorySlug: "employment",
    image: "/images/Employment/pi-visa-work-permit-renewal.png",
  },

  // ── Template Agreements ────────────────────────────────────────────────────
  {
    slug: "appointment-letter-managing-director",
    title: "Appointment Letter : Managing Director",
    date: "February 10, 2022",
    categorySlug: "template-agreements",
    fileUrl: "/downloads/TemplateAgreement/Appointment-Letter_Managing-Director_Template (1).docx",
  },
  {
    slug: "truck-rental-agreement",
    title: "Truck Rental Agreement – Template",
    date: "March 5, 2022",
    categorySlug: "template-agreements",
    fileUrl: "/downloads/TemplateAgreement/Truck-Rental-Agreement_Sample.doc",
  },
  {
    slug: "employee-training-agreement",
    title: "Employee Training Agreement – Template",
    date: "April 1, 2022",
    categorySlug: "template-agreements",
    fileUrl: "/downloads/TemplateAgreement/Employee-Training-Bond_-Sample.docx",
  },
  {
    slug: "supplier-agreement",
    title: "Supplier Agreement – Template",
    date: "May 10, 2022",
    categorySlug: "template-agreements",
    fileUrl: "/downloads/TemplateAgreement/Template-Supplier-Agreement_Sample.docx",
  },
  {
    slug: "sub-contractor-agreement",
    title: "Sub-Contractor Agreement – Template",
    date: "June 15, 2022",
    categorySlug: "template-agreements",
    fileUrl: "/downloads/TemplateAgreement/Agreement-for-Sub-Contract_Sample.doc",
  },
  {
    slug: "appointment-letter-intern",
    title: "Appointment Letter: Intern",
    date: "July 20, 2022",
    categorySlug: "template-agreements",
    fileUrl: "/downloads/TemplateAgreement/Letter-of-Appointment-Intern_Sample.doc",
  },

  // ── E-Commerce ─────────────────────────────────────────────────────────────
  {
    slug: "items-restricted-on-online-marketplaces",
    title: "Items restricted on Online Marketplaces",
    date: "September 18, 2022",
    categorySlug: "e-commerce",
    images: [
      "/images/ECommerce/Items-restricted-on-online-marketplaces_page-0001.jpg",
      "/images/ECommerce/Items-restricted-on-online-marketplaces_page-0002.jpg",
      "/images/ECommerce/Items-restricted-on-online-marketplaces_page-0003.jpg",
    ],
  },

  // ── Transport ─────────────────────────────────────────────────────────────
  {
    slug: "truck-rental-agreement",
    title: "Truck Rental Agreement – Template",
    date: "August 2, 2022",
    categorySlug: "transport",
    fileUrl: "/downloads/Transport/Truck-Rental-Agreement_Sample.doc",
  },

  // ── Logistics ──────────────────────────────────────────────────────────────
  {
    slug: "sub-contractor-agreement",
    title: "Sub-Contractor Agreement – Template",
    date: "August 2, 2022",
    categorySlug: "logistics",
    fileUrl: "/downloads/Logistics/Agreement-for-Sub-Contract_Sample.doc",
  },
  // ── F&B──────────────────────────────────────────────────────────────
  {
    slug: "letter-of-credit-opening",
    title: "Letter of Credit Opening – Documents required",
    date: "March 5, 2022",
    categorySlug: "fb",
    image: `${GC}/letter-of-credit.jpg`,
  },
  {
    slug: "board-resolution-equity-injection",
    title: "Board Resolution for Equity Injection",
    date: "April 2, 2022",
    categorySlug: "fb",
    fileUrl: "/downloads/Board-Resolution-for-Equity.doc",
  },
  // ── F&B──────────────────────────────────────────────────────────────
  {
    slug: "supplier-agreement",
    title: "Supplier Agreement – Template",
    date: "May 10, 2022",
    categorySlug: "agency-distribution",
    fileUrl: "/downloads/TemplateAgreement/Template-Supplier-Agreement_Sample.docx",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getArticlesByCategory(categorySlug: string): ClientArticle[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getArticleBySlug(categorySlug: string, slug: string): ClientArticle | undefined {
  return articles.find((a) => a.categorySlug === categorySlug && a.slug === slug);
}

export function getAdjacentArticles(article: ClientArticle): {
  prev: ClientArticle | null;
  next: ClientArticle | null;
} {
  const list = getArticlesByCategory(article.categorySlug);
  const idx = list.findIndex((a) => a.slug === article.slug);
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  };
}

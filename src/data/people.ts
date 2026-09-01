import abrarHasnineImage from "@/assets/peoples/Abrar-Hasnain--scaled.jpg";
import anitaGhaziRahmanImage from "@/assets/peoples/Anita-Ghazi-Rahman--scaled.jpg";
import eshrakEMoazzamImage from "@/assets/peoples/Eshrak-E-Moazzam.jpg";
import fahadIbneAwalImage from "@/assets/peoples/Fahad Ibne Awal.jpg";
import gaziMdRokibBinHossainImage from "@/assets/peoples/Gazi-Md.-Rokib-Bin-Hossain-scaled.jpg";
import jarifAhmedImage from "@/assets/peoples/Jarif-Ahmed-scaled.jpg";
import masudKhanImage from "@/assets/peoples/masudkhan.jpg";
import nafiulAlamShuptoImage from "@/assets/peoples/Shupto-Profile-Page.jpg";
import nauriinAhmedImage from "@/assets/peoples/nauriinahmed-scaled.jpg";
import pushpoRahmanImage from "@/assets/peoples/Pushpo-Rahman--scaled.jpg";
import sameeraMahmudImage from "@/assets/peoples/Sameera-Mahmud-Large-Image.jpg";
import taahsinaRaisaRabbiImage from "@/assets/peoples/taahsinaraisa-scaled.jpg";
import umerAimanKhanImage from "@/assets/peoples/umeraimankhan-scaled.jpg";
import mahmudulHasanRabiulImage from "@/assets/peoples/Rabiul-1.jpg";
import mdMoyenUddinShakilImage from "@/assets/peoples/Shakil-1.jpg";
import kutubulAlomSohelImage from "@/assets/peoples/Sohel-1.jpg";

export const peopleTabs = [
  "Partners",
  "Of Counsel",
  "Senior Associates",
  "Associates",
  "Paralegal",
] as const;

export type PeopleTab = (typeof peopleTabs)[number];

export type ProfileSection = {
  title: string;
  items: string[];
  nonCollapsible?: boolean;
};

/**
 * A single inline run within a bio paragraph.
 * Plain string = unstyled text.
 * Object = styled text — any combination of highlight / color / href / bold.
 *
 * Usage in data:
 *   { text: "Lincoln's Inn", highlight: true }
 *   { text: "University College London", href: "https://ucl.ac.uk" }
 *   { text: "Senior Advocate", color: "brand" }
 *   { text: "The Legal Circle", href: "/", bold: true, color: "brand" }
 */
export type TextRun =
  | string
  | {
      text: string;
      /** Yellow highlight background */
      highlight?: boolean;
      /** Named color: "brand" (green) | "red" | "blue" | any Tailwind text-color class */
      color?: string;
      /** Makes the run a hyperlink */
      href?: string;
      /** Bold weight */
      bold?: boolean;
    };

/** A bio paragraph: either a plain string or an array of inline runs */
export type BioParagraph = string | TextRun[];

export type Person = {
  name: string;
  slug: string;
  role: string;
  initials: string;
  image: string;
  qualifications?: string[];
  positions?: string[];
  phone?: string;
  telephone?: string;
  email?: string;
  whatsapp?: string;
  linkedin?: string;
  bio?: BioParagraph[];
  sections?: ProfileSection[];
};

export const peopleTabHashes: Record<PeopleTab, string> = {
  Partners: "partners",
  "Of Counsel": "of-counsel",
  "Senior Associates": "senior-associates",
  Associates: "associates",
  Paralegal: "paralegal",
};

const anitaGhaziRahman: Person = {
  name: "Anita Ghazi Rahman",
  slug: "anita-ghazi-rahman",
  role: "Founder, Managing Partner & Senior Advocate of the Supreme Court of Bangladesh",
  initials: "AR",
  image: anitaGhaziRahmanImage,
  qualifications: [
    "Senior Advocate, Supreme Court of Bangladesh.",
    "LL.B. (Hons), University College London (UCL)",
    "Barrister-at-Law, of Lincoln's Inn",
  ],
  positions: [
    "Independent Director, BRAC Bank PLC.",
    "Nominated Director, bKash Limited.",
    "Nominated Director, BRAC IT Services Limited.",
    "Member, National Advisory Board for Impact Investment in Bangladesh",
    "Independent Director, LightCastle Partners",
  ],
  phone: "+8801713036917",
  telephone: "+880258814311",
  email: "anita@legalcirclebd.com",
  linkedin: "https://www.linkedin.com/in/anita-ghazi/",
  whatsapp: "+8801713036917",
  bio: [
    [
      { text: "Anita Ghazi Rahman", bold: true },
      " is a Senior Advocate of the Supreme Court of Bangladesh and the Founder and Managing Partner of The Legal Circle.",
    ],
    "With over two decades of experience, she is widely recognised as one of Bangladesh’s leading corporate, finance and disputes lawyers. Her practice encompasses complex corporate and commercial transactions, investments, mergers and acquisitions, banking and finance, regulatory advisory, and high-value litigation and dispute resolution. She regularly advises multinational corporations, financial institutions, development organisations, investors, boards of directors and leading domestic business groups on strategic legal, governance and regulatory matters.",
    "Called to the Bar of England and Wales from Lincoln’s Inn in 2003, Anita was enrolled as an Advocate of the High Court Division of the Supreme Court of Bangladesh in 2006 and became a Senior Advocate of the Supreme Court of Bangladesh in 2025.",
    "Her professional standing has been recognised consistently by leading international legal directories. She is ranked in Chambers Asia-Pacific for Corporate & Finance and Dispute Resolution, appears in Chambers Global, IFLR1000 (Highly Regarded), The Legal 500 and Asialaw, and was named to the Asia Business Law Journal’s A-List of Bangladesh’s Top 50 Lawyers in 2025.",
    [
      "Anita serves as an Independent Director of ",
      { text: "BRAC Bank PLC", color: "brand", href: "https://www.bracbank.com/" },
      " and as a Nominated Director on the boards of ",
      { text: "bKash Limited", color: "brand", href: "https://www.bkash.com/en" },
      " and ",
      { text: "BRAC IT Services Limited", color: "brand", href: "https://www.bracits.com/" },
      ". She is a Member of the ",
      {
        text: "National Advisory Board for Impact Investment in Bangladesh",
        color: "brand",
        href: "https://nabbangladesh.org/",
      },
      ". Her boardroom experience and governance expertise make her a trusted adviser to companies navigating regulatory, compliance and strategic challenges in highly regulated sectors.",
    ],
    "Beyond her commercial practice, Anita is a committed advocate for access to justice and legal reform. She is the Founder of Think Legal Bangladesh and the Publisher of the Legal Circle Law Reports (LCLR). Through her pro bono work, she has advised local and international non-profit organisations, social enterprises and public-interest initiatives on governance, regulatory and institutional matters, contributing to legal capacity-building and social impact programmes in Bangladesh and internationally.",
  ],
  sections: [
    {
      title: "Corporate Transactions & Capital Markets",
      nonCollapsible: true,
      items: [
        "Anita advises on the full spectrum of corporate transactions, including mergers and acquisitions, joint ventures, inbound and outbound investments, cross-border restructurings, franchise and distribution arrangements, and commercial contracting. She acts for multinational corporations, listed companies, private equity and venture capital investors and development-stage businesses across a broad range of sectors including telecommunications, financial services, technology, RMG, logistics, food and beverage and energy. As Managing Partner of The Legal Circle, Bangladesh's Lex Mundi member firm, she coordinates cross-border matters with Lex Mundi member firms in over 100 jurisdictions worldwide.",
      ],
    },
    {
      title: "Banking, Finance & Debt Capital Markets",
      nonCollapsible: true,
      items: [
        "Anita advises borrowers, lenders and issuers on a range of financing transactions, including term loans, project finance, loan syndication, standby letters of credit, subordinated debt and debt capital markets issuances. Her recent experience includes advising on social bond frameworks and Tier-II subordinated bond issuances for regulated financial institutions. She advises on Bangladesh Bank regulatory requirements applicable to banks and NBFIs and on the structuring of cross-border financing transactions, including foreign currency borrowings and regulatory approvals.",
      ],
    },
    {
      title: "Corporate Governance & Regulatory Advisory",
      nonCollapsible: true,
      items: [
        "Anita advises boards of directors, independent directors and companies on governance matters, including board structures, directors' duties and liabilities, code of conduct requirements, and regulatory compliance with BSEC and Bangladesh Bank guidelines. She has been engaged as a resource person by the Supreme Court of Bangladesh and UNDP in the development of the Draft Commercial Court Ordinance 2025 and has acted as an expert consultant on proposed amendments to the Companies Act, 1994, the Startup Policy and related legislation. She is a recognised authority on independent and nominee director liability and the governance of listed and regulated entities in Bangladesh.",
      ],
    },
    {
      title: "Employment & Labour",
      nonCollapsible: true,
      items: [
        "Anita advises employers and employees on the full range of contentious and non-contentious employment matters, including executive severance, disciplinary proceedings, wrongful termination, incentive and equity compensation schemes, employee benefit structuring, and compliance with Bangladesh Labour Law and BEPZA regulations. She has advised leading domestic and international clients on workforce restructuring, HR policy development and cross-border employment issues, and has appeared before employment tribunals and regulatory bodies.",
      ],
    },
    {
      title: "Litigation & Dispute Resolution",
      nonCollapsible: true,
      items: [
        "Anita heads The Legal Circle's Litigation and Dispute Resolution practice, appearing before the High Court Division and Appellate Division of the Supreme Court of Bangladesh. Her practice encompasses commercial litigation, judicial review, public interest litigation, tax and customs disputes, company disputes, securities regulation and telecommunications matters. She has appeared in landmark cases before the Supreme Court and has acted as lead and co-counsel in public interest litigation that has shaped administrative law, regulatory practice and access to justice in Bangladesh.",
      ],
    },
    {
      title: "Speaking Engagements",
      items: [
        'Panel Speaker, "Building Ethical Foundations for Organizational Success", Integrity Day 2024, 5 June 2024. Organised by the UN Global Compact Network Bangladesh.',
        'Panelist, "Role of Pro Bono in Last Mile Fair Labour Practices", 21 May 2024. Organised by Advocates for International Development (A4ID), United Kingdom.',
        'Speaker, Roundtable on "Investing With A Purpose: Navigating Bangladesh\'s Impact Ecosystem", 1 May 2024. Organised by Biniyog Briddhi, supported by the Embassy of Switzerland.',
        "Panel Speaker, HSBC Celebration of International Women's Day, 10 March 2024.",
        'Panelist, "Ring The Bell for Gender Equality", 10 March 2024, Dhaka Stock Exchange. Organised in partnership with IFC, UN Global Compact, UN Women and the World Federation of Exchanges.',
        'Roundtable Discussant, "SheSTEM: Career Knows No Gender". Organised by the Kingdom of the Netherlands in conjunction with a2i and LightCastle Partners.',
        'Panel Discussant, "Navigating the Challenges of Growth & Capital Needs", 19 February 2024, SouthAsia Tech Founders.',
        'Webinar Speaker, "The Why Behind the Gender Disparity in the Bangladeshi Startup Ecosystem", 15 January 2024. Organised by NSU Startups Next.',
        "Mentor & Director, Founder Institute, Bangladesh Chapter.",
        "Mentor, Grameen Phone Accelerator, 3rd batch, Startup Legal, 23 March 2017.",
        "Speaker, School of Entrepreneurship Lecture Series, Intellectual Property, 4 February 2017.",
        "Panelist, The State of Social Enterprise in Bangladesh, 9 October 2016.",
        "Mentor, Grameen Phone Accelerator, 2nd batch, Startup Legal and Intellectual Property, 27 September 2016.",
        "Speaker at Legal Framework for Entrepreneurs, 6 February 2016.",
        "Panelist, Tech Women Conference at Digital World 2015.",
        "Speaker at the GIST Bangladesh Startup Boot Camp, May 22-24, 2014.",
        "Panelist, E-Learning in Bangladesh, 13 December 2014.",
        "Mentor, Legal Workshop for Startups, GrameenPhone Innovation Xtreme, 22 November 2014.",
        "Co-Speaker, Corporate Law and Public-Private Cooperation in Political Development, Joint IPSA Conference in Bangladesh, 2014.",
        "Featured Speaker at TEDxDhaka, Access to Laws Online, 2012.",
        "Speaking Engagement for Prepaid Cards Asia Conference 2010, Singapore.",
      ],
    },
    {
      title: "Publications",
      items: [
        '"Directors in share market" — The Financial Express, 14 February 2026.',
        '"Independent directors: The role and its evolution" — The Financial Express, December 2024.',
        '"Will this remain a nation for men?" — The Financial Express, September 2024.',
        '"Bringing more women in boardrooms can be game-changer in BD corporate arena" — The Financial Express, December 2023.',
        '"Are married women barred from being trustees in Bangladesh?" — The Legal Circle, July 2023.',
        '"SAFE investments in Bangladesh" — The Financial Express, December 2022.',
        "Contribution to Global M&A Trends Report 2022.",
        'Bangladesh contributor, "Legal reform as a catalyst for social enterprise: an international social enterprise law & policy report" — Catalyst 2030, January 2022.',
        "Contributor (researcher and legal expert), Fairwork Bangladesh Ratings 2021: Labour Standards in the Gig Economy.",
        "Publisher & Co-Editor, Legal Circle Law Reports (LCLR), quarterly law report (ongoing).",
        "Editor, Think Legal Bangladesh — thinklegalbangladesh.com (ongoing).",
        '"Employee Stock Option (ESO) — a beneficial plan for both the company and the employees" — The Financial Express, 22 December 2021.',
        '"Investing workers\' funds differently: securities seen best choice" — The Financial Express, 24 November 2021.',
        '"Understanding Preference Shares in Practice" — The Financial Express, 5 December 2020.',
        '"Data, digitalisation and public welfare post-covid-19" — Whiteboard Magazine, 1 December 2020.',
        '"Easing repatriation of proceeds from share sale" — The Financial Express, 15 July 2020.',
        '"Returning to work during Covid-19" — The Financial Express, 1 June 2020.',
        '"Covid-19 Government Support Measures" — Lex Mundi, 30 May 2020.',
        '"Workforce reduction during Covid-19: Information for employers" — The Financial Express, 30 March 2020 (with Jarif Ahmed and Nauriin Ahmed).',
        '"Data, Privacy and e-commerce" — The Financial Express, 11 December 2018 (with Pushpo Rahman).',
        '"Framing a social enterprise law" — The Daily Star, 13 June 2017.',
        "Lead Author, Bangladesh Section of The Employment Law Review, 8th Edition — Law Reviews, 2017.",
        "Co-Author, Bangladesh Section of The International Comparative Guide to: Project Finance 2016 & 2017 — Global Legal Group (with Karishma Jahan).",
        "Co-Author, Bangladesh Section of Laws on Telecom and Media 2013, Getting the Deal Through (with Mohibul H. Chowdhoury and Daniah Khandker).",
        "Contributor, A review of laws and policies to prevent and remedy violence against children in police and pre-trial detention in Bangladesh — Penal Reform International, 2013.",
        '"Cross Border Merger and Acquisitions — the new frontier" — The Financial Express, 26 May 2010 (with Masud Khan).',
        '"An easy conversion" — The Daily Star, 25 May 2010.',
      ],
    },
    {
      title: "Recognitions",
      items: [
        "Ranked in Chambers Asia-Pacific 2026 in Corporate & Finance and Dispute Resolution.",
        "Ranked in Chambers Global in Corporate & Finance.",
        "IFLR1000 — Highly Regarded, Financial and Corporate, Bangladesh.",
        "Asia Business Law Journal A-List: Bangladesh's Top 50 Lawyers, 2025.",
        "Part of the editorial team for: (i) The Law of Civil Procedure, 2nd Ed., by Mahmudul Islam and Probir Neogi; (ii) Law of Estoppel, by Mahmudul Islam; (iii) Unwritten Constitution of Bangladesh and A Tale of Two Supreme Courts, by Justice M. A. Matin; (iv) The Companies Act, 1994 of Bangladesh through Reported Case-laws, by Justice Muhammad Khurshid Alam Sarkar.",
      ],
    },
  ],
};

const gaziMdRokibBinHossain: Person = {
  name: "Gazi Md. Rokib Bin Hossain",
  slug: "gazi-md-rokib-bin-hossain",
  role: "Partner",
  initials: "GH",
  image: gaziMdRokibBinHossainImage,
  qualifications: [
    "LL.B. (Hons), University of Wolverhampton",
    "LL.B (Hons), University of Glasgow",
    "LL.M, University of Strathclyde",
  ],
  phone: "+8801977778800",
  telephone: "+880258814311",
  email: "rokib@legalcirclebd.com",
  linkedin: "https://www.linkedin.com/in/gazi-md-rokib-bin-hossain-17542511/",
  bio: [
    "Gazi specializes in company law, labour law, banking law, IT & telecommunications law and intellectual property law. In order to increase his knowledge in his preferred fields, Gazi has attended various seminars on IP law and the telecoms industries convened and instructed by renowned lawyers in the UK/IDLO and participated in various projects with British Telecom and Vodafone.",
    "Since returning to Bangladesh, Gazi has been involved in company and intellectual property law matters and has advised on mergers & acquisitions, E-Commerce, foreign direct investment, joint ventures, trademark and DRM, and copyright issues and also worked with banks and mobile network companies to prepare the mobile money/digital money policy and drafting of various agreements between government bodies and private institutions.",
  ],
};

const sameeraMahmud: Person = {
  name: "Sameera Mahmud",
  slug: "sameera-mahmud",
  role: "Co-Managing Partner",
  initials: "SM",
  image: sameeraMahmudImage,
  qualifications: [
    "LL.B., LL.M (City University London, UK)",
    "Barrister-at-Law",
    "Advocate, Supreme Court of Bangladesh",
  ],
  phone: "+8801777345636",
  telephone: "+880258814311",
  email: "sameera@legalcirclebd.com",
  linkedin: "https://www.linkedin.com/in/sameera-mahmud-822253136/",
  bio: [
    "Sameera Mahmud has a LL.B (Hons) degree from Northumbria University in Newcastle, UK and has a Master of Laws (LL.M) degree in Commercial law specializing in Banking and Finance from the City University of London, UK. She has been called to the Bar of England and Wales in the year 2011 by the Hon'ble Society of Lincoln's Inn, completing her Bar Professional Training Course with Very Competent. Sameera also qualified as an Advocate in Bangladesh in 2014 and enrolled as an Advocate of the Supreme Court of Bangladesh in 2017.",
    "Sameera's main practice area is Mergers and Acquisition, Telecommunications, Banking and Finance, Power and Energy, Employment & Labour, Civil and Corporate matters. Sameera has 13+ years of experience in the field of law and her legal career began as an associate for two leading law firms of Bangladesh between the years 2011-2016. During her tenure at the chambers she gained extensive experience in drafting and negotiating numerous contracts, ensuring legal compliance and business efficiency. She played a key role in the strategic growth of clients and fostered trust and long-term client relations.",
    "Sameera joined The Legal Circle in 2016 and is currently a Co-Managing Partner in the Firm where she oversees the Firm's practice in the areas of her expertise. In terms of M&A, she has extensive experience in conducting due diligence on a target company, negotiating the deal structure, price and terms and locking the definitive purchase agreement. She has directed due diligence processes of over 10 corporate transactions and has managed, prepared and reviewed transaction documents, reducing the potential legal exposure of clients. She has spearheaded legal aspects of cross-border transactions and assisted in implementation of innovative strategies for corporate restructuring.",
    "In the area of Banking and Finance, she has extensively dealt with complex loan advisory transactions including loan syndication. She has experience dealing with security enforcement matters, including enforcement in Artha Rin Adalat (Money loan Court). She has facilitated issues between clients by assisting in out-of-court settlements and compromises. Her experience and legal practice also includes advice in relation to regulatory matters for banking and financial services, including syndication, lease finance, corporate finance and mobile banking.",
    "As a Power and Energy practitioner, Sameera has comprehensive knowledge in the energy laws and policies of Bangladesh including environmental compliance, renewable energy policies, and energy market regulations. She has the ability to provide interpretation and practical advice to clients on governmental regulations. She has assisted in review of complex agreements between the project company and the GOB including Power Purchase Agreements, Implementation Agreements, Land Use Agreements and Facility Agreements. She has also represented clients during Pre-COD, construction phase and the post-COD operation phase including review and negotiations of EPC/O&M contracts for development of power projects.",
    "In terms of Telecommunication laws, she has advised on regulatory matters, including award and licences. She is aptly versed with the telecommunication guidelines issued by the Bangladesh Telecommunication Regulatory Commission from time to time and has assisted clients in making submissions as stakeholders in materializations of the guidelines.",
    "She has previously at an initial stage of her career worked as a Legal Counsel for bKash Limited, the first and only unicorn of Bangladesh, and was responsible for ensuring compliance with regulatory affairs, advising on employment matters, company matters, litigations, mobile banking and finance.",
  ],
};

const pushpoRahman: Person = {
  name: "Pushpo Rahman",
  slug: "pushpo-rahman",
  role: "Partner",
  initials: "PR",
  image: pushpoRahmanImage,
  qualifications: [
    "Advocate, Supreme Court of Bangladesh",
    "LL.B (University of London)",
    "BPTC (City University, London)",
    "Barrister-at-Law (Lincoln's Inn)",
  ],
  phone: "+8801775990022",
  telephone: "+880258814311",
  linkedin: "https://www.linkedin.com/in/pushpo-rahman-643a166b/",
  email: "pushpo@legalcirclebd.com",
  bio: [
    "Pushpo Rahman, having completed her LL.B (Hons), pursued the Bar Professional Training Course (BPTC) from the City Law School, London and was called to the Bar by the Honourable Society of Lincoln's Inn.",
    "Prior to The Legal Circle (TLC), she gained significant legal experience having served as an Associate at a reputed law firm in Dhaka. At TLC, Ms. Rahman has vast legal experience in providing legal opinions, drafting and vetting corporate business documents. She has advised large corporations and multi-national companies in relation to their operations and legal compliance in Bangladesh on numerous occasions.",
    "She has also played a key role in providing consultation to foreign and local companies intending to invest in Bangladesh by means of conducting legal due diligence of target companies on matters relating to company validation, assets & employment alongside government and central banking regulations. Ms. Rahman has attained knowledge and experience regarding application filing at government offices and understanding procedures about various corporate, regulatory, banking & employment laws.",
    "She has represented The Legal Circle while delivering talks on employment laws, its implications & practice with clients. Her meaningful contributions in existing projects and ability to come up with alternative solutions have made her a pivotal member of The Legal Circle team.",
  ],
};

const nauriinAhmed: Person = {
  name: "Nauriin Ahmed",
  slug: "nauriin-ahmed",
  role: "Partner",
  initials: "NA",
  image: nauriinAhmedImage,
  qualifications: [
    "Advocate, Supreme Court of Bangladesh",
    "LL.B (Hons.), BRAC University",
    "Master of Corporate Law, Christ's College, University of Cambridge",
  ],
  phone: "+8801762539297",
  telephone: "+880258814311",
  linkedin: "https://www.linkedin.com/in/nauriin-ahmed-707451106/",
  email: "nauriin@legalcirclebd.com",
  bio: [
    "Nauriin is a partner of the Firm and has been with the Firm since 2015. She is admitted to practice law in Bangladesh and is an active member of the Dhaka Bar Association.",
    "She obtained her LL.B. (Hons) degree from BRAC University, Dhaka in 2015 and her Master of Corporate Law (MCL) degree from University of Cambridge in 2017. While at Cambridge, she was awarded the Herbert Smith Freehills African-Asian Bursary by the Faculty of Law, University of Cambridge and the Christ's College Scriven Graduate Bursary for her academic excellence.",
    "Nauriin's extensive legal experience spans a variety of key practice areas, including competition and anti-trust, data privacy and protection, defence supply, employment, M&A, NGOs and non-profit, and Technology, Media & Telecommunication (TMT).",
    "In competition and anti-trust matters, she has advised clients on issues related to mergers and acquisitions, use of exclusivity clauses in contracts, resale price maintenance, and market dominance. Her expertise in data privacy and protection laws has enabled her to assist clients with developing compliant programs and ensuring their data protection policies are in line with applicable laws and regulations.",
    "She has also counselled clients on defence procurement processes, contract negotiations, and compliance with regulations related to defence and security. In the area of employment law, she has assisted clients with issues such as termination and employment benefits. Her experience in the NGO and non-profit sector includes advising on entity formation, obtaining NGO Affairs Bureau registration, corporate governance and regulatory compliance.",
    "In the technology, media, and telecommunications (TMT) sector her proficiency makes her particularly well-suited to advise clients on legal issues related to emerging technologies and telecommunications law.",
    "As a partner at The Legal Circle, her deep legal knowledge, professionalism, attention to detail and ability to identify and mitigate potential risks have helped her clients avoid costly disputes and regulatory penalties. She is committed to delivering exceptional service and results, and is dedicated to understanding her client's unique needs and goals. She is known for her strong work ethic, attention to detail, and innovative problem-solving skills.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Competition and Anti-Trust",
        "Data Privacy and Protection",
        "Defence Supply",
        "Employment",
        "M&A",
        "NGOs and Non-Profit",
        "Technology, Media & Telecommunication (TMT)",
      ],
    },
    {
      title: "Publications",
      items: [
        '"The Rules Have Changed: Bangladesh\'s 2025-2026 Labour Law Reforms and What It Means for Businesses" — Mondaq, https://www.mondaq.com/employee-benefits-compensation/1800374/the-rules-have-changed-bangladeshs-2025-2026-labour-law-reforms-and-what-it-means-for-businesses',
      ],
    },
  ],
};

const jarifAhmedRumman: Person = {
  name: "Jarif Ahmed Rumman",
  slug: "jarif-ahmed-rumman",
  role: "Of Counsel",
  initials: "JR",
  image: jarifAhmedImage,
  qualifications: [
    "Advocate, Supreme Court of Bangladesh",
    "LLB (UoL), PGDL (City University, London)",
    "LLM (City University, London)",
    "Barrister-at-Law (Lincoln's Inn)",
  ],
  phone: "+8801914083954",
  telephone: "+880258814311",
  linkedin: "https://www.linkedin.com/in/jarifahmed/",
  email: "jarif@legalcirclebd.com",
  bio: [
    "Jarif Ahmed is a senior associate of The Legal Circle and has been with the Firm since 2014. He qualified as an Advocate in Bangladesh in 2018 and as an Advocate of the High Court Division of Bangladesh Supreme Court in 2022, and is an active member of the Supreme Court Bar Association.",
    "Jarif obtained his LL.B (Hons) degree from University of London (UOL) in 2012 and was called to the Bar of England and Wales from Honorable Society of Lincoln's Inn in 2014, completing his Bar Professional Training Course (BPTC) and LL.M from City University London.",
    "Jarif is known for his exceptional client management skill, work ethics, deep legal knowledge, professionalism and dynamic problem-solving skills. He focuses his practice on various aspects of law including intellectual property, employment law, real estate, company law, contract negotiation, merger & acquisition, data privacy and protection, and NGOs and non-profit matters.",
    "Jarif is also a sub-editor of Legal Circle Law Reports (LCLR), which is a quarterly law report in Bangladesh, and in Think Legal Bangladesh - www.thinklegalbangladesh.com, one of the first comprehensive free legal resource websites in Bangladesh.",
    "Jarif's detailed profile can also be found in his LinkedIn profile.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Intellectual Property (trademark, copyright and patent)",
        "Employment Law",
        "Real Estate",
        "Company Law",
        "Contract Negotiation",
        "Merger & Acquisition",
        "Data Privacy and Protection",
        "NGOs and Non-Profit",
      ],
    },
    {
      title: "Business Incorporation/Registration",
      items: [
        "Advised from time to time on formation of foreign, joint venture and local businesses, branch offices and liaison offices at the Registrar of Joint Stock (RJSC) and Bangladesh Investment Development Authority (BIDA).",
        "Advised from time to time on striking off, winding up including initiation of creditors' winding up process.",
      ],
    },
    {
      title: "Employment",
      items: [
        "Advised both employers and employees in wrongful termination claims and disciplinary matters.",
        "Advisory, drafting/review and registering gratuity and provident Funds in light of Bangladesh labour and tax laws.",
        "Review of employee contracts, handbook, confidentially and non-disclosure agreements and policies.",
      ],
    },
    {
      title: "Arbitration",
      items: [
        "Acted as a Legal Secretary in a landmark arbitration case where the Sole Arbitrator was Mr. Justice Md. Tafazzul Islam, Former Chief Justice of Bangladesh.",
      ],
    },
    {
      title: "Transaction",
      items: [
        "Advised clients in participating tender of mobile number portability Service (MNPS) conducted by Bangladesh Telecommunication and Regulatory Commission (BTRC) and supply of electrical meter and other equipment called by BREB, BPDB, DESCO etc.",
      ],
    },
    {
      title: "Mergers & Acquisitions (M&A)",
      items: [
        "Advised BD Venture Limited, a venture capital firm, in its investment in Edtech startup Eshosikhi.com.",
      ],
    },
    {
      title: "Publications",
      items: [
        "Sub-Editor of LCLR (Legal Circle Law Reports), a quarterly law report.",
        "Co-Author of Bangladesh Chapter of LexisNexis Company Law Guide 2017-2018, published by Lexis-Nexis, a reputed international legal publication company.",
        "Co-Author of Bangladesh Section of The Employment Law Review, 8th Edition, published by Law Business Research Ltd., a reputed international legal publication company.",
        "Spokesperson of Is Your Startup Legal, published by Hifi Public. Detail of the publication can be found at https://hifipublic.com/2016/11/01/is-your-startup-legal/.",
      ],
    },
    {
      title: "Speaking & Training Engagements",
      items: [
        "Acted as a Coach at the first Dhaka Meetup organised by OPEN Accelerator and provided entrepreneurs with one-to-one support in technical/legal areas including structuring business entities around business needs and investor requirements.",
      ],
    },
  ],
};

const masudKhan: Person = {
  name: "Masud Khan",
  slug: "masud-khan",
  role: "Of Counsel",
  initials: "MK",
  image: masudKhanImage,
  qualifications: [
    "Attorney-at-Law",
    "BSc, University of Wisconsin-Oshkosh",
    "Juris Doctor, Marquette University Law School",
  ],
  phone: "+8801920804522",
  telephone: "+880258814311",
  linkedin: "https://bd.linkedin.com/in/masudkhan",
  email: "masud@legalcirclebd.com",
  bio: [
    "Masud Khan is an international corporate attorney. Prior to coming to Bangladesh in 2007, Masud was a corporate law partner in a US Mid-Western law firm, Reinhart Boerner Van Deuren, with 200 plus lawyers. Masud spearheaded RBV's efforts to build an international practice by helping many of his Wisconsin based manufacturing clients explore and set up operations in China, India and South America.",
    "Masud focuses his practice on general corporate law, M&A including cross-border transactions, foreign investment into Bangladesh, financing equity and debt transactions, business and contract negotiations, US export and import laws including FCPA compliance, international trade, distribution and agency law.",
    "Masud spends time to understand a client's business and strategic goals, and is a trusted advisor who engages himself in every aspect of a transaction and representing his client's interests. Masud has worked on a significant number of private equity transactions in Bangladesh in the last few years, where his win-win approach to negotiating and closing transactions has been beneficial to his clients.",
    "Masud also advises on legal analysis and strategy on certain cases involving high value claims, foreign parties or specific sectors. Masud has been highlighted in Chambers and Partners since 2011 and, during his US practice days, was ranked by Martindale Hubbell as AV.",
    "Masud is also a very active member of the RMG ACTion Working Group which prepared a 10 Point RMG Sector Reform Plan and is working towards implementing key elements of that plan.Please check the following link:",
    [
      {
        text: "https://www.scribd.com/doc/144976994/BangladeshRMG-Sector-10-Point-Reform-Plan.",
        color: "brand",
        href: "https://www.scribd.com/doc/144976994/BangladeshRMG-Sector-10-Point-Reform-Plan.",
      },
    ],
    "Masud also participates in various public interest projects in Bangladesh and is an editor of both Legal Circle Law Reports and Think Legal, vice-president and member of Green Movement Foundation, counsel for BRAC for restructuring work in Tanzania, Uganda and other parts of Africa and Asia, and pro bono counsel for JAAGO Foundation, One Degree Initiative, Streetwise Foundation, Bangladesh on Seven Summits and Share2Care Trust.",
    "Masud is a columnist for the daily newspaper New Age, Dhaka Tribune and the online opinion site BDNews24. Masud's detailed profile can be found in his LinkedIn profile. He was also mentioned in Lawyer Monthly for his outstanding work in Mergers and Acquisitions.",
  ],
  sections: [
    {
      title: "Practice Focus",
      items: [
        "General corporate law",
        "M&A including cross-border transactions",
        "Foreign investment into Bangladesh",
        "Financing equity and debt transactions",
        "Business and contract negotiations",
        "US export and import laws, including FCPA compliance",
        "International trade",
        "Distribution and agency law",
      ],
    },
    {
      title: "Public Interest & Publications",
      items: [
        "Editor of Legal Circle Law Reports and Think Legal.",
        "Vice-president and member of Green Movement Foundation.",
        "Counsel for BRAC for restructuring work in Tanzania, Uganda and other parts of Africa and Asia.",
        "Pro bono counsel for JAAGO Foundation, One Degree Initiative, Streetwise Foundation, Bangladesh on Seven Summits and Share2Care Trust.",
        "Columnist for New Age, Dhaka Tribune and BDNews24.",
      ],
    },
    {
      title: "References",
      items: [
        "RMG Sector 10 Point Reform Plan: https://www.scribd.com/doc/144976994/BangladeshRMG-Sector-10-Point-Reform-Plan.",
        "Lawyer Monthly feature: https://www.lawyer-monthly.com/magazine/LMLA15/#page=67.",
        "Wisconsin Lawyer article on The Wisconsin Business Advisor Series: https://www.wisbar.org/newspublications/wisconsinlawyer/pages/article.aspx?Volume=79&Issue=6&ArticleID=1070.",
        "Wisconsin Lawyer article on partner promotion at Reinhart Boerner Van Deuren: https://www.wisbar.org/newspublications/wisconsinlawyer/pages/article.aspx?Volume=79&Issue=3&ArticleID=1071.",
      ],
    },
  ],
};

const abrarHasnineRifat: Person = {
  name: "Abrar Hasnine Rifat",
  slug: "abrar-hasnine-rifat",
  role: "Senior Associate",
  initials: "AR",
  image: abrarHasnineImage,
  qualifications: [
    "LLB (Hons) (Stamford University, Bangladesh)",
    "LLM (Southeast University, Bangladesh)",
  ],
  phone: "+8801916381857",
  telephone: "+880258814311",
  linkedin: "https://bd.linkedin.com/in/rifat-hasnine-b4a697a3",
  email: "rifat@legalcirclebd.com",
  bio: [
    "Abrar Hasnine is an accomplished Senior Associate at The Legal Circle, having joined the firm in 2014. He completed his LL.B degree from Stamford University of Bangladesh in 2014 and went on to earn his LL.M from Southeast University Bangladesh in 2016. Enrolled as an advocate in Dhaka Bar, Mr. Hasnine specializes in corporate, commercial, and property law.",
    "His expertise extends to various aspects of law, including company law, employment law, land law, banking law, and corporate transactions.",
    "Mr. Hasnine has honed his skills in providing invaluable litigation support and research assistance to the firm's senior partners. He has cultivated a comprehensive understanding of legal intricacies and maintains regular communication with state regulators and government departments, ensuring the firm remains abreast of practical and procedural developments in law and regulations.",
    "Mr. Hasnine plays a vital role in drafting and vetting legal documents, offering legal opinions, maintaining client relations, formulating policy matters, and contributing to risk management initiatives within the firm.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Corporate Law: advising and facilitating the formation of foreign, joint venture, and local businesses, as well as liaison offices, including processes at RJSC and BIDA.",
        "Employment Law: guidance to both employers and employees in wrongful termination claims and disciplinary matters.",
        "Litigation Support: advice and attendance at litigation hearings at the Judges court of Dhaka, including criminal and civil litigations and legal services at judges' courts across Bangladesh.",
      ],
    },
    {
      title: "Career Highlights",
      items: [
        "Advised and facilitated the formation of foreign, joint venture, and local businesses at RJSC and BIDA.",
        "Provided guidance on post-registration steps, including share issuance, share transfer, and compliance in accordance with the Companies Act.",
        "Advised and managed the winding-up processes of companies.",
        "Provided counsel to both employers and employees in wrongful termination claims and disciplinary matters.",
      ],
    },
    {
      title: "Litigations",
      items: [
        "Attended litigation hearings at the Judges court of Dhaka.",
        "Offered advice on criminal and civil litigations.",
        "Processed various legal services at different judges' courts in Bangladesh.",
      ],
    },
  ],
};

const taahsinaRaisaRabbi: Person = {
  name: "Taahsina Raisa Rabbi",
  slug: "taahsina-raisa-rabbi",
  role: "Senior Associate",
  initials: "TR",
  image: taahsinaRaisaRabbiImage,
  qualifications: [
    "LL.B (Hons), University of London, UK",
    "LL.M, Eastern University, Dhaka, Bangladesh",
  ],
  phone: "+8801711102771",
  telephone: "+880258814311",
  linkedin: "https://bd.linkedin.com/in/taahsina-raisa-rabbi-b9656145",
  email: "taahsina@legalcirclebd.com",
  bio: [
    "Taahsina is a senior associate of the Firm and has been with the Firm since 2011. She obtained her LL.B (Hons) degree from the University of London in 2010 and LL.M degree from Eastern University, Bangladesh in 2014. Upon completion of the LL.B (Hons) degree Taahsina joined The Legal Circle (TLC).",
    "Taahsina's invaluable legal experience spans a variety of key practice areas including land law, real estate law, inheritance law, NGOs and non-profit, employment, and intellectual property law.",
    "At TLC, Taahsina has vast legal experience in reviewing various land documents, providing legal opinions, drafting and vetting land purchase documents and transfer agreements, trust deeds and formation of trust, NGO registration, labour or employment law and intellectual property rights issues.",
    "Ms. Taahsina has attained knowledge and experience regarding application filing at government offices and understanding procedures about various property, regulatory and employment laws. At TLC she attained invaluable experience in drafting supply and delivery contracts, lease deed, sale deed, heba deed, partition deed, preparing applications for NGO registration, preparing copyright and trademark applications for registration and reviewing land documents.",
    "At the Firm she conducted legal research on various legal issues including land matter, inheritance, labour, telecommunication, non-profit and intellectual property law issues.",
    "Prior to TLC, she gained significant legal experience having served at Renata Ltd., a pharmaceutical company, as a Senior Legal Officer. Her meaningful contributions in existing projects and ability to come up with alternative solutions have made her a pivotal member of The Legal Circle.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Land Law",
        "Real Estate Law",
        "Inheritance Law",
        "NGOs and Non-Profit",
        "Employment",
        "Intellectual Property Law",
      ],
    },
  ],
};

const nafiulAlamShupto: Person = {
  name: "Nafiul Alam Shupto",
  slug: "nafiul-alam-shupto",
  role: "Senior Associate",
  initials: "NS",
  image: nafiulAlamShuptoImage,
  qualifications: [
    "Advocate, Subordinate Courts and Tribunals of Bangladesh",
    "LL.B (Hons), North South University",
  ],
  phone: "+8801681015105",
  telephone: "+880258814311",
  linkedin: "https://www.linkedin.com/in/nafiulalamshupto/",
  email: "nafiul@legalcirclebd.com",
  bio: [
    "Nafiul has been a member of the Firm since 2020, currently serving as a Senior Associate. He earned his LL.B. (Hons) degree from North South University (NSU), Dhaka in December 2019.",
    "While at NSU, Nafiul served as the Joint Secretary at the North South University Law & Mooting Society (NSULMS). He gained extensive experience in moot court activities and earned the NSU moot court championship title. Additionally, Nafiul contributed as a Research Assistant in various national and internationally funded projects during his time there.",
    "After joining the Firm, Nafiul has acted as counsel for a range of local and international clients, providing legal assistance in contentious and non-contentious matters across banking, financial services and foreign investments, business incorporation, competition, dispute resolution, employment, energy, fintech, M&A, TMT and trust law.",
    "Nafiul acted as part of a team co-counsel or junior counsel in the representative matters listed below.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Banking, Financial Services and Foreign Investments",
        "Business Incorporation/Registration",
        "Competition and Anti-Trust",
        "Dispute Resolution (Litigation and Negotiations)",
        "Employment",
        "Energy and Projects",
        "Fintech",
        "M&A",
        "Technology, Media & Telecommunication (TMT)",
        "Trust Law",
      ],
    },
    {
      title: "Banking, Financial Services and Foreign Investments",
      items: [
        "Advised clients on preparation and enforcement of finance documents, collateral documents, including hypothecation or mortgage of assets, share pledges and other security arrangements.",
        "Advised corporate foreign clients on dividend and capital repatriation regulations imposed by the Bangladesh Bank.",
        "Advised international corporate clients on anti-money laundering and anti-terrorist financing regulations.",
        "Advised multiple local and international clients on foreign exchange regulations, restrictions and requirements on Bangladeshi companies establishing branches/subsidiaries outside Bangladesh.",
      ],
    },
    {
      title: "Business Incorporation/Registration",
      items: [
        "Advised from time to time on formation of foreign, joint venture and local businesses, at the Registrar of Joint Stock (RJSC).",
        "Advised from time to time on striking off, winding up including initiation of creditors' winding up process.",
      ],
    },
    {
      title: "Competition and Anti-Trust",
      items: [
        "Advised and represented a MNPS License holder in a competition dispute matter before the Competition Commission Bangladesh.",
        "Advised multiple foreign and local clients regarding competition law of Bangladesh.",
      ],
    },
    {
      title: "Dispute Resolution",
      items: [
        "Assisted senior counsel in representing clients before the Appellate Division and the High Court Division of the Supreme Court of Bangladesh in various company matters.",
        "Assisted senior counsel in representing Apollo Tyres India before the Joint District Judge, Dhaka with regard to a title suit and obtained judgment in favour of the client.",
        "Assisted senior counsel in representing various banking companies in various money suits before the District Court, Dhaka.",
        "Represented Dignity Textile Mills Ltd in negotiations to reach a settlement in a commercial dispute with Dhaka Custom Agents Association.",
      ],
    },
    {
      title: "Employment",
      items: [
        "Advised both employers and employees in wrongful termination procedure, claims and disciplinary matters.",
        "Advisory, drafting/review and registering gratuity, provident funds, and workers profit participation fund in light of Bangladesh labour laws.",
        "Review of employee contracts, handbook, confidentiality and non-disclosure agreements and policies.",
        "Advised multiple international clients on foreign worker employment laws, foreign employee earnings' repatriation laws, work-permit, employment visa and special waiver applications at BIDA.",
        "Advised multiple international clients regarding sexual harassment at workplace laws of Bangladesh.",
        "Advised multiple international clients regarding Employee Stock Ownership Plan (ESOP) in light of Bangladesh law.",
      ],
    },
    {
      title: "Energy and Projects",
      items: [
        "Advised a global solar energy company in relation to outward remittances from Bangladesh, including selling electricity by foreign private investors in Bangladesh.",
        "Advised an international client through Mayer Brown LLP on public procurement laws of Bangladesh concerning a JICA funded government infrastructure development project.",
        "Advised Shardul Amarchand Mangaldas & Co on cross border trading of electricity in light of Bangladesh energy law regulations.",
        "Advised a UAE based Energy Company in the proposed acquisition of a waste to energy power plant in Bangladesh, including corporate and legal due diligence, employment, tax, environmental and regulatory matters.",
        "Advised Sweco Denmark A/S on public procurement laws of Bangladesh concerning a government infrastructure development project.",
      ],
    },
    {
      title: "Fintech",
      items: [
        "Advised local and international fintech companies on licensing regulations and laws relating to mobile financial services, PSP and PSO laws and related Bangladesh Bank regulations.",
        "Advised local and international fintech companies on laws and regulations relating to unsecured private digital-lending, digital wallet and mobile financial services in Bangladesh.",
        "Advised In Financial Technologies Holdings Pte. Ltd with regard to introducing virtual bank and providing digital lending services in Bangladesh.",
      ],
    },
    {
      title: "Mergers & Acquisitions",
      items: [
        "Advised a leading U.S private equity firm through Kirkland & Ellis LLP in acquiring two large global package manufacturing companies operating in Bangladesh.",
        "Advised Startup Bangladesh Limited in investment worth BDT 100 crore made to 100 prominent startup companies of Bangladesh, including due diligence, term sheet negotiation, investment agreements and shareholders agreements.",
        "Advised and represented Bettex HK Ltd in acquiring two garments factories in Bangladesh.",
        "Advised a local company in the acquisition of PSP Licensee Company.",
        "Advised a UAE based Energy Company in the proposed acquisition of a waste to energy power plant in Bangladesh.",
      ],
    },
    {
      title: "Technology, Media & Telecommunication (TMT)",
      items: [
        "Advised a large global telecommunication service provider company through DLA Piper UK with regard to satellite laws of Bangladesh.",
        "Advised Netflix regarding OTT laws of Bangladesh.",
        "Advised a TVAS licensee on BTRC regulations and conditions/terms of service.",
      ],
    },
    {
      title: "Other Matters",
      items: [
        "Advised Visa Worldwide Pte concerning the implementation of a trust structure in Bangladesh.",
        "Advised an American biotechnology company through Sidley Austin LLP regarding foreign donation laws of Bangladesh.",
        "Advised Pepsico India Holdings Limited regarding packaging and manufacturing of Lay's Potato chips in Bangladesh.",
        "Provided company secretarial support to Big Bad Wolf Bangladesh and Delivery Bangladesh Logistics Limited.",
      ],
    },
    {
      title: "Publications",
      items: [
        "One last prayer & white supremacy, Kathmandu Tribune.",
        "Legal termination of pregnancy resulting from failed contraception, New Age.",
        "A tale of white-collar workers' rights in Bangladesh, New Age.",
        "The Pornography Control Act, 2012, New Age.",
        "Laws safeguarding animal rights, New Age.",
        "Road Transport Act 2018: Financial aid or compensation?, New Age.",
        "A law of power and energy impunity?, New Age.",
        "Stairway to green Dhaka, New Age.",
        "Analysis of Harijan inclusivity, New Age.",
        "UN peacekeepers: protectors or predators?, New Age.",
        "Freedom of thought, conscience and of speech in Bangladesh, New Age.",
        "A legal review on tarnishing the country's image, New Age.",
        "LEGAL SOLUTIONS FOR SUSTAINABLE FUTURES IN SOUTH ASIA: HOW PRO BONO CONTRIBUTES TO SDG PROGRESS, published by Advocates for International Development (A4ID) and UKAID on 23 November 2023.",
        "Legal reform as a catalyst for social enterprise: an international social enterprise law & policy report, prepared and published by Morrison & Foerster LLP with support from Lex Mundi Pro Bono Foundation. Mr. Nafiul contributed in the Bangladesh part of this report.",
      ],
    },
    {
      title: "Presentations and Seminars",
      items: [
        "Conducted a session on Financial Compliances and Term Sheet at Regional Startup Network (RSN) Formative workshop hosted by KIIT-TBI in collaboration with U.S Consulate Kolkata in Dhaka, Bangladesh.",
        "Attended 12th Asia Pro Bono Conference: The Evolution of Empowering Pro Bono and Access to Justice in Cebu City, Philippines.",
      ],
    },
  ],
};

const umerAimanKhan: Person = {
  name: "Umer Aiman Khan",
  slug: "umer-aiman-khan",
  role: "Associate",
  initials: "UK",
  image: umerAimanKhanImage,
  qualifications: ["LL.B, University of London"],
  phone: "+8801758803966",
  telephone: "+880258814311",
  linkedin: "https://www.linkedin.com/in/umer-aiman-khan-20779a23/",
  email: "aiman@legalcirclebd.com",
  bio: [
    "Umer Aiman Khan, obtaining his LL.B (Hons) from the University of London International Programmes, joined The Legal Circle as an intern, after which he was subsequently elevated to the position of an Associate.",
    "While working at The Legal Circle, Mr. Khan has advised reputed tech firms and multinational companies about their operations in Bangladesh in various areas of law including finance, transport, aviation, company, corporate, tax and property laws.",
    "He routinely assists the seniors at the firm with legal research and other various activities of the firm. He also holds significant experience in laws governing the formation and operations of non-profit organizations in Bangladesh.",
    "Mr. Khan works as a sub-editor for Think Legal Bangladesh, the country's only open source legal resource platform, where he is responsible for the development and maintenance of the platform's promotion and database. He also works for Legal Circle Law Review, a law report published quarterly in Bangladesh.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Finance",
        "Transport",
        "Aviation",
        "Company Law",
        "Corporate Law",
        "Tax",
        "Property Law",
        "Non-Profit Organization Formation and Operations",
      ],
    },
  ],
};

const eshrakEMoazzam: Person = {
  name: "Eshrak E Moazzam",
  slug: "eshrak-e-moazzam",
  role: "Associate",
  initials: "EM",
  image: eshrakEMoazzamImage,
  qualifications: [
    "LL.B (City, University of London)",
    "LLM (SOAS, University of London, UK)",
    "Barrister-at-Law (Hon'ble Society of Lincoln's Inn)",
  ],
  phone: "+8801720128401",
  telephone: "+8801720128401",
  linkedin: "https://www.linkedin.com/in/eshrak-e-moazzam-014081127/",
  email: "eshrak@legalcirclebd.com",
  bio: [
    "Eshrak E Moazzam has a Bachelor of Laws degree from City, University of London, UK and has a Master of Laws (LL.M) degree in International Commercial and Economic Law specializing in Company, Islamic Banking, Financial and Arbitration from SOAS, University of London, UK. He was called to the Bar of England and Wales in 2019 by the Hon'ble Society of Lincoln's Inn.",
    "Prior to joining The Legal Circle (TLC), Eshrak gained substantial legal experience while serving as an Associate at a reputed law firm in Dhaka. He achieved the knowledge of dealing with corporate clients, drafting and providing legal opinions on commercial leases, corporate deals and structuring and has worked alongside his seniors in advising and assisting various large corporations and multi-national companies in relation to their operations and legal compliance in Bangladesh on numerous occasions.",
    "He also gained public speaking and communication skills as a youth member of the Rotaract Club of Dhaka, where he made presentations on multiple occasions.",
    "Eshrak joined TLC immediately after completing his studies in the UK in 2020 and has been actively involved with the firm since. He has attained considerable experience and his legal practice includes negotiating contracts, incorporation of companies, analyzing legal issues relating to various company matters, advising and guiding foreign investments, advising and guiding NGOs, assisting in the setting up of power companies and advising on its structures including renewable energy, and matters related to human resource, employment and labour issues.",
    "Besides this, he is interested in the capital market, including the Dhaka Stock Exchange and Chittagong Stock Exchange, and is well acquainted with investments and portfolios in Bangladesh as he is also a director of a well-reputed brokerage house in Dhaka.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Contract Negotiation",
        "Company Incorporation (foreign and national)",
        "Company Matters",
        "Foreign Investment",
        "NGOs",
        "Power Companies and Renewable Energy Structures",
        "Human Resource, Employment and Labour",
        "Capital Market",
      ],
    },
  ],
};

const fahadIbneAwal: Person = {
  name: "Fahad Ibne Awal",
  slug: "fahad-ibne-awal",
  role: "Associate",
  initials: "FA",
  image: fahadIbneAwalImage,
  qualifications: [
    "LLB, Newcastle University",
    "LLM, City University of London",
    "Barrister-at-Law, Hon'ble Society of Lincoln's Inn",
  ],
  bio: [
    "Fahad Ibne Awal has a Bachelor of Laws degree from Newcastle University UK and has a Master of Laws (LL.M) degree specialising in Corporate Governance, International Taxation, Intellectual Property Law and International Commercial Law from City, University of London. He then completed the Bar Professional Training Course from City, University of London and joined The Legal Circle immediately after completing his studies in the UK.",
    "He has attained considerable experience, and his legal practice includes negotiating contracts, incorporation of companies (foreign and national), analysing legal issues relating to various company matters, advising and guiding foreign investments, advising and guiding NGOs, matters related to human resource, employment and labour issues, contractual disputes and preparing company due diligence reports. He holds substantial interests in litigation and has assisted his senior in a few cases.",
  ],
};

const mdMoyenUddinShakil: Person = {
  name: "MD. Moyen Uddin (Shakil)",
  slug: "md-moyen-uddin-shakil",
  role: "Manager",
  initials: "MS",
  image: mdMoyenUddinShakilImage,
  qualifications: ["LLB (Hons), National University"],
  positions: ["Income Tax Practitioner"],
  bio: [
    "Moyen Uddin (Shakil) has 11 years of experience at The Legal Circle and serves as Manager.",
  ],
  sections: [
    {
      title: "Professional Details",
      items: [
        "Experience: 11 years at The Legal Circle.",
        "Designation: Manager.",
        "Academic Qualifications: LLB (Hons), National University.",
        "Income Tax Practitioner.",
      ],
    },
  ],
};

const kutubulAlomSohel: Person = {
  name: "Kutubul Alom Sohel",
  slug: "kutubul-alom-sohel",
  role: "Office Manager",
  initials: "KS",
  image: kutubulAlomSohelImage,
  qualifications: ["BSS (Hons)", "MSS (Masters), National University"],
  bio: [
    "MD. Kutubul Alom Sohel has 8 years of experience at The Legal Circle and serves as Office Manager.",
  ],
  sections: [
    {
      title: "Professional Details",
      items: [
        "Experience: 8 years at The Legal Circle.",
        "Designation: Office Manager.",
        "Academic Qualifications: BSS (Hons).",
        "MSS (Masters), National University.",
      ],
    },
  ],
};

const mahmudulHasanRabiul: Person = {
  name: "Mahmudul Hasan Rabiul",
  slug: "mahmudul-hasan-rabiul",
  role: "Court Clerk",
  initials: "MR",
  image: mahmudulHasanRabiulImage,
  qualifications: ["SSC"],
  bio: [
    "Mahmudul Hasan Rabiul has 9 years of experience at The Legal Circle and serves as Court Clerk.",
  ],
  sections: [
    {
      title: "Professional Details",
      items: [
        "Experience: 9 years at The Legal Circle.",
        "Designation: Court Clerk.",
        "Academic Qualifications: SSC.",
      ],
    },
  ],
};

export const people: Record<PeopleTab, Person[]> = {
  Partners: [anitaGhaziRahman, gaziMdRokibBinHossain, sameeraMahmud, pushpoRahman, nauriinAhmed],
  "Of Counsel": [jarifAhmedRumman, masudKhan],
  "Senior Associates": [abrarHasnineRifat, taahsinaRaisaRabbi, nafiulAlamShupto],
  Associates: [umerAimanKhan, eshrakEMoazzam, fahadIbneAwal],
  Paralegal: [mdMoyenUddinShakil, kutubulAlomSohel, mahmudulHasanRabiul],
};

export const allPeople = peopleTabs.flatMap((tab) => people[tab]);

export function getPersonBySlug(slug: string) {
  return allPeople.find((person) => person.slug === slug);
}

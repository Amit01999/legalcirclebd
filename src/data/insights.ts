export interface InsightPost {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
  author?: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const rawPosts = [
  {
    date: "May 13, 2026",
    title:
      "Asian Legal Insights - Bangladesh Special Edition Part.1 (May 2026) - Framework for Foreign Investment in Bangladesh",
    author: "Anita Ghazi Rahman & Sameera Mahmud",
    excerpt: "To read the full article, Click here.",
    url: "https://www.morihamada.com/en/insights/newsletters/138996",
  },
  {
    date: "February 15, 2026",
    title: "Directors in share market",
    author: "Anita Ghazi Rahman",
    excerpt: "To read the full article, Click here.",
    url: "https://today.thefinancialexpress.com.bd/views-opinion/directors-in-share-market-1770995401",
  },
  {
    date: "November 10, 2025",
    title: "Banking on change: key reforms transforming Bangladesh's financial sector",
    author: "Sameera Mahmud",
    excerpt: "To read the full article, Click here.",
    url: "https://today.thefinancialexpress.com.bd/32nd-anniversary-issue-1/banking-on-change-key-reforms-transforming-bangladeshs-financial-sector-1762672383",
  },
  {
    date: "May 11, 2025",
    title: "FAQ on Board Meetings",
    author: "Anita Ghazi Rahman",
    excerpt: "To read the full article, Click here.",
    url: "https://legalcirclebd.com/wp-content/uploads/2025/05/FAQ-on-Board-Meetings.pdf",
  },
  {
    date: "December 10, 2024",
    title: "Independent directors: The role and its evolution",
    author: "Anita Ghazi Rahman",
    excerpt: "To read the full article, Click here.",
    url: "https://thefinancialexpress.com.bd/views/views/independent-directors-the-role-and-its-evolution",
  },
  {
    date: "November 10, 2024",
    title: "Ensuring judicial oversight in lawful interception",
    author: "Nafiul Alam Shupto",
    excerpt: "To read the full article, Click here.",
    url: "https://www.thedailystar.net/law-our-rights/news/ensuring-judicial-oversight-lawful-interception-3747711",
  },
  {
    date: "September 26, 2024",
    title: "Will this remain a nation for men?",
    author: "Anita Ghazi Rahman",
    excerpt: "To read the full article, Click here.",
    url: "https://www.dhakatribune.com/opinion/longform/359498/will-this-remain-a-nation-for-men",
  },
  {
    date: "December 10, 2023",
    title: "Bringing more women in boardrooms can be game-changer in BD corporate arena",
    excerpt:
      "Amid a change of wind over the past decade, board diversity has become a major consideration in corporate governance.",
    url: "https://today.thefinancialexpress.com.bd/30th-anniversary-issue-3/bringing-more-women-in-boardrooms-can-be-game-changer-in-bd-corporate-arena-1702114029",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "September 15, 2023",
    title: "Navigating legal waters: Independent contractors' status in Bangladesh",
    author: "Nauriin Ahmed",
    excerpt: "To read the full article, click here.",
    url: "https://www.thedailystar.net/law-our-rights/news/navigating-legal-waters-independent-contractors-status-bangladesh-3419266?trk=feed-detail_main-feed-card_feed-article-content",
  },
  {
    date: "September 1, 2023",
    title: "Cryptocurrency Conundrum Lessons from the MTFE Scam in Bangladesh",
    author: "Nauriin Ahmed",
    excerpt: "To read the full article, click here.",
    url: "https://www.thedailystar.net/law-our-rights/news/cryptocurrency-conundrum-lessons-the-mtfe-scam-bangladesh-3408416",
  },
  {
    date: "July 31, 2023",
    title: "FAQ on Administration and Distribution of a Deceased's Estate under Bangladesh Law",
    author: "Pushpo Rahman",
    excerpt:
      "Under the probate and administration law of Bangladesh, who has the prior right to take up administration and distribution of a deceased's estate?",
    url: "https://legalcirclebd.com/wp-content/uploads/2023/08/FAQ-on-Administration-and-Distribution-of-a-Deceaseds-Estate-under-Bangladesh-Law.pdf",
  },
  {
    date: "July 22, 2023",
    title: "Are married women barred from being trustees in Bangladesh?",
    author: "Anita Ghazi Rahman",
    excerpt:
      "The concept of Trust is assumed to have existed since Roman times; decidedly since the 1400s in English law.",
    url: "https://today.thefinancialexpress.com.bd/views-opinion/are-married-women-barred-from-being-trustees-in-bangladesh-1688653042",
  },
  {
    date: "July 4, 2023",
    title: "FAQ ON DIGITAL BANK GUIDELINES",
    author: "Anita Ghazi Rahman",
    excerpt:
      "The central bank of Bangladesh, the Bangladesh Bank issued the Guidelines to Establish Digital Bank.",
    url: "https://legalcirclebd.com/wp-content/uploads/2023/07/FAQ-on-Digital-Bank-Guidelines_1.pdf",
  },
  {
    date: "June 4, 2023",
    title: "FAQ Regarding Enforcement of Foreign Judgement in Bangladesh",
    author: "Nauriin Ahmed",
    excerpt: "To read full report, click here.",
    url: "https://legalcirclebd.com/wp-content/uploads/2023/06/FAQ-Regarding-Enforcement-of-Foreign-Judgement-in-Bangladesh.pdf",
  },
  {
    date: "December 15, 2022",
    title: "SAFE investments in Bangladesh",
    author: "Anita Ghazi Rahman",
    excerpt:
      "The goal of this article is to explore what SAFE instruments are and how they can be made an instrument of choice in Bangladesh for early-stage companies.",
    url: "https://today.thefinancialexpress.com.bd/29th-anniversary-issue-3/safe-investments-in-bangladesh-1670325247",
  },
  {
    date: "June 28, 2022",
    title: "FAQ on owning Real Estate Properties by Dual Citizenship Holders in Bangladesh",
    author: "Taahsina Raisa Rabbi",
    excerpt:
      "Can foreign nationals sell property in Bangladesh through a duly registered Power of Attorney?",
    url: "https://legalcirclebd.com/wp-content/uploads/2022/06/FAQ-on-owning-Real-Estate-Properties-by-Dual-Citizenship-Holders-in-Bangladesh.pdf",
  },
  {
    date: "February 24, 2022",
    title: "Global M&A Trends Report 2022",
    author: "Anita Ghazi Rahman",
    excerpt:
      "The Legal Circle is proud to have contributed to the Global M&A Trends Report 2022, the latest edition of the annual analysis of key trends.",
    url: "https://hubs.ly/Q014pWqr0",
  },
  {
    date: "February 13, 2022",
    title: "Telecoms and Media An overview of regulation in 44 jurisdictions worldwide",
    author: "Daniah Khandker",
    excerpt: "The Legal Circle is the contributor from Bangladesh.",
    url: "https://www.hwglaw.com/wp-content/uploads/2013/04/43F06D42424A3AA831983884C377BF53.pdf",
  },
  {
    date: "February 13, 2022",
    title: "Rehearsing the Witness: The Bhawal Court Case [Testimony and Evidence]",
    excerpt:
      "The Bhawal court case was a pre-Independence case that revolved around the identity of a sannyasi.",
    url: "https://www.journals.uchicago.edu/doi/full/10.1086/707150#",
  },
  {
    date: "January 29, 2022",
    title:
      "Legal reform as a catalyst for social enterprise: an international social enterprise law & policy report",
    author: "Catalyst 2030",
    excerpt: `"Achieving rapid, large-scale improvements in social, environmental, and economic outcomes for people and business in all countries around the world is an imperative that requires an "all hands-on deck" approach. It is not enough to leave it to governmental and non-governmental organizations to do the hard work of addressing climate change, environmental degradation, and inequalities in health outcomes, education, and social welfare. On the other hand, while many businesses have also taken steps to address these problems, we cannot rely on the goodwill of business interests at large to reform economic systems to promote sustainable growth." This report is prepared by Morrison & Foerster LLP with support from Lex Mundi Pro Bono Foundation. Contributors from The Legal Circle to this Report: Anita Ghazi Rahman. Sameera Mahmud, Nauriin Ahmed, Nafiul Alam Shupto,`,
    url: "https://www.lexmundiprobono.org/wp-content/uploads/2022/01/Lex_Mundi_ProBono_A4_Report_INTERACTIVE_2022.pdf",
  },
  {
    date: "January 4, 2022",
    title: "FAQ on Company Law in Bangladesh",
    author: "The Legal Circle",
    excerpt: `A. Types of Company :
The Companies Act, 1994 defines the word company as "a company formed and registered under this Act or an existing company". Therefore, a company is formed under the Companies Act, 1994 by a group of people who come together for achieving a common objective.

There are three types of companies in Bangladesh:
1. Private Limited Company;
2. Public Limited Company; and
3. One Person Company ("OPC"), introduced by Companies (Amendment) Act, 2020.

1. Private Limited Company
Most Bangladeshi companies are registered as private limited liability companies, commonly known as private limited companies. A private limited company is a separate legal entity and shareholders are not liable for the company's debts beyond the amount of share capital they have contributed. According to the Companies Act, 1994, any person (foreign or local) above the age of 18 can register a company in Bangladesh. Section 2(1)(q) defines a company to mean a company which by its articles:

· restricts the right to transfer its shares;
· prohibits any invitation to the public to subscribe for its shares or debentures, if any;
· limits the number of its members to 50.

2. Public Limited Company
In contrast to a private limited company, a public limited company can invite the public to hold shares and is often listed or looking to list on a stock exchange. Section 2(1)(r) of the Companies Act, 1994 defines a public company to mean - "... a company incorporated under this Act or under any law at any time in force before the commencement of this Act and which is not a private company." In short, a public company is one where the Articles of Association do not provide any restrictions on the transfer of shares, the maximum number of members (but must have a minimum of 7 members), and allows for the invitation to the public seeking their subscription for its shares.

3. OPC
In 2020, the Companies Act, 1994 has been amended twice by the Parliament and vital amendments have been brought in regard to OPC formation, registration, management, etc. These new amendments have opened the door for OPC, some of the key features of which include:

· Only a natural person can form an OPC;
· The paid-up capital shall be minimum of BDT. 2,500,000 (Bangladesh Taka Twenty Five Lacs) and maximum of BDT. 50,000,000 (Bangladesh Taka Five Crore).
· The preceding year's turnover must be a minimum of BDT. 10,000,000 (Bangladesh Taka One Crore) and a maximum of BDT. 500,000,000 (Bangladesh Taka Fifty Crore).
· The sole shareholder of OPC shall be its Director as well as manager, company secretary, and other employees may be appointed to manage the OPC.
· All shares of the OPC can be transferred to any other natural person subject to the provision of section 38 of the Companies Act, 1994.`,
    url: "",
  },
  {
    date: "December 22, 2021",
    title: "Employee Stock Option (ESO) - a beneficial plan for both the company and the employees",
    author: "Anita Ghazi Rahman",
    excerpt:
      "The Government's latest 8th five-year plan has set a job-creation target of 11.33 million between FY 2021-2022 and 2024-2025.",
    url: "https://today.thefinancialexpress.com.bd/views-opinion/employee-stock-option-eso-a-beneficial-plan-for-both-the-company-and-the-employees-1640093335",
  },
  {
    date: "November 24, 2021",
    title: "Investing workers' funds differently: securities seen best choice",
    author: "Anita Ghazi Rahman",
    excerpt:
      "Like pension funds for the West, workers funds are for Bangladesh in terms of post-retirement planning.",
    url: "https://today.thefinancialexpress.com.bd/28th-anniversary-issue-2/investing-workers-funds-differently-securities-seen-best-choice-1637660153",
  },
  {
    date: "November 4, 2021",
    title: "FAQ on Workers' Funds in Bangladesh",
    author: "The Legal Circle",
    excerpt: "Discussion on different types of workers' fund in Bangladesh.",
    url: "https://legalcirclebd.com/wp-content/uploads/2021/11/FAQ-Workers-Fund-in-Bangladesh-Final.pdf",
  },
  {
    date: "June 10, 2021",
    title: "FAQ on Trusts",
    author: "The Legal Circle",
    excerpt:
      "A Trust is an obligation imposed on one or more persons, Trustees, with regard to property.",
    url: "https://legalcirclebd.com/wp-content/uploads/2021/06/FAQ-on-Trusts.pdf",
  },
  {
    date: "May 1, 2021",
    title: "Limited aspect regarding tort actions maintainable under the Laws of Bangladesh",
    author: "Karishma Jahan",
    excerpt: `The Legal Circle Team, led by Barrister Karishma Jahan is pleased to have assisted Leigh Day in this ongoing claim on a limited aspect regarding tort actions maintainable under the Laws of Bangladesh. The High Court of Justice (UK) has given an initial ruling that a Bangladeshi woman whose husband died while dismantling an oil tanker at a shipbreaking yard in 2018 can file a negligence claim against a British company involved in the vessel's sale.`,
    url: "https://bit.ly/30qtexq?fbclid=IwAR0x12vj7LcLMFxK0gMNdiNLPHygSuiM9CMUCLKuYAsGahqIqbz2pju75zQ",
  },
  {
    date: "April 12, 2021",
    title: "What's in a trademark?",
    excerpt: "Jarif Ahmed Rumman wrote an article entitled What's in a trademark?",
    url: "https://thefinancialexpress.com.bd/views/reviews/whats-in-a-trademark-1618215515",
    author: "Jarif Ahmed Rumman",
  },
  {
    date: "January 1, 2021",
    title: "Fairwork Bangladesh Ratings 2021: Labour Standards in the Gig Economy",
    author: "Anita Ghazi Rahman",
    excerpt: `This first Fairwork report for Bangladesh examines gig workers' rights in what is a relatively young market and capital-intensive sector. Overall, the scores awarded to platforms in Bangladesh in the first year were very low, reflecting an absence of labour protections in the wider informal economy as well as in the platform economy, and substantial room for improvement in subsequent scoring rounds.

The platform economy model continues to attract workers in Bangladesh as they feel the sector can offer a regular cash flow and flexible working hours. However, the annual Fairwork Bangladesh ratings show that the working conditions of platform workers are far from desirable. They continue to face unfair labour practices and lack protections afforded to employees.

We hope that this report will help set the agenda of fairer working conditions for the gig workers of Bangladesh, and that it will inspire platforms to improve their positions in the next round of scoring taking place in 2022.`,
    url: "https://fair.work/wp-content/uploads/sites/131/2021/12/211207_Fairwork_Report_Bangladesh-2021-1.pdf",
  },
  {
    date: "December 5, 2020",
    title: "Understanding Preference Shares in Practice",
    excerpt: `Shedding light on preference shares and their practical application in Bangladesh, an article titled "Understanding Preference Shares in Practice" written by Barrister Anita Ghazi Rahman has been published in the Financial Express.`,
    url: "https://bit.ly/3nOH1ry?fbclid=IwAR2gRWP3xdaul1xc3VP31Vdq-elXWDKPx7oas7jmLPHqO8W_YnVGgGThuuM",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "December 2, 2020",
    title: "Bangladesh chapter on Global Legal Insights",
    author: "Karishma Jahan",
    excerpt: `The Legal Circle is proud to have partnered with Global Legal Insights on its Energy 2021 guide. Sharing Karishma Jahan's contribution to the Bangladesh chapter on Global Legal Insights - Energy 2021. The chapter provides an overview of the current energy mix in Bangladesh, development in government policy and strategy in the last 12 months as well as changes in the energy situation in the last 12 months which are likely to have an impact on future direction or policy.`,
    url: "https://bit.ly/3nlq5ZW?fbclid=IwAR3xgyck-ZSwoKfa2_VxIezh_z_fTrMJXgYRZDkMc0FAcBYoKKG3N8RCxg4",
  },
  {
    date: "December 1, 2020",
    title: "Data, digitalisation and public welfare post-covid-19",
    excerpt: `Accentuating the need and importance of data in this day and age, an article titled, "Data, digitalisation and public welfare post-covid-19", co-authored by Barrister Anita Ghazi Rahman and Hon'ble Deputy Minister for Education Mr. Mohibul H. Chowdhoury has been published in the WhiteBoard (a quarterly policy Magazine by Center for Research and Information).`,
    url: "https://whiteboardmagazine.com/1954/data-digitalisation-and-public-welfare-post-covid-19/?fbclid=IwAR0SenGjqGiRlqimO7vBAN5DgOyQnhLx2bOR8UoPhlAUyvr9YQg2WBfErok",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "August 11, 2020",
    title: "Digitising the NGO Affairs Bureau",
    excerpt:
      "Lamisa Fahima Alam, Abir Chowdhury and Ramisa Jahan wrote on Digitising the NGO Affairs Bureau.",
    url: "https://www.thedailystar.net/law-our-rights/news/digitising-the-ngo-affairs-bureau-1943005",
    author: "Lamisa Fahima Alam",
  },
  {
    date: "July 15, 2020",
    title: "Easing repatriation of proceeds from share sale",
    author: "Anita Ghazi Rahman ",
    excerpt: `Addressing the recent change of repatriation policy by Bangladesh Bank, an article titled "Easing repatriation of proceeds from share sale" written by Barrister Anita Ghazi Rahman and Ms. Nauriin Ahmed has been published in the Financial Express.`,
    url: "https://bit.ly/2OyTJuT?fbclid=IwAR3SO0UwAm5F7p8cwX498qQ9thp2hZGAO51wdwtfcMINSCFL_Wp5ICPW1Gc",
  },
  {
    date: "June 1, 2020",
    title: "Returning to work during Covid-19",
    excerpt:
      "As the country opens up after lockdown, Barrister Anita Ghazi Rahman's timely article discusses returning to work during Covid-19.",
    url: "https://bit.ly/3dtGgPJ?fbclid=IwAR2SqtX-WzXuDKnnFo5vT75fjZGzfXoZZ8w3GIBZaJjUe2bm-LwaBbKdxUc",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "May 30, 2020",
    title: "Covid-19 Government Support Measures",
    author: "Anita Ghazi Rahman",
    excerpt:
      "This overview regarding Covid-19 Government Support Measures is provided by The Legal Circle, the Lex Mundi member firm for Bangladesh.",
    url: "https://interactiveguides.lexmundi.com/lexmundi/covid-19-government-support-measures/bangladesh",
  },
  {
    date: "May 8, 2020",
    title: "Festival bonus amid Covid-19",
    excerpt:
      "A timely article written by Barrister Sameera Mahmud and Barrister Pushpo Rahman on Festival bonus amid Covid-19.",
    url: "https://bit.ly/2WDZcnX?fbclid=IwAR26tfXsPDGdKglYCFz9S60CXAxCVEBKDHxuWhR1bFRt34upPEdHVVZIaIQ",
    author: "Sameera Mahmud & Pushpo Rahman",
  },
  {
    date: "April 16, 2020",
    title: "Businesses during Covid-19 crisis",
    author: "Nauriin Ahmed",
    excerpt:
      "Nauriin Ahmed of The Legal Circle discusses ways to deal with rental obligations during Covid-19.",
    url: "https://www.thedailystar.net/law-our-rights/news/address-rental-obligations-during-covid-19-1893538",
  },
  {
    date: "March 30, 2020",
    title: "Workforce reduction during Covid-19: Information for employers",
    author: "Anita Ghazi Rahman",
    excerpt:
      "A timely article published in The Financial Express on employee severance at the time of Covid-19.",
    url: "https://thefinancialexpress.com.bd/views/workforce-reduction-during-covid-19-information-for-employers-1585582021?fbclid=IwAR06LorEwX7fxIAW1r0KL7OOv9qEDB8SEWWONuSRJ2eHVS-b2p5VvVj02lDw",
  },
  {
    date: "January 7, 2019",
    title: "LexisNexis Company Law Guide 2018-2019",
    author: "Masud Khan",
    excerpt:
      "The second annual complimentary guide to understanding Company Law practices around the world with an Asia-Pacific focus.",
    url: "https://www.harriskyriakides.law/pdfs/LexisNexis_CompanyLaw-2018.pdf",
  },
  {
    date: "December 11, 2018",
    title: "Data, Privacy and e-commerce",
    excerpt:
      "Data, Privacy and e-commerce, written jointly by Anita Ghazi Rahman and Pushpo Rahman.",
    url: "https://today.thefinancialexpress.com.bd/26th-anniversary-issue-3/data-privacy-and-e-commerce-1544440456",
    author: "Anita Ghazi Rahman & Pushpo Rahman",
  },
  {
    date: "November 1, 2018",
    title: "Bangladesh Style of Citation of Legal Authorities",
    author: "Nauriin Ahmed",
    excerpt: "Md. Rizwanul Islam, Nauriin Ahmed, and K. Shamsuddin Mahmood wrote on this topic.",
    url: "https://books.thedailystar.net/shop/bangladesh-style-of-citation-of-legal-authorities/",
  },
  {
    date: "June 13, 2017",
    title: "Framing a social enterprise law",
    excerpt: "Anita Ghazi Rahman wrote on Framing a social enterprise law in The Daily Star.",
    url: "https://www.thedailystar.net/law-our-rights/law-vision/framing-social-enterprise-law-1419268",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "March 1, 2017",
    title: "The Employment Law Review - Edition 8",
    author: "Anita Ghazi Rahman",
    excerpt: "Anita Ghazi Rahman wrote this article.",
    url: "",
  },
  {
    date: "April 1, 2016",
    title: "Bangladesh Section of The International Comparative Guide to: Project Finance 2016",
    author: "Anita Ghazi Rahman",
    excerpt:
      "Bangladesh Section of The International Comparative Guide to Project Finance 2016 jointly authored by Anita Ghazi Rahman and Karishma Jahan.",
    url: "",
  },
  {
    date: "January 1, 2013",
    title: "Bangladesh Section of Laws on Telecom and Media 2013",
    excerpt:
      "Bangladesh Section of Laws on Telecom and Media 2013 was authored by Anita Ghazi Rahman, Mohibul H. Chowdhoury, and Daniah Khandker.",
    url: "",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "September 5, 2012",
    title: "MR A J O AND MRS T L V. The Slovak Republic, UNCITRAL Award",
    excerpt:
      "Anita Ghazi Rahman wrote on MR A J O AND MRS T L V. The Slovak Republic, UNCITRAL Award.",
    url: "",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "October 11, 2011",
    title:
      "THE TEMPLE OF PREAH VIHEAR - CAMBODIA v. THAILAND - (Decision on the Request of Provisional Measures)",
    excerpt:
      "THE TEMPLE OF PREAH VIHEAR - CAMBODIA v. THAILAND - (Decision on the Request of Provisional Measures) was written by Anita Ghazi Rahman.",
    url: "",
    author: "Anita Ghazi Rahman",
  },
  {
    date: "May 25, 2010",
    title: "An easy conversion",
    excerpt:
      "The article on An easy conversion was written by Anita Ghazi Rahman and published in The Daily Star.",
    url: "https://www.thedailystar.net/news-detail-139870",
    author: "Anita Ghazi Rahman",
  },
];

// Deduplicate slugs by appending index when titles collide
const slugCounts: Record<string, number> = {};
export const posts: InsightPost[] = rawPosts.map((p) => {
  const base = slugify(p.title);
  slugCounts[base] = (slugCounts[base] ?? 0) + 1;
  const count = slugCounts[base];
  return { ...p, slug: count > 1 ? `${base}-${count}` : base };
});

export function getPostBySlug(slug: string): InsightPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): InsightPost[] {
  const idx = posts.findIndex((p) => p.slug === slug);
  const others = posts.filter((_, i) => i !== idx);
  // Pick posts spread across the list for variety
  const step = Math.max(1, Math.floor(others.length / count));
  return Array.from({ length: count }, (_, i) => others[(idx + 1 + i * step) % others.length]);
}

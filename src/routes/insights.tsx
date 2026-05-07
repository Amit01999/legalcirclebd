import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — The Legal Circle" },
      {
        name: "description",
        content: "Legal insights, articles and analyses from The Legal Circle.",
      },
      { property: "og:title", content: "Insights — The Legal Circle" },
      { property: "og:description", content: "Articles, updates and legal analyses." },
    ],
  }),
  component: Insights,
});

const posts = [
  {
    date: "February 15, 2026",
    title: "Directors in share market",
    excerpt: "To read the full article, Click here.",
    url: "",
  },
  {
    date: "November 10, 2025",
    title: "Banking on change: key reforms transforming Bangladesh's financial sector",
    excerpt: "To read the full article, Click here.",
    url: "",
  },
  {
    date: "May 11, 2025",
    title: "FAQ on Board Meetings",
    excerpt: "To read the full article, Click here.",
    url: "",
  },
  {
    date: "December 10, 2024",
    title: "Independent directors: The role and its evolution",
    excerpt: "To read the full article, Click here.",
    url: "",
  },
  {
    date: "November 10, 2024",
    title: "Ensuring judicial oversight in lawful interception",
    excerpt: "To read the full article, Click here.",
    url: "",
  },
  {
    date: "September 26, 2024",
    title: "Will this remain a nation for men?",
    excerpt: "To read the full article, Click here.",
    url: "",
  },
  {
    date: "December 10, 2023",
    title: "Bringing more women in boardrooms can be game-changer in BD corporate arena",
    excerpt:
      "Amid a change of wind over the past decade, board diversity has become a major consideration in corporate governance.",
    url: "",
  },
  {
    date: "September 15, 2023",
    title: "Navigating legal waters: Independent contractors' status in Bangladesh",
    excerpt: "To read the full article, click here.",
    url: "",
  },
  {
    date: "September 1, 2023",
    title: "Cryptocurrency Conundrum Lessons from the MTFE Scam in Bangladesh",
    excerpt: "To read the full article, click here.",
    url: "",
  },
  {
    date: "July 31, 2023",
    title: "FAQ on Administration and Distribution of a Deceased's Estate under Bangladesh Law",
    excerpt:
      "Under the probate and administration law of Bangladesh, who has the prior right to take up administration and distribution of a deceased's estate?",
    url: "",
  },
  {
    date: "July 22, 2023",
    title: "Are married women barred from being trustees in Bangladesh?",
    excerpt:
      "The concept of Trust is assumed to have existed since Roman times; decidedly since the 1400s in English law.",
    url: "",
  },
  {
    date: "July 4, 2023",
    title: "FAQ ON DIGITAL BANK GUIDELINES",
    excerpt:
      "The central bank of Bangladesh, the Bangladesh Bank issued the Guidelines to Establish Digital Bank.",
    url: "",
  },
  {
    date: "June 4, 2023",
    title: "FAQ Regarding Enforcement of Foreign Judgement in Bangladesh",
    excerpt: "To read full report, click here.",
    url: "",
  },
  {
    date: "December 15, 2022",
    title: "SAFE investments in Bangladesh",
    excerpt:
      "The goal of this article is to explore what SAFE instruments are and how they can be made an instrument of choice in Bangladesh for early-stage companies.",
    url: "",
  },
  {
    date: "June 28, 2022",
    title: "FAQ on owning Real Estate Properties by Dual Citizenship Holders in Bangladesh",
    excerpt:
      "Can foreign nationals sell property in Bangladesh through a duly registered Power of Attorney?",
    url: "",
  },
  {
    date: "February 24, 2022",
    title: "Global M&A Trends Report 2022",
    excerpt:
      "The Legal Circle is proud to have contributed to the Global M&A Trends Report 2022, the latest edition of the annual analysis of key trends.",
    url: "",
  },
  {
    date: "February 13, 2022",
    title: "Telecoms and Media An overview of regulation in 44 jurisdictions worldwide",
    excerpt: "The Legal Circle is the contributor from Bangladesh.",
    url: "",
  },
  {
    date: "February 13, 2022",
    title: "Rehearsing the Witness: The Bhawal Court Case [Testimony and Evidence]",
    excerpt:
      "The Bhawal court case was a pre-Independence case that revolved around the identity of a sannyasi.",
    url: "",
  },
  {
    date: "January 29, 2022",
    title:
      "Legal reform as a catalyst for social enterprise: an international social enterprise law & policy report",
    excerpt:
      "This report explores how legal reform can support rapid, large-scale improvements in social, environmental, and economic outcomes through social enterprise law and policy.",
    url: "",
  },
  {
    date: "January 4, 2022",
    title: "FAQ on Company Law in Bangladesh",
    excerpt:
      "The Companies Act, 1994 defines company formation and registration in Bangladesh, including private limited companies, public limited companies, and one person companies.",
    url: "",
  },
  {
    date: "December 22, 2021",
    title: "Employee Stock Option (ESO) - a beneficial plan for both the company and the employees",
    excerpt:
      "The Government's latest 8th five-year plan has set a job-creation target of 11.33 million between FY 2021-2022 and 2024-2025.",
    url: "",
  },
  {
    date: "November 24, 2021",
    title: "Investing workers' funds differently: securities seen best choice",
    excerpt:
      "Like pension funds for the West, workers funds are for Bangladesh in terms of post-retirement planning.",
    url: "",
  },
  {
    date: "November 4, 2021",
    title: "FAQ on Workers' Funds in Bangladesh",
    excerpt: "Discussion on different types of workers' fund in Bangladesh.",
    url: "",
  },
  {
    date: "June 10, 2021",
    title: "FAQ on Trusts",
    excerpt:
      "A Trust is an obligation imposed on one or more persons, Trustees, with regard to property.",
    url: "",
  },
  {
    date: "May 1, 2021",
    title: "Limited aspect regarding tort actions maintainable under the Laws of Bangladesh",
    excerpt:
      "The Legal Circle Team, led by Barrister Karishma Jahan, assisted Leigh Day in an ongoing claim on a limited aspect regarding tort actions maintainable under Bangladeshi law.",
    url: "",
  },
  {
    date: "April 12, 2021",
    title: "What's in a trademark?",
    excerpt: "Jarif Ahmed Rumman wrote an article entitled What's in a trademark?",
    url: "",
  },
  {
    date: "January 1, 2021",
    title: "Fairwork Bangladesh Ratings 2021: Labour Standards in the Gig Economy",
    excerpt:
      "This first Fairwork report for Bangladesh examines gig workers' rights in a relatively young market.",
    url: "",
  },
  {
    date: "December 5, 2020",
    title: "Understanding Preference Shares in Practice",
    excerpt: "Shedding light on preference shares and their practical application in Bangladesh.",
    url: "",
  },
  {
    date: "December 2, 2020",
    title: "Bangladesh chapter on Global Legal Insights",
    excerpt:
      "The Legal Circle partnered with Global Legal Insights on its Energy 2021 guide, contributing the Bangladesh chapter.",
    url: "",
  },
  {
    date: "December 1, 2020",
    title: "Data, digitalisation and public welfare post-covid-19",
    excerpt: "Accentuating the need and importance of data in this day and age.",
    url: "",
  },
  {
    date: "August 11, 2020",
    title: "Digitising the NGO Affairs Bureau",
    excerpt:
      "Lamisa Fahima Alam, Abir Chowdhury and Ramisa Jahan wrote on Digitising the NGO Affairs Bureau.",
    url: "",
  },
  {
    date: "July 15, 2020",
    title: "Easing repatriation of proceeds from share sale",
    excerpt: "Addressing the recent change of repatriation policy by Bangladesh Bank.",
    url: "",
  },
  {
    date: "June 1, 2020",
    title: "Returning to work during Covid-19",
    excerpt:
      "As the country opens up after lockdown, Barrister Anita Ghazi Rahman's timely article discusses returning to work during Covid-19.",
    url: "",
  },
  {
    date: "May 30, 2020",
    title: "Covid-19 Government Support Measures",
    excerpt:
      "This overview regarding Covid-19 Government Support Measures is provided by The Legal Circle, the Lex Mundi member firm for Bangladesh.",
    url: "",
  },
  {
    date: "May 8, 2020",
    title: "Festival bonus amid Covid-19",
    excerpt:
      "A timely article written by Barrister Sameera Mahmud and Barrister Pushpo Rahman on Festival bonus amid Covid-19.",
    url: "",
  },
  {
    date: "April 16, 2020",
    title: "Businesses during Covid-19 crisis",
    excerpt:
      "Nauriin Ahmed of The Legal Circle discusses ways to deal with rental obligations during Covid-19.",
    url: "",
  },
  {
    date: "March 30, 2020",
    title: "Workforce reduction during Covid-19: Information for employers",
    excerpt:
      "A timely article published in The Financial Express on employee severance at the time of Covid-19.",
    url: "",
  },
  {
    date: "January 7, 2019",
    title: "LexisNexis Company Law Guide 2018-2019",
    excerpt:
      "The second annual complimentary guide to understanding Company Law practices around the world with an Asia-Pacific focus.",
    url: "",
  },
  {
    date: "December 11, 2018",
    title: "Data, Privacy and e-commerce",
    excerpt:
      "Data, Privacy and e-commerce, written jointly by Anita Ghazi Rahman and Pushpo Rahman.",
    url: "",
  },
  {
    date: "November 1, 2018",
    title: "Bangladesh Style of Citation of Legal Authorities",
    excerpt: "Md. Rizwanul Islam, Nauriin Ahmed, and K. Shamsuddin Mahmood wrote on this topic.",
    url: "",
  },
  {
    date: "June 13, 2017",
    title: "Framing a social enterprise law",
    excerpt: "Anita Ghazi Rahman wrote on Framing a social enterprise law in The Daily Star.",
    url: "",
  },
  {
    date: "March 1, 2017",
    title: "The Employment Law Review - Edition 8",
    excerpt: "Anita Ghazi Rahman wrote this article.",
    url: "",
  },
  {
    date: "April 1, 2016",
    title: "Bangladesh Section of The International Comparative Guide to: Project Finance 2016",
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
  },
  {
    date: "September 5, 2012",
    title: "MR A J O AND MRS T L V. The Slovak Republic, UNCITRAL Award",
    excerpt:
      "Anita Ghazi Rahman wrote on MR A J O AND MRS T L V. The Slovak Republic, UNCITRAL Award.",
    url: "",
  },
  {
    date: "October 11, 2011",
    title:
      "THE TEMPLE OF PREAH VIHEAR - CAMBODIA v. THAILAND - (Decision on the Request of Provisional Measures)",
    excerpt:
      "THE TEMPLE OF PREAH VIHEAR - CAMBODIA v. THAILAND - (Decision on the Request of Provisional Measures) was written by Anita Ghazi Rahman.",
    url: "",
  },
  {
    date: "May 25, 2010",
    title: "An easy conversion",
    excerpt:
      "The article on An easy conversion was written by Anita Ghazi Rahman and published in The Daily Star.",
    url: "",
  },
];

function Insights() {
  return (
    <>
      <PageHero title="Insights" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group flex min-h-[260px] flex-col border border-border bg-[#F7F7F7] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 text-xs uppercase tracking-wider text-brand">{p.date}</div>
              <h3 className="mb-4 font-serif text-xl leading-snug text-ink group-hover:text-brand">
                {p.title}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">{p.excerpt}</p>
              <a
                href={p.url}
                className="mt-auto pt-6 text-sm font-medium uppercase tracking-[0.18em] text-brand transition hover:text-ink"
              >
                Read article
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

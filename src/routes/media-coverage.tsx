import { createFileRoute } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { PageHero, SectionHeading } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/media-coverage")({
  head: () => headFor("/media-coverage"),
  component: MediaCoveragePage,
});

const coverage = [
  {
    title: "Bangladesh Angels announced the launch of Bangladesh Women Investors Network",
    body: "Bangladesh Angels Network (BAN) launched Bangladesh Women Investors Network (BWIN).",
    href: "https://thefinancialexpress.com.bd/education/bangladesh-angels-announced-the-launch-of-bangladesh-women-investors-network-1648306728",
  },
  {
    title: "BYLC Ventures: Cohort 4 winners announced",
    body: "Bangladesh Youth Leadership Center (BYLC) has recently announced the winners of BYLC Ventures: Cohort 4.",
    href: "https://www.tbsnews.net/economy/corporates/bylc-ventures-cohort-4-winners-announced-388626",
  },
  {
    title: "BLAST holds seminar on compensation for the violations of fundamental rights",
    body: "Barrister Anita Ghazi Islam founding partner of The Legal Circle, spoke on 10th of October, 2018 at the Law In Practice Seminar Series organized by BLAST.",
    href: "https://www.thedailystar.net/law-our-rights/news/blast-holds-seminar-compensation-constitutional-remedy-violations-fundamental-rights-1647226",
  },
  {
    title: "Webinar: E-Learning in Bangladesh - A New Normal or a Temporary Fix?",
    body: "ULAB's Center for Enterprise and Society (CES) and Dhaka Tribune to jointly host an online roundtable session titled E-Learning in Bangladesh.",
    href: "https://www.dhakatribune.com/bangladesh/education/2020/07/11/live-e-learning-in-bangladesh-a-new-normal-or-a-temporary-fix",
  },
  {
    title: "The Asset Triple A Infrastructure Awards 2020",
    body: "Cold Chain Bangladesh Limited won The Asset Triple A Infrastructure Award 2020 for the Logistics Deal of the Year. The project by Cold Chain Limited is the first of its kind.",
    href: "https://www.theasset.com/awards/infrastructure-awards-south-asia-deals-2020",
  },
  {
    title: "DSE, CSE gets new chairman",
    body: "Barrister Anita Ghazi Islam, Founder and Managing Partner at The Legal Circle has been appointed as the new independent director of the Chittagong Stock Exchange (CSE).",
    href: "https://www.tbsnews.net/economy/stock/dse-cse-gets-new-chairman-47477",
  },
  {
    title: "'Inform people of legal remedies'",
    body: "Barrister Anita Ghazi Islam, founding partner of The Legal Circle, on an invitation of The Daily Star attended a roundtable at the newspaper's office.",
    href: "https://www.thedailystar.net/city/news/inform-people-legal-remedies-1859212",
  },
  {
    title: "স্টার্টআপ বাংলাদেশ লিমিটেড কোম্পানির অনুমোদন",
    body: "Barrister Anita Ghazi Islam Founder and Managing Partner at The Legal Circle and Nauriin Ahmed are privileged to have advised on the legal aspects.",
    href: "https://www.thedailystar.net/bangla/%E0%A6%B6%E0%A7%80%E0%A6%B0%E0%A7%8D%E0%A6%B7-%E0%A6%96%E0%A6%AC%E0%A6%B0/%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A6%86%E0%A6%AA-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6-%E0%A6%B2%E0%A6%BF%E0%A6%AE%E0%A6%BF%E0%A6%9F%E0%A7%87%E0%A6%A1-%E0%A6%95%E0%A7%8B%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%85%E0%A6%A8%E0%A7%81%E0%A6%AE%E0%A7%8B%E0%A6%A6%E0%A6%A8-129655",
  },
  {
    title: "Legal and Policy implications on Commerce and Investment during Pandemic",
    body: "To discuss these issues from legal and policy perspectives, Law & Our Rights, The Daily Star organized the webinar on legal and policy implications.",
    href: "https://www.thedailystar.net/law-our-rights/news/legal-and-policy-implications-commerce-and-investment-during-pandemic-1933497",
  },
  {
    title:
      "Webinar on the role of NGOs during Covid-19 in Bangladesh, and the regulatory and practical challenges involved",
    body: "Webinar on the role of NGOs during Covid-19 in Bangladesh, and the regulatory and practical challenges involved.",
    href: "https://www.facebook.com/ALAPBangladesh/videos/711105839702741",
  },
  {
    title: "BYLC Summit: Series of dialogues tackle youth challenges and opportunities",
    body: "BYLC Summit: Series of dialogues tackle youth challenges and opportunities.",
    href: "https://unb.com.bd/category/Bangladesh/bylc-summit-series-of-dialogues-tackle-youth-challenges-and-opportunities/3138",
  },
  {
    title: "Access to Laws Online: Anita Ghazi Rahman at TEDxDhaka",
    body: "Access to Laws Online: Anita Ghazi Rahman at TEDxDhaka.",
    href: "https://www.youtube.com/watch?v=x6XfpH3B2B4&ab_channel=TEDxTalks",
  },
  {
    title: "Podcast- Legal Aspects of Startup Investing",
    body: "Podcast- Legal Aspects of Startup Investing.",
    href: "https://anchor.fm/bd-angels/episodes/Legal-Aspects-of-Startup-Investing-eum2pg",
  },
  {
    title: "BYLC advocates for gender balance",
    body: "BYLC advocates for gender balance.",
    href: "https://www.dhakatribune.com/bangladesh/event/2019/03/15/bylc-advocates-for-gender-balance",
  },
  {
    title: "Webinar on Company Law Reform",
    body: "Webinar on Company Law Reform.",
    href: "https://www.facebook.com/ALAPBangladesh/videos/750264215663430/",
  },
];

function MediaCoveragePage() {
  return (
    <>
      <PageHero title="Media Coverage" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc max-w-5xl">
          <SectionHeading>Media Coverage</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coverage.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[260px] flex-col border border-border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="mb-3 font-semibold text-xl  text-[#73747F]">{item.title}</h2>
                <p className="text-[14px] leading-5 text-muted-foreground">{item.body}</p>
                <a
                  href={item.href}
                  className="mt-auto mt-2 text-sm font-medium text-brand transition hover:text-ink"
                >
                  See details
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

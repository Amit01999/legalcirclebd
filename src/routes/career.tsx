import { createFileRoute } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/career")({
  head: () => headFor("/career"),
  component: Career,
});

function Career() {
  return (
    <>
      <PageHero title="Career" image={heroBuilding} />
      <section className="bg-background py-20 ">
        <div className="container-lc text-center ">
          <p className="mx-auto max-w-2xl text-justify text-[13px] leading-7 text-muted-foreground">
            The Legal Circle offers exciting internship opportunities to legal practitioners, law
            students and recent graduates. This immersive program offers a unique chance to gain
            firsthand experience in a dynamic legal environment. Interns will have the opportunity
            to support our dedicated legal professionals by assisting with research, drafting legal
            documents, observing client interactions, and contributing to various aspects of case
            preparation. We are looking for individuals with a strong academic record, excellent
            research and writing skills, a keen interest in the law, and a commitment to
            professionalism. This internship provides invaluable insights into the practice of law
            and the daily operations of a successful law office.
            <span className="block h-5" />
            Furthermore, successful completion of the internship may lead to opportunities for an
            associate position within the firm. If you are a highly motivated individual eager to
            learn and contribute, we encourage you to apply.
            <span className="block h-5" />
            The Legal Circle offers internship opportunities on a quarterly basis. Internships begin
            in January, April, July, and October and are offered for a period of three months.
            Applications must be submitted no later than one month prior to the start of the desired
            quarter: for example, to apply for the July – September quarter, applications must be
            submitted no later than 01 June.
            <span className="block h-5" />
            Please note that shortlisted candidates will be notified of the details of their
            interview 07 (seven) days in advance.
            <span className="block h-5" />
            Interested candidates should email a copy of their CV and a Cover Letter to
            enquiry@legalcirclebd.com
            <span className="block h-5" />
            <a
              href="mailto:enquiry@legalcirclebd.com"
              className="block text-center text-[16px] font-medium text-brand hover:underline"
            >
              Email: enquiry@legalcirclebd.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

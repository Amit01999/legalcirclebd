import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";
import logoMark from "@/assets/logo1.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Legal Circle" },
      {
        name: "description",
        content: "Learn about The Legal Circle, our mission, vision, and recognitions.",
      },
      { property: "og:title", content: "About Us — The Legal Circle" },
      { property: "og:description", content: "About our firm, mission and recognitions." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="About Us" image={heroBuilding} />
      <section className="bg-background pb-[70px] pt-[42px] shadow-[inset_0_4px_8px_rgba(0,0,0,0.08)]">
        <div className="container-lc grid max-w-[1240px] items-start gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-[70px]">
          <div className="flex justify-center pt-8 lg:pt-[78px]">
            <div className="flex flex-col items-center">
              <img
                src={logoMark}
                alt="The Legal Circle"
                className="h-[96px] w-[96px] object-contain"
              />
              <div className="-mt-1 font-serif text-[21px] font-bold leading-none tracking-[-0.02em] text-[#242424]">
                THE LEGAL CIRCLE
              </div>
            </div>
          </div>

          <div className="space-y-[22px] text-left font-serif text-[16px] text-[#626577]/90 sm:text-justify md:text-[13px] md:leading-[1.48]  leading-7">
            <p>
              The Legal Circle is a firm of barristers, advocates and legal consultants specializing
              in representing clients in Bangladesh on both domestic and international legal
              matters. Bringing together a team of experienced lawyers, several of whom have
              previously worked at leading law firms in Bangladesh and internationally, we aim to
              provide approachable yet client-focused, solutions-oriented legal services tailored to
              the individual needs of our clients. Our firm is committed to providing the highest
              level of legal services and achieving cost-effective legal results for our clients by
              being flexible and highly responsive in our approach.
            </p>
            <p>
              The Legal Circle has been recognized as a leading law firm in Bangladesh for
              &ldquo;Corporate and Finance&rdquo; by Chambers and Partners since 2011 and ranked by
              Chambers and Partners for regularly advising foreign entities on their investments in
              Bangladesh with focuses on the TMT, natural resources and energy sectors and having
              substantial activities in real estate transactions, including handling acquisitions
              and due diligence. The firm has been also awarded with the Mergers and Acquisitions
              Law Firm of the Year &ndash; Legal Awards 2015 by Lawyer Monthly.
              <br />
              We provide legal services across a broad range of practice areas including mergers and
              acquisitions, corporate finance (both equity and debt capital markets), projects and
              project finance, bank lending and bank regulation, fund formation and regulation (both
              private equity and mutual funds), general company and commercial matters, foreign
              direct investment, distribution and agency law, civil and criminal litigation (in both
              the lower and appellate courts), telecommunications, competition and media law, trusts
              and estates, employment and industrial relations law and intellectual property
              (including copyright, patent and trademark).
            </p>
            <p>
              Our lawyers advise clients during all stages of a particular assignment, including
              providing specialist advice on prospective business ventures, drafting contracts and
              other transactional documents, practical representation at different government
              offices, and advice, guidance and representation in connection with legal disputes
              including litigation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";
import LexMundiLogo from "@/assets/LexMundi-New-Logo.png";
import LexMundibottom from "@/assets/Legal-Circle-New-Slide-2.png";
export const Route = createFileRoute("/lex-mundi")({
  head: () => headFor("/lex-mundi"),
  component: LexMundi,
});

function LexMundi() {
  return (
    <>
      <PageHero title="Lex Mundi" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc max-w-3xl text-center">
          <a
            href="https://www.lexmundi.com/"
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-block transition hover:opacity-80"
          >
            <img
              src={LexMundiLogo}
              alt="Lex Mundi Member"
              className="mx-auto h-[100px] w-[150px] object-contain"
            />
          </a>
          <p className="text-[13px] leading-relaxed text-muted-foreground/90 text-justify">
            The Legal Circle is the exclusive member firm in Bangladesh for Lex Mundi – the world’s
            leading network of independent law firms with in-depth experience in 100+ countries
            worldwide.
            <br />
            As part of the Lex Mundi global network, The Legal Circle can provide its clients with
            preferred access to more than 21,000 lawyers around the world – all from a single point
            of contact.
            <br />
            Individually, each Lex Mundi member firm is a leader in its local market. Collectively,
            Lex Mundi firms provide global legal resources with unmatched depth and breadth. By
            working with other Lex Mundi firms, The Legal Circle is able to seamlessly handle its
            clients’ most challenging cross-border transactions and disputes
          </p>
          <img
            src={LexMundibottom}
            alt="The Legal Circle and Lex Mundi"
            className="mx-auto mt-10 h-auto w-full max-w-[940px] object-contain"
          />
        </div>
      </section>
    </>
  );
}

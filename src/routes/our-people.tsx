import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/Section";
import { people, peopleTabHashes, peopleTabs, type PeopleTab } from "@/data/people";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/our-people")({
  head: () => ({
    meta: [
      { title: "Our People — The Legal Circle" },
      { name: "description", content: "Meet the partners, counsel and associates at The Legal Circle." },
      { property: "og:title", content: "Our People — The Legal Circle" },
      { property: "og:description", content: "Our team of barristers, advocates and consultants." },
    ],
  }),
  component: OurPeoplePage,
});

function OurPeoplePage() {
  const [active, setActive] = useState<PeopleTab>("Partners");
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const activateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const matchedTab = peopleTabs.find((tab) => peopleTabHashes[tab] === hash);

      if (matchedTab) {
        setActive(matchedTab);
        window.requestAnimationFrame(() => {
          document.getElementById("people-directory")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    };

    activateFromHash();
    window.addEventListener("hashchange", activateFromHash);
    return () => window.removeEventListener("hashchange", activateFromHash);
  }, []);

  if (pathname !== "/our-people") {
    return <Outlet />;
  }

  return (
    <>
      <PageHero title="Our People" image={heroBuilding} />
      <section id="people-directory" className="scroll-mt-[130px] bg-background py-20">
        <div className="container-lc">
          <div className="mb-10 flex flex-wrap justify-center gap-1 border-b">
            {peopleTabs.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setActive(t);
                  window.history.replaceState(null, "", `#${peopleTabHashes[t]}`);
                }}
                className={`relative px-6 py-4 text-sm font-medium transition ${active === t ? "text-ink" : "text-muted-foreground hover:text-ink"}`}
              >
                {t}
                {active === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brand" />}
              </button>
            ))}
          </div>
          <div className="rounded-sm bg-secondary/40 p-8 md:p-12">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {people[active].map((p) => (
                <Link
                  key={p.name}
                  to="/our-people/$slug"
                  params={{ slug: p.slug }}
                  aria-label={`View profile for ${p.name}`}
                  className="block h-full cursor-pointer rounded-sm bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="mx-auto mb-5 h-40 w-40 rounded-full border-4 border-brand/30 object-cover object-top"
                  />
                  <h3 className="mb-2 font-serif text-lg text-brand">{p.name}</h3>
                  <p className="mb-4 text-xs uppercase tracking-wider text-muted-foreground">{p.role}</p>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">View Profile</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";
import { posts } from "@/data/insights";

export const Route = createFileRoute("/insights")({
  head: () => headFor("/insights"),
  component: Insights,
});

function Insights() {
  const { location } = useRouterState();

  if (location.pathname !== "/insights") {
    return <Outlet />;
  }

  return (
    <>
      <PageHero title="Insights" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group flex min-h-[260px] flex-col border border-border bg-[#F7F7F7] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 text-xs uppercase tracking-wider text-brand">{p.date}</div>
              <Link
                to="/insights/$slug"
                params={{ slug: p.slug }}
                className="mb-4 font-serif text-xl leading-snug text-ink group-hover:text-brand"
              >
                <h3>{p.title}</h3>
              </Link>
              <Link
                to="/insights/$slug"
                params={{ slug: p.slug }}
                className="mt-auto pt-6 text-sm font-medium uppercase tracking-[0.18em] text-brand transition hover:text-ink"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

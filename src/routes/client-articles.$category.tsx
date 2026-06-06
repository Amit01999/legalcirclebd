import { createFileRoute, Link, Outlet, notFound, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";
import {
  getCategoryBySlug,
  getArticlesByCategory,
} from "@/data/client-articles";

const PER_PAGE = 10;

export const Route = createFileRoute("/client-articles/$category")({
  head: ({ params }) => {
    const cat = getCategoryBySlug(params.category);
    return {
      meta: [
        { title: `${cat?.label ?? params.category} — Client Portal` },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = getCategoryBySlug(params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { location } = useRouterState();
  const { category } = Route.useParams();

  if (!location.pathname.endsWith(`/${category}`)) {
    return <Outlet />;
  }

  return <CategoryListing />;
}

function CategoryListing() {
  const { category } = Route.useParams();
  const { cat } = Route.useLoaderData();
  const allArticles = getArticlesByCategory(category);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(allArticles.length / PER_PAGE));
  const pageArticles = allArticles.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const col1 = pageArticles.filter((_, i) => i % 2 === 0);
  const col2 = pageArticles.filter((_, i) => i % 2 !== 0);

  return (
    <>
      <PageHero title={cat.label} image={heroBuilding} />
      <section className="bg-background py-16">
        <div className="container-lc max-w-[960px]">
          {allArticles.length === 0 ? (
            <p className="py-20 text-center text-sm text-muted-foreground">
              No articles available in this category yet.
            </p>
          ) : (
            <>
              <div className="grid gap-x-16 gap-y-0 md:grid-cols-2">
                {[col1, col2].map((col, ci) => (
                  <div key={ci}>
                    {col.map((article) => (
                      <div
                        key={article.slug}
                        className="border-b border-[#e8e8e8] py-6"
                      >
                        <h3 className="mb-2 font-['Merriweather'] text-[15px] font-normal leading-[24px] text-[#555]">
                          {article.title}
                        </h3>
                        <Link
                          to="/client-articles/$category/$slug"
                          params={{ category, slug: article.slug }}
                          className="inline-flex items-center gap-1 font-['Merriweather'] text-[13px] text-[#8cc63f] transition-colors hover:text-[#629A2A]"
                        >
                          Read more <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center gap-1">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex h-8 w-8 items-center justify-center border border-[#e8e8e8] text-[#888] disabled:opacity-40 hover:border-[#8cc63f] hover:text-[#8cc63f]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`flex h-8 w-8 items-center justify-center border font-['Merriweather'] text-[13px] transition-colors ${
                        n === page
                          ? "border-[#8cc63f] bg-[#8cc63f] text-white"
                          : "border-[#e8e8e8] text-[#888] hover:border-[#8cc63f] hover:text-[#8cc63f]"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex h-8 w-8 items-center justify-center border border-[#e8e8e8] text-[#888] disabled:opacity-40 hover:border-[#8cc63f] hover:text-[#8cc63f]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

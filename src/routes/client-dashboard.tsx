import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { isAuthenticated, getSession } from "@/lib/auth";
import { practiceAreaCategories, industryCategories } from "@/data/client-articles";

export const Route = createFileRoute("/client-dashboard")({
  head: () => headFor("/client-dashboard"),
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({ to: "/login" });
    }
  },
  component: ClientDashboard,
});

function DashboardGrid({
  items,
}: {
  items: { slug: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.slug}
          to="/client-articles/$category"
          params={{ category: item.slug }}
          className="group relative overflow-hidden border border-[#e8e8e8] bg-[#F2F6F9] transition-colors hover:bg-white hover:border-[#8cc63f]"
        >
          <p className="py-[18px] px-4 text-center font-['Merriweather'] text-[15px] font-normal leading-[22px] text-[#999] group-hover:text-[#629A2A]">
            {item.label}
          </p>
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#8cc63f]" />
        </Link>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[30px] text-center font-['Merriweather'] text-[28px] font-normal leading-[32px] text-[#444]">
      {children}
    </h2>
  );
}

function ClientDashboard() {
  const session = getSession();
  if (!session) return null;

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="container-lc max-w-[880px] pt-40 pb-12">
        <section className="mb-14">
          <SectionTitle>Practice Area</SectionTitle>
          <DashboardGrid items={practiceAreaCategories} />
        </section>

        <section>
          <SectionTitle>Industries/Sectors</SectionTitle>
          <DashboardGrid items={industryCategories} />
        </section>
      </div>
    </div>
  );
}

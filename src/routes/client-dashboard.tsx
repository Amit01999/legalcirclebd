import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { isAuthenticated, logout, getSession } from "@/lib/auth";

export const Route = createFileRoute("/client-dashboard")({
  head: () => ({
    meta: [
      { title: "Client Dashboard — The Legal Circle" },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({ to: "/login" });
    }
  },
  component: ClientDashboard,
});

const practiceAreas = [
  "General Corporate",
  "Employment",
  "M&A/ Transactions",
  "Foreign Exchange",
  "Tax",
  "Securities",
  "Template Agreements",
  "Export and Import (EXIM)",
];

const industries = [
  "FinTech",
  "E-Commerce",
  "Logistics",
  "Consultancy",
  "Transport",
  "RMG",
  "Agriculture",
  "Aviation",
  "Hospitality",
  "F&B",
  "Healthcare",
  "Pharma",
  "Telecommunications",
  "Agency & Distribution",
  "Power, Energy & Infrastructure",
  "NGO",
];

function DashboardGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="relative overflow-hidden border border-[#e8e8e8] bg-[#f9f9f9]"
        >
          <p className="py-[18px] px-6 text-center font-['Merriweather'] text-[13px] font-normal leading-[22px] text-[#999]">
            {item}
          </p>
          <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#8cc63f]" />
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[30px] text-center font-['Merriweather'] text-[22px] font-normal leading-[32px] text-[#444]">
      {children}
    </h2>
  );
}

function ClientDashboard() {
  const navigate = useNavigate();
  const session = getSession();

  const handleLogout = () => {
    logout();
    navigate({ to: "/login" });
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Client bar */}
      <div className="border-b border-[#e0e0e0] bg-white pt-[140px]">
        <div className="container-lc flex max-w-[880px] items-center justify-between py-3">
          <span className="font-['Merriweather'] text-[13px] text-[#999]">
            Welcome, {session.displayName}
          </span>
          <button
            onClick={handleLogout}
            className="rounded-[2px] border border-[#ccc] bg-white px-4 py-1.5 font-['Merriweather'] text-[12px] text-[#777] transition-colors hover:border-[#8cc63f] hover:text-[#8cc63f]"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container-lc max-w-[880px] py-12">
        {/* Practice Area */}
        <section className="mb-14">
          <SectionTitle>Practice Area</SectionTitle>
          <DashboardGrid items={practiceAreas} />
        </section>

        {/* Industries / Sectors */}
        <section>
          <SectionTitle>Industries/Sectors</SectionTitle>
          <DashboardGrid items={industries} />
        </section>
      </div>
    </div>
  );
}

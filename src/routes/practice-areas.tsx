import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { Building2, Home, Shield, Briefcase, Users, Scale, Bike, Film, UserCheck, Plug, Car, DollarSign } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — The Legal Circle" },
      { name: "description", content: "Our practice areas include Banking, Corporate, Disputes, IP, Real Estate, Tax and more." },
      { property: "og:title", content: "Practice Areas — The Legal Circle" },
      { property: "og:description", content: "Comprehensive legal services across all major practice areas." },
    ],
  }),
  component: PracticeAreasPage,
});

const areas = [
  { icon: Home, title: "Banking", items: ["Advisory and Compliance", "Loan Structuring", "Dispute Resolution and Loan Recovery"] },
  { icon: Building2, title: "Business Formation", items: ["Business Structuring Advisory", "Business Registration Assistance", "Mandatory and Sectoral Licenses"] },
  { icon: Shield, title: "Competition and Consumer Protection", items: ["Advisory and Compliance", "Dispute Resolution"] },
  { icon: Briefcase, title: "Corporate and Finance", items: ["Debt and Equity Investments", "Projects and Infrastructure Financing", "Corporate Advisory and Transactions", "Registration and Regulation of Alternative Investment Funds", "Company Secretarial Services", "Compliance", "M&A and Corporate Restructuring", "Dispute Resolution"] },
  { icon: Users, title: "Dispute Resolution", items: ["Civil and Criminal Litigation", "Constitutional Litigation", "Employment", "Corporate", "Real Estate", "Intellectual Property", "Taxes and Customs", "Consumer Protection", "International and Domestic Arbitration", "Negotiations, Conciliation and Mediation"] },
  { icon: Briefcase, title: "Employment", items: ["Advisory and Compliance", "Employment Disputes", "Trade Unions and Collective Bargaining Agent", "Misconduct & Grievance Management and Investigations"] },
  { icon: Bike, title: "Intellectual Property", items: ["Advice and assist in drafting and applying for registration of IP rights, including trademarks, trade names, industrial designs, copyrights, domain names and patents", "Renewal of IP rights at the concerned government office", "Litigation services at court, tribunal and registrar", "Other contentious IP matters", "Advice on pre-stage litigation, including cease and desist letters", "Transactional and commercial matters related to IP"] },
  { icon: Film, title: "Media and Telecommunications", items: ["Advisory and Compliance", "Licensing and Registration"] },
  { icon: UserCheck, title: "NGO and Non-Profit", items: ["Structuring, Advisory, and Compliance", "Registration and Approvals", "Regulation of Donations"] },
  { icon: Plug, title: "Power and Energy", items: ["Advisory and Compliance", "Registration and Licensing", "Project Advisory and Implementation"] },
  { icon: Car, title: "Real Estate", items: ["Advisory and Compliance", "Development and Construction Projects", "Land Acquisition and Due Diligence", "Dispute Resolution"] },
  { icon: DollarSign, title: "Taxes and Customs", items: ["Advisory and Compliance", "Dispute Resolution and Settlement (Supreme Court of Bangladesh)"] },
];

function PracticeAreasPage() {
  return (
    <>
      <PageHero title="Practice Areas" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc">
          <div className="mb-14 flex items-center justify-center gap-6">
            <span className="h-px flex-1 max-w-[200px] bg-border" />
            <h2 className="font-serif text-2xl text-ink">Practice Areas</h2>
            <span className="h-px flex-1 max-w-[200px] bg-border" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, title, items }) => (
              <div key={title} className="group rounded-sm border bg-white p-8 shadow-sm transition hover:shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <span className="absolute inset-0 -m-3 rounded-full border" />
                    <Icon className="relative h-10 w-10 text-muted-foreground transition group-hover:text-brand" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-4 text-center font-serif text-xl text-ink">{title}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-brand">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

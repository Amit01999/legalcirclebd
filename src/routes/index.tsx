import { createFileRoute, Link } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroBooks from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo1.png";

export const Route = createFileRoute("/")({
  head: () => headFor("/"),
  component: Index,
});

const practiceAreas = [
  {
    title: "Banking",
    items: ["Advisory and Compliance", "Loan Structuring", "Dispute Resolution and Loan Recovery"],
  },
  {
    title: "Business Formation, Company & Securities",
    items: [],
  },
  {
    title: "Business Processing",
    items: [
      "Business Structuring Advisory",
      "Business Registration Assistance",
      "Mandatory and Sectoral Licenses",
    ],
  },
  {
    title: "Competition and Consumer Protection",
    items: ["Advisory and Compliance", "Dispute Resolution"],
  },
  {
    title: "Corporate and Finance",
    items: [
      "Debt and Equity Investments",
      "Projects and Infrastructure Financing",
      "Corporate Advisory and Transactions",
      "Registration and Regulation of Alternative Investment Funds",
      "Company Secretarial Services",
      "Compliance",
      "M&A and Corporate Restructuring",
      "Dispute Resolution",
    ],
  },
  {
    title: "Dispute Resolution",
    items: [
      "Civil and Criminal Litigation",
      "Constitutional Litigation",
      "Employment",
      "Corporate",
      "Real Estate",
      "Intellectual Property",
      "Taxes and Customs",
      "Consumer Protection",
      "International and Domestic Arbitration",
      "Negotiations, Conciliation and Mediation",
    ],
  },
  {
    title: "Distributorship & Agency",
    items: [],
  },
  {
    title: "Employment",
    items: [
      "Advisory and Compliance",
      "Employment Disputes",
      "Trade Unions and Collective Bargaining Agent",
      "Misconduct & Grievance Management and Investigations",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "Advice and assist in drafting and applying for registration of IP rights, including trademarks, trade names, industrial designs, copyrights, domain names and patents",
      "Renewal of IP rights at the concerned government office",
      "Litigation services at court, tribunal and registrar",
      "Other contentious IP matters",
      "Advice on pre-stage litigation, including cease and desist letters",
      "Transactional and commercial matters related to IP",
    ],
  },
  {
    title: "Media and Telecommunications",
    items: ["Advisory and Compliance", "Licensing and Registration"],
  },
  {
    title: "M&A and Transactions",
    items: ["M&A and Corporate Restructuring", "Corporate Advisory and Transactions"],
  },
  {
    title: "NGO and Non-Profit",
    items: [
      "Structuring, Advisory, and Compliance",
      "Registration and Approvals",
      "Regulation of Donations",
    ],
  },
  {
    title: "Power and Energy",
    items: [
      "Advisory and Compliance",
      "Registration and Licensing",
      "Project Advisory and Implementation",
    ],
  },
  {
    title: "Real Estate",
    items: [
      "Advisory and Compliance",
      "Development and Construction Projects",
      "Land Acquisition and Due Diligence",
      "Dispute Resolution",
    ],
  },
  {
    title: "Taxes and Customs",
    items: [
      "Advisory and Compliance",
      "Dispute Resolution and Settlement (Supreme Court of Bangladesh)",
    ],
  },
];

const slides = [
  {
    title: "The Legal Circle",
    subtitle: "The Legal Circle is a full-service law firm.",
    body: "We engage in cross-border instructions, advise local conglomerates, technology and technology-enabled companies, iNGOs and organisations focusing on SDGs.\n\nThe Legal Circle has a two-fold vision : Provide quality legal services and give-back to the community.",
  },
  {
    title: "Our Vision",
    subtitle: "Quality legal services with a community focus.",
    body: "We combine deep local knowledge with international standards, partnering with clients to navigate complex regulatory and commercial landscapes across Bangladesh and beyond.",
  },
];

const clientLogoModules = import.meta.glob("/src/assets/OurClients/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const preferredClientLogoOrder = [
  "American_Efird-150x150.png",
  "bumrungrrad-150x150.png",
  "carters-150x150.jpeg",
  "cbl-150x150.png",
  "clarkekohler-150x150.jpg",
  "uber-150x150.png",
  "waterorg-150x150.jpg",
  "bidyanondo-logo-300x154.png",
  "WildTeam-logo-150x150.png",
  "ollo-150x150.png",
];

const clients = Object.entries(clientLogoModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? path;
    return {
      fileName,
      src,
      alt: fileName
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]+/g, " ")
        .replace(/\b\d+x\d+\b/g, "")
        .replace(/\s+/g, " ")
        .trim(),
    };
  })
  .sort((a, b) => {
    const aIndex = preferredClientLogoOrder.indexOf(a.fileName);
    const bIndex = preferredClientLogoOrder.indexOf(b.fileName);

    if (aIndex !== -1 || bIndex !== -1) {
      return (
        (aIndex === -1 ? preferredClientLogoOrder.length : aIndex) -
        (bIndex === -1 ? preferredClientLogoOrder.length : bIndex)
      );
    }

    return a.fileName.localeCompare(b.fileName);
  });

const clientSlides = Array.from({ length: Math.ceil(clients.length / 10) }, (_, index) =>
  clients.slice(index * 10, index * 10 + 10),
);

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section className="relative flex  min-h-screen items-center justify-center overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.42)] max-md:h-[660px]">
      <img
        src={heroBooks}
        alt="Antique law books"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/48" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.16)_48%,rgba(0,0,0,0.52)_100%)]" />

      <button
        onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-5 top-1/2 z-20 -translate-y-1/2 text-brand transition hover:scale-110 max-sm:left-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-12 w-12" strokeWidth={1.4} />
      </button>
      <button
        onClick={() => setI((p) => (p + 1) % slides.length)}
        className="absolute right-5 top-1/2 z-20 -translate-y-1/2 text-brand transition hover:scale-110 max-sm:right-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-12 w-12" strokeWidth={1.4} />
      </button>

      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-[102px] max-w-[670px] px-6 text-center font-serif text-white/80 max-md:mt-20"
      >
        <h1 className="text-[60px] font-normal leading-none md:text-[52px]">{s.title}</h1>
        <p className="mt-[24px] text-[15px] leading-6 text-white/80">{s.subtitle}</p>
        <p className="mx-auto mt-[25px] max-w-[590px] whitespace-pre-line text-[15px] leading-[1.52] text-white/70">
          {s.body}
        </p>
        <Link
          to="/about"
          className="mt-[25px] inline-flex h-[45px] min-w-[151px] items-center justify-center rounded-[2px] bg-brand px-8 text-[11px] font-semibold uppercase tracking-[0.34em] text-black shadow-sm transition hover:bg-brand/90"
        >
          DISCOVER US
        </Link>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-background pb-[54px] pt-10 font-serif">
      <div className="container-lc max-w-[910px]">
        <div className="mb-[32px] text-center">
          <h2 className="text-[26px] font-normal leading-tight text-[#6f7180] md:text-[28px]">
            About Us
          </h2>
        </div>
        <div className="grid items-start gap-1 md:grid-cols-[1fr_450px]">
          <div className="flex min-h-[210px] items-center justify-center text-brand">
            <div className="text-center">
              <img src={logo} alt="The Legal Circle" className="mx-auto h-[82px] w-[82px]" />
              <div className="mt-[7px] text-[15px] tracking-wide text-[#222]">THE LEGAL CIRCLE</div>
            </div>
          </div>
          <div>
            <p className="text-justify font-serif text-[16px] leading-[1.8] tracking-[0.02em] text-[#5d6070]">
              The Legal Circle is a firm of barristers, advocates, and legal consultants
              specializing in representing clients in Bangladesh on both domestic and international
              matters. Bringing together a team of experienced lawyers, several of whom have
              previously worked at leading law firms in Bangladesh and internationally, we aim to
              provide approachable yet client-focused, solutions-oriented legal services tailored to
              the individual needs of our clients. Our firm is committed to providing the highest
              level of legal services and achieving cost-effective legal results for our clients by
              being flexible and highly responsive in our approach.
            </p>
            <Link
              to="/about"
              className="mt-[27px] inline-flex h-[35px] min-w-[116px] items-center justify-center rounded-[1px] bg-brand px-6 text-[13px] font-semibold text-white transition hover:bg-brand/90"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeAreas() {
  const [activePractice, setActivePractice] = useState("");

  return (
    <section className="bg-background pb-[88px] pt-[30px] font-serif">
      <div className="container-lc max-w-[1460px]">
        <h2 className="mb-[28px] text-center text-[26px] font-normal leading-tight text-[#6f7180] md:text-[28px]">
          Practice Areas
        </h2>
        <div className="grid gap-x-[24px] gap-y-[13px] md:grid-cols-3">
          {practiceAreas.map((p) => (
            <button
              key={p.title}
              type="button"
              aria-expanded={activePractice === p.title}
              onClick={() => setActivePractice((current) => (current === p.title ? "" : p.title))}
              className={`group flex h-full min-w-0 flex-col items-stretch justify-start overflow-hidden border border-[#e4e8ed] bg-white text-left align-top transition-[min-height,box-shadow] duration-300 ease-out ${
                activePractice === p.title ? "min-h-[178px]" : "min-h-[66px]"
              }`}
            >
              <div
                className={`flex h-[64px] shrink-0 items-center justify-center border-b-2 border-brand px-4 text-center text-[14px] leading-tight transition-colors duration-300 ${
                  activePractice === p.title
                    ? "bg-[#d8d8d8] text-[#3f8f35]"
                    : "bg-[#f2f5f8] text-[#6f7180] group-hover:bg-[#edf2f6]"
                }`}
              >
                {p.title}
              </div>
              <div
                className={`flex-1 bg-white transition-opacity duration-300 ease-out ${
                  activePractice === p.title ? "opacity-100" : "opacity-0"
                }`}
              >
                {activePractice === p.title && p.items.length > 0 && (
                  <ul className="space-y-[6px] px-[58px] pb-[18px] pt-[18px] text-[13px] leading-[1.25] text-[#6f7180]">
                    {p.items.map((item) => (
                      <li key={item} className="list-disc pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (clientSlides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % clientSlides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-background pb-[44px] pt-[16px] font-serif">
      <div className="container-lc max-w-[1420px]">
        <h2 className="mb-[42px] text-center text-[26px] font-normal leading-tight text-[#6f7180] md:text-[28px]">
          Our Clients
        </h2>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {clientSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid min-w-full grid-cols-2 items-center gap-x-[70px] gap-y-[44px] px-4 sm:grid-cols-3 md:grid-cols-5"
              >
                {slide.map((client) => (
                  <div
                    key={client.fileName}
                    className="flex h-[112px] items-center justify-center px-4 transition hover:scale-[1.03]"
                  >
                    <img
                      src={client.src}
                      alt={client.alt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <Clients />
    </>
  );
}

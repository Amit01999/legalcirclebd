import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChevronDown, Mail, Minus, PhoneCall, Plus } from "lucide-react";
import {
  getPersonBySlug,
  type ProfileSection,
  type TextRun,
  type BioParagraph,
} from "@/data/people";
import heroBuilding from "@/assets/hero-building.jpg";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export const Route = createFileRoute("/our-people/$slug")({
  loader: ({ params }) => {
    const person = getPersonBySlug(params.slug);

    if (!person) {
      throw notFound();
    }

    return { person };
  },
  head: ({ loaderData }) => {
    const person = loaderData?.person;

    return {
      meta: [
        { title: `${person?.name ?? "Person"} - The Legal Circle` },
        {
          name: "description",
          content: `${person?.name ?? ""}${person?.role ? `, ${person.role}` : ""}`,
        },
        { property: "og:title", content: `${person?.name ?? "Person"} - The Legal Circle` },
        { property: "og:description", content: person?.role ?? "" },
      ],
    };
  },
  component: PersonDetailPage,
});

const COLOR_MAP: Record<string, string> = {
  brand: "text-brand",
  red: "text-red-600",
  blue: "text-blue-600",
};

function renderRun(run: TextRun, idx: number) {
  if (typeof run === "string") return <span key={idx}>{run}</span>;

  const { text, highlight, color, href, bold } = run;

  const colorClass = color ? (COLOR_MAP[color] ?? color) : "";
  const classes = [
    highlight ? "bg-yellow-100 px-0.5 rounded-sm" : "",
    colorClass,
    bold ? "font-bold" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = classes ? <span className={classes}>{text}</span> : <>{text}</>;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        key={idx}
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={` transition hover:opacity-70 ${colorClass || "text-brand"}`}
      >
        {highlight || bold ? inner : text}
      </a>
    );
  }

  return (
    <span key={idx} className={classes}>
      {text}
    </span>
  );
}

function renderBioParagraph(paragraph: BioParagraph) {
  if (typeof paragraph === "string") return paragraph;
  return paragraph.map((run, i) => renderRun(run, i));
}

function PersonDetailPage() {
  const { person } = Route.useLoaderData();
  const [openSection, setOpenSection] = useState("Publications");

  return (
    <>
      <PersonHero title={person.name} />
      <section className="bg-background py-16">
        <div className="container-lc max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="text-center lg:top-28 lg:text-left">
              <img
                src={person.image}
                alt={person.name}
                className="mb-7 md:h-[345px] w-full object-cover shadow-sm"
              />
              <h2 className="mb-4 font-serif text-xl text-ink">{person.name}</h2>
              <div className="space-y-1 text-[13px] leading-6 text-muted-foreground">
                {person.qualifications?.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="mt-6 space-y-1 text-[13px] leading-6 text-brand">
                {person.positions?.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="mt-6 space-y-1 text-[13px] text-muted-foreground">
                {person.phone && <p>M: {person.phone}</p>}
                {person.email && <p>E: {person.email}</p>}
              </div>
              <div className="mt-5 flex justify-center gap-3 lg:justify-start">
                {person.phone && (
                  <a
                    href={`https://wa.me/${person.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${person.name}`}
                    className="flex h-9 w-9 items-center justify-center border border-border text-brand transition hover:bg-muted"
                  >
                    <WhatsAppIcon />
                  </a>
                )}
                {person.telephone && (
                  <a
                    href={`tel:${person.telephone}`}
                    aria-label={`Telephone ${person.name}`}
                    className="flex h-9 w-9 items-center justify-center border border-border text-brand transition hover:bg-muted"
                  >
                    <PhoneCall className="h-4 w-4" />
                  </a>
                )}
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    aria-label={`Email ${person.name}`}
                    className="flex h-9 w-9 items-center justify-center border border-border text-brand transition hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center border border-border text-brand transition hover:bg-muted"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            </aside>

            <div>
              <div className="space-y-5 text-[13px] leading-6 text-muted-foreground text-justify">
                {person.bio?.map((paragraph, i) => (
                  <p key={i}>{renderBioParagraph(paragraph)}</p>
                ))}
              </div>

              {!!person.sections?.length && (
                <div className="mt-10">
                  {person.sections.map((section) =>
                    section.nonCollapsible ? (
                      <StaticSection key={section.title} section={section} />
                    ) : (
                      <ProfileAccordion
                        key={section.title}
                        section={section}
                        isOpen={openSection === section.title}
                        onToggle={() =>
                          setOpenSection((current) =>
                            current === section.title ? "" : section.title,
                          )
                        }
                      />
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PersonHero({ title }: { title: string }) {
  return (
    <section className="relative flex h-[320px] min-h-[350px] items-center justify-center overflow-hidden">
      <img src={heroBuilding} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 px-4 pt-32 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        <ChevronDown className="mx-auto mt-8 h-6 w-6 animate-bounce text-white/75" />
      </div>
    </section>
  );
}

function StaticSection({ section }: { section: ProfileSection }) {
  return (
    <div className="">
      <div className="bg-secondary/50  py-3 font-serif text-lg text-[#34A294] border-b-2 border-brand">
        {section.title}
      </div>
      <div className="bg-secondary/40  py-4">
        <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProfileAccordion({
  section,
  isOpen,
  onToggle,
}: {
  section: ProfileSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b-2 border-brand">
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center justify-between bg-secondary/50  py-3 text-left font-serif text-lg transition hover:bg-secondary ${
          isOpen ? "text-brand" : "text-[#34A294]"
        }`}
      >
        <span>{section.title}</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand/70 text-brand">
          {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      {isOpen && (
        <div className="bg-secondary/40 px-7 py-6">
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

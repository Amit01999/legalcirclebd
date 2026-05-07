import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChevronDown, Mail, Minus, Phone, Plus } from "lucide-react";
import { getPersonBySlug, type ProfileSection } from "@/data/people";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/our-people/$slug")({
  loader: ({ params }) => {
    const person = getPersonBySlug(params.slug);

    if (!person) {
      throw notFound();
    }

    return { person };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.person.name} - The Legal Circle` },
      {
        name: "description",
        content: `${loaderData.person.name}, ${loaderData.person.role}`,
      },
      { property: "og:title", content: `${loaderData.person.name} - The Legal Circle` },
      { property: "og:description", content: loaderData.person.role },
    ],
  }),
  component: PersonDetailPage,
});

function PersonDetailPage() {
  const { person } = Route.useLoaderData();
  const [openSection, setOpenSection] = useState("Publications");

  return (
    <>
      <PersonHero title={person.name} />
      <section className="bg-background py-16">
        <div className="container-lc max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <img
                src={person.image}
                alt={person.name}
                className="mb-7 h-[345px] w-full object-cover shadow-sm"
              />
              <h2 className="mb-4 font-serif text-xl text-ink">{person.name}</h2>
              <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                {person.qualifications?.map((item) => <p key={item}>{item}</p>)}
              </div>
              <div className="mt-6 space-y-4 text-sm leading-6 text-brand">
                {person.positions?.map((item) => <p key={item}>{item}</p>)}
              </div>
              <div className="mt-6 space-y-1 text-sm text-muted-foreground">
                {person.phone && <p>M: {person.phone}</p>}
                {person.email && <p>E: {person.email}</p>}
              </div>
              <div className="mt-5 flex gap-3">
                {person.phone && (
                  <a
                    href={`tel:${person.phone}`}
                    aria-label={`Call ${person.name}`}
                    className="flex h-9 w-9 items-center justify-center border border-border text-brand transition hover:bg-muted"
                  >
                    <Phone className="h-4 w-4" />
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
              </div>
            </aside>

            <div>
              <div className="space-y-6 text-[15px] leading-8 text-muted-foreground">
                {person.bio?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              {!!person.sections?.length && (
                <div className="mt-10">
                  {person.sections.map((section) => (
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
                  ))}
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
    <section className="relative flex h-[320px] min-h-[260px] items-center justify-center overflow-hidden">
      <img src={heroBuilding} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 px-4 pt-20 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        <ChevronDown className="mx-auto mt-8 h-6 w-6 animate-bounce text-white/75" />
      </div>
    </section>
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
    <div className="border-b border-brand/70">
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center justify-between bg-secondary/50 px-4 py-3 text-left font-serif text-lg transition hover:bg-secondary ${
          isOpen ? "text-brand" : "text-ink"
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

import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/Section";
import recognitionImage from "@/assets/Legal-Circle-New-Slide-2.png";
import heroBuilding from "@/assets/hero-building.jpg";
import achievements from "@/assets/achievements-2.png";

const recognitionSlides = [
  {
    src: recognitionImage,
    alt: "Lex Mundi member firm recognition for Bangladesh",
  },
  {
    src: achievements,
    alt: "Chambers Asia Pacific top ranked leading firm recognition",
  },
];

export const Route = createFileRoute("/recognitions")({
  head: () => headFor("/recognitions"),
  component: RecognitionsPage,
});

function RecognitionsPage() {
  return (
    <>
      <PageHero title="Recognitions" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc max-w-5xl">
          <SectionHeading>Recognitions</SectionHeading>
          <RecognitionCarousel />
        </div>
      </section>
    </>
  );
}

function RecognitionCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const showPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) => (currentSlide - 1 + recognitionSlides.length) % recognitionSlides.length,
    );
  };
  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % recognitionSlides.length);
  };

  useEffect(() => {
    const interval = window.setInterval(showNextSlide, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[840px] items-center justify-center gap-4">
      <button
        type="button"
        aria-label="Show previous recognition"
        onClick={showPreviousSlide}
        className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-[#E6E6E6] text-ink shadow-sm transition hover:bg-muted"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div className="relative h-[320px] w-full max-w-[820px] overflow-hidden border border-border bg-[#E6E6E6] shadow-sm md:h-[420px]">
        {recognitionSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-contain p-4 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Show next recognition"
        onClick={showNextSlide}
        className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-[#E6E6E6] text-ink shadow-sm transition hover:bg-muted"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

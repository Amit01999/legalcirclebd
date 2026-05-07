import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function PageHero({
  title,
  image,
  images,
}: {
  title: string;
  image: string;
  images?: string[];
}) {
  const heroImages = images?.length ? images : [image];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden">
      {heroImages.map((heroImage, index) => (
        <img
          key={heroImage}
          src={heroImage}
          alt=""
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            index === activeImage ? "opacity-100" : "opacity-0"
          } ${heroImage.endsWith(".png") ? "bg-white object-contain" : "object-cover"}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/55" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-4 text-center text-white"
      >
        <h1 className=" mt-32 font-serif text-5xl md:text-6xl lg:text-7xl">{title}</h1>
        <ChevronDown className="mx-auto mt-8 h-6 w-6 animate-bounce text-white/70" />
      </motion.div>
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 flex items-center justify-center gap-6">
      <span className="hidden h-px w-24 bg-border md:block" />
      <h2 className="font-serif text-3xl text-ink md:text-4xl">{children}</h2>
      <span className="hidden h-px w-24 bg-border md:block" />
    </div>
  );
}

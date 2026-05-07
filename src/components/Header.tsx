import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Facebook, Linkedin, Twitter, Youtube, Search, Menu, X, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import logoImage from "@/assets/logo.png";

const peopleDropdown = [
  { label: "Partners", hash: "partners" },
  { label: "Of Counsel", hash: "of-counsel" },
  { label: "Senior Associates", hash: "senior-associates" },
  { label: "Associates", hash: "associates" },
  { label: "Paralegal", hash: "paralegal" },
] as const;

const aboutDropdown = [
  { to: "/recognitions", label: "Recognitions" },
  { to: "/media-coverage", label: "Media Coverage" },
] as const;

const nav = [
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/our-people", label: "Our People", dropdown: "people" },
  { to: "/insights", label: "Insights" },
  { to: "/lex-mundi", label: "Lex Mundi" },
  { to: "/career", label: "Career" },
  { to: "/about", label: "About Us", dropdown: "about" },
  { to: "/login", label: "Login" },
] as const;

export function Header() {
  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"people" | "about" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeDropdown = () => setActiveDropdown(null);
  const dropdownPanelClass =
    "absolute left-0 z-50 rounded-[3px] bg-white py-[15px] opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] transition-[opacity,transform,visibility] duration-200 ease-out";
  const visibleDropdownClass = "visible translate-y-0 opacity-100";
  const hiddenDropdownClass = "invisible translate-y-1 opacity-0";
  const dropdownItemClass =
    "block whitespace-nowrap px-[30px] py-[7px] font-['Merriweather'] text-[15px] font-normal leading-[20px] text-[#8cc63f] transition-colors duration-150 hover:text-[#629A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/35";

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 font-serif">
      {/* Top bar */}
      <div
        className={`overflow-hidden border-b text-[#94CB43] transition-[max-height,opacity,transform,border-color,background-color] duration-500 ease-out ${
          scrolled
            ? "max-h-0 -translate-y-3 border-transparent bg-white/0 opacity-0"
            : "max-h-[41px] translate-y-0 border-white/10 bg-black/18 opacity-100"
        }`}
      >
        <div className="container-lc flex h-[41px] max-w-[880px] items-center justify-between font-['Merriweather',serif] text-[14px] font-sans leading-[21.13px] text-[#94CB43]">
          <div className="flex items-center gap-[28px]">
            <a href="tel:+88025881431" className="flex items-center gap-[7px] hover:text-brand">
              <Phone className="h-[11px] w-[11px] text-brand" /> +880258814311
            </a>
            <a
              href="mailto:enquiry@legalcirclebd.com"
              className="hidden items-center gap-[8px] hover:text-brand sm:flex"
            >
              <Mail className="h-[11px] w-[11px] text-brand" /> enquiry@legalcirclebd.com
            </a>
          </div>
          <div className="flex items-center gap-[15px] text-[#94CB43]">
            <Search className="h-[15px] w-[15px] cursor-pointer stroke-[2] hover:text-brand" />
            <a href="#" className="hover:text-brand">
              <Facebook className="h-[15px] w-[15px] stroke-[1.4]" fill="currentColor" />
            </a>
            <a href="#" className="hover:text-brand">
              <Linkedin className="h-[15px] w-[15px] stroke-[2]" fill="currentColor" />
            </a>
            <a href="#" className="hover:text-brand">
              <Twitter className="h-[15px] w-[15px] stroke-[1.4]" fill="currentColor" />
            </a>
            <a href="#" className="hover:text-brand">
              <Youtube className="h-[15px] w-[15px] stroke-[1.4]" fill="currentColor" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out ${
          scrolled
            ? "border-black/10 bg-white/95 shadow-sm backdrop-blur"
            : "border-none bg-transparent"
        }`}
      >
        <div
          className={`container-lc flex max-w-[880px] items-start justify-between transition-[height,padding-top] duration-500 ease-out ${
            scrolled ? "h-[82px] pt-[18px]" : "h-[99px] pt-[22px]"
          }`}
        >
          <Link to="/" className={scrolled ? "text-ink" : "text-brand"}>
            <img src={logoImage} alt="The Legal Circle" className="h-[46px] w-[46px]" />
          </Link>
          <nav
            className={`hidden items-start gap-0 transition-[height] duration-500 ease-out lg:flex ${
              scrolled ? "h-[82px]" : "h-[100px]"
            }`}
          >
            {nav.map((n) => {
              const linkClass = `inline-flex items-start px-[15px] py-[10px] text-[15px] font-normal leading-[18px] tracking-normal font-['Merriweather'] transition-[height,color] duration-500 ease-out ${
                scrolled
                  ? "h-[82px] text-[#404438] hover:text-[#94CB43]"
                  : "h-[100px] text-[#94CB43] hover:text-[#629A2A]"
              }`;

              if ("dropdown" in n && n.dropdown === "people") {
                return (
                  <div
                    key={n.to}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("people")}
                    onMouseLeave={closeDropdown}
                    onFocus={() => setActiveDropdown("people")}
                  >
                    <Link
                      to={n.to}
                      className={linkClass}
                      activeProps={{ className: "text-[#94CB43]" }}
                      onClick={closeDropdown}
                      aria-expanded={activeDropdown === "people"}
                    >
                      {n.label}
                    </Link>
                    <div
                      className={`${dropdownPanelClass} ${scrolled ? "top-[46px]" : "top-[52px]"} w-[218px] ${
                        activeDropdown === "people" ? visibleDropdownClass : hiddenDropdownClass
                      }`}
                    >
                      {peopleDropdown.map((item) => (
                        <Link
                          key={item.hash}
                          to="/our-people"
                          hash={item.hash}
                          onClick={closeDropdown}
                          className={dropdownItemClass}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if ("dropdown" in n && n.dropdown === "about") {
                return (
                  <div
                    key={n.to}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("about")}
                    onMouseLeave={closeDropdown}
                    onFocus={() => setActiveDropdown("about")}
                  >
                    <Link
                      to={n.to}
                      className={linkClass}
                      activeProps={{ className: "text-[#94CB43]" }}
                      onClick={closeDropdown}
                      aria-expanded={activeDropdown === "about"}
                    >
                      {n.label}
                    </Link>
                    <div
                      className={`${dropdownPanelClass} ${scrolled ? "top-[46px]" : "top-[52px]"} w-[224px] ${
                        activeDropdown === "about" ? visibleDropdownClass : hiddenDropdownClass
                      }`}
                    >
                      {aboutDropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={closeDropdown}
                          className={dropdownItemClass}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={linkClass}
                  activeProps={{ className: "text-[#94CB43]" }}
                  onClick={closeDropdown}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className={`pt-3 lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-20 items-center justify-between px-5">
            <Logo />
            <button onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5">
            {nav.map((n) => (
              <div key={n.to} className="border-b">
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-ink hover:text-brand"
                >
                  {n.label}
                </Link>
                {"dropdown" in n && n.dropdown === "people" && (
                  <div className="grid gap-1 pb-3 pl-4">
                    {peopleDropdown.map((item) => (
                      <Link
                        key={item.hash}
                        to="/our-people"
                        hash={item.hash}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-sm text-[#629A2A] hover:text-brand"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                {"dropdown" in n && n.dropdown === "about" && (
                  <div className="grid gap-1 pb-3 pl-4">
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-sm text-[#629A2A] hover:text-brand"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

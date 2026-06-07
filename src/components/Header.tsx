import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Facebook, Linkedin, Twitter, Search, Menu, X, Phone, Mail } from "lucide-react";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        fill="currentColor"
      />
    </svg>
  );
}
import { Logo } from "./Logo";
import logoImage from "@/assets/logo.png";
import { getSession, logout, getTlcSession, tlcLogout } from "@/lib/auth";

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

const loginDropdown = [
  { to: "/login", label: "Retainer" },
  { to: "/tlc-login", label: "TLC Engaged" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/thelegalcircle",
    Icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-legal-circle/",
    Icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/thelegalcircle",
    Icon: Twitter,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCciV0N6qBqXLjFe-HjpgVxw",
    Icon: YouTubeIcon,
  },
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
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"people" | "about" | "login" | null>(null);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);

  const session = getSession();
  const tlcSession = getTlcSession();

  const handleRetainerSignOut = () => {
    logout();
    setOpen(false);
    navigate({ to: "/login" });
  };

  const handleTlcSignOut = () => {
    tlcLogout();
    setOpen(false);
    navigate({ to: "/tlc-login" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setHoveredNavItem(null);
    setOpen(false);
    setMobileLoginOpen(false);
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
        className={`overflow-hidden border-b text-[#94CB43] transition-[max-height,opacity,border-color,background-color] ease-out ${
          scrolled
            ? "max-h-0 border-transparent bg-white/0 opacity-0 duration-0"
            : "max-h-[41px] border-white/10 bg-transparent opacity-100 duration-300"
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
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                <Icon
                  className={`h-[15px] w-[15px] ${
                    label === "YouTube" ? "" : label === "LinkedIn" ? "stroke-2" : "stroke-[1.4]"
                  }`}
                  fill="currentColor"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-[height,background-color,border-color,box-shadow,backdrop-filter] ease-out ${
          scrolled
            ? "animate-in slide-in-from-top duration-500 border-black/10 bg-white/95 shadow-sm backdrop-blur"
            : "duration-0 border-none bg-transparent"
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
              const dimmed = hoveredNavItem !== null && hoveredNavItem !== n.to;
              const navToneClass = dimmed
                ? "text-[#629A2A] opacity-45"
                : "text-[#94CB43] opacity-100";
              const linkClass = `inline-flex items-start px-[15px] py-[10px] text-[15px] font-normal leading-[18px] tracking-normal font-['Merriweather'] transition-[height,color,opacity] duration-500 ease-out ${
                scrolled ? "h-[82px]" : "h-[100px]"
              } ${navToneClass}`;

              if ("dropdown" in n && n.dropdown === "people") {
                return (
                  <div
                    key={n.to}
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown("people");
                      setHoveredNavItem(n.to);
                    }}
                    onMouseLeave={() => {
                      closeDropdown();
                      setHoveredNavItem(null);
                    }}
                    onFocus={() => {
                      setActiveDropdown("people");
                      setHoveredNavItem(n.to);
                    }}
                  >
                    <Link
                      to={n.to}
                      className={linkClass}
                      activeProps={{ className: navToneClass }}
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
                    onMouseEnter={() => {
                      setActiveDropdown("about");
                      setHoveredNavItem(n.to);
                    }}
                    onMouseLeave={() => {
                      closeDropdown();
                      setHoveredNavItem(null);
                    }}
                    onFocus={() => {
                      setActiveDropdown("about");
                      setHoveredNavItem(n.to);
                    }}
                  >
                    <Link
                      to={n.to}
                      className={linkClass}
                      activeProps={{ className: navToneClass }}
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

              /* ── Login nav item ── */
              if (n.to === "/login") {
                /* Retainer session active → Retainer sign-out */
                if (session) {
                  return (
                    <button
                      key="sign-out"
                      onClick={handleRetainerSignOut}
                      onMouseEnter={() => setHoveredNavItem(n.to)}
                      onMouseLeave={() => setHoveredNavItem(null)}
                      className={linkClass}
                    >
                      Sign Out
                    </button>
                  );
                }

                /* TLC session active → TLC sign-out */
                if (tlcSession) {
                  return (
                    <button
                      key="sign-out-tlc"
                      onClick={handleTlcSignOut}
                      onMouseEnter={() => setHoveredNavItem(n.to)}
                      onMouseLeave={() => setHoveredNavItem(null)}
                      className={linkClass}
                    >
                      Sign Out
                    </button>
                  );
                }

                /* No session → Login dropdown (Retainer / TLC Engaged) */
                return (
                  <div
                    key="login-dropdown"
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown("login");
                      setHoveredNavItem(n.to);
                    }}
                    onMouseLeave={() => {
                      closeDropdown();
                      setHoveredNavItem(null);
                    }}
                  >
                    <button
                      className={linkClass}
                      onClick={() => setActiveDropdown((d) => (d === "login" ? null : "login"))}
                      aria-expanded={activeDropdown === "login"}
                      aria-haspopup="true"
                    >
                      {n.label}
                    </button>
                    <div
                      className={`${dropdownPanelClass} ${scrolled ? "top-[46px]" : "top-[52px]"} w-[180px] ${
                        activeDropdown === "login" ? visibleDropdownClass : hiddenDropdownClass
                      }`}
                    >
                      {loginDropdown.map((item) => (
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
                  activeProps={{ className: navToneClass }}
                  onMouseEnter={() => setHoveredNavItem(n.to)}
                  onMouseLeave={() => setHoveredNavItem(null)}
                  onFocus={() => setHoveredNavItem(n.to)}
                  onBlur={() => setHoveredNavItem(null)}
                  onClick={closeDropdown}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className={`pt-3 lg:hidden ${scrolled ? "text-[#94CB43]" : "text-white"}`}
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
                {n.to === "/login" ? (
                  /* Login / Sign-out logic for mobile */
                  session ? (
                    <button
                      onClick={handleRetainerSignOut}
                      className="block w-full py-3 text-left text-base text-brand hover:text-brand/70"
                    >
                      Sign Out
                    </button>
                  ) : tlcSession ? (
                    <button
                      onClick={handleTlcSignOut}
                      className="block w-full py-3 text-left text-base text-brand hover:text-brand/70"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileLoginOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-3 text-left text-base text-ink hover:text-brand"
                      >
                        Login
                        <span className="text-[10px] text-[#aaa]">
                          {mobileLoginOpen ? "▲" : "▼"}
                        </span>
                      </button>
                      {mobileLoginOpen && (
                        <div className="grid gap-1 pb-3 pl-4">
                          {loginDropdown.map((item) => (
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
                    </>
                  )
                ) : (
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-ink hover:text-brand"
                  >
                    {n.label}
                  </Link>
                )}
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

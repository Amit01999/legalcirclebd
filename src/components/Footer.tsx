import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import LexMundi from "@/assets/LexMundi-New-Logo.png";

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
    Icon: Youtube,
  },
];

export function Footer() {
  return (
    <footer className="bg-footer font-serif text-footer-foreground">
      <div className="container-lc grid max-w-[900px] gap-10 py-[52px] md:grid-cols-4">
        <div>
          <h4 className="mb-[12px] text-[16px] font-normal text-[#a8a9b4]">Location</h4>
          <div className="mb-[21px] h-px w-[120px] bg-brand" />
          <div className="flex flex-col items-start gap-[18px] text-[14px] leading-[1.45] text-white/72">
            <MapPin
              className="ml-[50px] h-[26px] w-[26px] text-brand"
              fill="currentColor"
              strokeWidth={0}
            />
            <p>
              9th Floor, High Tower
              <br />9 Mohakhali C/A, Dhaka 1212
            </p>
          </div>
        </div>
        <div>
          <h4 className="mb-[12px] text-[16px] font-normal text-[#a8a9b4]">About Us</h4>
          <div className="mb-[14px] h-px w-[120px] bg-brand" />
          <ul className="space-y-[7px] text-[14px] text-white/72">
            <li>
              <Link to="/about" className="hover:text-brand">
                About
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-brand">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/our-people" className="hover:text-brand">
                Our People
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand">
                Recognitions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-[12px] text-[16px] font-normal text-[#a8a9b4]">Contact Us</h4>
          <div className="mb-[14px] h-px w-[120px] bg-brand" />
          <ul className="space-y-[6px] text-[14px] text-white/72">
            <li>Contact Us- Online Form</li>
            <li className="flex items-center gap-1">
              <Phone className="h-[13px] w-[13px] text-white/72" fill="currentColor" />
              +880258814311
            </li>
            <li className="flex items-center gap-1">
              <Mail className="h-[13px] w-[13px] text-white/72" fill="currentColor" />
              enquiry@legalcirclebd.com
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-[12px] text-[16px] font-normal text-[#a8a9b4]">Follow Us</h4>
          <div className="mb-[9px] h-px w-[120px] bg-brand" />
          <div className="mb-[25px] flex gap-[14px] text-white/72">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                <Icon className="h-[15px] w-[15px]" fill="currentColor" />
              </a>
            ))}
          </div>
          <img src={LexMundi} alt="Lex Mundi Member" className="h-auto w-[118px] object-contain" />
        </div>
      </div>
      <div className="container-lc flex max-w-[900px] flex-col items-center justify-between gap-2 border-t border-white/10 py-[25px] text-center text-[13px] text-white/62 sm:flex-row sm:text-left">
        <div>© 2023 The Legal Circle Bangladesh</div>
        <a
          href="https://it.bepro.com.bd/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[#629A2A] transition hover:text-brand"
        >
          <span className="text-white/62">Made by </span>
          <span>BePro IT</span>
        </a>
      </div>
    </footer>
  );
}

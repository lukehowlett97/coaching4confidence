import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { WA_GENERIC } from "@/lib/contacts";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Sessions", href: "#sessions" },
  { label: "Location", href: "#location" },
  { label: "About", href: "#about" },
  { label: "Enquiry", href: "#enquiry" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/95 backdrop-blur supports-[backdrop-filter]:bg-primary-dark/80 border-b border-white/10">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <a href="#top" className="inline-flex items-center gap-2" aria-label="Coaching for Confidence home">
          <div className="flex h-10 w-8 items-center justify-center rounded-b-full border-2 border-accent bg-primary">
            <span className="text-xs font-bold text-accent">C4C</span>
          </div>
          <span className="hidden sm:block font-bold text-white tracking-wide">COACHING FOR CONFIDENCE</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-white/90">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-2 font-semibold text-slate-900 hover:bg-yellow-300"
            aria-label="Message us on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-primary-dark/95">
          <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={WA_GENERIC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-4 py-3 font-semibold text-slate-900 hover:bg-yellow-300"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

import {
  Heart,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { FB_MESSENGER, WA_GENERIC } from "@/lib/contacts";
import { VENUE_NAME, VENUE_ADDRESS, MAPS_URL } from "@/lib/location";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand + tagline */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="flex h-12 w-10 items-center justify-center rounded-b-full border-2 border-accent bg-primary">
              <span className="text-sm font-bold text-accent">C4C</span>
            </div>
            <h3 className="text-lg font-bold">COACHING FOR CONFIDENCE</h3>
          </div>
          <p className="text-white/80 text-base sm:text-lg">
            Building confidence through football for 5–7 year olds
          </p>
        </div>

        {/* NAP + quick actions */}
        <div className="mt-6 grid gap-4 text-white/80 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5" aria-hidden="true" />
            <a
              href="mailto:info@coachingforconfidence.com"
              className="hover:underline"
            >
              info@coachingforconfidence.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" aria-hidden="true" />
            <a href="tel:+447123456789" className="hover:underline">
              +44 7123 456789
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5" aria-hidden="true" />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {VENUE_NAME}, {VENUE_ADDRESS}
            </a>
          </div>
        </div>

        {/* Primary footer CTAs */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
            aria-label="Message us on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <a
            href={FB_MESSENGER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
            aria-label="Message us on Facebook"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            <span>Facebook</span>
          </a>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Book Free Taster</span>
          </a>
        </div>

        {/* Divider + smallprint */}
        <div className="mt-8 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-white/60 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Coaching for Confidence. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 fill-accent text-accent" /> for young footballers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

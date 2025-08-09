import { ShieldCheck, BadgeCheck, LifeBuoy, FileCheck2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-screen-sm px-4 pt-6 pb-6 scroll-mt-24"
    >
      {/* Free session pill */}
      <div className="mb-3">
        <span className="inline-block rounded-full bg-yellow-300 px-3 py-1 text-sm font-semibold text-slate-900 shadow">
          First session FREE
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl font-extrabold leading-tight text-slate-900">
        Football Sessions for{" "}
        <span className="text-yellow-500">5–7 Year Olds</span>
      </h1>

      {/* Subhead */}
      <p className="mt-2 text-base text-slate-600">
        Fun, supportive coaching in Chelmsford that builds confidence, skills,
        and friendships.
      </p>

      {/* CTAs (kept commented out as per your baseline)
      <div className="mt-4 flex gap-3">
        <a
          href={WA_MSG_TASTER}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl bg-yellow-400 px-4 py-3 text-center font-semibold text-slate-900 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          WhatsApp: Book FREE Taster
        </a>
        <a
          href={FB_MSG}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Message on Facebook
        </a>
      </div>
      */}

      {/* Trust badges (restyled for contrast + clarity) */}
      <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
        <li className="flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white shadow">
          <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="font-medium">Enhanced DBS</span>
        </li>
        <li className="flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white shadow">
          <BadgeCheck className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="font-medium">FA Qualified</span>
        </li>
        <li className="flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white shadow">
          <LifeBuoy className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="font-medium">First Aid</span>
        </li>
        <li className="flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white shadow">
          <FileCheck2 className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="font-medium">Fully Insured</span>
        </li>
      </ul>
    </section>
  );
}

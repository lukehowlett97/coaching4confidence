import { VENUE_NAME, VENUE_ADDRESS, MAPS_URL, MAP_EMBED_URL } from "@/lib/location";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="mx-auto max-w-screen-sm px-4 py-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Where we play</h2>
      <p className="text-slate-700 mb-4">
        {VENUE_NAME} — {VENUE_ADDRESS}
      </p>

      <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-sm">
        <iframe
          title={`${VENUE_NAME} map`}
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full aspect-[16/10] md:aspect-[16/9]"
          aria-label={`${VENUE_NAME} on Google Maps`}
        />
      </div>

      <div className="mt-4 flex gap-3">
        <Button asChild variant="outline" className="rounded-full">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
            <MapPin className="w-5 h-5" aria-hidden="true" />
            Open in Google Maps
          </a>
        </Button>
      </div>

      <ul className="mt-4 text-sm text-slate-600 list-disc list-inside space-y-1">
        <li>Parking available on-site/nearby.</li>
        <li>Sessions run in light rain; extreme weather is rescheduled.</li>
        <li>Google may set cookies when you use the map.</li>
      </ul>
    </section>
  );
}

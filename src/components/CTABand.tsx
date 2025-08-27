import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/lib/contacts";
import { Instagram, MessageCircle } from "lucide-react";

const CTABand = () => {
  return (
    <aside className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-primary rounded-2xl p-6 sm:p-8 shadow-custom-xl text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          First session free. Message us today.
        </h2>
        <p className="mt-2 text-white/80">
          No risk, no commitment — come try your first session on us.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Scroll to enquiry form */}
          <Button
            asChild
            variant="cta"
            size="xl"
            className="rounded-full w-full sm:w-auto"
          >
            <a href="#enquiry" aria-label="Go to booking form">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Book Free Taster
              </span>
            </a>
          </Button>

          {/* Instagram Profile */}
          <Button
            asChild
            variant="outline"
            size="xl"
            className="rounded-full w-full sm:w-auto bg-white hover:bg-slate-50"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit on Instagram"
              className="inline-flex items-center gap-2 text-slate-900"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default CTABand;

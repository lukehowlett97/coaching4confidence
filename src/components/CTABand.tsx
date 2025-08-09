import { Button } from "@/components/ui/button";
import { FB_MESSENGER, WA_TASTER } from "@/config/contacts";
import { Facebook, MessageCircle } from "lucide-react";

const CTABand = () => {
  return (
    <aside className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-primary rounded-2xl p-6 sm:p-8 shadow-custom-xl text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">First session free. Message us today.</h2>
        <p className="mt-2 text-white/80">No risk, no commitment — come try your first session on us.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="cta" size="xl" className="rounded-full w-full sm:w-auto">
            <a href={WA_TASTER} target="_blank" rel="noopener noreferrer" aria-label="Book Free Taster on WhatsApp">
              <span className="inline-flex items-center gap-2"><MessageCircle className="w-5 h-5" /> Book Free Taster</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="xl" className="rounded-full w-full sm:w-auto">
            <a href={FB_MESSENGER} target="_blank" rel="noopener noreferrer" aria-label="Message on Facebook">
              <span className="inline-flex items-center gap-2"><Facebook className="w-5 h-5" /> Message on Facebook</span>
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default CTABand;

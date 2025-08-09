import { Button } from "@/components/ui/button";
import { FB_MESSENGER, WA_TASTER } from "@/config/contacts";
import { Facebook, MessageCircle } from "lucide-react";

const StickyCtaBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden z-50 p-3">
      <div className="bg-white/95 backdrop-blur-sm border border-primary/10 shadow-custom rounded-full p-2 flex items-center gap-2">
        <Button asChild variant="cta" size="lg" className="rounded-full flex-1">
          <a href={WA_TASTER} target="_blank" rel="noopener noreferrer" aria-label="Book Free Taster on WhatsApp">
            <span className="inline-flex items-center gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp Us</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a href={FB_MESSENGER} target="_blank" rel="noopener noreferrer" aria-label="Message on Facebook">
            <span className="inline-flex items-center gap-2"><Facebook className="w-5 h-5" /></span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCtaBar;

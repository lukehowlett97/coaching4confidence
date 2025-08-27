import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/lib/contacts";
import { Instagram, MessageCircle } from "lucide-react";

const StickyCtaBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden p-3">
      {/* Safe-area padding for iOS notches */}
      <div className="pb-[calc(env(safe-area-inset-bottom))]">
        <div className="bg-white/95 backdrop-blur-sm border border-primary/10 shadow-custom rounded-full p-2 flex items-center gap-2">
          <Button asChild variant="cta" size="lg" className="rounded-full flex-1">
            <a href="#enquiry" aria-label="Book Free Taster Form">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Book FREE Taster
              </span>
            </a>
          </Button>


          <Button asChild variant="outline" size="lg" className="rounded-full" aria-label="Visit on Instagram">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2">
                <Instagram className="w-5 h-5" />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;

import { Heart, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-12 bg-primary border-2 border-accent rounded-b-full flex items-center justify-center">
              <span className="text-accent font-bold text-sm">C4C</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">COACHING FOR CONFIDENCE</h3>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-white/80 text-lg font-medium">
            Building confidence through football for 5-7 year olds
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white/70">
            <span>📧 info@coachingforconfidence.com</span>
            <span>📱 07123 456789</span>
            <span>📍 Central Park 3G pitch, Chelmsford</span>
          </div>

          {/* Social / Quick links */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            <a href={FB_MESSENGER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"><Facebook className="w-4 h-4" /> Facebook</a>
            <a href="#safeguarding" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">Safeguarding Policy</a>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-6 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-white/60">
                &copy; 2025 Coaching for Confidence. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-1 text-white/60">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-accent fill-accent" />
                <span>for young footballers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
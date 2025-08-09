import { Button } from "@/components/ui/button";
import { MapPin, Clock, CircleDollarSign, Users, Star } from "lucide-react";
import { FB_MESSENGER, WA_TASTER } from "@/config/contacts";
const SessionsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sessionDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Where",
      content: "Central Park 3G pitch, Chelmsford",
      highlight: false
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "When",
      content: "Saturdays 10–11am",
      highlight: false
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ages",
      content: "5–7 years",
      highlight: false
    },
    {
      icon: <CircleDollarSign className="w-6 h-6" />,
      title: "Price",
      content: "£X per session",
      highlight: true
    }
  ];

  const benefits = [
    "Warm-up, fun drills, mini-games",
    "Small groups, individual attention",
    "Parents welcome to watch",
  ];

  return (
    <section id="sessions" className="py-20 hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 lg:mb-4">Session Information</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-4 lg:mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Join us every Saturday for an hour of football fun!
          </p>
        </div>

        {/* Main Session Card */}
        <div className="bg-white rounded-2xl shadow-custom-xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 animate-slide-up">
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-2">Every Saturday</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-primary">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Ages 5–7</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">First session free</span>
            </div>
          </div>

          {/* Session Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {sessionDetails.map((detail, index) => (
              <div 
                key={index}
                className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover-lift ${
                  detail.highlight 
                    ? "border-accent bg-accent/10" 
                    : "border-muted bg-muted/30"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${detail.highlight ? "text-accent" : "text-primary"} shrink-0`}>
                    {detail.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">{detail.title}</h4>
                    <p className={`font-bold text-sm sm:text-base ${
                      detail.highlight ? "text-accent sm:text-xl" : "text-muted-foreground"
                    }`}>
                      {detail.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-primary/5 rounded-xl p-4 sm:p-6 mb-6 lg:mb-8">
            <h4 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 flex items-center">
              <Star className="w-5 h-5 text-accent mr-2" />
              What's Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-2"></div>
                  <span className="text-muted-foreground text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Join us for an hour of fun-filled football activities designed specifically for 5-7 year olds!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="cta" size="xl" className="rounded-full w-full sm:w-auto">
                <a href={WA_TASTER} target="_blank" rel="noopener noreferrer" aria-label="Book Free Taster on WhatsApp">Book Free Taster</a>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full w-full sm:w-auto">
                <a href={FB_MESSENGER} target="_blank" rel="noopener noreferrer" aria-label="Message on Facebook">Ask a Question</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-custom">
            <div className="text-accent text-xl sm:text-2xl font-bold mb-2">60 mins</div>
            <div className="text-primary font-semibold text-sm sm:text-base">Session Duration</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-custom">
            <div className="text-accent text-xl sm:text-2xl font-bold mb-2">12 max</div>
            <div className="text-primary font-semibold text-sm sm:text-base">Group Size</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-custom">
            <div className="text-accent text-xl sm:text-2xl font-bold mb-2">All Year</div>
            <div className="text-primary font-semibold text-sm sm:text-base">Term Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
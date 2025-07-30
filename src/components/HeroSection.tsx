import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Heart } from "lucide-react";
import heroImage from "@/assets/hero-kids-football.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: <Users className="w-8 h-8" />, title: "Football Fun", color: "primary" },
    { icon: <Heart className="w-8 h-8" />, title: "Making Friends", color: "accent" },
    { icon: <Trophy className="w-8 h-8" />, title: "Learning Skills", color: "primary" }
  ];

  return (
    <section id="home" className="hero-gradient pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-4 lg:space-y-6 animate-fade-in text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                Football Sessions for 
                <span className="text-gradient-accent block"> 5-7 Year Olds</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-light">
                Building Confidence Through Football
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Professional coaching in a fun, supportive environment where every child can thrive and develop their skills at their own pace.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 lg:mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 sm:p-6 rounded-xl shadow-custom hover-lift ${
                    feature.color === "primary" 
                      ? "bg-primary text-white" 
                      : "bg-accent text-primary"
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => scrollToSection("sessions")}
                className="rounded-full"
              >
                View Sessions
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection("contact")}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-custom-xl">
              <img 
                src={heroImage} 
                alt="Happy children playing football" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-primary px-6 py-3 rounded-full shadow-lg font-semibold">
              Ages 5-7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
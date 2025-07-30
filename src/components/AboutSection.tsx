import { CheckCircle, Award, Users, Clock } from "lucide-react";
import coachImage from "@/assets/coach-oliver.jpg";

const AboutSection = () => {
  const qualifications = [
    { icon: <Award className="w-5 h-5" />, text: "Qualified Physical Education Teacher" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "FA Licensed Football Coach" },
    { icon: <Users className="w-5 h-5" />, text: "Specialist in Youth Development" },
    { icon: <Clock className="w-5 h-5" />, text: "5+ Years Coaching Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coach Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={coachImage} 
                alt="Coach Oliver Markham - Professional Football Coach" 
                className="w-full max-w-md mx-auto h-[500px] object-cover rounded-2xl shadow-custom-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary px-6 py-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="font-bold text-2xl">FA</div>
                  <div className="text-sm font-semibold">Licensed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coach Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">
                Meet Coach Oliver Markham
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full"></div>
            </div>

            {/* Qualifications */}
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-xl border border-muted">
              <h3 className="text-xl font-semibold text-primary mb-4">Professional Qualifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center space-x-3 text-primary">
                    <div className="text-accent">{qual.icon}</div>
                    <span className="font-medium text-sm">{qual.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                With years of experience working with young children, I'm passionate about creating a positive environment where kids can improve their football skills while building confidence and making friends.
              </p>
              
              <p className="text-lg leading-relaxed">
                My sessions are designed for mixed abilities and genders, ensuring every child feels included and supported in their football journey.
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-primary mb-2">Coaching Philosophy</h4>
              <p className="text-muted-foreground">
                "Every child deserves to experience the joy of football in a supportive environment. I focus on building confidence, fundamental skills, and most importantly - ensuring every session is filled with fun and laughter."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
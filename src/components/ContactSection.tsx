import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {

  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Training Location",
      content: "Beaulieu Community Centre, Beaulieu Park, Chelmsford, Essex",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Session Times",
      content: "Every Friday, 3:45 PM - 4:45 PM",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 primary-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to join our football family? Contact us today to register your child or ask any questions!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactDetails.map((detail, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-accent bg-white/10 p-2 sm:p-3 rounded-lg shrink-0">
                          {detail.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-accent font-semibold text-base sm:text-lg mb-1">{detail.title}</h4>
                          {detail.link ? (
                            <a 
                              href={detail.link}
                              className="text-white hover:text-accent transition-colors text-sm sm:text-base break-words"
                            >
                              {detail.content}
                            </a>
                          ) : (
                            <p className="text-white/90 text-sm sm:text-base break-words">{detail.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 sm:h-80 lg:h-96 bg-white/20 flex items-center justify-center">
                  <div className="text-center text-white/70 p-4">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                    <p className="text-sm sm:text-base">Beaulieu Community Centre Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
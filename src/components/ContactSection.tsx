import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      childName: "",
      childAge: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@coachingforconfidence.com",
      link: "mailto:info@coachingforconfidence.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "07123 456789",
      link: "tel:+447123456789"
    },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-accent bg-white/10 p-3 rounded-lg">
                          {detail.icon}
                        </div>
                        <div>
                          <h4 className="text-accent font-semibold text-lg mb-2">{detail.title}</h4>
                          {detail.link ? (
                            <a 
                              href={detail.link}
                              className="text-white hover:text-accent transition-colors text-lg"
                            >
                              {detail.content}
                            </a>
                          ) : (
                            <p className="text-white/90 text-lg">{detail.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-white/20 flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                    <p>Beaulieu Community Centre Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Register Your Interest</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Parent/Guardian Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        placeholder="07123 456789"
                      />
                    </div>
                    <div>
                      <Label htmlFor="childAge" className="text-white">Child's Age *</Label>
                      <Input
                        id="childAge"
                        name="childAge"
                        type="number"
                        min="5"
                        max="7"
                        value={formData.childAge}
                        onChange={handleChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        placeholder="5-7 years"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="childName" className="text-white">Child's Name *</Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      placeholder="Child's full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      placeholder="Tell us about your child's football experience or ask any questions..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
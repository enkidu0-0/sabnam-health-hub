
import React from "react";
import { 
  MapPin, Phone, Mail, Clock, Send, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would send this data to an API
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Our Store",
      details: "123 Healthcare Avenue, Medical District, City, State 123456",
      link: "https://maps.google.com",
      linkText: "Get Directions"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: "+91 555-1234 (Regular)\n+91 555-5678 (Emergency)",
      link: "tel:+915551234",
      linkText: "Call Now"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "info@sabnammedical.com\nsupport@sabnammedical.com",
      link: "mailto:info@sabnammedical.com",
      linkText: "Send Email"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Working Hours",
      details: "Monday - Saturday: 8:00 AM - 9:00 PM\nSunday: 9:00 AM - 6:00 PM",
      link: null,
      linkText: null
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                Get In Touch With Sabnam Medical Store
              </h2>
              <p className="text-lg text-foreground/80 text-pretty">
                Have questions or need assistance? We're here to help. Reach out to us 
                through any of the methods below, or fill out the form and we'll get 
                back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${75 * index}ms` }}
                >
                  <div className="p-3 mb-4 rounded-lg bg-primary/5 text-primary w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 whitespace-pre-line mb-3">{item.details}</p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      className="inline-flex items-center text-primary font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkText}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="+91 1234567890"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16 animate-on-scroll">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAuMCJOIDczwrA1NCcwLjAiVw!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sabnam Medical Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

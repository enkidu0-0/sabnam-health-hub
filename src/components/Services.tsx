
import React from "react";
import { 
  Clipboard, Calendar, Pills, Stethoscope, 
  Heart, ShieldCheck, Clock, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Clipboard className="h-6 w-6" />,
      title: "Prescription Filling",
      description: "Quick and accurate prescription fulfillment with expert guidance.",
      link: "/services#prescriptions"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Health Consultations",
      description: "One-on-one consultations with our experienced healthcare professionals.",
      link: "/services#consultations"
    },
    {
      icon: <Pills className="h-6 w-6" />,
      title: "Medication Management",
      description: "Personalized medication reviews and management plans.",
      link: "/services#medication"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Health Screenings",
      description: "Regular health check-ups and preventive screenings.",
      link: "/services#screenings"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Wellness Programs",
      description: "Custom wellness plans for ongoing health maintenance.",
      link: "/services#wellness"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Immunizations",
      description: "Essential vaccines and immunizations for all age groups.",
      link: "/services#immunizations"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-foreground/80 text-pretty">
            We offer a wide range of services designed to meet all your healthcare needs 
            in one convenient location, with a focus on quality and personalized care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative animate-on-scroll"
              style={{ transitionDelay: `${75 * index}ms` }}
            >
              <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col h-full p-6 bg-white rounded-xl border border-border shadow-sm group-hover:shadow-md transition-all duration-300">
                <div className="p-3 mb-4 rounded-lg bg-primary/5 text-primary w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Emergency Service Card */}
        <div className="mt-16 animate-on-scroll">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Emergency healthcare service" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
            </div>
            
            <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:py-20 lg:px-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <Clock className="mr-2 h-4 w-4" />
                    24/7 Emergency Service
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-balance">
                    We're Here When You Need Us Most
                  </h3>
                  <p className="text-white/90 text-pretty">
                    Our emergency line is always open. For urgent medical advice 
                    or emergency medication needs, our team is ready to assist.
                  </p>
                  <div className="flex space-x-4">
                    <Button asChild size="lg" variant="secondary" className="text-primary">
                      <a href="tel:555-1234">
                        Call Emergency Line
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10">
                      <Link to="/services#emergency">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  {/* This space is intentionally left empty for visual balance */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from "react";
import { Heart, Clock, Award, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Care & Compassion",
      description: "We approach healthcare with empathy and understanding"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Quality Assurance",
      description: "We ensure all products meet the highest standards"
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Customer Focus",
      description: "Your health needs are our top priority"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Accessibility",
      description: "Extended hours and multiple ways to reach us"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-medical-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with Overlay */}
          <div className="relative animate-on-scroll order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative flex overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Pharmacy interior" 
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center space-x-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                  <span>Est. 1997</span>
                  <span className="w-1 h-1 rounded-full bg-white"></span>
                  <span>25+ Years of Service</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 animate-on-scroll order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Your Trusted Healthcare Partner Since 1997
            </h2>
            
            <p className="text-lg text-foreground/80 text-pretty">
              Sabnam Medical Store was founded with a vision to provide accessible 
              healthcare solutions to our community. What began as a small pharmacy 
              has evolved into a comprehensive healthcare destination while 
              maintaining our core values of care, quality, and customer focus.
            </p>
            
            <p className="text-lg text-foreground/80 text-pretty">
              Our team of experienced pharmacists and healthcare professionals 
              are dedicated to ensuring that you receive personalized attention and 
              the highest quality products for your well-being.
            </p>
            
            <div className="pt-2">
              <Button asChild size="lg" className="rounded-md text-base">
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold">Our Core Values</h3>
            <p className="mt-3 text-lg text-foreground/70 max-w-2xl mx-auto">
              These principles guide everything we do at Sabnam Medical Store
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-on-scroll"
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                <div className="p-3 mb-4 rounded-lg bg-primary/5 text-primary w-fit">
                  {value.icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{value.title}</h4>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React, { useEffect, useRef } from "react";
import { ChevronRight, Clock, Shield, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Extended Hours",
      description: "Open 7 days a week for your convenience"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Trusted Experts",
      description: "Certified professionals to serve you"
    },
    {
      icon: <Pill className="h-5 w-5" />,
      title: "Quality Products",
      description: "Genuine medications and healthcare items"
    }
  ];

  return (
    <div ref={heroRef} className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-on-scroll">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="animate-pulse-gentle">• </span>
              <span className="ml-1">Your Trusted Healthcare Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-foreground">
              Your Health Is Our{" "}
              <span className="text-primary">Priority</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl text-pretty">
              Sabnam Medical Store provides comprehensive healthcare solutions with a personal touch. Quality medications, expert advice, and exceptional service.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-md text-base">
                <Link to="/services">
                  Explore Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-md text-base">
                <Link to="/appointment">Schedule Appointment</Link>
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-on-scroll">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-30"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Pharmacist assisting customer" 
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-on-scroll">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col h-full p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 mb-4 rounded-lg bg-primary/5 text-primary w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

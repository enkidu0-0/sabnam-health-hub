
import React, { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Sabnam Medical Store has been my family's trusted pharmacy for years. Their professional advice and quality products have made managing my parents' health issues so much easier.",
      author: "Priya Sharma",
      role: "Regular Customer",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      rating: 5
    },
    {
      quote: "I'm impressed by the personalized service here. The pharmacists take time to explain medications properly and always follow up to ensure everything is working well.",
      author: "Amit Patel",
      role: "Diabetic Care Patient",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "The online prescription upload feature has been a lifesaver for me. I can submit my prescription online and pick up my medications without any hassle.",
      author: "Raj Kumar",
      role: "Tech Professional",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4
    },
    {
      quote: "As an elderly person, I appreciate their patience and care. They always ensure I understand my medication schedule and offer home delivery when I can't visit the store.",
      author: "Lakshmi Rao",
      role: "Senior Citizen",
      avatar: "https://randomuser.me/api/portraits/women/76.jpg",
      rating: 5
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-medical-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/80 text-pretty">
            We take pride in providing exceptional service and care to our customers. 
            Here's what they have to say about their experiences with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="absolute -top-6 left-4 text-primary/20">
            <Quote className="h-20 w-20" strokeWidth={1} />
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-border overflow-hidden">
            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 absolute inset-0 ${
                    index === activeIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xl text-foreground/90 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="mt-auto flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-foreground/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Always visible placeholder to maintain height */}
              <div className="opacity-0 pointer-events-none">
                <div className="mb-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="text-xl text-foreground/90 italic">
                    "{testimonials[0].quote}"
                  </p>
                </div>
                
                <div className="mt-auto flex items-center">
                  <div className="h-12 w-12 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonials[0].author}</h4>
                    <p className="text-sm text-foreground/70">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Experience Our Quality Service Yourself
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button size="lg" className="rounded-md text-base">
              Visit Our Store
            </Button>
            <Button variant="outline" size="lg" className="rounded-md text-base">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

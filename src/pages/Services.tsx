import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clipboard, Calendar, Pill, Stethoscope, 
  Heart, ShieldCheck, Clock, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  useEffect(() => {
    // Scroll to the service if hash is present in URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
    
    // For animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
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

  const services = [
    {
      id: "prescriptions",
      icon: <Clipboard className="h-8 w-8" />,
      title: "Prescription Filling",
      description: "Our pharmacy offers quick and accurate prescription filling services with minimal wait times. Our team of expert pharmacists verifies each prescription carefully to ensure you receive the right medication, dosage, and instructions. We also provide consultation on potential drug interactions and side effects.",
      features: [
        "Quick turnaround times",
        "Insurance verification",
        "Automatic refill reminders",
        "Medication synchronization",
        "Comprehensive medication reviews"
      ]
    },
    {
      id: "consultations",
      icon: <Calendar className="h-8 w-8" />,
      title: "Health Consultations",
      description: "Schedule one-on-one consultations with our experienced healthcare professionals. We offer personalized advice on managing chronic conditions, medication usage, and general wellness. Our consultations can help you better understand your health needs and develop effective management strategies.",
      features: [
        "Private consultation rooms",
        "Medication therapy management",
        "Chronic disease management",
        "Wellness coaching",
        "Nutritional guidance"
      ]
    },
    {
      id: "medication",
      icon: <Pill className="h-8 w-8" />,
      title: "Medication Management",
      description: "Our medication management service helps you keep track of multiple medications, ensuring you take the right dose at the right time. We provide personalized medication reviews and can create custom packaging solutions to simplify your regimen and increase adherence.",
      features: [
        "Comprehensive medication reviews",
        "Custom packaging solutions",
        "Adherence monitoring",
        "Dose optimization",
        "Drug interaction checks"
      ]
    },
    {
      id: "screenings",
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Health Screenings",
      description: "Take charge of your health with our regular screening services. We offer blood pressure monitoring, blood glucose testing, cholesterol checks, and other essential health screenings to help detect potential issues early and monitor existing conditions.",
      features: [
        "Blood pressure monitoring",
        "Blood glucose testing",
        "Cholesterol screening",
        "Body composition analysis",
        "Results consultation"
      ]
    },
    {
      id: "wellness",
      icon: <Heart className="h-8 w-8" />,
      title: "Wellness Programs",
      description: "Our wellness programs are designed to support your overall health goals. We offer custom wellness plans, nutritional counseling, exercise recommendations, and ongoing support to help you maintain or improve your health and prevent illness.",
      features: [
        "Personalized wellness plans",
        "Nutritional counseling",
        "Exercise recommendations",
        "Stress management techniques",
        "Weight management support"
      ]
    },
    {
      id: "immunizations",
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Immunizations",
      description: "Protect yourself and your family with our comprehensive immunization services. We offer vaccines for all age groups, including seasonal flu shots, travel vaccines, and routine immunizations recommended by health authorities.",
      features: [
        "Seasonal flu vaccines",
        "Travel immunizations",
        "Childhood vaccinations",
        "Adult vaccines",
        "Immunization records management"
      ]
    },
    {
      id: "emergency",
      icon: <Clock className="h-8 w-8" />,
      title: "Emergency Services",
      description: "Our emergency line is always open. For urgent medical advice or emergency medication needs, our team is ready to assist 24/7. We understand that health emergencies don't follow a schedule, and we're committed to being available whenever you need us.",
      features: [
        "24/7 emergency phone line",
        "After-hours prescription services",
        "Emergency medication delivery",
        "Urgent health advice",
        "Coordination with emergency services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Our Healthcare Services
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 text-pretty mb-8">
                Comprehensive healthcare solutions designed to meet all your wellness needs with 
                personalized care and expert guidance.
              </p>
              <div className="inline-flex items-center space-x-2 text-primary font-medium">
                <Phone className="h-5 w-5" />
                <span>Need assistance? Call us: 555-1234</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-8 bg-background border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
            <Tabs defaultValue="prescriptions" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-background border border-border h-auto p-1 flex flex-nowrap overflow-x-auto">
                  {services.map((service) => (
                    <TabsTrigger 
                      key={service.id} 
                      value={service.id}
                      className="py-3 px-4 whitespace-nowrap"
                    >
                      <div className="flex items-center space-x-2">
                        {service.icon}
                        <span className="hidden md:inline">{service.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {services.map((service) => (
                <TabsContent 
                  key={service.id} 
                  value={service.id}
                  id={service.id}
                  className="animate-on-scroll"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="p-4 rounded-lg bg-primary/10 text-primary">
                          {service.icon}
                        </div>
                        <div className="space-y-4 flex-1">
                          <h2 className="text-2xl md:text-3xl font-semibold">{service.title}</h2>
                          <p className="text-foreground/80 text-pretty">{service.description}</p>
                          
                          <div className="pt-4">
                            <h3 className="text-lg font-medium mb-3">Key Features:</h3>
                            <ul className="grid sm:grid-cols-2 gap-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="mr-2 mt-1 text-primary">•</div>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild className="flex items-center space-x-2">
                              <Link to="/appointment">
                                <Calendar className="h-4 w-4" />
                                <span>Schedule Appointment</span>
                              </Link>
                            </Button>
                            <Button asChild variant="outline">
                              <Link to="/contact">
                                <Phone className="h-4 w-4 mr-2" />
                                <span>Contact Us</span>
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Services />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;


import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Phone, MessageSquare, Calendar, Mail
} from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
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

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We are open Monday to Saturday from 8:00 AM to 9:00 PM, and Sunday from 9:00 AM to 6:00 PM. Our emergency line is available 24/7."
    },
    {
      question: "Do you offer home delivery of medications?",
      answer: "Yes, we offer home delivery services within a 10km radius. Delivery is free for orders above ₹500. For emergency medications, we provide expedited delivery at a nominal charge."
    },
    {
      question: "How can I refill my prescription?",
      answer: "You can refill your prescription by visiting our store, calling our pharmacy line, using our online prescription upload service, or through our mobile app. We require at least 24 hours notice for regular refills."
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes, we accept most major health insurance plans. Please bring your insurance card when you visit or provide the details when ordering online. Our staff can help verify coverage for specific medications."
    },
    {
      question: "Can I get a consultation without an appointment?",
      answer: "Walk-in consultations are available, but we recommend scheduling an appointment to minimize wait times. You can easily book a consultation time online or by calling our office."
    },
    {
      question: "Do you offer vaccinations?",
      answer: "Yes, we provide a range of vaccinations including seasonal flu shots, travel vaccines, and routine immunizations. Some vaccines may require an appointment, so please call ahead to check availability."
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
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 text-pretty mb-8">
                We're here to help with all your healthcare needs. Reach out to us for inquiries, 
                feedback, or support.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="rounded-full" size="lg">
                  <a href="tel:+915551234">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full" size="lg">
                  <Link to="#contact-form">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-foreground/70 mb-4">Speak directly with our team</p>
                <div className="space-y-2">
                  <p className="font-medium">Regular: +91 555-1234</p>
                  <p className="font-medium">Emergency: +91 555-5678</p>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-foreground/70 mb-4">Send us your questions anytime</p>
                <div className="space-y-2">
                  <p className="font-medium">info@sabnammedical.com</p>
                  <p className="font-medium">support@sabnammedical.com</p>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
                <p className="text-foreground/70 mb-4">Schedule a consultation</p>
                <Button asChild className="w-full">
                  <Link to="/appointment">
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Component */}
        <section id="contact-form" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                FAQs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/80 text-pretty">
                Find quick answers to common questions about our services, operations, and policies.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl border border-border p-6 shadow-sm animate-on-scroll"
                    style={{ transitionDelay: `${75 * index}ms` }}
                  >
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-foreground/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10 animate-on-scroll">
                <p className="text-foreground/80 mb-4">
                  Still have questions? We're here to help.
                </p>
                <Button asChild>
                  <a href="tel:+915551234">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us for Immediate Assistance
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

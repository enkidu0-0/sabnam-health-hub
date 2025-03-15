
import React from "react";
import { Link } from "react-router-dom";
import { 
  Heart, Mail, Phone, MapPin, 
  Instagram, Facebook, Twitter, Linkedin,
  ChevronRight, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter.",
      duration: 5000,
    });
    
    e.currentTarget.reset();
  };
  
  const currentYear = new Date().getFullYear();
  
  const links = {
    services: [
      { title: "Prescription Filling", href: "/services#prescriptions" },
      { title: "Health Consultations", href: "/services#consultations" },
      { title: "Medication Management", href: "/services#medication" },
      { title: "Health Screenings", href: "/services#screenings" },
      { title: "Wellness Programs", href: "/services#wellness" },
    ],
    products: [
      { title: "Prescription Medications", href: "/products/prescription-medications" },
      { title: "Health Monitoring", href: "/products/health-monitoring" },
      { title: "First Aid", href: "/products/first-aid" },
      { title: "Medical Equipment", href: "/products/medical-equipment" },
      { title: "Wellness & Nutrition", href: "/products/wellness-nutrition" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/careers" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  };
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-medical-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Stay Updated with Health Tips
                </h3>
                <p className="text-white/80">
                  Subscribe to our newsletter for the latest health advice, promotions, and updates.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-primary"
                />
                <Button type="submit" className="whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8" strokeWidth={1.5} />
              <span className="text-xl font-semibold tracking-tight">
                Sabnam Medical
              </span>
            </Link>
            
            <p className="text-white/70 max-w-md">
              Your trusted healthcare partner since 1997. We provide comprehensive 
              medical solutions with a personal touch, ensuring your well-being 
              remains our top priority.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <span className="text-white/70">
                  123 Healthcare Avenue, Medical District, City, State 123456
                </span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+915551234" className="text-white/70 hover:text-white transition-colors">
                  +91 555-1234
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@sabnammedical.com" className="text-white/70 hover:text-white transition-colors">
                  info@sabnammedical.com
                </a>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-primary hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {links.products.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-white/60 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {currentYear} Sabnam Medical Store. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

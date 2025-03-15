
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronDown, ShoppingBag, Calendar, Heart, Search, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Products", path: "/products" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary transition-opacity duration-200 hover:opacity-90"
          >
            <Heart className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} />
            <span className="text-xl sm:text-2xl font-semibold tracking-tight">
              Sabnam Medical
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground/80 hover:text-primary hover:bg-primary/5"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/contact" className="hidden sm:block">
              <Button 
                variant="ghost"
                className="space-x-2 text-foreground/80 hover:text-primary hover:bg-primary/5"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline-block">Emergency: 555-1234</span>
              </Button>
            </Link>
            
            <Link to="/appointment">
              <Button className="hidden sm:flex items-center space-x-2 bg-primary hover:bg-primary/90 transition-all">
                <Calendar className="h-4 w-4" />
                <span className="hidden md:inline-block">Schedule Visit</span>
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <Link 
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Heart className="h-7 w-7" />
              <span className="text-xl font-semibold">Sabnam Medical</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center py-3 px-4 text-base font-medium rounded-md transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto p-4 border-t">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start space-x-2">
                <Phone className="h-4 w-4" />
                <span>Emergency: 555-1234</span>
              </Button>
              <Button className="w-full justify-start space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Schedule Visit</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

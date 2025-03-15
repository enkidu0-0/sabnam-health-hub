
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Pill, Thermometer, Bandage, Stethoscope, 
  Baby, BrainCircuit, Smile, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
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

  const categories = [
    {
      id: "medications",
      icon: <Pill className="h-8 w-8" />,
      title: "Prescription Medications",
      subcategories: [
        "Antibiotics",
        "Cardiovascular Medications",
        "Diabetes Management",
        "Pain Relief",
        "Respiratory Medications",
        "Mental Health Medications"
      ]
    },
    {
      id: "devices",
      icon: <Thermometer className="h-8 w-8" />,
      title: "Medical Devices",
      subcategories: [
        "Blood Pressure Monitors",
        "Blood Glucose Meters",
        "Thermometers",
        "Nebulizers",
        "CPAP Machines",
        "Hearing Aids"
      ]
    },
    {
      id: "first-aid",
      icon: <Bandage className="h-8 w-8" />,
      title: "First Aid",
      subcategories: [
        "Bandages & Dressings",
        "Antiseptics & Disinfectants",
        "Burn Care",
        "First Aid Kits",
        "Sports Tapes & Braces",
        "Wound Care"
      ]
    },
    {
      id: "equipment",
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Healthcare Equipment",
      subcategories: [
        "Mobility Aids",
        "Orthopedic Supports",
        "Home Healthcare",
        "Rehabilitation Equipment",
        "Daily Living Aids",
        "Medical Furniture"
      ]
    },
    {
      id: "baby",
      icon: <Baby className="h-8 w-8" />,
      title: "Baby Care",
      subcategories: [
        "Baby Formulas",
        "Baby Medications",
        "Baby Skincare",
        "Diapers & Wipes",
        "Feeding Supplies",
        "Baby Health Monitoring"
      ]
    },
    {
      id: "supplements",
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Vitamins & Supplements",
      subcategories: [
        "Multivitamins",
        "Minerals",
        "Herbal Supplements",
        "Sports Nutrition",
        "Immunity Boosters",
        "Specialty Supplements"
      ]
    },
    {
      id: "personal",
      icon: <Smile className="h-8 w-8" />,
      title: "Personal Care",
      subcategories: [
        "Skincare",
        "Oral Care",
        "Hair Care",
        "Eye Care",
        "Feminine Hygiene",
        "Men's Health"
      ]
    }
  ];

  // Featured products
  const featuredProducts = [
    {
      name: "Multi-Vitamin Complex",
      category: "Vitamins & Supplements",
      price: "₹599",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
    },
    {
      name: "Digital Blood Pressure Monitor",
      category: "Medical Devices",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1631549916768-4119b4123a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80"
    },
    {
      name: "Advanced First Aid Kit",
      category: "First Aid",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
    },
    {
      name: "Wound Healing Ointment",
      category: "First Aid",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
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
                Our Products
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 text-pretty mb-8">
                Discover our carefully selected range of healthcare products, 
                designed to support your wellbeing at every stage of life.
              </p>
              
              <div className="max-w-md mx-auto">
                <form className="relative">
                  <Input
                    type="search"
                    placeholder="Search for products..."
                    className="pl-4 pr-10 py-6 rounded-full"
                  />
                  <Button 
                    type="submit" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
              <p className="text-foreground/70 mt-2">Quality items selected by our healthcare experts</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
              {featuredProducts.map((product, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-primary/80 mb-1">{product.category}</div>
                    <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-semibold">{product.price}</span>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold">Browse By Category</h2>
              <p className="text-foreground/70 mt-2">
                Explore our extensive range of healthcare products organized by category
              </p>
            </div>
            
            <div className="mt-8">
              <Tabs defaultValue="medications" className="w-full">
                <TabsList className="bg-background border border-border h-auto p-1 flex flex-nowrap overflow-x-auto mb-8">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="py-3 px-4 whitespace-nowrap"
                    >
                      <div className="flex items-center space-x-2">
                        {category.icon}
                        <span className="hidden md:inline">{category.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map((category) => (
                  <TabsContent 
                    key={category.id} 
                    value={category.id}
                    className="animate-on-scroll"
                  >
                    <div className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="p-4 rounded-lg bg-primary/10 text-primary">
                          {category.icon}
                        </div>
                        <div className="space-y-4 flex-1">
                          <h2 className="text-2xl md:text-3xl font-semibold">{category.title}</h2>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {category.subcategories.map((subcategory, index) => (
                              <Button 
                                key={index} 
                                variant="outline" 
                                className="justify-start h-auto py-3"
                                asChild
                              >
                                <a href={`/products/${category.id}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}>
                                  {subcategory}
                                </a>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Products Component */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Products />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

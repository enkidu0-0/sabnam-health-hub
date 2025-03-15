
import React from "react";
import { 
  ChevronRight, Pill, Thermometer, Bandage, 
  Stethoscope, Baby, BrainCircuit, Smile
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    {
      icon: <Pill className="h-6 w-6" />,
      title: "Prescription Medications",
      description: "High-quality prescription drugs with expert guidance",
      link: "/products/prescription-medications"
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Health Monitoring",
      description: "Devices to track vital health parameters",
      link: "/products/health-monitoring"
    },
    {
      icon: <Bandage className="h-6 w-6" />,
      title: "First Aid",
      description: "Essential supplies for emergency care",
      link: "/products/first-aid"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Medical Equipment",
      description: "Professional-grade healthcare equipment",
      link: "/products/medical-equipment"
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Mother & Baby Care",
      description: "Specialized products for mothers and infants",
      link: "/products/mother-baby"
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Wellness & Nutrition",
      description: "Supplements and nutrition products",
      link: "/products/wellness-nutrition"
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: "Personal Care",
      description: "Quality products for daily personal care",
      link: "/products/personal-care"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Product Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            Explore Our Wide Range of Healthcare Products
          </h2>
          <p className="text-lg text-foreground/80 text-pretty">
            Sabnam Medical Store offers a comprehensive selection of quality products 
            to address all your healthcare needs under one roof.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="group relative animate-on-scroll hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${50 * index}ms` }}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col h-full p-6 bg-white rounded-xl border border-border group-hover:border-primary/20 transition-all duration-300">
                <div className="p-3 mb-4 rounded-lg bg-primary/5 text-primary w-fit">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                <p className="text-foreground/70 mb-4">{category.description}</p>
                <div className="mt-auto flex items-center text-primary font-medium">
                  <span>Browse Products</span>
                  <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

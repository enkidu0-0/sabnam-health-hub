
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { 
  Heart, Award, UserCheck, Clock, UserCog, 
  Building, GraduationCap, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
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

  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Lead Pharmacist & Founder",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      bio: "Dr. Sharma founded Sabnam Medical Store in 1997 with a vision to provide accessible healthcare to the community. With over 30 years of experience in pharmacy practice, he ensures the highest standards of pharmaceutical care."
    },
    {
      name: "Priya Patel",
      role: "Clinical Pharmacist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Priya specializes in medication therapy management and patient education. With her doctorate in pharmacy and board certification in ambulatory care, she helps patients understand their medications and manage chronic conditions effectively."
    },
    {
      name: "Arvind Kumar",
      role: "Healthcare Consultant",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      bio: "Arvind brings 15 years of experience in healthcare management. His expertise in integrating modern healthcare practices with traditional approaches helps Sabnam Medical Store maintain its unique position in the community."
    },
    {
      name: "Sunita Verma",
      role: "Wellness Specialist",
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      bio: "Sunita is certified in nutrition and preventive health. She designs our wellness programs and provides personalized guidance to customers looking to improve their overall health through lifestyle modifications and natural supplements."
    }
  ];

  const timeline = [
    {
      year: "1997",
      title: "Foundation",
      description: "Sabnam Medical Store was established as a small neighborhood pharmacy focusing on personalized care."
    },
    {
      year: "2003",
      title: "Expansion",
      description: "Expanded our store size and inventory to include a wider range of healthcare products and services."
    },
    {
      year: "2008",
      title: "Health Consultation",
      description: "Introduced professional health consultation services with qualified healthcare professionals."
    },
    {
      year: "2012",
      title: "Wellness Programs",
      description: "Launched comprehensive wellness programs to address holistic health needs of our community."
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Implemented digital prescription management and automated reminder systems."
    },
    {
      year: "2020",
      title: "Home Delivery",
      description: "Started home delivery services to ensure healthcare accessibility during challenging times."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launched our online platform to provide seamless access to our services and products."
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
                About Sabnam Medical Store
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 text-pretty mb-8">
                Your trusted healthcare partner since 1997, committed to providing quality products 
                and personalized services for your well-being.
              </p>
            </div>
          </div>
        </section>

        {/* About Component */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>

        {/* Our History */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                25 Years of Healthcare Excellence
              </h2>
              <p className="text-lg text-foreground/80 text-pretty">
                From a small neighborhood pharmacy to a comprehensive healthcare destination, 
                our journey has been dedicated to serving our community with care and compassion.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-1/2 sm:ml-[-1px] top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col sm:flex-row items-start gap-8 animate-on-scroll ${
                      index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                    }`}
                    style={{ transitionDelay: `${100 * index}ms` }}
                  >
                    <div className="sm:w-1/2 flex justify-end">
                      <div 
                        className={`bg-white rounded-xl border border-border p-6 shadow-sm w-full ml-12 sm:ml-0 ${
                          index % 2 === 0 ? 'sm:ml-8' : 'sm:mr-8'
                        }`}
                      >
                        <div className="font-semibold text-primary text-lg mb-2">{event.year}</div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-foreground/70">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline marker */}
                    <div className="absolute left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-white shadow">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="sm:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                Meet the Healthcare Professionals
              </h2>
              <p className="text-lg text-foreground/80 text-pretty">
                Our team of experienced professionals is dedicated to providing you with the 
                highest quality of care and personalized health solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group animate-on-scroll"
                  style={{ transitionDelay: `${100 * index}ms` }}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-pretty">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                Our Achievements & Certifications
              </h2>
              <p className="text-lg text-foreground/80 text-pretty">
                We're proud of the recognition we've received for our commitment to quality 
                healthcare and community service.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: <Trophy />, title: "Best Pharmacy Award 2023", description: "Recognized for excellence in pharmaceutical services and customer care" },
                { icon: <GraduationCap />, title: "Certified Training Center", description: "Accredited institution for pharmacy internship and professional development" },
                { icon: <Building />, title: "Quality Standards Certified", description: "Meeting and exceeding industry standards for healthcare facilities" },
                { icon: <UserCog />, title: "Community Health Champion", description: "Awarded for contributions to local health initiatives and education" }
              ].map((achievement, index) => (
                <div 
                  key={index} 
                  className="group relative animate-on-scroll"
                  style={{ transitionDelay: `${75 * index}ms` }}
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col h-full p-6 bg-white rounded-xl border border-border shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="p-3 mb-4 rounded-lg bg-primary/5 text-primary w-fit">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-foreground/70 mb-6 flex-grow">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission for Better Healthcare</h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Whether you're a customer, healthcare professional, or community partner, we welcome you 
                to be part of our journey in bringing quality healthcare to everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore Our Services</Link>
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

export default AboutPage;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container-section">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-up">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              Business Consulting Services
            </div>
            <h1 className="heading-xl">
              Take Your Business to 
              <span className="text-primary"> New Heights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Helping entrepreneurs and professionals streamline operations, optimize resources, and grow with confidence. Expert guidance. Transparent solutions. Real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToContact} className="text-white font-medium px-6 py-6 rounded-md">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="border-gray-300 hover:border-primary text-gray-700 font-medium px-6 py-6 rounded-md">
                Explore Our Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/70 to-primary rounded-lg blur-lg opacity-30"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                  alt="Business professionals in meeting" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

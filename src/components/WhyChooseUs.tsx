
import { Users, TrendingUp, Shield, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-white to-blue-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 md:text-lg">
            Our unique approach combines industry expertise, data-driven insights, and innovative thinking
            to deliver customized solutions that drive real business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our consultants bring decades of combined experience across various industries, 
              ensuring you receive guidance from true subject matter experts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
            <p className="text-gray-600">
              Our track record speaks for itself – we've helped businesses of all sizes achieve 
              significant growth and overcome complex challenges.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trusted Partnerships</h3>
            <p className="text-gray-600">
              We build long-term relationships based on transparency, integrity, and mutual respect, 
              becoming a trusted extension of your team.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
            <p className="text-gray-600">
              We understand that time is of the essence in business. Our streamlined processes ensure 
              we deliver results efficiently without compromising quality.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
            <p className="text-gray-600">
              With experience across multiple markets and regions, we bring a global perspective 
              that helps you identify opportunities and navigate international challenges.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/90 to-primary p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-3">Ready to Transform Your Business?</h3>
            <p className="mb-6 opacity-90">
              Schedule a no-obligation consultation with our expert team and discover how we can help you achieve your business goals.
            </p>
            <Button onClick={scrollToContact} variant="outline" className="bg-white text-primary hover:bg-white/90 border-none">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

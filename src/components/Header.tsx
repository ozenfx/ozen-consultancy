
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-4"
      )}
    >
      <div className="container-section flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/3da4b6db-879f-4eb5-a9fb-039c56b8fa24.png" 
            alt="Ozen Consultancy Logo" 
            className="h-8 md:h-10"
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer transition-colors">About</Link>
          <Link to="/how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer transition-colors">How It Works</Link>
          <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer transition-colors">Services</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer transition-colors">Contact</Link>
        </nav>
        
        <Button onClick={() => scrollToSection('contact')} className="hidden md:flex h-9 px-4 py-2 text-sm">
          Get Started
        </Button>
        
        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-3 shadow-md animate-fade-in">
          <div className="container-section flex flex-col space-y-3">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer py-2 border-b">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer py-2 border-b">About</Link>
            <Link to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer py-2 border-b">How It Works</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer py-2 border-b">Services</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer py-2 border-b">Contact</Link>
            <Button onClick={() => scrollToSection('contact')} className="w-full h-9 mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

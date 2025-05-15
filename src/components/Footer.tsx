import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-black pt-16 pb-10">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <div className="bg-white p-3 rounded-lg inline-block mb-4 shadow-lg">
                <img 
                  src="/lovable-uploads/3da4b6db-879f-4eb5-a9fb-039c56b8fa24.png" 
                  alt="Company Logo" 
                  className="h-12"
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61574997913993" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300 shadow-md">
                <Facebook className="h-5 w-5 text-black" />
              </a>
              <a href="https://x.com/OzenConsultancy" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300 shadow-md">
                <Twitter className="h-5 w-5 text-black" />
              </a>
              <a href="https://www.linkedin.com/uas/login-submit" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300 shadow-md">
                <Linkedin className="h-5 w-5 text-black" />
              </a>
              <a href="https://www.instagram.com/ozenconsultancy_global/" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300 shadow-md">
                <Instagram className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-ozen-400">Services</h4>
            <ul className="space-y-3 text-gray-800">
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#services" className="hover:text-ozen-600 transition-colors">Business Strategy</a>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#services" className="hover:text-ozen-600 transition-colors">Financial Analysis</a>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#services" className="hover:text-ozen-600 transition-colors">HR Consulting</a>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#services" className="hover:text-ozen-600 transition-colors">Operations Management</a>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#services" className="hover:text-ozen-600 transition-colors">Market Expansion</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-ozen-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-800">
              <li className="transition-all hover:translate-x-1 duration-200">
                <Link to="/" className="hover:text-ozen-600 transition-colors">Home</Link>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <Link to="/about" className="hover:text-ozen-600 transition-colors">About Us</Link>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <Link to="/how-it-works" className="hover:text-ozen-600 transition-colors">How It Works</Link>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#services" className="hover:text-ozen-600 transition-colors">Services</a>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#testimonials" className="hover:text-ozen-600 transition-colors">Testimonials</a>
              </li>
              <li className="transition-all hover:translate-x-1 duration-200">
                <a href="#contact" className="hover:text-ozen-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-ozen-400">Contact Us</h4>
            <address className="not-italic text-gray-800 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ozen-400 mt-1 flex-shrink-0" />
                <p>#423, 27th Main Road, 10th Cross,<br /> 1st Sector HSR Layout,<br /> Bangalore, Karnataka, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ozen-400 flex-shrink-0" />
                <a href="mailto:mail@ozenconsultancy.com" className="hover:text-ozen-600 transition-colors">mail@ozenconsultancy.com</a>
              </div>
               <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ozen-400 flex-shrink-0" />
                <a href="mailto:mail@ozenconsultancy.com" className="hover:text-ozen-600 transition-colors">support@ozenconsultancy.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ozen-400 flex-shrink-0" />
                <a href="tel:+919902392311" className="hover:text-ozen-600 transition-colors">+91 99023 99211</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ozen-400 flex-shrink-0" />
                <a href="tel:+919902392311" className="hover:text-ozen-600 transition-colors">+91 99011 98514</a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700">
            &copy; {currentYear} All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-gray-700">
            <Link to="/privacy-policy" className="hover:text-ozen-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-ozen-600 transition-colors">Terms & Conditions</Link>
            <Link to="/return-policy" className="hover:text-ozen-600 transition-colors">Return Policy</Link>
            <Link to="/how-it-works" className="hover:text-ozen-600 transition-colors">How It Works</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

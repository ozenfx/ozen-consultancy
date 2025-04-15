
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, PhoneCall, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Need assistance? Want to collaborate? Email us directly at <a href="mailto:mail@ozenconsultancy.com" className="text-ozen-600 font-medium hover:underline">mail@ozenconsultancy.com</a>. We're ready to help you optimize, simplify, and scale your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center gap-4 p-8">
              <div className="bg-ozen-100 p-4 rounded-full mb-2">
                <MailIcon className="h-8 w-8 text-ozen-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Email Us</h4>
                <a 
                  href="mailto:mail@ozenconsultancy.com" 
                  className="text-gray-600 hover:text-ozen-600 transition-colors block"
                >
                  mail@ozenconsultancy.com
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center gap-4 p-8">
              <div className="bg-ozen-100 p-4 rounded-full mb-2">
                <PhoneCall className="h-8 w-8 text-ozen-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Call Us</h4>
                <a 
                  href="tel:+919902392311" 
                  className="text-gray-600 hover:text-ozen-600 transition-colors block"
                >
                  +91 99023 92311
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center gap-4 p-8">
              <div className="bg-ozen-100 p-4 rounded-full mb-2">
                <MapPin className="h-8 w-8 text-ozen-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Visit Us</h4>
                <p className="text-gray-600">
                  #423, 27th Main Road, 10th Cross,<br />
                  1st Sector HSR Layout,<br />
                  Bangalore, Karnataka, India
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9951371111074!2d77.63210937381744!3d12.914228216181472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1494110f0a33%3A0x9ebba37989331e4b!2s27th%20Main%20Rd%2C%20HSR%20Layout%201st%20Sector%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1681795714963!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ozen Consultancy Location"
              className="w-full"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

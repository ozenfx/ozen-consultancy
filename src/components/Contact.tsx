import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, PhoneCall, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Have questions or ready to start your business transformation? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-gray-600">
              Fill out the form or contact us directly using the information below.
            </p>
            
            <div className="space-y-4 pt-4">
              <Card className="border-none shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-ozen-100 p-3 rounded-full">
                    <MailIcon className="h-6 w-6 text-ozen-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email Us</h4>
                    <p className="text-gray-800">contact@ozenconsultancy.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-ozen-100 p-3 rounded-full">
                    <PhoneCall className="h-6 w-6 text-ozen-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Call Us</h4>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-ozen-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-ozen-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Visit Us</h4>
                    <p className="text-gray-800">123 Business Avenue, Suite 200, New York, NY 10001</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg p-2">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      rows={6} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ozen-600 hover:bg-ozen-700 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-white border-opacity-50 border-t-white rounded-full"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

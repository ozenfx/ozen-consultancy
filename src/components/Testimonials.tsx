
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ozen Consultancy transformed our operations and helped us achieve a 30% increase in productivity within just six months. Their strategic guidance was invaluable.",
      author: "Sarah Johnson",
      position: "CEO, TechGrowth Solutions",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "Working with Ozen was a game-changer for our business. Their financial analysis uncovered opportunities we had overlooked and their implementation plan was flawless.",
      author: "Michael Chen",
      position: "CFO, Innovate Partners",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The team at Ozen Consultancy provided us with clear, actionable strategies that helped us navigate a challenging market transition. Highly recommended!",
      author: "Jessica Williams",
      position: "Director, Global Ventures",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      quote: "Their expertise in operations management helped us eliminate inefficiencies and reduce costs by 25%. The ROI on our investment with Ozen has been exceptional.",
      author: "David Rodriguez",
      position: "COO, Stellar Enterprises",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with Ozen Consultancy.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-xl bg-gradient-to-br from-ozen-50 to-blue-50 p-6 md:p-10">
            <CardContent className="p-0 flex flex-col items-center text-center">
              <Quote className="h-12 w-12 text-ozen-500 mb-6" />
              <p className="text-xl md:text-2xl text-gray-800 mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author}
                  className="h-16 w-16 rounded-full border-4 border-white shadow-md mb-4" 
                />
                <h4 className="font-semibold text-lg">{testimonials[activeIndex].author}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].position}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full h-10 w-10 border-gray-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full ${index === activeIndex ? 'bg-ozen-600' : 'bg-gray-300'}`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full h-10 w-10 border-gray-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

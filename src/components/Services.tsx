
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  LineChart, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Megaphone 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Business Strategy",
      description: "Develop comprehensive business strategies aligned with your goals and market conditions for sustainable growth."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Financial Analysis",
      description: "In-depth financial assessment to optimize cash flow, reduce costs, and improve financial health."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "HR Consulting",
      description: "Build effective HR policies, improve talent acquisition, and develop employee engagement strategies."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Operations Management",
      description: "Streamline processes, enhance efficiency, and implement best practices for operational excellence."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Market Expansion",
      description: "Research and develop strategies for entering new markets and expanding your customer base."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Marketing Strategy",
      description: "Create data-driven marketing plans to enhance brand visibility and drive customer acquisition."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            We offer a comprehensive range of consulting services designed to address your specific business needs and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

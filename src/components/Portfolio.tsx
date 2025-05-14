
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Healthcare Provider Operational Transformation",
    category: "Healthcare",
    description: "Helped a regional healthcare network reduce operational costs by 24% while improving patient satisfaction scores by implementing streamlined workflows and digital solutions.",
    results: ["24% cost reduction", "18% improvement in patient satisfaction", "30% faster service delivery"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "E-commerce Supply Chain Optimization",
    category: "Retail",
    description: "Redesigned the supply chain process for a growing e-commerce company, resulting in reduced fulfillment times and significant inventory cost savings.",
    results: ["42% reduction in order fulfillment time", "31% decrease in inventory costs", "99.8% order accuracy achieved"],
    image: "https://images.unsplash.com/photo-1650315985351-d86bee78c2e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Financial Services Digital Transformation",
    category: "Finance",
    description: "Guided a traditional financial institution through a comprehensive digital transformation, introducing new customer-facing technologies and optimizing internal processes.",
    results: ["65% increase in digital engagement", "28% reduction in processing times", "$3.2M annual cost savings"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Case Studies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore how we've helped organizations across industries achieve remarkable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                  {study.category}
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider">Key Results:</h4>
                <ul className="space-y-1">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

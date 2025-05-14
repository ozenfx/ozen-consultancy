
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What industries does Ozen Consultancy specialize in?",
    answer: "We specialize in a wide range of industries including technology, healthcare, finance, retail, and manufacturing. Our consultants have diverse backgrounds that allow us to adapt our expertise to your specific industry needs."
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer: "The duration varies based on the scope and complexity of your project. We offer everything from short-term assessments that last 2-4 weeks to comprehensive transformations that may extend to several months. We'll provide a clear timeline during our initial consultation."
  },
  {
    question: "What is your approach to ensuring client confidentiality?",
    answer: "We take confidentiality extremely seriously. All our consultants sign strict NDAs, and we implement secure data handling protocols. We never share client information without explicit permission, and we can establish custom confidentiality agreements for sensitive projects."
  },
  {
    question: "How do you measure the success of your consulting services?",
    answer: "We establish clear, measurable KPIs at the beginning of each engagement that align with your business objectives. These might include metrics like revenue growth, cost reduction, process efficiency improvements, or employee satisfaction scores. We provide regular progress reports and a comprehensive final assessment."
  },
  {
    question: "Can you work with our existing team or do you replace current functions?",
    answer: "We're designed to collaborate with your existing team, not replace them. Our goal is to empower your employees with new skills and perspectives while implementing sustainable improvements. We believe in transferring knowledge so your team can maintain and build upon our work after the engagement ends."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our consulting services and approach.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

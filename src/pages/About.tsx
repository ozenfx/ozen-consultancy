
import Layout from "@/components/Layout";
import { ArrowRight, BarChart2, ClipboardList, Database, Layers, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-white">
        <div className="container-section max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-3xl mx-auto">
              Welcome to Ozen Consultancy, where strategy meets innovation, and businesses unlock their fullest potential through transformative digital solutions.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-12">
              <p className="mb-6">
                We are a multidisciplinary consulting firm driven by a mission to bridge the gap between traditional business operations and the evolving digital landscape. Founded on principles of integrity, collaboration, and continuous improvement, Ozen Consultancy empowers organizations to adapt, thrive, and lead in an ever-changing world.
              </p>
              
              <p className="mb-6">
                Our team comprises experienced consultants, digital strategists, workflow analysts, and process architects who specialize in diagnosing inefficiencies and engineering custom solutions tailored to your industry. Whether you're an established company seeking to modernize internal systems or a startup aiming to set a solid foundation, we bring the clarity, expertise, and innovation required to accelerate your progress.
              </p>
              
              <p className="mb-6">
                At Ozen, we believe that every challenge holds an opportunity. From digitizing paperwork to implementing scalable CRM systems, building SOPs, or launching internal productivity audits, we focus on delivering practical, action-driven results that translate into measurable success.
              </p>
              
              <p className="mb-6">
                Our clients trust us because we listen. We learn about your workflows, your team, and your goals. Then, we design data-backed strategies that minimize friction and maximize performance.
              </p>
              
              <p className="mb-8 font-medium text-lg text-primary">
                We don't just consult. We partner. Our success is tied to yours.
              </p>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Core Services Include:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-6 flex items-start">
                    <Layers className="text-primary h-10 w-10 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Digital Workflow Consulting</h3>
                      <p className="text-gray-700">Audit, streamline, and redesign your processes for maximum efficiency.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-6 flex items-start">
                    <Settings2 className="text-primary h-10 w-10 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Operational Optimization</h3>
                      <p className="text-gray-700">Reduce redundancies, cut operational costs, and improve internal alignment.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-6 flex items-start">
                    <Database className="text-primary h-10 w-10 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Tech Stack Advisory</h3>
                      <p className="text-gray-700">Select and integrate the best tools for communication, CRM, project management, and automation.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-6 flex items-start">
                    <ClipboardList className="text-primary h-10 w-10 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">SOP Development</h3>
                      <p className="text-gray-700">Build or refine Standard Operating Procedures to scale your operations smoothly.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 mx-auto max-w-md">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-6 flex items-start">
                    <BarChart2 className="text-primary h-10 w-10 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Business Intelligence Setup</h3>
                      <p className="text-gray-700">Dashboards, reports, and KPIs to enable real-time data-based decision-making.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-md">
              <p className="text-lg md:text-xl font-medium mb-6">
                Whether you're scaling, restructuring, or simply improving, Ozen Consultancy is your guide to smarter business operations.
              </p>
              <Button size="lg" className="gap-2 shadow-md hover:shadow-lg">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

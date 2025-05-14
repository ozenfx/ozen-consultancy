
import Layout from "@/components/Layout";
import { MessageSquare, Search, FileText, Settings, BarChart3, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How It Works</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <div className="flex justify-center mb-8">
              <Settings className="text-primary h-16 w-16" />
            </div>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-3xl mx-auto">
              Our process is simple, yet deeply personalized to fit your business goals.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MessageSquare className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">Step 1: Reach Out</h2>
                      <p>Submit an inquiry through our website or contact form. We'll schedule an intro call to learn more about your needs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Search className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">Step 2: Discovery Call</h2>
                      <p>We conduct a short diagnostic session to understand your workflows, bottlenecks, goals, and current challenges.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <FileText className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">Step 3: Tailored Proposal</h2>
                      <p className="mb-4">You receive a custom scope of work outlining:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Solutions to be delivered</li>
                        <li>Timeline</li>
                        <li>Project phases</li>
                        <li>Pricing and deliverables</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Settings className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">Step 4: Execution Phase</h2>
                      <p className="mb-4">Our team begins implementation:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Consultations</li>
                        <li>SOP Development</li>
                        <li>Workflow Redesign</li>
                        <li>Dashboard or Tool Setup</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <BarChart3 className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">Step 5: Review & Optimization</h2>
                      <p>Once delivered, we review performance, measure against KPIs, and suggest future action plans.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <HeadphonesIcon className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">Step 6: Ongoing Support</h2>
                      <p>We offer optional support retainers and follow-up consultations to ensure your success is sustainable.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <div className="text-center mt-12 text-gray-600 text-sm">
              <p>Last updated: April 15, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;

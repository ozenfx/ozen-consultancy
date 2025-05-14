
import Layout from "@/components/Layout";
import { FileText, AlertTriangle, RefreshCcw, CreditCard, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReturnPolicy = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Return & Refund Policy</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <div className="flex justify-center mb-8">
              <CreditCard className="text-primary h-16 w-16" />
            </div>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-3xl mx-auto">
              Ozen Consultancy delivers value through services, insights, and intellectual property. As a service provider, we have a limited return/refund policy to protect the integrity of our time and expertise while ensuring client satisfaction.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <FileText className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">1. Refund Eligibility</h2>
                      <p className="mb-4">Refunds are only offered in the following cases:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>A service was paid for but never initiated.</li>
                        <li>A digital report or resource failed to meet delivery expectations as outlined.</li>
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
                      <AlertTriangle className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">2. Non-Refundable Conditions</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Completed consultations or strategy sessions</li>
                        <li>Services delivered partially or fully</li>
                        <li>Client unresponsiveness after service initiation</li>
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
                      <RefreshCcw className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">3. Resolution Process</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Contact our support team within 5 business days of the issue.</li>
                        <li>Provide service ID, invoice, and details of your concern.</li>
                        <li>Our team will review the case and respond within 3 business days with a solution.</li>
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
                      <HelpCircle className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">4. Alternatives</h2>
                      <p className="mb-4">In cases where refunds aren't possible, we may offer:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>A credit toward a future consultation</li>
                        <li>Additional deliverables to offset dissatisfaction</li>
                      </ul>
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

export default ReturnPolicy;

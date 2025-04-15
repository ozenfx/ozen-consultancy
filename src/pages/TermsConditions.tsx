
import Layout from "@/components/Layout";
import { Shield, FileText, Book, AlertTriangle, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <div className="flex justify-center mb-8">
              <FileText className="text-primary h-16 w-16" />
            </div>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-3xl mx-auto">
              These Terms & Conditions govern the use of Ozen Consultancy's website and our services. By accessing our website, you agree to these terms in full.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Shield className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">1. Use of Website</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>The website content is for general information only and is subject to change without notice.</li>
                        <li>You are responsible for any content or information you submit.</li>
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
                      <Book className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">2. Services & Deliverables</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>All service agreements are subject to specific terms outlined in individual contracts.</li>
                        <li>Consulting outputs (documents, reports, strategies) are for client-use only and not for public redistribution.</li>
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
                      <FileText className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">3. Intellectual Property</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>All content, logos, brand elements, designs, and documentation are the intellectual property of Ozen Consultancy.</li>
                        <li>No part of this website may be reused, copied, or reproduced without prior written consent.</li>
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
                      <h2 className="text-xl md:text-2xl font-bold mb-4">4. Limitations of Liability</h2>
                      <p>
                        Ozen Consultancy is not responsible for any loss, disruption, or damage arising from the use of this website or services.
                      </p>
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
                      <h2 className="text-xl md:text-2xl font-bold mb-4">5. Modifications</h2>
                      <p>
                        These terms may be updated periodically. Continued use of our site signifies acceptance of any updates.
                      </p>
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

export default TermsConditions;

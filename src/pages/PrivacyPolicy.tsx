
import Layout from "@/components/Layout";
import { Shield, Mail, Lock, Cookie, User, FileText, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <div className="flex justify-center mb-8">
              <Shield className="text-primary h-16 w-16" />
            </div>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-3xl mx-auto">
              At Ozen Consultancy, your privacy is not just a checkbox; it's a cornerstone of our trust with you. This policy outlines our practices for collecting, using, and safeguarding your information.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <User className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">1. What We Collect</h2>
                      <p className="mb-4">We collect personal and business-related information voluntarily provided to us through:</p>
                      <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Contact forms</li>
                        <li>Newsletter subscriptions</li>
                        <li>Consultation booking</li>
                        <li>Service inquiries</li>
                      </ul>
                      <p className="mb-2">This may include:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Full Name</li>
                        <li>Company Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Nature of Inquiry</li>
                        <li>Analytics such as browser type, device, and IP address (via cookies)</li>
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
                      <h2 className="text-xl md:text-2xl font-bold mb-4">2. How We Use Your Data</h2>
                      <p className="mb-4">Your data is used to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Respond to your inquiries</li>
                        <li>Schedule consultations or service discussions</li>
                        <li>Send updates (only if you opt in)</li>
                        <li>Improve website experience and security</li>
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
                      <Lock className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">3. Data Protection & Storage</h2>
                      <p>
                        We use encryption, firewalls, and secure storage protocols to keep your data safe. 
                        We never share, rent, or sell your data to unauthorized third parties.
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
                      <Cookie className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">4. Use of Cookies</h2>
                      <p>
                        Cookies help us understand user preferences, website usage patterns, and enable better navigation experiences. 
                        You may disable cookies through your browser settings if desired.
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
                      <Eye className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">5. Your Rights</h2>
                      <p className="mb-4">
                        You have the right to access, update, or delete your personal information. 
                        Simply email our support team and we will respond promptly.
                      </p>
                      <div className="flex items-center mt-6 bg-gray-50 p-4 rounded-lg">
                        <Mail className="text-primary h-5 w-5 mr-2" />
                        <span className="font-medium">contact@ozenconsultancy.com</span>
                      </div>
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

export default PrivacyPolicy;

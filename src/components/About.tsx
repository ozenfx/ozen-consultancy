
const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-center">
            About <span className="text-primary font-bold">Ozen Consultancy</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-center md:text-lg">
            We combine strategic thinking with practical implementation to help businesses 
            navigate complex challenges and capitalize on new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
              alt="Business strategy session" 
              className="rounded-lg shadow-xl w-full h-auto relative z-10"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="heading-md mb-4">Our Approach</h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600">
                We believe that effective consulting goes beyond theoretical advice. Our approach 
                integrates deep industry knowledge, innovative thinking, and practical implementation 
                to create lasting value for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-2">Innovative Solutions</h4>
                <p className="text-gray-600 text-sm">Tailored strategies that challenge conventional thinking</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-2">Data-Driven</h4>
                <p className="text-gray-600 text-sm">Decisions backed by comprehensive research and analysis</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">Committed to the highest standards in all we do</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-2">Collaborative</h4>
                <p className="text-gray-600 text-sm">Working as an extension of your team for better results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

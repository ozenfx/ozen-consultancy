
const Vision = () => {
  return (
    <section id="vision" className="section-padding bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Our Vision</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 md:text-lg">
            To be the catalyst for sustainable business transformation, empowering organizations 
            to achieve unprecedented growth and success in an ever-evolving global marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Pioneering cutting-edge solutions that challenge conventional business practices 
              and create new opportunities for growth.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">
              Setting the highest standards in everything we do, from client interactions 
              to the implementation of our strategic recommendations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Impact</h3>
            <p className="text-gray-600">
              Creating measurable, sustainable value that transforms businesses and 
              positively impacts the communities they serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

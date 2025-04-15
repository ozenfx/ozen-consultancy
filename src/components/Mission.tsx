
const Mission = () => {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="container-section">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="heading-lg">Our Mission</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 md:text-lg">
              To deliver actionable, strategic guidance that helps businesses navigate challenges, 
              seize opportunities, and achieve sustainable growth. We're committed to building 
              lasting partnerships based on trust, integrity, and measurable results.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">90%</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Client Retention Rate</h3>
                  <p className="text-gray-600">We build lasting relationships through exceptional service</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">500+</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Successful Projects</h3>
                  <p className="text-gray-600">Across diverse industries and market segments</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">40%</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Average Growth Rate</h3>
                  <p className="text-gray-600">For businesses who implement our strategies</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-primary/60 rounded-lg blur-lg opacity-30"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                  alt="Team collaborating on business strategy" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

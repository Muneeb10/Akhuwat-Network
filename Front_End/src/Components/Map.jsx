const Map = () => {
  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Centered top section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#029fae] mb-6">Find Us on Map</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Visit our flagship store in the heart of downtown. We're conveniently located near public transportation with ample parking available.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left column - Branch locations */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Branch Locations
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We have multiple locations to serve you better. Visit us at any of our branches:
            </p>
            
            <div className="space-y-6">
              {/* Branch 1 */}
              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-800 text-lg mb-2">Head Office</h3>
                <p className="text-blue-700">New Shehbaz Building Thandi Sadak Hydrabad</p>
                <p className="mt-4 text-blue-700">+92 3354571620</p>
              </div>
              
              {/* Branch 2 */}
              <div className="bg-teal-100 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-bold text-green-800 text-lg mb-2">Karachi</h3>
                <p className="text-green-700">Plot No. 123, Block A, Gulshan-e-Iqbal</p>
                <p className="mt-4 text-green-700">+92 3354571620</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Map */}
          <div className="rounded-xl h-full overflow-hidden shadow-xl h-96">
            <iframe
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133404672!2d-73.98757468459313!3d40.75802897932695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
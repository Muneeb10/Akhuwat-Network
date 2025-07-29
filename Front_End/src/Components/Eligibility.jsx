const Eligibility = () => {
  const images = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Age Requirement",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1683133450529-1ec25c380356?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Document Verification",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1683133459890-270a1af1688e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Residence Proof",
    },
    {
      id: 4,
      src: "https://plus.unsplash.com/premium_photo-1661580686031-c8fc35b15f56?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Income Criteria",
    },
  ];

  return (
    <section className="bg-[#f0f2f3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#029fae] mb-4">Eligibility Requirements</h2>
              <p className="text-gray-600 mb-6">
                To qualify for our program, applicants must meet the following criteria. These requirements ensure we can 
                provide the best possible support to our participants and maintain program integrity.
              </p>
              <div className="mb-10 text-gray-600 space-y-2 text-left">
                {[
                  "Pakistani citizen with valid CNIC",
                  "Age between 18-65 years",
                  "Permanent residence proof",
                  "Basic business plan or income source",
                  "Two guarantors from the community",
                  "Willingness to join a group"
                ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                ))}
              </div>
              <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#029fae] hover:bg-[#02808d] text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                  Check Eligibility
                </button>
              </a>
            </div>
          </div>

          {/* Left side - Images */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6">
            {/* Small screen layout: stacked vertically */}
            <div className="flex flex-col gap-4 lg:hidden">
              {images.map((img) => (
                <div key={img.id} className="bg-white rounded-xl overflow-hidden shadow-lg aspect-video">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
                </div>
              ))}
            </div>
            {/* Large screen layout: grid */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg aspect-square">
                <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
              </div>

              <div className="bg-[#f0f2f3] mt-13 rounded-xl overflow-hidden shadow-lg w-[80%] h-[80%] self-start">
                <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
              </div>

              <div className="bg-white rounded-xl mb-13 ml-13 overflow-hidden shadow-lg w-[80%] h-[80%] self-end">
                <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg aspect-square">
                <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#029fae]" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default Eligibility;

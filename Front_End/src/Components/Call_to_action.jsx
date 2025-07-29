const Call_to_action = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#f0f2f3]">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Ready to Transform Your <span className="text-[#029fae]">Life</span>?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join thoJoin thousands of successful entrepreneurs who have built their businesses with our interest-free loans. 
            Start your application today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}  target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-gradient-to-r from-[#029fae] to-[#027e8a] text-white font-semibold rounded-xl shadow-lg shadow-[#029fae]/30 hover:shadow-[#029fae]/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                Apply Now
              </button>
            </a>
            
            <a href="#howitwork">
              <button className="px-8 py-4 bg-white text-[#029fae] font-semibold rounded-xl border-2 border-[#029fae] hover:bg-[#029fae] hover:text-white transition-all duration-300">
                Get more info
              </button>
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-3">
              <CheckIcon />
              <span>99.7% Recovery Rate</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon />
              <span>Trusted by 10,000+ Satisfied Clients</span>
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

export default Call_to_action;
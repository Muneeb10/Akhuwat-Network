const About = () => {
  return (
      <section className="overflow-hidden lg:pt-[40px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="w-full py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Centered Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#029fae] mb-6">About Us</h2>
            {/* Centered Description */}
            <div className="text-lg text-gray-600 space-y-4 mx-auto max-w-3xl">
              <p>
                Welcome to our company! We're dedicated to providing innovative solutions that help our customers achieve their 
                goals. With years of experience in our industry, we've developed a deep understanding of our clients' needs.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between -mx-4">
            {/* Left Side Images */}
            <div className="w-full px-4 lg:w-6/12 flex justify-center">
              <div className="flex flex-col sm:flex-row items-center justify-center -mx-3 sm:-mx-4">
                <div className="w-full sm:w-1/2 px-3 sm:px-4">
                  <div className="py-3 sm:py-4">
                    <img src="https://akhuwat.org.pk/uploads/images/1748108389607-leader-khawar.png" alt="" className="w-full rounded-2xl"/>
                  </div>
                  <div className="py-3 sm:py-4">
                    <img src="https://akhuwat.org.pk/uploads/images/1748108454953-leader-izhar.png" alt="" className="w-full rounded-2xl"/>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-3 sm:px-4">
                  <div className="relative z-10 my-4">
                    <img src="https://akhuwat.org/wp-content/uploads/2024/04/dfsdf-150x150.jpg" alt="" className="w-full rounded-2xl"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="w-full pt-10 px-4 lg:w-1/2 xl:w-5/12 text-center lg:text-left">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-[#029fae]">Our Story</span>
                <p className="mb-5 text-base text-body-color dark:text-dark-6 text-justify">
                  Alkhidmat Foundation was established with a simple yet powerful vision: to eliminate poverty through interest-free microfinance
                  based on the Islamic principle of Qard-e-Hasna (benevolent loan). What started as a small initiative has grown into Pakistan's largest
                  microfinance institution.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-justify">
                  Our unique model operates through mosques, churches, temples, and community centers, fostering interfaith harmony while providing
                  financial services to those who need them most. We believe that access to interest-free credit is a fundamental right, not a privilege.
                </p>

                {/* List */}
                <div className="mb-10 text-gray-600 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckIcon />
                    <span>Largest interest-free microfinance organization in Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckIcon />
                    <span>Serving over 4.5 million families across the country</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckIcon />
                    <span>Zero interest policy based on Islamic principles</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckIcon />
                    <span>99.8% loan recovery rate demonstrating trust and reliability</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckIcon />
                    <span>Winner of multiple national and international awards</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Learn more about us
                    </button>
                  </a>
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
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
);

export default About;

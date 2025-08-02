import hero_image from '../assets/hero_image.jpeg';

import {
  ChartBarIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const Hero = () => {
  const features = [
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: 'Families Served',
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: 'Funds Disbursed',
    },
    {
      icon: <LightBulbIcon className="h-6 w-6" />,
      title: 'Interest Rate',
    },
  ];

  return (
    <div className="bg-[#f0f2f3] pt-28 md:pt-32 pb-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Empowering{' '}
              <span className="relative text-teal-600">Communities Through{' '}</span>
              Interest-Free Finance
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl">
              Join Pakistan’s largest microfinance organization providing
              Sharia-compliant financial solutions to uplift communities and
              create sustainable livelihoods.
            </p>
            {/* Responsive Buttons */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center lg:justify-start gap-4 md:gap-6 mb-12">
              <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Apply for Loan
                </button>
              </a>
              <a href="#howitwork">
                <button className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-medium transition-colors duration-300">
                  Learn More
                </button>
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 min-w-[200px]">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <div className="text-teal-500">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full flex justify-center">
              <div className="absolute -inset-4 rounded-3xl transform rotate-3 opacity-30"></div>
              <div className="relative p-10 rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-2">
                <img src={hero_image} alt="Business professionals discussing financial strategy" className="w-full rounded-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto max-h-[600px] object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

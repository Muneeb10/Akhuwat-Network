import React from 'react';
import image from '../assets/user-thumbs.png';

const ShareSuccessStory = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-no-repeat bg-contain z-0"style={{backgroundImage: `url(${image})`, backgroundPosition: '50px 50px',}}></div>
      {/* Centered + Shifted Content */}
      <div className="relative z-20 flex items-center justify-center h-full w-full px-4 sm:px-8">
        <div className="bg-[#f0f2f3] w-full max-w-4xl p-6 sm:p-10 rounded-lg text-center shadow-xl mx-auto lg:mr-30 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Share Your <span className="text-teal-600">Success</span> Story
          </h2>
          <p className="text-base sm:text-lg px-2 sm:px-6 md:px-10 text-gray-600 max-w-2xl mx-auto">
            Have you been helped by Alkhidmat Foundation? We would love to hear your story and inspire others in their journey towards financial independence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
            <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#029fae] to-[#027e8a] text-white font-semibold rounded-xl shadow-lg shadow-[#029fae]/30 hover:shadow-[#029fae]/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                Share Your Story
              </button>
            </a>

            <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#029fae] font-semibold rounded-xl border-2 border-[#029fae] hover:bg-[#029fae] hover:text-white transition-all duration-300">
                Get Started Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareSuccessStory;

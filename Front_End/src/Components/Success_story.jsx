import React, { useState, useEffect } from 'react';
import {
  FaStar,
  FaChartLine,
  FaMedal,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

const stories = [
   {
    id: 1,
    name: 'Ali Raza',
    city: 'Lahore',
    loanAmount: '$25,000',
    image: 'https://plus.unsplash.com/premium_photo-1683140963873-ca31ee2c22b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Ali transformed his small shop into a chain of retail outlets.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
  },
  {
    id: 2,
    name: 'Sara Khan',
    city: 'Karachi',
    loanAmount: '$30,000',
    image: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sara expanded her freelance career with our support.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    name: 'Hina Malik',
    city: 'Faisalabad',
    loanAmount: '$22,000',
    image: 'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Hina opened her boutique store and now employs 5 people.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
  },
  {
    id: 4,
    name: 'Usman Tariq',
    city: 'Islamabad',
    loanAmount: '$20,000',
    image: 'https://plus.unsplash.com/premium_photo-1682090154696-511d07b1d61b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Usman started his online business with this loan.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 5,
    name: 'Imran Ashraf',
    city: 'Peshawar',
    loanAmount: '$28,000',
    image: 'https://images.unsplash.com/photo-1489939078242-0a1dc4a08f06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Imran scaled his transport business significantly.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
  },
  {
    id: 6,
    name: 'Nida Zafar',
    city: 'Multan',
    loanAmount: '$26,000',
    image: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Nida launched a successful food delivery brand.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
];

const Success_story = () => {
  const [selected, setSelected] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3); 
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Adjust cards per page based on screen width
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
      // Reset start index when screen size changes
      setStartIndex(0);
    };
    // Set initial cards per page
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, stories.length - cardsPerPage));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f2f3] px-4 md:p-6 py-8 md:py-12">
      {/* Title Section - Responsive padding and text sizes */}
      <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto px-2">
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#029fae] flex items-center justify-center mr-3 md:mr-4">
            <FaStar className="text-white text-xl md:text-2xl" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#029fae]">
            Success Stories
          </h2>
        </div>
        <p className="mt-3 md:mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how our clients transformed their businesses with our financial solutions
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col items-center w-full max-w-6xl">
        {/* Scrollable Cards with Arrows - Responsive layout */}
        <div className="flex items-center justify-center w-full">
          {/* Left Arrow - Hide on smallest screens */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`hidden sm:block text-2xl p-2 md:p-3 rounded-full ${
              startIndex === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-[#029fae] hover:bg-[#e0f7fa]'
            } transition-colors`}
          >
            <FaArrowLeft />
          </button>

          {/* Cards - Responsive container */}
          <div className="flex justify-center gap-4 md:gap-8 mx-2 w-full overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 scrollbar-hide">
            {stories.slice(startIndex, startIndex + cardsPerPage).map((story) => (
              <div
                key={story.id}
                onClick={() => setSelected(story)}
                className="group min-w-[260px] sm:min-w-0 sm:w-full cursor-pointer bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex-shrink-0 sm:flex-shrink"
              >
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-32 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <p className="text-base md:text-lg font-bold text-gray-800">{story.name}</p>
                  <p className="text-sm md:text-base font-semibold text-[#029fae]">{story.city}</p>
                  <div className="flex justify-between items-center mt-1 md:mt-2">
                    <span className="text-xs md:text-sm text-gray-600">Loan: {story.loanAmount}</span>
                    <div className="flex text-[#029fae]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-xs md:text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - Hide on smallest screens */}
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= stories.length}
            className={`hidden sm:block text-2xl p-2 md:p-3 rounded-full ${
              startIndex + cardsPerPage >= stories.length
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#029fae] hover:bg-[#e0f7fa]'
            } transition-colors`}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Mobile Arrows - Show only on small screens */}
        <div className="flex justify-center mt-4 sm:hidden w-full">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`text-xl p-2 mx-2 rounded-full ${
              startIndex === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-[#029fae] hover:bg-[#e0f7fa]'
            } transition-colors`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= stories.length}
            className={`text-xl p-2 mx-2 rounded-full ${
              startIndex + cardsPerPage >= stories.length
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#029fae] hover:bg-[#e0f7fa]'
            } transition-colors`}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Pagination Dots - Always visible */}
        <div className="flex mt-4 md:mt-8 justify-center gap-2">
          {Array.from({ length: Math.ceil(stories.length / cardsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index * cardsPerPage)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                startIndex === index * cardsPerPage ? 'bg-[#029fae]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal - Responsive layout */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-2 md:p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-5xl rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-2xl m-2 md:m-4">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-[#029fae]"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#029fae]">{selected.name}</h3>
                  <p className="text-gray-500 text-base md:text-lg">{selected.city}</p>
                  <div className="flex text-[#029fae] mt-1 md:mt-2 justify-center sm:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-base md:text-xl" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-base md:text-lg">{selected.description}</p>

              {/* Feature Boxes - Responsive padding */}
              <div className="space-y-3 md:space-y-4">
                {[
                  {
                    icon: <FaChartLine className="text-base md:text-xl" />,
                    title: 'Growth',
                    desc: 'Achieved 200% business growth.',
                  },
                  {
                    icon: <FaMedal className="text-base md:text-xl" />,
                    title: 'Recognition',
                    desc: 'Recognized as top entrepreneur.',
                  },
                  {
                    icon: <FaCheckCircle className="text-base md:text-xl" />,
                    title: 'Impact',
                    desc: 'Created 10+ new jobs.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-[#e0f7fa] p-3 md:p-4 rounded-lg"
                  >
                    <div className="text-xl md:text-2xl mr-3 md:mr-4 text-[#029fae]">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-base md:text-lg text-[#029fae]">{item.title}</p>
                      <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video - Full width on mobile, half on larger screens */}
            <div className="w-full lg:w-1/2 relative bg-black aspect-video lg:aspect-auto">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                src={selected.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Close Button - Responsive positioning */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-2xl md:text-3xl bg-[#029fae] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-[#027e8a] transition-colors"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Success_story;
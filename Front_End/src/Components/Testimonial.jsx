import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  
  const testimonials = [
     {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Innovations",
      quote: "This service has transformed our customer engagement. The results speak for themselves - a 45% increase in retention!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Creative Solutions",
      quote: "Incredibly intuitive and powerful. Our team adopted it instantly and our productivity has skyrocketed.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CTO",
      company: "Future Tech",
      quote: "The implementation was seamless and the support team was exceptional. This is exactly what our company needed.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Operations Director",
      company: "Global Enterprises",
      quote: "We've reduced operational costs by 30% while improving service quality. A game-changer for our business.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Alex Morgan",
      role: "Founder & CEO",
      company: "StartUp Hub",
      quote: "This platform gave us the competitive edge we needed. Our growth trajectory has completely changed.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Only show current testimonial on mobile
  const getVisibleIndexes = () => {
    if (isMobile) {
      return [currentIndex];
    } else {
      const indexes = [];
      const total = testimonials.length;
      indexes.push((currentIndex - 1 + total) % total);
      indexes.push(currentIndex);
      indexes.push((currentIndex + 1) % total);
      return indexes;
    }
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#029fae' }}>
            Customer Testimonials
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Hear what our clients have to say about their experience with our services
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 md:p-8">
          {/* Testimonial content */}
          <div className="text-center mb-10 transition-all duration-500">
            <div className="text-xl md:text-2xl lg:text-3xl font-light italic text-gray-700 mb-8">
              "{testimonials[currentIndex].quote}"
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#029fae' }}>
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
          
          {/* Image carousel */}
          <div className="flex items-center justify-center">
            {/* Left arrow - always visible */}
            <button 
              onClick={goToPrevious}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
              style={{ color: '#029fae' }}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Images - responsive based on screen size */}
            <div className="flex items-center justify-center mx-2">
              {visibleIndexes.map((index, i) => {
                // On mobile, all visible images are center
                const isCenter = isMobile || i === 1;
                
                return (
                  <div 
                    key={testimonials[index].id}
                    className={`mx-2 transition-all duration-500 ease-in-out ${
                      isCenter ? 'scale-110 z-10' : 'scale-90 opacity-80'
                    }`}
                    onClick={() => !isMobile && setCurrentIndex(index)}
                  >
                    <img 
                      src={testimonials[index].image} 
                      alt={testimonials[index].name}
                      className={`rounded-full border-4 border-white shadow-lg ${
                        isMobile ? 'w-24 h-24 cursor-default' : 'cursor-pointer w-16 h-16 md:w-20 md:h-20'
                      } ${isCenter ? 'lg:w-24 lg:h-24' : ''}`}
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Right arrow - always visible */}
            <button 
              onClick={goToNext}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
              style={{ color: '#029fae' }}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#029fae]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
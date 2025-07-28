// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="fixed bottom-26 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-all z-50" aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;

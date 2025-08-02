import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const sectionIds = ['home', 'about', 'services', 'howitwork', 'stories', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
          console.log("Visible section:", entry.target.id); // 🔍 debug log
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const whatsappLink = `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`;

  return (
    <header className={`fixed z-50 transition-all duration-500 bg-white rounded-xl py-2 ${isScrolled ? 'top-0' : 'top-5'} w-[95%] left-2 right-8 sm:left-15 sm:right-15 sm:w-auto shadow-lg`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Alkhidmat Foundation</h1>
              <p className="text-xs text-gray-500">Interest-Free Microfinance</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Services', 'How it work', 'Stories', 'Contact'].map((item) => {
              const hrefId = item.toLowerCase().replace(/\s+/g, '');
              return (
                <a key={item} href={`#${hrefId}`} onClick={() => setActiveLink(hrefId)} className={`text-gray-600 font-normal hover:text-teal-500 transition-colors duration-300 ${ activeLink === hrefId ? 'text-teal-600 font-semibold' : ''}`}>
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-teal-600 text-2xl focus:outline-none">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 space-y-2">
          <div className="flex flex-col space-y-1">
            {['Home', 'About', 'Services', 'How it work', 'Stories', 'Contact'].map((item) => {
              const hrefId = item.toLowerCase().replace(/\s+/g, '');
              return (
                <a key={item} href={`#${hrefId}`} onClick={() => { setActiveLink(hrefId); setMenuOpen(false);}} className={`text-gray-600 font-medium hover:text-teal-500 transition-colors duration-300 ${ activeLink === hrefId ? 'text-teal-600 font-semibold' : ''}`}>
                  {item}
                </a>
              );
            })}
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg text-center">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

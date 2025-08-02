import {HeartIcon, EnvelopeIcon, PhoneIcon, MapPinIcon} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { link_1: 'Our Story',  link_2: "Alkhidmat Microfinance", link_3: "Apply for Loan"},
    { link_1: 'Mission & Vision', link_2: "Alkhidmat Health", link_3: "Contact Us"},
    { link_1: 'Leadership Team', link_2: "Alkhidmat Education", link_3: "Branch Locator"},
    { link_1: 'Awards & Recognition', link_2: "Alkhidmat Relief", link_3: "FAQs"},
    { link_1: 'Annual Reports', link_2: "Women Empowerment", link_3: "Help Center"},
  ];

  const contactInfo = [
    { icon: <MapPinIcon className="w-6 h-6 text-teal-500" />, text: 'New Shehbaz Building Thandi Sadak Hydrabad' },
    { icon: <EnvelopeIcon className="w-6 h-6 text-teal-500" />, text: 'Info@alkhidmatfoundation.online' },
    { icon: <PhoneIcon className="w-6 h-6 text-teal-500" />, text: '+92 3354571620' }
  ];

  return (
    <footer className="relative bg-[#f0f2f3] text-dark overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-600"></div> 
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Alkhidmat Foundation</h1>
                <p className="text-xs text-gray-500">Interest-Free Microfinance</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-xs">
              Empowering communities through interest-free microfinance based on Islamic principles of brotherhood and compassion since 2001.
            </p>
            
            {/* Tagline with animation */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 hover:bg-teal-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-100 hover:bg-teal-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-100 hover:bg-teal-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-100 hover:bg-teal-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">About Us</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-teal-500 flex items-center transition-all duration-300 group">
                    {link.link_1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">Programs</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-teal-500 flex items-center transition-all duration-300 group">
                    {link.link_2}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">Support</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-teal-500 flex items-center transition-all duration-300 group">
                    {link.link_3}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3">{item.icon}</span>
                  <span className="text-gray-600 hover:text-teal-500 transition-colors duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            {/* Opening hours */}
            <div className="mt-6 p-4 bg-gray-200/50 rounded-lg border border-teal-500">
              <h4 className="font-medium text-gray-600 mb-2">Working Hours</h4>
              <p className="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM</p>
              <p className="text-gray-600 text-sm">Sat-Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-500 my-12"></div>
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm flex items-center">
            &copy; {currentYear} Alkhidmat Foundation. All rights reserved.
            <span className="hidden sm:inline"> Made with </span>
            <HeartIcon className="w-4 h-4 text-pink-500 mx-1" /> 
            for humanity
          </p>
          <div className="flex flex-wrap justify-center mt-4 md:mt-0 gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookies', 'GDPR'].map((item, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

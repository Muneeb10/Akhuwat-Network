import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

import Header from './Components/Header.jsx';
import HeroSection from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Footer from './Components/Footer.jsx';
import Form from './Components/Form.jsx';
import Services from './Components/Services.jsx';
import Office_Location from './Components/Office_Location.jsx';
import Map from './Components/Map.jsx';
import Call_to_action from './Components/Call_to_action.jsx';
import Newsletter from './Components/Newsletter.jsx';
import Testimonial from './Components/Testimonial.jsx';
import WhatsAppIcon from './Components/Whatsapp_Icon.jsx';
import Howitwork from './Components/Howitwork.jsx';
import Eligibility from './Components/Eligibility.jsx';
import LoanCategories from './Components/Loan_Categories.jsx';
import Success_story from './Components/Success_story.jsx';
import ShareSuccessStory from './Components/Share_Success_Story.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Loader from './Components/Loader.jsx';
import Page_404 from './Components/Page_404.jsx'


function MainPage() {
  return (
    <>
      <Header />

      <div id="home" className="min-h-screen">
        <HeroSection />
      </div>

      <div id="about" className="min-h-screen">
        <About />
      </div>

      <Call_to_action />

      <div id="services" className="min-h-screen">
        <Services />
      </div>

      <div id="howitwork" className="min-h-screen">
        <Howitwork />
      </div>

      <Eligibility />
      <LoanCategories />

      <div id="stories" className="min-h-screen">
        <Success_story />
      </div>

      <ShareSuccessStory />

      <div id="contact" className="min-h-screen">
        <Form />
      </div>

      <Testimonial />
      <Office_Location />
      <Map />
      <Newsletter />
      <Footer />
      <WhatsAppIcon />
      <ScrollToTop />
    </>
  );
}



const TrackPageViews = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.gtag?.('config', 'AW-17408747407', {
      page_path: location.pathname + location.search,
      page_title: document.title
    });
  }, [location]);

  return children;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <TrackPageViews>
         <Routes>
           <Route path="/" element={<MainPage />} />
           <Route path="*" element={<Page_404 />} />
         </Routes>
      </TrackPageViews>
    </Router>
  );
}

export default App;

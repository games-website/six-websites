import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CricketId from './pages/CricketId';
import CasinoId from './pages/CasinoId';
import Partners from './pages/Partners';
import Services from './pages/Services';
const useScrollAnimation = () => {
  const location = useLocation();
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal')) {
            entry.target.classList.remove('reveal');
            entry.target.classList.add('animate', 'slide-up');
            if (entry.target.style.transitionDelay) {
              entry.target.style.animationDelay = entry.target.style.transitionDelay;
            }
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]); 
};
function App() {
  useScrollAnimation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cricket-id" element={<CricketId />} />
        <Route path="/casino-id" element={<CasinoId />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
export default App;

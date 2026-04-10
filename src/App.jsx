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
import FantasySports from './pages/FantasySports';
import FeaturesPage from './pages/FeaturesPage';
import FootballBetting from './pages/FootballBetting';
import HorseRaceBetting from './pages/HorseRaceBetting';
import HowToPlay from './pages/HowToPlay';
import KabaddiBetting from './pages/KabaddiBetting';
import LiveCasino from './pages/LiveCasino';
import LiveCricket from './pages/LiveCricket';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Rules from './pages/Rules';
import TennisBetting from './pages/TennisBetting';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import CricketBetting from './pages/CricketBetting';
import Disclaimer from './pages/Disclaimer';
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cricket-betting" element={<CricketBetting />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/fantasy-sports" element={<FantasySports />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/football-betting" element={<FootballBetting />} />
        <Route path="/horse-race-betting" element={<HorseRaceBetting />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/kabaddi-betting" element={<KabaddiBetting />} />
        <Route path="/live-casino" element={<LiveCasino />} />
        <Route path="/live-cricket" element={<LiveCricket />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/tennis-betting" element={<TennisBetting />} />
      </Routes>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
export default App;

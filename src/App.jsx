import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import SEOKeywords from './components/SEOKeywords';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Platforms from './pages/Platforms';
import BlogPage from './pages/BlogPage';
import ReferralCode from './pages/ReferralCode';
import Cricket from './pages/Cricket';
import Football from './pages/Football';
import Tennis from './pages/Tennis';
import LiveCricketBetting from './pages/LiveCricketBetting';
import Kabaddi from './pages/Kabaddi';
import HorseRaceBetting from './pages/HorseRaceBetting';
import FantasySports from './pages/FantasySports';
import Casino from './pages/Casino';
import RulesRegulations from './pages/RulesRegulations';
import HowToPlay from './pages/HowToPlay';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/blogs" element={<BlogPage />} />

          {/* <Route path="/app-download" element={<AppDownload />} /> */}
          <Route path="/referral" element={<ReferralCode />} />
          <Route path="/cricket-betting" element={<Cricket />} />
          <Route path="/football-betting" element={<Football />} />
          <Route path="/tennis-betting" element={<Tennis />} />
          <Route path="/live-cricket" element={<LiveCricketBetting />} />
          <Route path="/kabaddi-betting" element={<Kabaddi />} />
          <Route path="/horse-race-betting" element={<HorseRaceBetting />} />
          <Route path="/fantasy-sports" element={<FantasySports />} />
          <Route path="/live-casino" element={<Casino />} />
          <Route path="/rules" element={<RulesRegulations />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <SEOKeywords />
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}
export default App;

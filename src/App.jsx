import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import CricketBetting from './pages/CricketBetting';
import Disclaimer from './pages/Disclaimer';
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
  );
}

export default App;

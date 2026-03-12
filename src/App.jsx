import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Disclaimer from './pages/Disclaimer';
import Rules from './pages/Rules';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HowToPlay from './pages/HowToPlay';
import RefundPolicy from './pages/RefundPolicy';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FeaturesPage from './pages/FeaturesPage';
import Blogs from './pages/Blogs';
import CricketBetting from './pages/CricketBetting';
import FootballBetting from './pages/FootballBetting';
import TennisBetting from './pages/TennisBetting';
import LiveCricket from './pages/LiveCricket';
import KabaddiBetting from './pages/KabaddiBetting';
import HorseRaceBetting from './pages/HorseRaceBetting';
import FantasySports from './pages/FantasySports';
import LiveCasino from './pages/LiveCasino';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/how-to-play" element={<HowToPlay />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/cricket-betting" element={<CricketBetting />} />
      <Route path="/football-betting" element={<FootballBetting />} />
      <Route path="/tennis-betting" element={<TennisBetting />} />
      <Route path="/live-cricket" element={<LiveCricket />} />
      <Route path="/kabaddi-betting" element={<KabaddiBetting />} />
      <Route path="/horse-race-betting" element={<HorseRaceBetting />} />
      <Route path="/fantasy-sports" element={<FantasySports />} />
      <Route path="/live-casino" element={<LiveCasino />} />
    </Routes>
  );
}

export default App;

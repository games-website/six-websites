import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AppDownload from './pages/AppDownload';
import Basketball from './pages/Basketball';
import BlogPage from './pages/BlogPage';
import Casino from './pages/Casino';
import Cricket from './pages/Cricket';
import Disclaimer from './pages/Disclaimer';
import FantasySports from './pages/FantasySports';
import Football from './pages/Football';
import HorseRaceBetting from './pages/HorseRaceBetting';
import HowToPlay from './pages/HowToPlay';
import Kabaddi from './pages/Kabaddi';
import LiveCricketBetting from './pages/LiveCricketBetting';
import Platforms from './pages/Platforms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReferralCode from './pages/ReferralCode';
import RefundPolicy from './pages/RefundPolicy';
import Rules from './pages/Rules';
import RulesRegulations from './pages/RulesRegulations';
import Services from './pages/Services';
import Tennis from './pages/Tennis';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/app-download" element={<AppDownload />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/fantasy-sports" element={<FantasySports />} />
          <Route path="/football" element={<Football />} />
          <Route path="/horse-race-betting" element={<HorseRaceBetting />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/kabaddi" element={<Kabaddi />} />
          <Route path="/live-cricket-betting" element={<LiveCricketBetting />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/referral-code" element={<ReferralCode />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/rules-regulations" element={<RulesRegulations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tennis" element={<Tennis />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

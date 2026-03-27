import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Platforms from './pages/Platforms';
import Rules from './pages/Rules';
import Football from './pages/Football';
import Casino from './pages/Casino';
import Cricket from './pages/Cricket';
import Tennis from './pages/Tennis';
import Basketball from './pages/Basketball';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';
import RulesRegulations from './pages/RulesRegulations';
import ReferralCode from './pages/ReferralCode';
import BlogPage from './pages/BlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Kabaddi from './pages/Kabaddi';
import HorseRaceBetting from './pages/HorseRaceBetting';
import LiveCricketBetting from './pages/LiveCricketBetting';
import HowToPlay from './pages/HowToPlay';
import AppDownload from './pages/AppDownload';

import FantasySports from './pages/FantasySports';
import './index.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="rules" element={<Rules />} />
          <Route path="football" element={<Football />} />
          <Route path="casino" element={<Casino />} />
          <Route path="cricket" element={<Cricket />} />
          <Route path="tennis" element={<Tennis />} />
          <Route path="basketball" element={<Basketball />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="rules-and-regulations" element={<RulesRegulations />} />
          <Route path="referral-code" element={<ReferralCode />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="kabaddi" element={<Kabaddi />} />
          <Route path="kabaddi" element={<Kabaddi />} />
          <Route path="horse-race-betting" element={<HorseRaceBetting />} />
          <Route path="live-cricket-betting" element={<LiveCricketBetting />} />
          <Route path="how-to-play" element={<HowToPlay />} />
          <Route path="app-download" element={<AppDownload />} />



          <Route path="fantasy-sports" element={<FantasySports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

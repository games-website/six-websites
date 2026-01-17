import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Marquee from './components/Marquee';
import Sidebar from './components/Sidebar';
import LiveCricket from './components/LiveCricket';
import UpcomingMatches from './components/UpcomingMatches';
import CasinoGames from './components/CasinoGames';
import ExclusiveSlots from './components/ExclusiveSlots';
import RegistrationProcess from './components/RegistrationProcess';
import CustomerCare from './components/CustomerCare';
import InfoSections from './components/InfoSections';
import ExpertCarousel from './components/ExpertCarousel';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = ['Home', 'In-Play', 'Cricket', 'Casino', 'Live Casino', 'Review', 'Registration', 'Support'];

  return (
    <div className="bg-[#111111] text-white selection:bg-yellow-500 selection:text-black pb-20 md:pb-0 min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems} />

      <main className="container mx-auto md:px-4 py-4 max-w-7xl">
        {/* SECTION 1: Ticker */}
        <Marquee />

        {/* SECTION 2: Hero Slider */}
        <HeroSlider />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {/* LEFT SIDEBAR (Desktop Only) */}
          <Sidebar />

          {/* CENTER CONTENT */}
          <div className="lg:col-span-3 space-y-8">
            <div id="sports"><LiveCricket /></div>
            <div id="in-play"><UpcomingMatches /></div>
            <div id="casino"><CasinoGames /></div>
            <ExclusiveSlots />
            <div id="register"><RegistrationProcess /></div>
            <div id="support"><CustomerCare /></div>
          </div>
        </div>

        {/* EXPANDED CONTENT GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-0">
          {/* Main Info Column */}
          <div className="md:col-span-8 space-y-12">
            <div id="reviews">
              <InfoSections />
              <ExpertCarousel />
            </div>
          </div>

          {/* Sidebar Info (Desktop) */}
          <RightSidebar />
        </div>

      </main>

      <Footer />
      <MobileNav />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import SportsSection from './components/SportsSection';
import CasinoSection from './components/CasinoSection';
import LiveSection from './components/LiveSection';
import PromoBanner from './components/PromoBanner';
import PlatformTable from './components/PlatformTable';
import LegalSection from './components/LegalSection';
import StepsSection from './components/StepsSection';
import BonusesSection from './components/BonusesSection';
import PaymentProof from './components/PaymentProof';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div id="home">
        <Hero />
      </div>

      <div className="container">
        <IntroSection />
        <div id="sports">
          <SportsSection />
        </div>
        <div id="casino">
          <CasinoSection />
        </div>
        <div id="live">
          <LiveSection />
        </div>
        <div id="promotions">
          <PromoBanner />
          <BonusesSection />
        </div>
        <PlatformTable />
        <LegalSection />
        <StepsSection />
        <PaymentProof />
        <FAQSection />
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

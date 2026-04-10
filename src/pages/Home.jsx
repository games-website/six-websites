import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import Education from '../components/Education';
import Download from '../components/Download';
import UserFeedback from '../components/UserFeedback';
import OfficialStats from '../components/OfficialStats';
import BettingIdGuide from '../components/BettingIdGuide';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import IndustryRecognition from '../components/IndustryRecognition';
import SecurityTrust from '../components/SecurityTrust';
import ExploreSection from '../components/ExploreSection';
import LegalCompliance from '../components/LegalCompliance';
import GetIDStart from '../components/GetIDStart';
import PaymentSEO from '../components/PaymentSEO';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import CTASection from '../components/CTASection';

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white">
            <Header />
            <main>
                <Hero />
                <About />
                <Features />
                <Benefits />
                <UserFeedback />
                <OfficialStats />
                <BettingIdGuide />
                <IndustryRecognition />
                <SecurityTrust />
                <ExploreSection />
                <LegalCompliance />
                <GetIDStart />
                <PaymentSEO />
                <Team />
                <Education />
                <Download />
                <Testimonials />
                <FAQ />
            </main>
            <CTASection />
            <div className="bg-gray-100">
                <SEOKeywords />
            </div>
            <Footer />
        </div>
    );
}

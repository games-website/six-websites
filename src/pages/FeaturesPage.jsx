import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { ShieldCheck, Zap, Smartphone, UserCheck, Globe, Lock } from 'lucide-react';

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-gold uppercase tracking-tight">Unmatched Features</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Discover why Goldplay is the preferred choice for millions of users worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md">
                        <div className="text-brand-gold mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                            <ShieldCheck size={36} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">100% Secure</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            We employ advanced encryption protocols to safeguard your personal data and financial transactions, ensuring specialized security at every step.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md">
                        <div className="text-brand-gold mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                            <Zap size={36} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Experience zero lag. Our optimized platform ensures instant bet placement and real-time updates for a seamless gaming experience.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md">
                        <div className="text-brand-gold mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                            <Smartphone size={36} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Friendly</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Bet on the go with our fully responsive design, optimized for all mobile devices and tablets without compromising on features.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md">
                        <div className="text-brand-gold mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                            <UserCheck size={36} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Registration</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Sign up in seconds. Our simplified registration process gets you your betting ID instantly so you can start playing right away.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md">
                        <div className="text-brand-gold mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                            <Globe size={36} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Markets</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Access a vast array of international sports leagues and casino games from around the world, all in one place.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md">
                        <div className="text-brand-gold mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                            <Lock size={36} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Privacy</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Your privacy is paramount. We adhere to strict data protection policies and never share your information with third parties.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://wa.me/12397991318?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gold-gradient hover:bg-brand-gold text-white font-bold py-4 px-12 rounded-full text-lg transition-transform hover:scale-105 shadow-lg shadow-brand-gold/20"
                    >
                        Experience It Now
                    </a>
                </div>
            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}

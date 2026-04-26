import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { ShieldCheck, Zap, Smartphone, UserCheck, Globe, Lock } from 'lucide-react';

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">Unmatched Features</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover why Mahadev Book is the preferred choice for millions of users worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all hover:-translate-y-1">
                        <div className="text-yellow-500 mb-6">
                            <ShieldCheck size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">100% Secure</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We employ advanced encryption protocols to safeguard your personal data and financial transactions, ensuring specialized security at every step.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all hover:-translate-y-1">
                        <div className="text-yellow-500 mb-6">
                            <Zap size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Experience zero lag. Our optimized platform ensures instant bet placement and real-time updates for a seamless gaming experience.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all hover:-translate-y-1">
                        <div className="text-yellow-500 mb-6">
                            <Smartphone size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Mobile Friendly</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Bet on the go with our fully responsive design, optimized for all mobile devices and tablets without compromising on features.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all hover:-translate-y-1">
                        <div className="text-yellow-500 mb-6">
                            <UserCheck size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Easy Registration</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Sign up in seconds. Our simplified registration process gets you your betting ID instantly so you can start playing right away.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all hover:-translate-y-1">
                        <div className="text-yellow-500 mb-6">
                            <Globe size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Global Markets</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Access a vast array of international sports leagues and casino games from around the world, all in one place.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all hover:-translate-y-1">
                        <div className="text-yellow-500 mb-6">
                            <Lock size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Data Privacy</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Your privacy is paramount. We adhere to strict data protection policies and never share your information with third parties.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://wa.me/6289183063?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded-full text-lg transition-transform hover:scale-105 shadow-lg shadow-yellow-500/20"
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

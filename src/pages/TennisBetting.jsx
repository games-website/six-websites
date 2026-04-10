import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const TennisBetting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="bg-gray-100 py-16 px-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1 min-w-[300px] text-center md:text-left">
                            <div className="border border-brand-gold/20 bg-white/50 backdrop-blur-sm rounded-full py-2 px-6 mb-6 inline-block text-brand-gold text-lg font-bold tracking-wide">
                                🎾 Goldplay Tennis Betting
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent">
                                Bet on Live Tennis Matches
                            </h1>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-xl font-medium">
                                Join <span className="text-brand-gold font-bold">Goldplay</span> for the ultimate tennis betting experience. From Wimbledon to the US Open, bet on every serve and volley with real-time odds.
                            </p>
                            <a
                                href="https://wa.me/15208005239?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gold-gradient text-white font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(191,149,63,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] transition-all duration-300"
                            >
                                <MessageCircle size={24} /> GET ID & PLAY NOW
                            </a>
                        </div>
                        <div className="flex-1 min-w-[300px] w-full max-w-lg">
                            <img
                                src="/images/app-mockup.jpg"
                                alt="Goldplay Tennis Betting"
                                className="w-full rounded-2xl shadow-2xl shadow-black/10 border-2 border-brand-gold/20 transform hover:scale-[1.02] transition-transform duration-500"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-white py-20 px-4">
                    <div className="container mx-auto max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">How to Start Betting on <span className="text-brand-gold">Tennis</span></h2>
                        <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full mb-12"></div>

                        <div className="bg-gray-50 border border-gray-100 p-10 rounded-3xl shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-5 opacity-5">
                                <span className="text-9xl font-black text-gray-900">?</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg relative z-10 font-medium">
                                Getting started is simple. Register on our official platform to create your <span className="text-brand-gold font-bold">Goldplay ID</span>. Log in, explore live tennis markets, and place your bets instantly. Enjoy fast deposits and instant withdrawals with zero hassle.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Why Choose Us?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium">We offer the best tennis betting ecosystem in India, tailored for speed and security.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Live Betting", desc: "Bet on every point, set, and game as it happens.", icon: "⚡" },
                                { title: "Major Tournaments", desc: "Grand Slams, ATP, WTA, and Challenger events.", icon: "🏆" },
                                { title: "Secure Transactions", desc: "100% safe deposits and instant withdrawals.", icon: "🔒" },
                                { title: "Mobile Friendly", desc: "Bet on the go with our optimized mobile interface.", icon: "📱" },
                                { title: "Exclusive Bonuses", desc: "Get rewards and cashback on big matches.", icon: "🎁" },
                                { title: "24/7 Support", desc: "Round-the-clock assistance for all your queries.", icon: "🎧" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl hover:border-brand-gold/50 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-md">
                                    <div className="text-4xl mb-4 text-brand-gold bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center shadow-inner">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-20 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 md:p-14 shadow-lg">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 border-l-4 border-brand-gold pl-4 uppercase tracking-tight">Key Features</h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "Live Match Tracking", desc: "Follow live scores and odds updates instantly." },
                                    { title: "Flexible Betting Options", desc: "Singles, doubles, set winner, and over/under markets." },
                                    { title: "Instant Updates", desc: "Zero latency odds for the competitive edge." },
                                    { title: "Bank-Grade Security", desc: "Your data and funds are protected by advanced encryption." }
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-xs font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-bold text-lg">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm font-medium">{feature.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl border border-gray-200 bg-white rounded-3xl p-10 md:p-16 shadow-xl">
                        <div className="mb-12">
                            <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Responsible Gaming</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                                At <span className="text-brand-gold font-bold">Goldplay</span>, we prioritize your well-being. Set your limits and bet responsibly.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/15208005239?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 text-xl"
                        >
                            <MessageCircle size={28} /> JOIN Goldplay BOOK TODAY
                        </a>
                    </div>
                </section>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default TennisBetting;

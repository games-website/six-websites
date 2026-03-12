import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const FootballBetting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="bg-zinc-900 py-16 px-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1 min-w-[300px] text-center md:text-left">
                            <div className="border border-yellow-500/50 bg-black/30 backdrop-blur-sm rounded-full py-2 px-6 mb-6 inline-block text-yellow-400 text-lg font-bold tracking-wide">
                                ⚽ Mahadev Book Football Betting
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                                Experience Premium Football Betting
                            </h1>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                                Passionate about Football? <span className="text-yellow-400 font-bold">Mahadev Book</span> covers Premier League, La Liga, UCL, and ISL with competitive odds and real-time updates.
                            </p>
                            <a
                                href="https://wa.me/15208005239"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300"
                            >
                                <MessageCircle size={24} /> START BETTING NOW
                            </a>
                        </div>
                        <div className="flex-1 min-w-[300px] w-full max-w-lg">
                            <img
                                src="/images/football_fantasy_hero_new.png"
                                alt="Mahadev Book Football Betting"
                                className="w-full rounded-2xl shadow-2xl shadow-black/50 border-2 border-yellow-500/20 transform hover:scale-[1.02] transition-transform duration-500"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-black py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose <span className="text-yellow-400">Mahadev Book</span>?</h2>
                            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Extensive Coverage", desc: "Premier League, La Liga, Serie A, Champions League, FIFA World Cup, and more.", icon: "🌍" },
                                { title: "Advanced Options", desc: "Half-Time/Full-Time, Corners, Cards, Player Props, and Handicap betting.", icon: "⚡" },
                                { title: "Diverse Markets", desc: "1X2, Double Chance, Draw No Bet, BTTS, and Over/Under Goals.", icon: "📊" },
                                { title: "Goal Markets", desc: "First Goal Scorer, Anytime Scorer, Correct Score, and detailed match combos.", icon: "⚽" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-zinc-800 border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:bg-[#252f44] flex gap-5 items-start">
                                    <div className="text-4xl bg-black/30 min-w-[64px] h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-900 py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Pro Football Betting Tips</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-black p-8 rounded-2xl border-t-4 border-yellow-500 shadow-xl">
                                <h3 className="text-yellow-400 font-bold text-xl mb-4">Analyze Stats</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Study team form, H2H records, home/away performance, and injury news before placing bets.</p>
                            </div>
                            <div className="bg-black p-8 rounded-2xl border-t-4 border-yellow-500 shadow-xl">
                                <h3 className="text-yellow-400 font-bold text-xl mb-4">Bankroll Management</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Set a budget and stick to it. Never chase losses and use consistent stake sizing.</p>
                            </div>
                            <div className="bg-black p-8 rounded-2xl border-t-4 border-yellow-500 shadow-xl">
                                <h3 className="text-yellow-400 font-bold text-xl mb-4">Explore Markets</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Look beyond match winners. Value often lies in corners, cards, or goal markets.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-[#1a2236] to-[#0d1425] py-20 px-4">
                    <div className="container mx-auto max-w-4xl text-center border border-yellow-500/30 bg-black/20 backdrop-blur-md rounded-3xl p-10 md:p-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">
                            Join <span className="text-yellow-500">Mahadev Book</span> Today
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Register now and get your Welcome Bonus to start wagering on your favourite teams and leagues.
                        </p>
                        <a
                            href="https://wa.me/15208005239"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 text-xl"
                        >
                            <MessageCircle size={28} /> Get Your ID on WhatsApp
                        </a>
                        <p className="text-gray-500 text-sm mt-8">
                            Gamble responsibly. Terms and conditions apply. 18+ only.
                        </p>
                    </div>
                </section>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default FootballBetting;

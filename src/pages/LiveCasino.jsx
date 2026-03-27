import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const LiveCasino = () => {
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
                            <div className="border border-red-500/50 bg-red-900/20 backdrop-blur-sm rounded-full py-2 px-6 mb-6 inline-block text-red-400 text-lg font-bold tracking-wide animate-pulse">
                                ♣️♠️ Live Casino Action
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                                Real Casino Experience
                            </h1>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                                Play with live professional dealers. Roulette, Blackjack, Baccarat, and Poker — streamed in HD to your device. Join <span className="text-yellow-400 font-bold">Mahadev Book</span> for the ultimate casino thrill.
                            </p>
                            <a
                                href="https://wa.me/447735317489"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300"
                            >
                                <MessageCircle size={24} /> PLAY LIVE NOW
                            </a>
                        </div>
                        <div className="flex-1 min-w-[300px] w-full max-w-lg">
                            <img
                                src="/images/casino_hero_new.jpg"
                                alt="Mahadev Book Live Casino"
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
                            <h2 className="text-3xl font-bold text-white mb-4">Popular Live Games</h2>
                            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Live Roulette", desc: "European, American & Lightning Roulette.", icon: "🎡" },
                                { title: "Live Blackjack", desc: "Classic tables & high-roller VIP suites.", icon: "🃏" },
                                { title: "Live Baccarat", desc: "Speed Baccarat, Squeeze & No Commission.", icon: "🧧" },
                                { title: "Teen Patti", desc: "India's favourite 3-card poker game.", icon: "🇮🇳" },
                                { title: "Andar Bahar", desc: "Simple, fast, and exciting card game.", icon: "🅰️" },
                                { title: "Game Shows", desc: "Crazy Time, Monopoly Live, Dream Catcher.", icon: "🎉" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-zinc-800 border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:-translate-y-2">
                                    <div className="text-4xl mb-4 text-yellow-400 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-900 py-20 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="bg-black p-8 rounded-2xl border border-yellow-500/20">
                                <h3 className="text-2xl font-bold text-white mb-6">Experience the VIP Life</h3>
                                <p className="text-gray-300 mb-6">
                                    Our VIP tables offer higher limits, exclusive dealers, and private gaming rooms. Enjoy 24/7 access to the most premium casino experience online.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "High stakes tables available",
                                        "Personal account manager",
                                        "Exclusive cashback offers",
                                        "Instant VIP withdrawals"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gold text-yellow-500 font-semibold">
                                            <span>👑</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">Fair & Secure Gaming</h3>
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    All our live games are provided by top-tier providers like Evolution Gaming, Ezugi, and Pragmatic Play. We ensure 100% fairness and transparency in every deal, spin, and roll.
                                    <br /><br />
                                    Your funds are safe, and your payouts are guaranteed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl bg-gradient-to-t from-[#1a2236] to-[#0d1425] rounded-3xl p-10 md:p-16 border border-white/5">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">
                            Place Your Bets
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join <span className="text-yellow-500 font-bold">Mahadev Book Casino</span> and win big today!
                        </p>
                        <a
                            href="https://wa.me/447735317489"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 text-xl"
                        >
                            <MessageCircle size={28} /> Get Your ID Now
                        </a>
                    </div>
                </section>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default LiveCasino;

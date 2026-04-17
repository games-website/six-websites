import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const LiveCricket = () => {
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
                            <div className="border border-green-500/50 bg-green-900/20 backdrop-blur-sm rounded-full py-2 px-6 mb-6 inline-block text-green-400 text-lg font-bold tracking-wide animate-pulse">
                                🔴 LIVE NOW
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase text-white">
                                Live Cricket Betting
                            </h1>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                                Experience the thrill of every ball with <span className="text-yellow-400 font-bold">Mahadev Book</span>. Bet on live T20s, IPL, and ODIs with the fastest odds update in the market.
                            </p>
                            <a
                                href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300"
                            >
                                <MessageCircle size={24} /> BET ON LIVE MATCHES
                            </a>
                        </div>
                        <div className="flex-1 min-w-[300px] w-full max-w-lg">
                            <img
                                src="/images/live_cricket_hero_new.jpg"
                                alt="Mahadev Book Live Cricket"
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
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">How to Bet Live?</h2>
                            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                {[
                                    { title: "Create ID", body: "Sign up via our official WhatsApp channel instantly." },
                                    { title: "Login", body: "Access the live betting dashboard with your credentials." },
                                    { title: "Deposit", body: "Use UPI, GPay, or Net Banking for instant funds." },
                                    { title: "Bet Live", body: "Place bets on ongoing matches with real-time odds." },
                                    { title: "Withdraw", body: "Cash out your winnings instantly 24/7." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-yellow-500 flex items-center justify-center text-yellow-500 font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{step.title}</h4>
                                            <p className="text-gray-400 text-sm">{step.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-zinc-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Live Betting?</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Live betting allows you to analyze the game flow and place strategic bets. Hedging your positions, betting on the next wicket, or predicting runs in the next over adds a layer of excitement and skill to watching cricket.
                                </p>
                                <div className="p-4 bg-black rounded-xl border-l-4 border-yellow-500">
                                    <p className="text-gray-400 italic text-sm">"The fastest withdrawals and best live odds make Mahadev Book my go-to choice." - User Review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-900 py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">The Mahadev Book Advantage</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Trusted Platform", desc: "100% fair play and secure transactions.", icon: "🛡️" },
                                { title: "Live Markets", desc: "Bet on T20, IPL, ODI, and Test matches live.", icon: "📡" },
                                { title: "User Friendly", desc: "Simple interface for beginners and pros.", icon: "👌" },
                                { title: "Promotions", desc: "Exclusive bonuses for active live bettors.", icon: "🎁" },
                                { title: "24/7 Support", desc: "Instant support for any technical query.", icon: "🎧" },
                                { title: "Fast Payouts", desc: "Your winnings, in your account, fast.", icon: "⚡" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-black p-6 rounded-xl border-b-2 border-transparent hover:border-yellow-500 transition-all duration-300">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="text-yellow-400 font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-black py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl bg-gradient-to-b from-[#1a2236] to-[#0d1425] rounded-3xl p-10 md:p-16 border border-white/5">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
                            Don't Miss The Action
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join <span className="text-yellow-500 font-bold">Mahadev Book</span> today. Quick registration, instant deposits, and the best live cricket betting experience.
                        </p>
                        <a
                            href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 text-xl"
                        >
                            <MessageCircle size={28} /> GET YOUR ID NOW
                        </a>
                    </div>
                </section>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default LiveCricket;

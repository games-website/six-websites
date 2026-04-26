import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const KabaddiBetting = () => {
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
                                🤼 Mahadev Book Kabaddi Betting
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                                Play Smart & Win Big
                            </h1>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                                Kabaddi betting is booming in India! Join <span className="text-yellow-400 font-bold">Mahadev Book</span> for the Pro Kabaddi League (PKL) and international matches. Get the best odds, live markets, and instant withdrawals.
                            </p>
                            <a
                                href="https://wa.me/6289183063?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300"
                            >
                                <MessageCircle size={24} /> GET ID & PLAY NOW
                            </a>
                        </div>
                        <div className="flex-1 min-w-[300px] w-full max-w-lg">
                            <img
                                src="/images/app-mockup.jpg"
                                alt="Mahadev Book Kabaddi Betting"
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
                    <div className="container mx-auto max-w-5xl text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">What Is <span className="text-yellow-400">Mahadev Book</span> Kabaddi Betting?</h2>
                        <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full mb-12"></div>

                        <div className="bg-zinc-800 border border-gray-800 p-10 rounded-2xl shadow-lg">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Use your verified <span className="text-yellow-400 font-bold">Mahadev Book ID</span> to bet on match winners, raid points, total scores, and super tackles. We offer a peer-driven betting environment with fair pricing and 100% transparency.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-900 py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">Trust, Speed, and User Experience are our top priorities.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Higher Odds", desc: "Better returns than local bookmakers.", icon: "📈" },
                                { title: "Live Betting", desc: "Bet on raids and tackles in real-time.", icon: "⚡" },
                                { title: "Safe Login", desc: "Secure Mahadev Book Login system.", icon: "🔒" },
                                { title: "Fast Transactions", desc: "Instant deposits & withdrawals.", icon: "💸" },
                                { title: "Simple Interface", desc: "Easy for beginners and pros.", icon: "📱" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:-translate-y-2">
                                    <div className="text-4xl mb-4 text-yellow-400">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-black py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">How to Get Your ID</h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "1", text: "Contact us via WhatsApp" },
                                        { step: "2", text: "Get your Verified ID" },
                                        { step: "3", text: "Deposit & Start Betting" }
                                    ].map((s, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-zinc-800 p-4 rounded-xl border border-gray-800">
                                            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">{s.step}</div>
                                            <p className="text-white font-semibold text-lg">{s.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-8">
                                <h3 className="text-yellow-400 text-xl font-bold mb-6">Kabaddi Betting Markets</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Match Winner",
                                        "Total Points (Over/Under)",
                                        "Team Performance",
                                        "Super Raids",
                                        "High 5s"
                                    ].map((m, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300 border-b border-gray-800 pb-2 last:border-0 last:pb-0">
                                            <span className="text-yellow-500">•</span> {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-[#1a2236] to-[#0d1425] py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl border border-yellow-500/30 rounded-3xl p-10 md:p-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">
                            Start Your Winning Streak
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Get your <span className="text-yellow-500 font-bold">Mahadev Book ID</span> today and dominate the Kabaddi betting arena!
                        </p>
                        <a
                            href="https://wa.me/6289183063?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 text-xl"
                        >
                            <MessageCircle size={28} /> JOIN CLUB NOW
                        </a>
                    </div>
                </section>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default KabaddiBetting;

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
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="bg-gray-100 py-16 px-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1 min-w-[300px] text-center md:text-left">
                            <div className="border border-brand-gold/20 bg-white/50 backdrop-blur-sm rounded-full py-2 px-6 mb-6 inline-block text-brand-gold text-lg font-bold tracking-wide">
                                🤼 Goldplay Kabaddi Betting
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent">
                                Play Smart & Win Big
                            </h1>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-xl font-medium">
                                Kabaddi betting is booming in India! Join <span className="text-brand-gold font-bold">Goldplay</span> for the Pro Kabaddi League (PKL) and international matches. Get the best odds, live markets, and instant withdrawals.
                            </p>
                            <a
                                href="https://wa.me/6289183063?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
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
                                alt="Goldplay Kabaddi Betting"
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">What Is <span className="text-brand-gold">Goldplay</span> Kabaddi Betting?</h2>
                        <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full mb-12"></div>

                        <div className="bg-gray-50 border border-gray-100 p-10 rounded-3xl shadow-sm">
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Use your verified <span className="text-brand-gold font-bold">Goldplay ID</span> to bet on match winners, raid points, total scores, and super tackles. We offer a peer-driven betting environment with fair pricing and 100% transparency.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Why Choose Us?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium">Trust, Speed, and User Experience are our top priorities.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Higher Odds", desc: "Better returns than local bookmakers.", icon: "📈" },
                                { title: "Live Betting", desc: "Bet on raids and tackles in real-time.", icon: "⚡" },
                                { title: "Safe Login", desc: "Secure Goldplay Login system.", icon: "🔒" },
                                { title: "Fast Transactions", desc: "Instant deposits & withdrawals.", icon: "💸" },
                                { title: "Simple Interface", desc: "Easy for beginners and pros.", icon: "📱" }
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
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">How to Get Your ID</h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "1", text: "Contact us via WhatsApp" },
                                        { step: "2", text: "Get your Verified ID" },
                                        { step: "3", text: "Deposit & Start Betting" }
                                    ].map((s, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-white font-bold text-lg shadow-md">{s.step}</div>
                                            <p className="text-gray-800 font-bold text-lg">{s.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-100 border border-brand-gold/20 rounded-2xl p-8 shadow-inner">
                                <h3 className="text-brand-gold text-xl font-extrabold mb-6 uppercase tracking-wider">Kabaddi Betting Markets</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Match Winner",
                                        "Total Points (Over/Under)",
                                        "Team Performance",
                                        "Super Raids",
                                        "High 5s"
                                    ].map((m, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 border-b border-gray-200 pb-2 last:border-0 last:pb-0 font-medium">
                                            <span className="text-brand-gold">•</span> {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl border border-gray-100 bg-gray-50 rounded-3xl p-10 md:p-16 shadow-xl">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase">
                            Start Your Winning Streak
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                            Get your <span className="text-brand-gold font-bold">Goldplay ID</span> today and dominate the Kabaddi betting arena!
                        </p>
                        <a
                            href="https://wa.me/6289183063?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
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

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const HorseRaceBetting = () => {
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
                                🐎 Mahadev Book Horse Race Betting
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                                Bet on Global Races
                            </h1>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                                Experience the thrill of live horse racing from top tracks globally. Join <span className="text-yellow-400 font-bold">Mahadev Book</span> for exclusive markets, competitive odds, and real-time updates.
                            </p>
                            <a
                                href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
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
                                alt="Mahadev Book Horse Race Betting"
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
                            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
                            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Global Coverage", desc: "India, UK, Australia, USA, Dubai.", icon: "🌍" },
                                { title: "Live Betting", desc: "Dynamic odds as the race happens.", icon: "⏱️" },
                                { title: "Instant Payouts", desc: "Winnings credited immediately.", icon: "💸" },
                                { title: "Secure Platform", desc: "Top-tier security for your funds.", icon: "🔒" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-zinc-800 border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:-translate-y-2">
                                    <div className="text-4xl mb-4 text-yellow-400">{item.icon}</div>
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
                                <h3 className="text-2xl font-bold text-white mb-6">How to Start Betting</h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "1", title: "Sign Up", desc: "Contact us via WhatsApp for your ID." },
                                        { step: "2", title: "Login", desc: "Access your account securely." },
                                        { step: "3", title: "Deposit", desc: "Add funds via UPI or Net Banking." },
                                        { step: "4", title: "Bet & Win", desc: "Choose your horse and withdraw instantly." }
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold flex-shrink-0">{s.step}</div>
                                            <div>
                                                <h4 className="text-white font-bold">{s.title}</h4>
                                                <p className="text-gray-400 text-sm">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">Race to Victory</h3>
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    Horse racing combines strategy, analysis, and thrill. With Mahadev Book, you get the best platform to test your skills.
                                    <br /><br />
                                    Our user-friendly interface ensures you never miss a race, no matter where you are.
                                </p>
                                <a
                                    href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-400 font-bold text-lg hover:underline flex items-center gap-2"
                                >
                                    Login Now <span className="text-xl">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl bg-gradient-to-t from-[#1a2236] to-[#0d1425] rounded-3xl p-10 md:p-16 border border-white/5">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">
                            Join Mahadev Book Today
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Get your <span className="text-yellow-500 font-bold">Horse Race Betting ID</span> now and start winning on the world's most prestigious tracks.
                        </p>
                        <a
                            href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
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

export default HorseRaceBetting;

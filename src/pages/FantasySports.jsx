import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const FantasySports = () => {
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
                            <div className="border border-purple-500/50 bg-purple-900/20 backdrop-blur-sm rounded-full py-2 px-6 mb-6 inline-block text-purple-400 text-lg font-bold tracking-wide animate-pulse">
                                🎮 Mahadev Book Fantasy Sports
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-500 bg-clip-text text-transparent">
                                Play, Compete & Win
                            </h1>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                                Create your dream team and compete for real cash prizes. <span className="text-yellow-400 font-bold">Mahadev Book</span> brings you the ultimate fantasy gaming experience for Cricket, Football, and Kabaddi.
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
                                src="/images/football_fantasy_hero_new.png"
                                alt="Mahadev Book Fantasy Sports"
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
                            <h2 className="text-3xl font-bold text-white mb-4">Why Play Fantasy Sports?</h2>
                            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Daily Contests", desc: "New contests every day for every match.", icon: "🗓️" },
                                { title: "Real Cash Prizes", desc: "Turn your sports knowledge into real winnings.", icon: "💰" },
                                { title: "Safe & Secure", desc: "100% data privacy and secure transactions.", icon: "🔒" },
                                { title: "Easy to Use", desc: "Create teams and join leagues in seconds.", icon: "⚡" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-zinc-800 border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 flex items-start gap-5">
                                    <div className="text-4xl bg-black/30 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-900 py-20 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">How to Win?</h3>
                                <p className="text-gray-300 mb-8 text-lg">
                                    Winning on Mahadev Book Fantasy is about skill and strategy.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Select an upcoming match.",
                                        "Create your team within the credit limit.",
                                        "Choose your Captain & Vice-Captain wisely.",
                                        "Join a contest and track the leaderboard."
                                    ].map((step, i) => (
                                        <li key={i} className="flex items-center gap-4 bg-black p-4 rounded-xl border border-gray-800">
                                            <div className="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center">{i + 1}</div>
                                            <span className="text-white font-semibold">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-black p-8 rounded-2xl border border-yellow-500/20 text-center">
                                <h3 className="text-2xl font-bold text-white mb-6">Grand Leagues</h3>
                                <p className="text-gray-400 mb-8">
                                    Join our Mega Contests with massive prize pools. Small entry fees, huge rewards!
                                </p>
                                <a
                                    href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    Join Mega Contest
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl bg-gradient-to-t from-[#1a2236] to-[#0d1425] rounded-3xl p-10 md:p-16 border border-white/5">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">
                            Build Your Dream Team
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Get your <span className="text-yellow-500 font-bold">Mahadev Book ID</span> and start your fantasy sports journey today!
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

export default FantasySports;

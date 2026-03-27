import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const CricketBetting = () => {
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
                                🏏 Mahadev Book Cricket Betting
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                                Get Your Mahadev Book Online Cricket ID
                            </h1>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                                Love cricket? <span className="text-yellow-400 font-bold">Mahadev Book</span> brings live match excitement to your fingertips. Bet on IPL, T20, and international matches with the most trusted platform in India.
                            </p>
                            <a
                                href="https://wa.me/15208005239"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300"
                            >
                                <MessageCircle size={24} /> GET ID & PLAY NOW
                            </a>
                        </div>
                        <div className="flex-1 min-w-[300px] w-full max-w-lg">
                            <img
                                src="/images/cricket_hero_new.jpg"
                                alt="Mahadev Book Cricket Betting"
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Verified ID", desc: "100% safe and secure login access.", icon: "🛡️" },
                                { title: "Best Odds", desc: "Highest odds on all major cricket matches.", icon: "📈" },
                                { title: "Instant Payouts", desc: "Withdraw your winnings within minutes.", icon: "💸" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-zinc-800 border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:bg-[#252f44]">
                                    <div className="text-4xl mb-6 bg-black/30 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-zinc-900 rounded-2xl p-8 md:p-12 border border-yellow-500/20 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-bold text-white">Why Bet Online?</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-3"><span className="text-yellow-400 mt-1">✓</span> Real-time odds and instant updates.</li>
                                    <li className="flex items-start gap-3"><span className="text-yellow-400 mt-1">✓</span> Seamless deposits (UPI, GPay, Paytm).</li>
                                    <li className="flex items-start gap-3"><span className="text-yellow-400 mt-1">✓</span> Exclusive bonuses and cashback.</li>
                                    <li className="flex items-start gap-3"><span className="text-yellow-400 mt-1">✓</span> User-friendly App for Android & iOS.</li>
                                </ul>
                            </div>
                            <div className="flex-1 relative">
                                <div className="aspect-video bg-gradient-to-br from-yellow-900/20 to-black rounded-xl border border-yellow-500/20 flex items-center justify-center">
                                    <span className="text-yellow-500/40 font-bold text-4xl">LIVE ACTION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-900 py-20 px-4">
                    <div className="container mx-auto max-w-5xl text-center">
                        <div className="inline-block border border-yellow-500 rounded-full py-2 px-8 text-yellow-400 text-xl font-bold mb-12 uppercase tracking-wide">
                            Bet On The Go With Our App
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {[
                                { icon: '🏏', title: 'Live Cricket', desc: 'Real-time odds on every ball.' },
                                { icon: '💰', title: 'Secure Banking', desc: 'Instant deposits & withdrawals.' },
                                { icon: '🚀', title: 'Fast Interface', desc: 'Load matches in milliseconds.' },
                                { icon: '📱', title: 'Android & iOS', desc: 'Lightweight app under 25MB.' },
                                { icon: '💬', title: '24/7 Support', desc: 'We are always here to help.' },
                                { icon: '🎁', title: 'Bonus Offers', desc: 'Daily rewards for active players.' }
                            ].map((card, index) => (
                                <div key={index} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 hover:translate-y-[-5px] transition-all duration-300">
                                    <div className="text-4xl mb-4">{card.icon}</div>
                                    <h4 className="text-yellow-400 text-lg font-bold mb-2">{card.title}</h4>
                                    <p className="text-gray-400 text-sm">{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-1">
                            <div className="bg-black rounded-xl p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-white mb-8">How to Download</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                                    {[
                                        { step: "01", text: "Visit Official Website" },
                                        { step: "02", text: "Tap 'Download App'" },
                                        { step: "03", text: "Install APK" },
                                        { step: "04", text: "Login & Play" }
                                    ].map((s, i) => (
                                        <div key={i} className="relative pl-12">
                                            <span className="absolute left-0 top-0 text-4xl font-black text-yellow-500/20">{s.step}</span>
                                            <p className="font-bold text-white relative z-10 pt-2">{s.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black py-20 px-4">
                    <div className="container mx-auto max-w-4xl text-center md:text-left">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold text-white">Mahadev Book Cricket Tournament</h2>
                            <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="prose prose-invert prose-lg mx-auto text-gray-300">
                            <p>
                                Cricket is not just a sport in India — it’s a passion. <strong className="text-yellow-400">Mahadev Book</strong> connects you to every major tournament. Whether it’s an international series, IPL showdown, or a friendly T20 contest, we ensure you stay connected to every over, every run, and every victory.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 not-prose mt-12">
                                <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-500">
                                    <h4 className="text-white font-bold text-xl mb-3">Live Match Markets</h4>
                                    <p className="text-sm">Match winner, top batsman, total runs, over/under, and wicket predictions.</p>
                                </div>
                                <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-500">
                                    <h4 className="text-white font-bold text-xl mb-3">Tournament Coverage</h4>
                                    <p className="text-sm">IPL, World Cup, Big Bash, PSL, T20 Blast, and Test Series.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-[#1a2236] to-[#0d1425] py-20 px-4">
                    <div className="container mx-auto max-w-4xl text-center border border-yellow-500/30 bg-black/20 backdrop-blur-md rounded-3xl p-10 md:p-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">
                            Ready to <span className="text-yellow-500">Win Big?</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of winners on India's #1 Betting Platform. Reliable, Fast, and Secure.
                        </p>
                        <a
                            href="https://wa.me/15208005239"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 text-xl"
                        >
                            <MessageCircle size={28} /> Get Your ID on WhatsApp
                        </a>
                    </div>
                </section>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default CricketBetting;

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
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="bg-gray-100 py-16 px-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1 min-w-[300px] text-center md:text-left">
                            <div className="border border-brand-gold/20 bg-white/50 backdrop-blur-sm rounded-full py-2 px-6 mb-6 inline-block text-brand-gold text-lg font-bold tracking-wide">
                                🏏 Goldplay Cricket Betting
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent">
                                Get Your Goldplay Online Cricket ID
                            </h1>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-xl font-medium">
                                Love cricket? <span className="text-brand-gold font-bold">Goldplay</span> brings live match excitement to your fingertips. Bet on IPL, T20, and international matches with the most trusted platform in India.
                            </p>
                            <a
                                href="https://wa.me/16402396837?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gold-gradient text-white font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(191,149,63,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] transition-all duration-300"
                            >
                                <MessageCircle size={24} /> GET ID & PLAY NOW
                            </a>
                        </div>
                        <div className="flex-1 min-w-[300px] w-full max-w-lg">
                            <img
                                src="/images/cricket_hero_new.jpg"
                                alt="Goldplay Cricket Betting"
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
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Why Choose <span className="text-brand-gold">Goldplay</span>?</h2>
                            <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Verified ID", desc: "100% safe and secure login access.", icon: "🛡️" },
                                { title: "Best Odds", desc: "Highest odds on all major cricket matches.", icon: "📈" },
                                { title: "Instant Payouts", desc: "Withdraw your winnings within minutes.", icon: "💸" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-brand-gold/50 transition-all duration-300 group hover:shadow-md">
                                    <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-10 shadow-sm">
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Why Bet Online?</h3>
                                <ul className="space-y-4 text-gray-600 font-medium">
                                    <li className="flex items-start gap-3"><span className="text-brand-gold mt-1 font-bold">✓</span> Real-time odds and instant updates.</li>
                                    <li className="flex items-start gap-3"><span className="text-brand-gold mt-1 font-bold">✓</span> Seamless deposits (UPI, GPay, Paytm).</li>
                                    <li className="flex items-start gap-3"><span className="text-brand-gold mt-1 font-bold">✓</span> Exclusive bonuses and cashback.</li>
                                    <li className="flex items-start gap-3"><span className="text-brand-gold mt-1 font-bold">✓</span> User-friendly App for Android & iOS.</li>
                                </ul>
                            </div>
                            <div className="flex-1 relative w-full">
                                <div className="aspect-video bg-white rounded-2xl border border-gray-200 shadow-inner flex items-center justify-center">
                                    <span className="text-brand-gold font-black text-3xl opacity-20 uppercase tracking-widest">Live Action</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-20 px-4">
                    <div className="container mx-auto max-w-5xl text-center">
                        <div className="inline-block border border-brand-gold/30 bg-white rounded-full py-3 px-8 text-brand-gold text-xl font-bold mb-12 uppercase tracking-wide shadow-sm">
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
                                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-brand-gold/50 hover:translate-y-[-5px] transition-all duration-300 shadow-sm hover:shadow-md">
                                    <div className="text-5xl mb-6">{card.icon}</div>
                                    <h4 className="text-gray-900 text-lg font-bold mb-3 uppercase tracking-tight">{card.title}</h4>
                                    <p className="text-gray-600 text-sm font-medium">{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gold-gradient rounded-3xl p-1 shadow-xl">
                            <div className="bg-white rounded-[1.4rem] p-8 md:p-12">
                                <h3 className="text-2xl font-black text-gray-900 mb-10 uppercase tracking-tighter">How to Download</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                                    {[
                                        { step: "01", text: "Visit Official Website" },
                                        { step: "02", text: "Tap 'Download App'" },
                                        { step: "03", text: "Install APK" },
                                        { step: "04", text: "Login & Play" }
                                    ].map((s, i) => (
                                        <div key={i} className="relative pl-14">
                                            <span className="absolute left-0 top-0 text-5xl font-black text-brand-gold-light opacity-10">{s.step}</span>
                                            <p className="font-extrabold text-gray-900 relative z-10 pt-2 leading-tight">{s.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-20 px-4">
                    <div className="container mx-auto max-w-4xl text-center md:text-left">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Goldplay Cricket Tournament</h2>
                            <div className="h-1 w-20 bg-gold-gradient mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium text-center">
                                Cricket is not just a sport in India — it’s a passion. <strong className="text-brand-gold font-bold">Goldplay</strong> connects you to every major tournament. Whether it’s an international series, IPL showdown, or a friendly T20 contest, we ensure you stay connected to every over, every run, and every victory.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-12">
                                <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-brand-gold shadow-sm">
                                    <h4 className="text-gray-900 font-bold text-xl mb-3 uppercase tracking-tight">Live Match Markets</h4>
                                    <p className="text-sm text-gray-600 font-medium">Match winner, top batsman, total runs, over/under, and wicket predictions.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-brand-gold shadow-sm">
                                    <h4 className="text-gray-900 font-bold text-xl mb-3 uppercase tracking-tight">Tournament Coverage</h4>
                                    <p className="text-sm text-gray-600 font-medium">IPL, World Cup, Big Bash, PSL, T20 Blast, and Test Series.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-20 px-4 text-center">
                    <div className="container mx-auto max-w-4xl bg-gray-50 border border-gray-100 rounded-3xl p-10 md:p-16 shadow-xl">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
                            Ready to <span className="text-brand-gold">Win Big?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                            Join thousands of winners on India's #1 Betting Platform. Reliable, Fast, and Secure.
                        </p>
                        <a
                            href="https://wa.me/16402396837?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-extrabold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 text-xl"
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

export default CricketBetting;

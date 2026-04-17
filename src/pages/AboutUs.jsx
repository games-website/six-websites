import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">

                <div className="border border-brand-gold/20 bg-gray-50 rounded-3xl py-8 px-8 text-center mb-12 shadow-sm max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight leading-tight">
                        Goldplay - <span className="text-brand-gold">Trusted Online Cricket Betting ID</span> Provider in India
                    </h1>
                </div>

                <div className="mb-14 text-center text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto font-medium">
                    <p className="mb-6">
                        Welcome to <span className="text-brand-gold font-bold">Goldplay</span>, your trusted destination for online gaming and sports betting in India since 2010. Since our inception, we’ve been committed to providing a safe, fair, and enjoyable gaming experience for players across the country.
                    </p>
                    <p>
                        At Goldplay, we believe in innovation, transparency, and player satisfaction. We are a <span className="text-brand-gold font-bold">trusted online betting ID provider</span> and offer a wide range of games — from live casino classics to sports betting and skill-based games — all designed to give you maximum entertainment and winning opportunities.
                    </p>
                </div>

                <div className="mb-20 text-center">
                    <img
                        src="/images/about_branding.png"
                        alt="Goldplay Branding"
                        className="max-w-4xl w-full h-auto rounded-[2rem] mx-auto shadow-2xl border border-gray-100"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                </div>

                <div className="border border-brand-gold/20 bg-gray-50 rounded-full py-3 px-8 text-center mb-12 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest">Why Choose Goldplay?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { icon: "🔒", title: "TRUSTED & SECURE", desc: "We use advanced encryption and secure Indian payment gateways to protect your funds and data." },
                        { icon: "💳", title: "PAYMENT OPTIONS", desc: "Deposit and withdraw easily via Net Banking, Paytm, Google Pay, PhonePe, and IMPS." },
                        { icon: "⭐", title: "PLAYER-CENTRIC", desc: "Our 24/7 customer support ensures your issues are resolved promptly." },
                        { icon: "🎯", title: "FAIR & TRANSPARENT", desc: "All games follow strict fairness protocols and guidelines." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm h-full hover:border-brand-gold/50 transition-all hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex justify-center items-center text-3xl mb-6 shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-gray-900 text-base font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center h-full shadow-sm">
                        <div className="bg-white border border-brand-gold/20 rounded-full py-2 px-8 mb-8 shadow-sm">
                            <h3 className="text-brand-gold font-extrabold uppercase text-sm tracking-widest">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                            To provide a reliable, secure, and exciting gaming environment where every player feels valued, informed, and empowered to enjoy their favorite games responsibly.
                        </p>
                        <p className="text-gray-900 font-black uppercase tracking-tighter">Join Goldplay Now</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center h-full shadow-sm">
                        <div className="bg-white border border-brand-gold/20 rounded-full py-2 px-8 mb-8 shadow-sm">
                            <h3 className="text-brand-gold font-extrabold uppercase text-sm tracking-widest">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                            To become the most trusted online gaming brand in India, known for innovation, fairness, and customer satisfaction since 2010.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Join the <span className="text-brand-gold font-bold uppercase">Goldplay</span> community today.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 text-center">
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center h-full shadow-md">
                        <div className="border border-brand-gold/20 bg-gray-50 rounded-full py-2 px-8 mb-8">
                            <h3 className="text-gray-900 font-bold uppercase text-xs tracking-widest">Contact Details</h3>
                        </div>
                        <p className="text-gray-600 font-medium text-lg">
                            Goldplay WhatsApp Number <br />
                            <a href="https://wa.me/12397991318?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID." className="text-brand-gold font-black hover:underline mt-2 block text-2xl">+1 (640) 239-6837</a>
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center h-full shadow-md">
                        <div className="border border-brand-gold/20 bg-gray-50 rounded-full py-2 px-8 mb-8">
                            <h3 className="text-gray-900 font-bold uppercase text-xs tracking-widest">Author</h3>
                        </div>
                        <p className="text-brand-gold font-black mb-4 text-xl">Author – Daniel Smyth</p>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Daniel Smyth – Expert content writer specializing in iGaming, online casino, and sports betting. He creates guides to help players make smart betting decisions.
                        </p>
                    </div>
                </div>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}
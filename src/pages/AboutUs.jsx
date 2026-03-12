import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">

                <div className="border border-yellow-500 rounded-full py-4 px-8 text-center mb-10 shadow-[0_0_10px_rgba(255,215,0,0.2)] max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 uppercase">
                        Mahadev Book - Trusted Online Cricket Betting ID Provider in India
                    </h1>
                </div>

                <div className="mb-14 text-center text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                    <p className="mb-5">
                        Welcome to <span className="text-yellow-500 font-bold">Mahadev Book</span>, your trusted Betting ID’s for online gaming and sports betting in India since 2010. Since our inception, we’ve been committed to providing a safe, fair, and enjoyable gaming experience for players across the country.
                    </p>
                    <p>
                        At Mahadev Book, we believe in innovation, transparency, and player satisfaction. We are a <span className="text-yellow-500 font-bold">trusted online betting ID provider</span> and offer a wide range of games — from live casino classics to sports betting and skill-based games — all designed to give you maximum entertainment and winning opportunities.
                    </p>
                </div>

                <div className="mb-20 text-center">
                    <img
                        src="/images/about_branding.png"
                        alt="Mahadev Book Branding"
                        className="max-w-full h-auto rounded-xl mx-auto shadow-lg border border-yellow-500/20"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Why Choose Mahadev Book?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg h-full hover:border-yellow-500 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex justify-center items-center text-3xl mb-5 text-yellow-500">
                            🔒
                        </div>
                        <h3 className="text-yellow-500 text-lg font-bold mb-4">TRUSTED & SECURE</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            We use advanced encryption and secure Indian payment gateways to protect your funds and data.
                        </p>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg h-full hover:border-yellow-500 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex justify-center items-center text-3xl mb-5 text-yellow-500">
                            💳
                        </div>
                        <h3 className="text-yellow-500 text-lg font-bold mb-4">MULTIPLE PAYMENT OPTIONS</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Deposit and withdraw easily via Net Banking, Paytm, Google Pay, PhonePe, and IMPS.
                        </p>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg h-full hover:border-yellow-500 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex justify-center items-center text-3xl mb-5 text-yellow-500">
                            ⭐
                        </div>
                        <h3 className="text-yellow-500 text-lg font-bold mb-4">PLAYER-CENTRIC APPROACH</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Our 24/7 customer support ensures your issues are resolved promptly.
                        </p>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg h-full hover:border-yellow-500 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex justify-center items-center text-3xl mb-5 text-yellow-500">
                            🎯
                        </div>
                        <h3 className="text-yellow-500 text-lg font-bold mb-4">FAIR & TRANSPARENT GAMING</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            All games follow strict fairness protocols and guidelines.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-3xl p-8 flex flex-col items-center text-center h-full">
                        <div className="border border-yellow-500 rounded-full py-2 px-6 mb-6">
                            <h3 className="text-yellow-500 font-bold uppercase">Our Mission</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-5">
                            To provide a reliable, secure, and exciting gaming environment where every player feels valued, informed, and empowered to enjoy their favorite games responsibly.
                        </p>
                        <p className="text-white font-bold">Join Mahadev Book Now</p>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-3xl p-8 flex flex-col items-center text-center h-full">
                        <div className="border border-yellow-500 rounded-full py-2 px-6 mb-6">
                            <h3 className="text-yellow-500 font-bold uppercase">Our Vision</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-5">
                            To become the most trusted online gaming brand in India, known for innovation, fairness, and customer satisfaction since 2010.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Join the <span className="text-yellow-500 font-bold">Mahadev Book</span> community today.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-3xl p-8 flex flex-col items-center text-center h-full">
                        <div className="border border-yellow-500 rounded-full py-2 px-6 mb-6">
                            <h3 className="text-yellow-500 font-bold uppercase">Contact Details</h3>
                        </div>
                        <div className="text-white text-lg leading-loose">
                            <p>Mahadev Book WhatsApp Number – <a href="https://wa.me/15208005239" className="text-yellow-500 hover:underline">+1(520)800-5239</a></p>
                        </div>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-3xl p-8 flex flex-col items-center text-center h-full">
                        <div className="border border-yellow-500 rounded-full py-2 px-6 mb-6">
                            <h3 className="text-yellow-500 font-bold uppercase">Author</h3>
                        </div>
                        <p className="text-yellow-500 font-bold mb-4">Author – Daniel Smyth</p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Daniel Smyth – Expert content writer specializing in iGaming, online casino, and sports betting. He creates guides to help players make smart betting decisions.
                        </p>
                    </div>
                </div>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};
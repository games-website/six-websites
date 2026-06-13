import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import banner from '../assets/images/banner.jpg.webp';

export default function Hero() {
    return (
        <section className="relative bg-white text-gray-900 py-20 lg:py-32 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/100 to-transparent z-10"></div>
            <div className="absolute inset-0 z-0">
                <img src={banner} alt="Goldplay Banner" className="w-full h-full object-cover opacity-9" />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
                            India's Most Trusted <br />
                            <span className="bg-gold-gradient bg-clip-text text-transparent block mt-2">Online Betting Hub</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Experience secure gaming, lightning-fast withdrawals, and specialized markets.
                            Join the elite circle of winners on Goldplay today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://wa.me/9288689683?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-gold-gradient hover:opacity-90 text-white font-extrabold py-4 px-10 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-brand-gold/20"
                            >
                                WhatsApp For ID <ArrowRight size={20} />
                            </a>
                            <a
                                href="#how-to-play"
                                className="flex items-center justify-center gap-2 border-2 border-gray-900 hover:border-brand-gold hover:text-brand-gold text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-all"
                            >
                                Learn More <Download size={20} />
                            </a>
                        </div>

                        <div className="mt-12 flex gap-10 justify-center lg:justify-start text-gray-500 text-sm font-bold uppercase tracking-widest">
                            <div>
                                <span className="block text-3xl text-gray-900 font-black mb-1">5M+</span> Active Users
                            </div>
                            <div>
                                <span className="block text-3xl text-gray-900 font-black mb-1">24/7</span> Expert Help
                            </div>
                        </div>
                    </div>


                    <div className="flex-1 w-full max-w-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Cricket Betting", path: "/cricket-betting", color: "border-brand-gold/30", icon: "🏏" },
                                { title: "Football Betting", path: "/football-betting", color: "border-blue-500/30", icon: "⚽" },
                                { title: "Live Casino", path: "/live-casino", color: "border-red-500/30", icon: "🎰" },
                                { title: "Fantasy Sports", path: "/fantasy-sports", color: "border-green-500/30", icon: "📱" }
                            ].map((card, idx) => (
                                <Link
                                    key={idx}
                                    to={card.path}
                                    className={`group relative bg-white border-2 ${card.color} p-6 rounded-3xl hover:border-brand-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                                >
                                    <div className="absolute -right-4 -bottom-4 opacity-5 text-8xl grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-500">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2 relative z-10">{card.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4 relative z-10">Premium odds & instant updates</p>
                                    <div className="flex items-center gap-2 text-brand-gold font-bold text-sm relative z-10">
                                        PLAY NOW <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

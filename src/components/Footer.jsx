import React from 'react';
import { Send, MessageCircle, Instagram, Youtube, Twitter } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 text-gray-900 pt-16 pb-8 border-t border-gray-200 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">


                    <div className="lg:col-span-1 border-b lg:border-b-0 pb-8 lg:pb-0">
                        <Link to="/" className="flex items-center gap-4 mb-6">
                            <div className="bg-black p-1 rounded w-16 h-16 flex items-center justify-center shadow-md">
                                <img src={logo} alt="Goldplay Logo" className="w-full h-full object-contain" />
                            </div>
                            {/* <h3 className="text-2xl font-bold text-brand-gold tracking-wide uppercase">Goldplay</h3> */}
                        </Link>

                        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                            India's most trusted sports insights platform. Providing data-driven analysis, prediction models, and educational resources since 2010.
                        </p>

                        <div className="flex gap-3">
                            {[
                                { Icon: Send, label: "Telegram" },
                                { Icon: MessageCircle, label: "WhatsApp" },
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Youtube, label: "YouTube" },
                                { Icon: Twitter, label: "Twitter" }
                            ].map(({ Icon, label }, index) => (
                                <a
                                    key={index}
                                    href="https://wa.me/9288689683?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 hover:bg-gold-gradient hover:text-white shadow-sm transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h4 className="text-lg font-black text-gray-900 mb-6 relative inline-block uppercase tracking-tight">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold-gradient rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-gray-600 text-sm font-bold">
                            <li><Link to="/" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Home</Link></li>
                            <li><Link to="/about-us" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">About Us</Link></li>

                            <li><Link to="/contact" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Contact Us</Link></li>

                            <li><Link to="/how-to-play" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">How to Play</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-lg font-black text-gray-900 mb-6 relative inline-block uppercase tracking-tight">
                            Explore Games
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold-gradient rounded-full"></span>
                        </h4>
                        <div className="grid grid-cols-1 gap-y-3 text-gray-600 text-sm font-bold">
                            <Link to="/cricket-betting" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Cricket Betting</Link>
                            <Link to="/football-betting" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Football Betting</Link>
                            <Link to="/tennis-betting" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Tennis Betting</Link>
                            <Link to="/kabaddi-betting" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Kabaddi Betting</Link>
                            <Link to="/fantasy-sports" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Fantasy Sports</Link>
                            <Link to="/live-casino" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Live Casino</Link>
                            <Link to="/live-cricket" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Live Cricket</Link>
                            <Link to="/horse-race-betting" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Horse Race Betting</Link>
                        </div>
                    </div>


                    <div>
                        <h4 className="text-lg font-black text-gray-900 mb-6 relative inline-block uppercase tracking-tight">
                            Legal & Help
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold-gradient rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-gray-600 text-sm font-bold">
                            <li><Link to="/rules" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Rules & Regulations</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Privacy Policy</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Refund Policy</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-brand-gold transition-all hover:translate-x-1 inline-block">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-gray-500 text-sm mb-4 font-bold">
                        © {currentYear} Goldplay. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                        Goldplay is India's most trusted educational sports insights platform. All content is for informational purposes only. Users must be 18+ to access betting features. Play responsibly.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        <Link to="/rules" className="hover:text-brand-gold transition-colors">Terms</Link>
                        <span>|</span>
                        <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy</Link>
                        <span>|</span>
                        <Link to="/refund-policy" className="hover:text-brand-gold transition-colors">Refund</Link>
                        <span>|</span>
                        <Link to="/disclaimer" className="hover:text-brand-gold transition-colors">Disclaimer</Link>
                    </div>
                </div>


                <div className="fixed bottom-6 right-6 z-50">
                    <a
                        href="https://wa.me/9288689683?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebc51] text-white font-black py-4 px-8 rounded-full text-base shadow-2xl hover:shadow-[#25D366]/40 transition-all transform hover:scale-110 active:scale-95 group"
                    >
                        <MessageCircle size={28} fill="white" className="text-[#25D366] group-hover:rotate-12 transition-transform" />
                        GET ID NOW
                    </a>
                </div>

            </div>
        </footer>
    );
}

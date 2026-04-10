import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logo from '../assets/images/logo.webp';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-yellow-500 transition-colors">» Home</Link></li>
                            <li><Link to="/about-us" className="hover:text-yellow-500 transition-colors">» About Us</Link></li>
                            <li><Link to="/features" className="hover:text-yellow-500 transition-colors">» Services</Link></li>

                            {/* <li><a href="#" className="hover:text-yellow-500 transition-colors">» Referral Code</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Sports & Games</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/cricket-betting" className="hover:text-yellow-500 transition-colors">» Cricket Betting</Link></li>
                            <li><Link to="/football-betting" className="hover:text-yellow-500 transition-colors">» Football Betting</Link></li>
                            <li><Link to="/tennis-betting" className="hover:text-yellow-500 transition-colors">» Tennis Betting</Link></li>
                            <li><Link to="/live-cricket" className="hover:text-yellow-500 transition-colors">» Live Cricket</Link></li>
                            <li><Link to="/kabaddi-betting" className="hover:text-yellow-500 transition-colors">» Kabaddi Betting</Link></li>
                            <li><Link to="/horse-race-betting" className="hover:text-yellow-500 transition-colors">» Horse Race Betting</Link></li>
                            <li><Link to="/fantasy-sports" className="hover:text-yellow-500 transition-colors">» Fantasy Sports</Link></li>
                            <li><Link to="/live-casino" className="hover:text-yellow-500 transition-colors">» Live Casino</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Support & Legal</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/rules" className="hover:text-yellow-500 transition-colors">» Rules & Regulation</Link></li>
                            <li><Link to="/how-to-play" className="hover:text-yellow-500 transition-colors">» How to Play</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-yellow-500 transition-colors">» Refund Policy</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-yellow-500 transition-colors">» Privacy Policy</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-yellow-500 transition-colors">» Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
                        <div className="flex items-start gap-3 mb-6 text-gray-400">
                            <Phone size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-sm">Phone: +16402396837</p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/16402396837?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
                        >
                            Get ID
                        </a>
                    </div>

                </div>

                <div className="border-t border-zinc-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Mahadev Book. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

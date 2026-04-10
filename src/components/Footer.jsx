import { Link } from 'react-router-dom';
import { AlertTriangle, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 mt-16 pb-28 md:pb-12">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 p-4 bg-red-900/10 border border-red-900/30 rounded text-center">
                    <h4 className="text-red-500 font-bold mb-2 flex justify-center items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Responsible Gaming
                    </h4>
                    <p className="text-gray-500 text-xs max-w-4xl mx-auto">
                        Betting can be addictive. Please play responsibly and only bet with money you can afford to lose. Myleasers365 supports responsible gaming and provides tools to help you manage your betting activity. You must be 18+ to create an account.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-white/5 pb-8">
                    <div className="md:col-span-2">
                        <h1 className="text-2xl font-black italic tracking-tighter text-yellow-500 mb-4">MY<span className="text-white">LEASERS</span></h1>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Myleasers.com is the official domain for India's premium sports exchange. We offer widest range of markets for Cricket, Tennis, Football and Horse Racing along with 100+ Live Casino Tables.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://wa.me/15208005239?text=Hello%20Myleasers%2C%20I%20want%20to%20get%20my%20ID." className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 transition-all">
                                <MessageCircle className="w-4 h-4" /> WhatsApp Support
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Sports Exchange</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><Link to="/cricket" className="hover:text-yellow-500 transition-colors">Cricket Betting</Link></li>
                            <li><Link to="/live-cricket-betting" className="hover:text-yellow-500 transition-colors">Live Cricket</Link></li>
                            <li><Link to="/football" className="hover:text-yellow-500 transition-colors">Football Betting</Link></li>
                            <li><Link to="/tennis" className="hover:text-yellow-500 transition-colors">Tennis Betting</Link></li>
                            <li><Link to="/basketball" className="hover:text-yellow-500 transition-colors">Basketball</Link></li>
                            <li><Link to="/kabaddi" className="hover:text-yellow-500 transition-colors">Kabaddi</Link></li>
                            <li><Link to="/horse-race-betting" className="hover:text-yellow-500 transition-colors">Horse Racing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><Link to="/about-us" className="hover:text-yellow-500 transition-colors">About Us</Link></li>
                            <li><Link to="/how-to-play" className="hover:text-yellow-500 transition-colors">How to Play</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Our Services</Link></li>
                            <li><Link to="/blog" className="hover:text-yellow-500 transition-colors">Latest Blog</Link></li>
                            <li><Link to="/app-download" className="hover:text-yellow-500 transition-colors">App Download</Link></li>
                            <li><Link to="/platforms" className="hover:text-yellow-500 transition-colors">Platforms</Link></li>
                            <li><Link to="/referral-code" className="hover:text-yellow-500 transition-colors">Referral Code</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-b border-white/5 pb-8 text-center md:text-left">
                    <div>
                        <h4 className="text-white font-bold mb-3 uppercase text-[10px] tracking-widest">Policy Center</h4>
                        <ul className="space-y-1.5 text-[11px] text-gray-600">
                            <li><Link to="/privacy-policy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-yellow-500 transition-colors">Refund Policy</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-yellow-500 transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3 uppercase text-[10px] tracking-widest">Rules</h4>
                        <ul className="space-y-1.5 text-[11px] text-gray-600">
                            <li><Link to="/rules" className="hover:text-yellow-500 transition-colors">General Rules</Link></li>
                            <li><Link to="/rules-regulations" className="hover:text-yellow-500 transition-colors">Rules & Regulations</Link></li>
                            <li><Link to="/casino" className="hover:text-yellow-500 transition-colors">Casino Rules</Link></li>
                            <li><Link to="/fantasy-sports" className="hover:text-yellow-500 transition-colors">Fantasy Rules</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-xs text-gray-700">
                    © 2026 Myleasers Group. All rights reserved. This is a UI replica for educational purposes.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

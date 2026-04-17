import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

    const services = [
        { name: 'Cricket Betting', path: '/cricket-betting' },
        { name: 'Football Betting', path: '/football-betting' },
        { name: 'Live Cricket', path: '/live-cricket' },
        { name: 'Fantasy Sports', path: '/fantasy-sports' },
        { name: 'Tennis Betting', path: '/tennis-betting' },
        { name: 'Kabaddi Betting', path: '/kabaddi-betting' },
        { name: 'Live Casino', path: '/live-casino' },
        { name: 'Horse Race Betting', path: '/horse-race-betting' },
        
    ];

    return (
        <header className="bg-white/40 text-gray-900 sticky top-0 z-50 backdrop-blur-xl border-b border-brand-gold/20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Goldplay" className="logo" />
                </Link>

                
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="hover:text-brand-gold transition-colors font-bold uppercase text-sm tracking-wide">Home</Link>
                    <Link to="/about-us" className="hover:text-brand-gold transition-colors font-bold uppercase text-sm tracking-wide">About</Link>

                    
                    <div className="relative group">
                        <Link
                            to="/features"
                            className="flex items-center gap-1 hover:text-brand-gold transition-colors font-bold uppercase text-sm tracking-wide py-4"
                        >
                            Features <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </Link>

                        <div className="absolute top-full -left-4 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-2">
                            <div className="bg-white rounded-2xl overflow-hidden border border-brand-gold/10">
                                <ul className="py-2">
                                    {services.map((service) => (
                                        <li key={service.path}>
                                            <Link
                                                to={service.path}
                                                className="block px-6 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-50 last:border-0"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Link to="/rules" className="hover:text-brand-gold transition-colors font-bold uppercase text-sm tracking-wide">Rules</Link>
                    <Link to="/contact" className="hover:text-brand-gold transition-colors font-bold uppercase text-sm tracking-wide">Contact</Link>
                </nav>

                <div className="hidden md:block">
                    <a
                        href="https://wa.me/12397991318?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold-gradient hover:opacity-90 text-black font-black py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-brand-gold/20 uppercase text-sm tracking-wider"
                    >
                        Get Your ID
                    </a>
                </div>

                
                <div className="md:hidden flex items-center gap-3">
                    <a
                        href="https://wa.me/12397991318?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold-gradient text-black font-black py-2 px-4 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-brand-gold/20"
                    >
                        Get ID
                    </a>
                    <button className="text-brand-gold p-1" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            
            {isOpen && (
                <div className="md:hidden bg-white border-t border-brand-gold/10 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
                    <nav className="flex flex-col p-6 space-y-4">
                        <Link to="/" className="block hover:text-brand-gold font-bold uppercase text-sm" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about-us" className="block hover:text-brand-gold font-bold uppercase text-sm" onClick={() => setIsOpen(false)}>About</Link>

                        <div className="flex flex-col">
                            <button
                                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                                className="flex items-center justify-between hover:text-brand-gold font-bold uppercase text-sm w-full py-2 border-b border-gray-50"
                            >
                                Features <ChevronDown size={18} className={`transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ${isFeaturesOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-brand-gold/20">
                                    {services.map((service) => (
                                        <Link
                                            key={service.path}
                                            to={service.path}
                                            className="block text-sm font-bold text-gray-500 hover:text-brand-gold py-2 border-b border-gray-50/50 last:border-0"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/rules" className="block hover:text-brand-gold font-bold uppercase text-sm" onClick={() => setIsOpen(false)}>Rules</Link>
                        <Link to="/contact" className="block hover:text-brand-gold font-bold uppercase text-sm" onClick={() => setIsOpen(false)}>Contact</Link>

                        <div className="pt-6">
                            <a
                                href="https://wa.me/12397991318?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                                className="flex items-center justify-center gap-2 bg-gold-gradient text-black font-black py-4 px-6 rounded-full shadow-lg uppercase text-sm tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                <MessageCircle size={20} /> Get Your ID
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

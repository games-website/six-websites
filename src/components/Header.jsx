import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo.webp';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

    const services = [
        { name: 'Cricket Betting', path: '/cricket-betting' },
        { name: 'Football Betting', path: '/football-betting' },
        { name: 'Live Cricket Betting', path: '/live-cricket' },
        { name: 'Fantasy Sports', path: '/fantasy-sports' },
        { name: 'Tennis Betting', path: '/tennis-betting' },
        { name: 'Kabaddi Betting', path: '/kabaddi-betting' },
        { name: 'Live Casino', path: '/live-casino' },
        { name: 'Horse Race Betting', path: '/horse-race-betting' },
        { name: 'All Services', path: '/features' },
    ];

    return (
        <header className="bg-black/90 text-white sticky top-0 z-50 backdrop-blur-sm border-b border-yellow-600/50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Mahadev Book" className="h-12 w-auto" />
                </Link>


                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                    <Link to="/about-us" className="hover:text-yellow-400 transition-colors">About</Link>

                    <div className="relative group">
                        <Link
                            to="/features"
                            className="flex items-center gap-1 hover:text-yellow-400 transition-colors py-4"
                        >
                            Features <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </Link>

                        <div className="absolute top-full -left-4 w-56 bg-black border border-yellow-600/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-2">
                            <div className="bg-black rounded-lg overflow-hidden border border-zinc-800">
                                <ul className="py-1">
                                    {services.map((service) => (
                                        <li key={service.path}>
                                            <Link
                                                to={service.path}
                                                className="block px-4 py-2.5 text-sm hover:bg-zinc-900 hover:text-yellow-400 transition-colors border-b border-zinc-900/50 last:border-0"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Link to="/rules" className="hover:text-yellow-400 transition-colors">Rules</Link>
                    <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 md:px-6 rounded-full text-xs md:text-base transition-transform transform hover:scale-105 whitespace-nowrap"
                    >
                        Get Your ID
                    </a>

                    <button className="md:hidden text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-black border-t border-yellow-600/30">
                    <nav className="flex flex-col space-y-4 p-4 text-center">
                        <Link to="/" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about-us" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>

                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                                className="flex items-center justify-center gap-1 hover:text-yellow-400 w-full"
                            >
                                Features <ChevronDown size={16} className={`transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 w-full ${isFeaturesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <div className="bg-zinc-900/50 rounded-lg py-2 space-y-2 border border-yellow-600/20">
                                    {services.map((service) => (
                                        <Link
                                            key={service.path}
                                            to={service.path}
                                            className="block text-sm text-gray-300 hover:text-yellow-400 py-1"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/rules" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Rules</Link>

                        <a
                            href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-yellow-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Download App
                        </a>
                        <Link to="/contact" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>

                    </nav>
                </div>
            )}
        </header>
    );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.webp';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white/90 text-gray-900 sticky top-0 z-50 backdrop-blur-sm border-b border-yellow-600/20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Mahadev Book" className="h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="hover:text-yellow-600 transition-colors font-medium">Home</Link>
                    <a href="#about" className="hover:text-yellow-600 transition-colors font-medium">About</a>
                    <a href="#features" className="hover:text-yellow-600 transition-colors font-medium">Features</a>
                    <a href="#download" className="hover:text-yellow-600 transition-colors font-medium">Download App</a>
                    <a href="#contact" className="hover:text-yellow-600 transition-colors font-medium">Contact</a>
                </nav>

                <div className="hidden md:block">
                    <a
                        href="https://wa.link/trial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
                    >
                        Get Your ID
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-yellow-600" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-yellow-600/30">
                    <nav className="flex flex-col space-y-4 p-4 text-center">
                        <Link to="/" className="block hover:text-yellow-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                        <a href="#about" className="block hover:text-yellow-600 font-medium" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#features" className="block hover:text-yellow-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
                        <a href="#download" className="block hover:text-yellow-600 font-medium" onClick={() => setIsOpen(false)}>Download App</a>
                        <a href="#contact" className="block hover:text-yellow-600 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
                        <a
                            href="https://wa.link/trial"
                            className="inline-block bg-yellow-500 text-white font-bold py-2 px-6 rounded-full mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Your ID
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

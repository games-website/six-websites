import React from 'react';
import { Send, MessageCircle, Instagram, Youtube, Twitter } from 'lucide-react';
import logo from '../assets/images/logo.webp';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">


                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white p-1 rounded-sm w-16 h-16 flex items-center justify-center">
                                <img src={logo} alt="Mahadev Book Logo" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-yellow-500 tracking-wide">Mahadev Book</h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                            India's most trusted sports insights platform. Providing data-driven analysis, prediction models, and educational resources to sports enthusiasts nationwide.
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
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Mahadev Betting App</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Mahadev Book ID</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">FAQ</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Betting Platforms
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Gold365</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Laser247</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">IPL Betting ID</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Online Betting ID</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Mahadev Online Book</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">MahadevBook</a></li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-zinc-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        © {currentYear} Mahadev Book. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mb-4 max-w-3xl mx-auto">
                        Mahadev Book is an educational sports insights platform. All content is for informational purposes only. Users must be 18+ to access certain features.
                    </p>
                    <div className="text-gray-500 text-sm">
                        <a href="#" className="hover:text-yellow-500 transition-colors">Terms & Conditions</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
                        <span className="mx-2">|</span>
                    </div>
                </div>


                <div className="fixed bottom-6 right-6 z-50">
                    <a
                        href="https://wa.link/trial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-base shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-105"
                    >
                        <MessageCircle size={24} fill="white" className="text-green-600" />
                        Get Mahadev Book ID
                    </a>
                </div>

            </div>
        </footer>
    );
}

import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 mt-16 pb-28 md:pb-12">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 p-4 bg-red-900/10 border border-red-900/30 rounded text-center">
                    <h4 className="text-red-500 font-bold mb-2 flex justify-center items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Responsible Gaming
                    </h4>
                    <p className="text-gray-500 text-xs max-w-4xl mx-auto">
                        Betting can be addictive. Please play responsibly and only bet with money you can afford to lose. Bettingraja365 supports responsible gaming and provides tools to help you manage your betting activity. You must be 18+ to create an account.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-white/5 pb-8">
                    <div className="md:col-span-2">
                        <h1 className="text-2xl font-black italic tracking-tighter text-yellow-500 mb-4">BETTINGRAJA<span className="text-white">365</span></h1>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Bettingraja365.in is the official domain for India's premium sports exchange. We offer widest range of markets for Cricket, Tennis, Football and Horse Racing along with 100+ Live Casino Tables.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
                            <li className="hover:text-yellow-500 cursor-pointer">Contact Support</li>
                            <li className="hover:text-yellow-500 cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Game Providers</h4>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                            <span>Evolution</span> • <span>Ezugi</span> • <span>Sexy Gaming</span> • <span>Super Spade</span> • <span>Pragmatic Play</span>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-gray-700">
                    © 2024 Bettingraja365 Group. All rights reserved. This is a UI replica for educational purposes.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

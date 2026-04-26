import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ChevronRight, MessageCircle } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="hidden lg:block space-y-4">
            {/* Top Leagues Sidebar */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5">
                <div className="bg-[#222] p-3 border-b border-white/5 font-bold text-yellow-500 flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> Top Leagues
                </div>
                <ul className="text-sm text-gray-300">
                    <li>
                        <Link to="/cricket" className="p-3 border-b border-white/5 hover:bg-white/5 hover:text-white cursor-pointer hover:pl-4 transition-all flex justify-between items-center group">
                            IPL 2026 <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-yellow-500" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cricket" className="p-3 border-b border-white/5 hover:bg-white/5 hover:text-white cursor-pointer hover:pl-4 transition-all flex justify-between items-center group">
                            T20 World Cup <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-yellow-500" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/football" className="p-3 border-b border-white/5 hover:bg-white/5 hover:text-white cursor-pointer hover:pl-4 transition-all flex justify-between items-center group">
                            Premier League <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-yellow-500" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/football" className="p-3 border-b border-white/5 hover:bg-white/5 hover:text-white cursor-pointer hover:pl-4 transition-all flex justify-between items-center group">
                            La Liga <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-yellow-500" />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-4 text-center">
                <h3 className="font-bold text-black text-lg mb-1">Create Account</h3>
                <p className="text-black/80 text-xs mb-3">Get your ID instantly via WhatsApp</p>
                <a href="https://wa.me/6289183063?text=Hello%20Myleasers%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="w-full bg-black text-yellow-500 font-bold py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                    <MessageCircle className="w-4 h-4" /> Get ID
                </a>
            </div>
        </div>
    );
};

export default Sidebar;

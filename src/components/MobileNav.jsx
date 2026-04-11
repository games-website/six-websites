import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Trophy, Play, Dices, Headphones } from 'lucide-react';

const MobileNav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#151515] border-t border-white/10 md:hidden z-50">
            <div className="flex justify-around items-center h-16">
                <Link to="/cricket" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 hover:text-white focus:text-yellow-500">
                    <Trophy className="w-5 h-5" />
                    <span className="text-[10px]">Cricket</span>
                </Link>
                <Link to="/live-cricket-betting" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 hover:text-white focus:text-yellow-500">
                    <Activity className="w-5 h-5" />
                    <span className="text-[10px]">Live</span>
                </Link>
                <Link to="/app-download" className="flex flex-col items-center justify-center w-full h-full space-y-1 -mt-6">
                    <div className="bg-yellow-500 p-3 rounded-full shadow-lg shadow-yellow-500/20 border-4 border-[#151515]">
                        <Play className="w-5 h-5 text-black fill-black ml-1" />
                    </div>
                    <span className="text-[10px] text-gray-500">App</span>
                </Link>
                <Link to="/casino" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 hover:text-white focus:text-yellow-500">
                    <Dices className="w-5 h-5" />
                    <span className="text-[10px]">Casino</span>
                </Link>
                <Link to="/services" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 hover:text-white focus:text-yellow-500">
                    <Headphones className="w-5 h-5" />
                    <span className="text-[10px]">Support</span>
                </Link>
            </div>
        </div>
    );
};

export default MobileNav;

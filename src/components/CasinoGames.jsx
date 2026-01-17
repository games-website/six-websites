import React from 'react';

const CasinoGames = () => {
    return (
        <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <span className="w-2 h-6 bg-purple-500 rounded-sm"></span>
                Popular Casino Games
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 p-4 flex flex-col justify-between overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg group">
                    <div className="absolute right-0 top-0 text-6xl opacity-20 rotate-12 group-hover:rotate-0 transition-transform">♠️</div>
                    <span className="relative z-10 bg-black/30 w-fit px-2 py-0.5 rounded text-[10px] backdrop-blur-sm">Live Dealer</span>
                    <div className="relative z-10 font-bold text-lg">Teen Patti</div>
                </div>
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-red-600 to-red-900 p-4 flex flex-col justify-between overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg group">
                    <div className="absolute right-0 top-0 text-6xl opacity-20 rotate-12 group-hover:rotate-0 transition-transform">🎰</div>
                    <span className="relative z-10 bg-black/30 w-fit px-2 py-0.5 rounded text-[10px] backdrop-blur-sm">Live Dealer</span>
                    <div className="relative z-10 font-bold text-lg">Roulette</div>
                </div>
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 p-4 flex flex-col justify-between overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg group">
                    <div className="absolute right-0 top-0 text-6xl opacity-20 rotate-12 group-hover:rotate-0 transition-transform">🃏</div>
                    <span className="relative z-10 bg-black/30 w-fit px-2 py-0.5 rounded text-[10px] backdrop-blur-sm">Live Dealer</span>
                    <div className="relative z-10 font-bold text-lg">Blackjack</div>
                </div>
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-green-600 to-green-900 p-4 flex flex-col justify-between overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg group">
                    <div className="absolute right-0 top-0 text-6xl opacity-20 rotate-12 group-hover:rotate-0 transition-transform">🎲</div>
                    <span className="relative z-10 bg-black/30 w-fit px-2 py-0.5 rounded text-[10px] backdrop-blur-sm">Live Dealer</span>
                    <div className="relative z-10 font-bold text-lg">Andar Bahar</div>
                </div>
            </div>
        </div>
    );
};

export default CasinoGames;

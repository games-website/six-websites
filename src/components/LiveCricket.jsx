import React from 'react';

const cricketMatches = [
    { id: 1, league: "T20 World Cup", team1: "India", team2: "Australia", odds1: "1.85", odds2: "1.95", status: "LIVE" },
    { id: 2, league: "IPL 2026", team1: "Chennai Super Kings", team2: "Mumbai Indians", odds1: "2.10", odds2: "1.72", status: "IN PLAY" },
    { id: 3, league: "Big Bash League", team1: "Sydney Sixers", team2: "Perth Scorchers", odds1: "1.50", odds2: "2.50", status: "STARTING SOON" },
];

const LiveCricket = () => {
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                    <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                    Live Cricket
                    <span className="animate-pulse bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold tracking-wider">LIVE</span>
                </h3>
                {/* <a href="#" className="text-xs text-yellow-500 hover:underline">View All</a> */}
            </div>

            {/* Matches Container */}
            <div id="cricket-matches" className="space-y-2">
                {cricketMatches.map((match) => (
                    <div key={match.id} className="bg-[#1a1a1a] rounded-lg border-l-4 border-yellow-500 overflow-hidden hover:bg-[#222] transition-colors group relative cursor-pointer">
                        <div className="p-4 grid grid-cols-12 gap-2 items-center">
                            <div className="col-span-8 md:col-span-6">
                                <div className="text-[10px] text-gray-400 mb-1 flex items-center gap-2">
                                    <span className="bg-white/10 px-1.5 rounded text-white">{match.league}</span>
                                    <span className="text-red-500 font-bold flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> {match.status}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="font-bold text-white text-sm md:text-base">{match.team1}</div>
                                    <div className="font-bold text-white text-sm md:text-base">{match.team2}</div>
                                </div>
                            </div>
                            <div className="col-span-4 md:col-span-6 flex gap-2 justify-end">
                                <div className="text-center w-14 md:w-20 bg-blue-500/10 rounded border border-blue-500/30 p-1 hover:bg-blue-500/20 transition-colors">
                                    <div className="text-[10px] text-blue-400 font-bold">BACK</div>
                                    <div className="text-sm font-bold text-white">{match.odds1}</div>
                                </div>
                                <div className="text-center w-14 md:w-20 bg-pink-500/10 rounded border border-pink-500/30 p-1 hover:bg-pink-500/20 transition-colors">
                                    <div className="text-[10px] text-pink-400 font-bold">LAY</div>
                                    <div className="text-sm font-bold text-white">{match.odds2}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveCricket;

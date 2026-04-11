import React from 'react';

const UpcomingMatches = () => {
    return (
        <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <span className="w-2 h-6 bg-blue-500 rounded-sm"></span>
                Upcoming Matches
            </h3>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                <div className="min-w-[150px] bg-[#1a1a1a] p-3 rounded border border-white/5">
                    <div className="text-[10px] text-gray-500 mb-1">Tomorrow, 7:30 PM</div>
                    <div className="font-bold text-sm">MI vs CSK</div>
                    <div className="text-yellow-500 text-xs mt-1">IPL 2026</div>
                </div>
                <div className="min-w-[150px] bg-[#1a1a1a] p-3 rounded border border-white/5">
                    <div className="text-[10px] text-gray-500 mb-1">Tomorrow, 3:30 PM</div>
                    <div className="font-bold text-sm">RCB vs KKR</div>
                    <div className="text-yellow-500 text-xs mt-1">IPL 2026</div>
                </div>
                <div className="min-w-[150px] bg-[#1a1a1a] p-3 rounded border border-white/5">
                    <div className="text-[10px] text-gray-500 mb-1">Wed, 8:00 PM</div>
                    <div className="font-bold text-sm">ENG vs AUS</div>
                    <div className="text-yellow-500 text-xs mt-1">The Ashes</div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMatches;

import React from 'react';

const ExclusiveSlots = () => {
    return (
        <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <span className="w-2 h-6 bg-pink-500 rounded-sm"></span>
                Exclusive Slots
            </h3>
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#1a1a1a] rounded p-2 text-center border border-white/5">
                    <div className="h-16 bg-gradient-to-br from-yellow-400 to-red-500 rounded mb-2 flex items-center justify-center font-bold text-black">777</div>
                    <div className="text-xs font-bold">Mega Win</div>
                </div>
                <div className="bg-[#1a1a1a] rounded p-2 text-center border border-white/5">
                    <div className="h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-2 flex items-center justify-center font-bold text-black">WILD</div>
                    <div className="text-xs font-bold">Star Gems</div>
                </div>
                <div className="bg-[#1a1a1a] rounded p-2 text-center border border-white/5">
                    <div className="h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded mb-2 flex items-center justify-center font-bold text-black">BONUS</div>
                    <div className="text-xs font-bold">Jungle King</div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveSlots;

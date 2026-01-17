import React from 'react';
import { Smartphone, Award, Lock, ShieldCheck, Globe } from 'lucide-react';

const RightSidebar = () => {
    return (
        <div className="md:col-span-4 space-y-6">
            {/* SECTION 26: Download Widget */}
            <div className="bg-gradient-to-b from-yellow-600 to-yellow-800 p-6 rounded-xl text-center shadow-xl">
                <Smartphone className="mx-auto text-black mb-4 w-12 h-12" />
                <h3 className="text-2xl font-black text-black mb-2">DOWNLOAD APP</h3>
                <p className="text-black/80 text-sm mb-6">Get the fastest betting experience on your mobile. Available for Android & iOS.</p>
                <div className="space-y-3">
                    <button className="w-full bg-black text-white font-bold py-3 rounded flex items-center justify-center gap-2 border border-black hover:bg-gray-900">
                        <span className="text-xl">🤖</span> Android APK
                    </button>
                    <button className="w-full bg-white text-black font-bold py-3 rounded flex items-center justify-center gap-2 border border-white hover:bg-gray-100">
                        <span className="text-xl">🍎</span> iOS App
                    </button>
                </div>
            </div>

            {/* SECTION 27: Bonuses */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5">
                <h3 className="font-bold text-yellow-500 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" /> Active Bonuses
                </h3>
                <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                        <div className="text-white font-bold text-lg">365% Welcome Bonus</div>
                        <div className="text-gray-400 text-xs">On your first deposit up to ₹50,000</div>
                    </div>
                    <div className="border-b border-white/10 pb-3">
                        <div className="text-white font-bold text-lg">5% Refill Bonus</div>
                        <div className="text-gray-400 text-xs">On every subsequent deposit instantly</div>
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">Refer & Earn</div>
                        <div className="text-gray-400 text-xs">Get 10% of your friend's losses</div>
                    </div>
                </div>
            </div>

            {/* Security */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Lock className="text-green-500 w-5 h-5" /> Security & Privacy
                </h3>
                <p className="text-xs text-gray-400 mb-4">Your data is protected by industry-standard encryption.</p>
                <div className="flex gap-4 items-center justify-center opacity-60">
                    <ShieldCheck className="w-8 h-8" />
                    <Globe className="w-8 h-8" />
                    <Lock className="w-8 h-8" />
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;

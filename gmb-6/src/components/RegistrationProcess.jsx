import React from 'react';
import { UserPlus } from 'lucide-react';

const RegistrationProcess = () => {
    return (
        <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
            <h3 className="text-lg font-bold text-yellow-500 mb-4 flex items-center gap-2">
                <UserPlus className="w-5 h-5" /> Easy Registration Process
            </h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -z-0"></div>

                <div className="relative z-10 bg-[#222] p-4 rounded-lg border border-white/10 w-full text-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mx-auto mb-2">1</div>
                    <div className="font-bold text-sm">Click Sign Up</div>
                    <div className="text-[10px] text-gray-400">Top right corner</div>
                </div>
                <div className="relative z-10 bg-[#222] p-4 rounded-lg border border-white/10 w-full text-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mx-auto mb-2">2</div>
                    <div className="font-bold text-sm">Fill Details</div>
                    <div className="text-[10px] text-gray-400">Mobile & OTP</div>
                </div>
                <div className="relative z-10 bg-[#222] p-4 rounded-lg border border-white/10 w-full text-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mx-auto mb-2">3</div>
                    <div className="font-bold text-sm">Get ID</div>
                    <div className="text-[10px] text-gray-400">Instant Access</div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationProcess;

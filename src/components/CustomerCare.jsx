import React from 'react';
import { Headset, MessageSquare, Phone } from 'lucide-react';

const CustomerCare = () => {
    return (
        <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 p-4 rounded-xl border border-green-500/30">
            <h3 className="text-lg font-bold text-green-400 mb-2 flex items-center gap-2">
                <Headset className="w-5 h-5" /> 24/7 Customer Care
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                        <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="font-bold text-sm">Live Chat</div>
                        <div className="text-xs text-gray-400">Instant response in 2 mins</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="font-bold text-sm">WhatsApp Support</div>
                        <div className="text-xs text-gray-400">+91 98765 XXXXX</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCare;

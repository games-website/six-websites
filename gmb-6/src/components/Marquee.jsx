import React from 'react';

const Marquee = () => {
    return (
        <div className="mb-4 bg-yellow-500/10 border border-yellow-500/20 rounded-md p-2 flex items-center gap-2 mx-4 md:mx-0">
            <span className="bg-yellow-600 text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase flex-shrink-0">Notice</span>
            <div className="overflow-hidden whitespace-nowrap flex-1">
                <p className="animate-marquee text-xs text-yellow-500">
                    Welcome to Bettingraja365! India's Most Trusted Betting Exchange. Withdrawals are processed instantly 24/7. Create your ID now via WhatsApp to get a 365% Bonus!
                </p>
            </div>
        </div>
    );
};

export default Marquee;

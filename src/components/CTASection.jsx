import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-12 px-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 uppercase tracking-wider">
                    Ready to Join Mahadev Book?
                </h2>
                <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto font-semibold">
                    Get your trusted Betting ID instantly. Experience lightning-fast withdrawals, 24/7 support, and the best odds in the market.
                </p>
                <a
                    href="https://wa.me/15208005239?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-yellow-500 border-2 border-transparent hover:border-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-transparent hover:text-black shadow-xl"
                >
                    Get Your ID Now <ArrowRight size={24} />
                </a>
                <div className="mt-6 text-sm font-semibold text-black/70">
                    Trusted by 1 Lakh+ Users in India
                </div>
            </div>
        </div>
    );
}

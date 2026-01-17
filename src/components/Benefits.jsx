import React from 'react';
import { Check } from 'lucide-react';

const benefitsList = [
    {
        title: "Trustworthy, Transparent, Tried",
        desc: "When you join the platform, you're becoming part of a community backed by 100% verified credentials and real-time betting support. Unlike platforms that create confusion, it's built on transparency and player-first ethics.",
        align: "right"
    },
    {
        title: "Lightning-Fast Verification & Login",
        desc: "Your journey starts the moment you request your account. No delay, no hidden steps. Whether you're on desktop or mobile, logging in is quick and frictionless — thanks to a well-optimized system trusted across India.",
        align: "left"
    },
    {
        title: "Optimized for Cricket, Casino & More",
        desc: "From IPL to roulette, your Mahadev Book ID gives access to the best betting markets in India. The interface is responsive, user-friendly, and always aligned with the latest events. Whether you're a beginner or a pro, this is the betting space you deserve.",
        align: "right"
    }
];

export default function Benefits() {
    return (
        <section className="py-20 bg-black text-white border-t border-zinc-900">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-yellow-500">
                    Top Benefits of Your Mahadev Book Online Betting ID
                </h2>

                <div className="space-y-12">
                    {benefitsList.map((benefit, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${benefit.align === 'left' ? 'md:flex-row-reverse' : ''}`}>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-yellow-500 mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {benefit.desc}
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                <Check size={48} strokeWidth={4} className="text-yellow-500" />
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-16 text-right border-t border-zinc-800 pt-8">
                    <a
                        href="https://wa.link/trial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-green-500/30"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c1.009.551 2.112.845 3.207.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.183-5.766zm-9.5 5.767c0 5.255 4.263 9.518 9.518 9.518 1.638 0 3.199-.413 4.542-1.144l4.909 1.293-1.309-4.789c.813-1.401 1.282-3.045 1.281-4.782 0-5.254-4.263-9.518-9.517-9.518-5.255 0-9.518 4.264-9.518 9.518z" />
                        </svg>
                        Get Mahadev Book ID
                    </a>
                </div>
            </div>
        </section>
    );
}

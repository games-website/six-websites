import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import banner from '../assets/images/banner.webp';

export default function Hero() {
    return (
        <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
            <div className="absolute inset-0 z-0">
                <img src={banner} alt="Mahadev Book Banner" className="w-full h-full object-cover opacity-30" />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        India's Most Trusted <br />
                        <span className="text-yellow-500">Online Betting Platform</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                        Experience secure betting, instant withdrawals, and 24/7 support.
                        Join thousands of satisfied users on Mahadev Book today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/15208005239?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                        >
                            Get Your ID Now <ArrowRight size={20} />
                        </a>
                        <a
                            href="https://wa.me/15208005239?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border-2 border-white hover:border-yellow-500 hover:text-yellow-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors"
                        >
                            Download App <Download size={20} />
                        </a>
                    </div>

                    <div className="mt-12 flex gap-8 text-gray-400 text-sm font-semibold uppercase tracking-widest">
                        <div>
                            <span className="block text-3xl text-white font-bold mb-1">1M+</span> Users
                        </div>
                        <div>
                            <span className="block text-3xl text-white font-bold mb-1">24/7</span> Support
                        </div>
                        <div>
                            <span className="block text-3xl text-white font-bold mb-1">100%</span> Secure
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

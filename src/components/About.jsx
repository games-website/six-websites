import React from 'react';
import secureIcon from '../assets/images/secure.jpg';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-gold">What is Goldplay?</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Goldplay is one of India's most popular and trusted online betting platforms.
                            It is known for its secure system, smooth user experience, and wide variety of games.
                        </p>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold font-bold">✓</span>
                                <span><strong className="text-gray-900">Sports Betting:</strong> Bet on cricket, football, tennis, and more. Famous for IPL betting and live cricket betting.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold font-bold">✓</span>
                                <span><strong className="text-gray-900">Casino Games:</strong> Play Teen Patti, Andar Bahar, and enjoy live casino experiences.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold font-bold">✓</span>
                                <span><strong className="text-gray-900">Real-Time Betting:</strong> Place bets while the match is live for added excitement.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold font-bold">✓</span>
                                <span><strong className="text-gray-900">Payment Options:</strong> Supports UPI, Paytm, Google Pay, PhonePe, and bank transfers.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-gold/20">
                            
                            <img
                                src={secureIcon}
                                alt="Secure Betting"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-xl">Trusted by Millions</p>
                                <p className="text-brand-gold-light">Since 2010</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

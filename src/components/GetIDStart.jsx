import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function GetIDStart() {
    return (
        <section className="py-20 bg-gray-50 text-gray-900 px-4 border-t border-gray-200">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-brand-gold uppercase">
                    Get Your Goldplay ID and Start Today
                </h2>

                <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
                    <p className="text-center md:text-left">
                        Goldplay is one of India's most trusted platforms for online betting and gaming. It's built to be simple, safe, and fast — so whether you're new or experienced, getting started is easy.
                    </p>

                    <ul className="space-y-4 ml-4">
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-gray-900 flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Quick and hassle-free registration with your own <strong className="text-gray-900">Goldplay ID</strong>.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-gray-900 flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Instant <strong className="text-brand-gold">login access</strong> for seamless play across devices.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-gray-900 flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Step-by-step guidance during sign up and verification.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-gray-900 flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Safe deposits and withdrawals backed by secure systems.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-gray-900 flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                24/7 support so you're never stuck waiting for help.
                            </span>
                        </li>
                    </ul>

                    <p>
                        Thousands of players already trust the official site for transparent and secure play. You can join them today by downloading the <strong className="text-gray-900">app</strong> or simply using the website on desktop and mobile.
                    </p>

                    <p className="font-medium text-gray-900">
                        Ready to begin? <strong className="text-gray-900">Get your Goldplay ID now</strong> and unlock a premium betting experience trusted across India.
                    </p>
                </div>

            </div>
        </section>
    );
}

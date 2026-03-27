import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function GetIDStart() {
    return (
        <section className="py-20 bg-black text-white px-4 border-t border-zinc-900">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-yellow-500 uppercase">
                    Get Your Mahadev Book ID and Start Today
                </h2>

                <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
                    <p className="text-center md:text-left">
                        Mahadev Book is one of India's most trusted platforms for online betting and gaming. It's built to be simple, safe, and fast — so whether you're new or experienced, getting started is easy.
                    </p>

                    <ul className="space-y-4 ml-4">
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-white flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Quick and hassle-free registration with your own <strong className="text-white">Mahadev Book ID</strong>.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-white flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Instant <strong className="text-yellow-500">login access</strong> for seamless play across devices.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-white flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Step-by-step guidance during sign up and verification.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-white flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                Safe deposits and withdrawals backed by secure systems.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-white flex-shrink-0 mt-1.5" size={20} />
                            <span>
                                24/7 support so you're never stuck waiting for help.
                            </span>
                        </li>
                    </ul>

                    <p>
                        Thousands of players already trust the official site for transparent and secure play. You can join them today by downloading the <strong className="text-white">app</strong> or simply using the website on desktop and mobile.
                    </p>

                    <p className="font-medium text-white">
                        Ready to begin? <strong className="text-white">Get your Mahadev Book ID now</strong> and unlock a premium betting experience trusted across India.
                    </p>
                </div>

            </div>
        </section>
    );
}

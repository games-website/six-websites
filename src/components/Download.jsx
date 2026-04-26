import React from 'react';
import mockup from '../assets/images/app-mockup.jpg';

export default function Download() {
    return (
        <section id="download" className="py-20 bg-gray-50 text-gray-900 px-4 border-t border-gray-200">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-gold leading-tight">
                            Download the Goldplay App – India’s Most Trusted Online Betting Platform
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Looking for a reliable and feature-rich online betting app in India? The <span className="text-brand-gold font-bold underline decoration-brand-gold/50">Goldplay Official App</span> is your go-to destination for secure sports betting, live cricket, and casino games. Whether you’re a seasoned player or a first-timer, the app delivers a seamless, fast, and secure experience right at your fingertips.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Compatible with both <strong className="text-gray-900">Android and iOS</strong>, the mobile app features a user-friendly interface tailored for Indian users. With real-time match updates, encrypted payments, instant deposits, quick withdrawals, and 24/7 customer support — this is India’s most dependable online betting app.
                        </p>

                        <h3 className="text-2xl font-bold text-brand-gold mb-6">Key Features</h3>
                        <ul className="space-y-3 mb-10 text-gray-600">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                                <span>Live betting on cricket, football, tennis, kabaddi & more</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                                <span>Get your verified betting ID instantly</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                                <span>Fast withdrawals with encrypted payment gateways</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                                <span>Simple navigation and smooth user experience</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                                <span>Exclusive bonuses, offers, and referral rewards</span>
                            </li>
                        </ul>

                        <a
                            href="https://wa.me/6289183063?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-green-500/30"
                        >
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c1.009.551 2.112.845 3.207.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.183-5.766zm-9.5 5.767c0 5.255 4.263 9.518 9.518 9.518 1.638 0 3.199-.413 4.542-1.144l4.909 1.293-1.309-4.789c.813-1.401 1.282-3.045 1.281-4.782 0-5.254-4.263-9.518-9.517-9.518-5.255 0-9.518 4.264-9.518 9.518z" />
                            </svg>
                            Get Goldplay ID
                        </a>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-4">
                            <img
                                src={mockup}
                                alt="Goldplay App Mockup"
                                className="w-full max-w-sm h-auto object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

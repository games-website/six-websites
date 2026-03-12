import React from 'react';
import review1 from '../assets/images/review-1.webp';
import review2 from '../assets/images/review-2.webp';
import review3 from '../assets/images/review-3.webp';

export default function UserFeedback() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-500 leading-tight">
                        Our Users Speak for Us – Mahadev Book Always Delivers <br className="hidden md:block" />
                        100% Guaranteed Withdrawals.
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Real WhatsApp feedback from verified Mahadev Book users who enjoy our trusted and fast betting services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative group">
                        <img
                            src={review1}
                            alt="WhatsApp Review 1"
                            className="w-full h-auto rounded-3xl border-4 border-zinc-800 shadow-2xl transition-transform transform group-hover:scale-105"
                        />
                    </div>
                    <div className="relative group">
                        <img
                            src={review2}
                            alt="WhatsApp Review 2"
                            className="w-full h-auto rounded-3xl border-4 border-zinc-800 shadow-2xl transition-transform transform group-hover:scale-105"
                        />
                    </div>
                    <div className="relative group">
                        <img
                            src={review3}
                            alt="WhatsApp Review 3"
                            className="w-full h-auto rounded-3xl border-4 border-zinc-800 shadow-2xl transition-transform transform group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/15208005239"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-green-500/30"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="inline-block">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c1.009.551 2.112.845 3.207.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.183-5.766zm-9.5 5.767c0 5.255 4.263 9.518 9.518 9.518 1.638 0 3.199-.413 4.542-1.144l4.909 1.293-1.309-4.789c.813-1.401 1.282-3.045 1.281-4.782 0-5.254-4.263-9.518-9.517-9.518-5.255 0-9.518 4.264-9.518 9.518z" />
                        </svg>
                        Get Mahadev Book ID
                    </a>
                </div>
            </div>
        </section>
    );
}

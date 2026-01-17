import React from 'react';

export default function BettingIdGuide() {
    return (
        <section className="py-20 bg-black text-white px-4 border-t border-zinc-900">
            <div className="container mx-auto max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500">
                        Get to Know Your Betting ID
                    </h2>
                    <div className="h-1 w-16 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Your essential guide to unlocking safe and strategic betting with Mahadev Book
                    </p>
                </div>


                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">What is a Mahadev Book ID?</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Your <strong className="text-yellow-500">Mahadev Book ID</strong> is a personal access key to India’s trusted online betting ecosystem. With it, you can securely place bets on sports, casino games, and virtual matches within a single platform.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Think of it as your secure digital passport, offering seamless and protected transactions in a feature-rich betting environment.
                    </p>
                </div>


                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-8">How to Use It Smartly</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                        <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Secure Account Access</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Log in safely across all your devices using encrypted credentials to keep your account protected at all times.
                            </p>
                        </div>


                        <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Explore Betting Markets</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Access multiple markets including cricket, football, e-sports, and live casino games — all through one verified account.
                            </p>
                        </div>


                        <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Track and Manage Bets</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Use your personal dashboard to monitor bets, review outcomes, and plan your next moves with real-time updates.
                            </p>
                        </div>

                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-zinc-800 pt-8">
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-500 mb-2">Responsible Betting</h3>
                        <p className="text-gray-400">
                            Your Mahadev Book ID unlocks exciting opportunities — but it’s equally important to bet responsibly:
                        </p>
                    </div>

                    <a
                        href="https://wa.link/trial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg shrink-0"
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

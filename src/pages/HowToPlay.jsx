import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const HowToPlay = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">

                <div className="border border-yellow-500 rounded-full py-4 px-8 text-center mb-10 shadow-[0_0_10px_rgba(255,215,0,0.2)] inline-block w-full max-w-4xl mx-auto block">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">
                        How to Bet on Mahadev Book Online Cricket Betting & Casino Games
                    </h1>
                </div>

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        <span className="text-yellow-500 font-bold">Mahadev Book</span> is a trusted platform for online sports betting and casino games. Whether you enjoy betting on cricket, football, or trying your luck in casino games like slots and poker, Mahadev Book makes online gaming easy, secure, and fun. This guide will show you how to start and enjoy the platform responsibly.
                    </p>

                    <a
                        href="https://wa.me/447735317489"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
                    >
                        <MessageCircle size={20} /> Login & Play Online
                    </a>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Guide to Bet on Mahadev Book</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 flex flex-col h-full hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-yellow-500 font-bold text-center text-sm mb-5">
                            STEP 1: ACCOUNT CREATION
                        </div>
                        <h3 className="text-white font-bold mb-3">Creating a Mahadev Book Account</h3>
                        <p className="text-gray-400 mb-4 text-sm">Getting started is quick and easy:</p>
                        <ol className="list-decimal pl-5 text-gray-300 text-sm leading-relaxed mb-5 space-y-2">
                            <li>Visit the <span className="text-yellow-500">official Mahadev Book website</span>.</li>
                            <li>Click <strong>Sign Up</strong> or <strong>Register</strong>.</li>
                            <li>Fill in your details like name, email, and mobile number.</li>
                            <li>Set a <strong>strong password</strong>.</li>
                        </ol>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs">
                            <strong>Tip:</strong> Enable 2-factor authentication for extra security.
                        </div>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 flex flex-col h-full hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-yellow-500 font-bold text-center text-sm mb-5">
                            STEP 2: DEPOSIT FUNDS
                        </div>
                        <h3 className="text-white font-bold mb-3">Depositing Funds</h3>
                        <p className="text-gray-400 mb-4 text-sm">To start betting, you need to deposit money:</p>
                        <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed mb-5 space-y-2">
                            <li>Supports <strong>UPI, cards, e-wallets</strong>, and more.</li>
                            <li>Check <strong>min/max deposit limits</strong>.</li>
                            <li>Verify balance before betting.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs">
                            <strong>Tip:</strong> Start small to get familiar with the process.
                        </div>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 flex flex-col h-full hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-yellow-500 font-bold text-center text-sm mb-5">
                            STEP 3: SPORTS BETTING
                        </div>
                        <h3 className="text-white font-bold mb-3">Sports Betting Guide</h3>
                        <p className="text-gray-400 mb-4 text-sm">Explore various sports options:</p>
                        <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed mb-5 space-y-2">
                            <li><strong>Sports:</strong> Cricket, football, tennis, etc.</li>
                            <li><strong>Bet Types:</strong> Single, multiple, live bets.</li>
                            <li><strong>Odds:</strong> Understand how to maximize winnings.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs">
                            <strong>Tip:</strong> Start with simple match-winner bets.
                        </div>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 flex flex-col h-full hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-yellow-500 font-bold text-center text-sm mb-5">
                            STEP 4: CASINO GAMES
                        </div>
                        <h3 className="text-white font-bold mb-3">Playing Casino Games</h3>
                        <p className="text-gray-400 mb-4 text-sm">Enjoy a wide range of casino games:</p>
                        <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed mb-5 space-y-2">
                            <li><strong>Games:</strong> Slots, poker, roulette, blackjack.</li>
                            <li><strong>Process:</strong> Select game, place bet, play.</li>
                            <li><strong>Demo Mode:</strong> Try for free first.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs">
                            <strong>Tip:</strong> Set a budget for casino sessions.
                        </div>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 flex flex-col h-full hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-yellow-500 font-bold text-center text-sm mb-5">
                            STEP 5: LIVE BETTING
                        </div>
                        <h3 className="text-white font-bold mb-3">Live Betting Experience</h3>
                        <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed mb-5 space-y-2">
                            <li><strong>Live Sports:</strong> Bet in real-time.</li>
                            <li><strong>Live Casino:</strong> Real dealers via video stream.</li>
                            <li>Track updates for informed decisions.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs">
                            <strong>Tip:</strong> Watch the game live while betting.
                        </div>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 flex flex-col h-full hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-yellow-500 font-bold text-center text-sm mb-5">
                            STEP 6: WITHDRAWALS
                        </div>
                        <h3 className="text-white font-bold mb-3">Withdrawal Process</h3>
                        <p className="text-gray-400 mb-4 text-sm">Cash out your winnings easily:</p>
                        <ol className="list-decimal pl-5 text-gray-300 text-sm leading-relaxed mb-5 space-y-2">
                            <li>Go to <strong>Withdraw</strong> section.</li>
                            <li>Choose method and amount.</li>
                            <li>Complete verification.</li>
                        </ol>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs">
                            <strong>Tip:</strong> Ensure bank details are correct.
                        </div>
                    </div>

                </div>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default HowToPlay;

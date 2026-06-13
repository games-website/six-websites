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
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">

                <div className="border border-brand-gold/30 rounded-3xl py-6 px-8 text-center mb-10 shadow-sm bg-gray-50 inline-block w-full max-w-4xl mx-auto block">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-tight">
                        How to Bet on <span className="text-brand-gold">Goldplay</span> Online Cricket Betting & Casino Games
                    </h1>
                </div>

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                        <span className="text-brand-gold font-bold">Goldplay</span> is a trusted platform for online sports betting and casino games. Whether you enjoy betting on cricket, football, or trying your luck in casino games like slots and poker, Goldplay makes online gaming easy, secure, and fun. This guide will show you how to start and enjoy the platform responsibly.
                    </p>

                    <a
                        href="https://wa.me/9288689683?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gold-gradient hover:bg-brand-gold text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        <MessageCircle size={24} /> Login & Play Online
                    </a>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-12 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Guide to Bet on Goldplay</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-brand-gold-dark font-bold text-center text-sm mb-6">
                            STEP 1: ACCOUNT CREATION
                        </div>
                        <h3 className="text-gray-900 font-bold text-xl mb-4">Creating a Goldplay Account</h3>
                        <p className="text-gray-600 mb-4 text-sm font-medium">Getting started is quick and easy:</p>
                        <ol className="list-decimal pl-5 text-gray-600 text-sm leading-relaxed mb-6 space-y-3 font-medium">
                            <li>Visit the <span className="text-brand-gold font-bold">official Goldplay website</span>.</li>
                            <li>Click <strong>Sign Up</strong> or <strong>Register</strong>.</li>
                            <li>Fill in your details like name, email, and mobile number.</li>
                            <li>Set a <strong>strong password</strong>.</li>
                        </ol>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs font-semibold">
                            <strong>Tip:</strong> Enable 2-factor authentication for extra security.
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-brand-gold-dark font-bold text-center text-sm mb-6">
                            STEP 2: DEPOSIT FUNDS
                        </div>
                        <h3 className="text-gray-900 font-bold text-xl mb-4">Depositing Funds</h3>
                        <p className="text-gray-600 mb-4 text-sm font-medium">To start betting, you need to deposit money:</p>
                        <ul className="list-disc pl-5 text-gray-600 text-sm leading-relaxed mb-6 space-y-3 font-medium">
                            <li>Supports <strong>UPI, cards, e-wallets</strong>, and more.</li>
                            <li>Check <strong>min/max deposit limits</strong>.</li>
                            <li>Verify balance before betting.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs font-semibold">
                            <strong>Tip:</strong> Start small to get familiar with the process.
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-brand-gold-dark font-bold text-center text-sm mb-6">
                            STEP 3: SPORTS BETTING
                        </div>
                        <h3 className="text-gray-900 font-bold text-xl mb-4">Sports Betting Guide</h3>
                        <p className="text-gray-600 mb-4 text-sm font-medium">Explore various sports options:</p>
                        <ul className="list-disc pl-5 text-gray-600 text-sm leading-relaxed mb-6 space-y-3 font-medium">
                            <li><strong>Sports:</strong> Cricket, football, tennis, etc.</li>
                            <li><strong>Bet Types:</strong> Single, multiple, live bets.</li>
                            <li><strong>Odds:</strong> Understand how to maximize winnings.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs font-semibold">
                            <strong>Tip:</strong> Start with simple match-winner bets.
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-brand-gold-dark font-bold text-center text-sm mb-6">
                            STEP 4: CASINO GAMES
                        </div>
                        <h3 className="text-gray-900 font-bold text-xl mb-4">Playing Casino Games</h3>
                        <p className="text-gray-600 mb-4 text-sm font-medium">Enjoy a wide range of casino games:</p>
                        <ul className="list-disc pl-5 text-gray-600 text-sm leading-relaxed mb-6 space-y-3 font-medium">
                            <li><strong>Games:</strong> Slots, poker, roulette, blackjack.</li>
                            <li><strong>Process:</strong> Select game, place bet, play.</li>
                            <li><strong>Demo Mode:</strong> Try for free first.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs font-semibold">
                            <strong>Tip:</strong> Set a budget for casino sessions.
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-brand-gold-dark font-bold text-center text-sm mb-6">
                            STEP 5: LIVE BETTING
                        </div>
                        <h3 className="text-gray-900 font-bold text-xl mb-4">Live Betting Experience</h3>
                        <ul className="list-disc pl-5 text-gray-600 text-sm leading-relaxed mb-6 space-y-3 font-medium">
                            <li><strong>Live Sports:</strong> Bet in real-time.</li>
                            <li><strong>Live Casino:</strong> Real dealers via video stream.</li>
                            <li>Track updates for informed decisions.</li>
                        </ul>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs font-semibold">
                            <strong>Tip:</strong> Watch the game live while betting.
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-brand-gold-dark font-bold text-center text-sm mb-6">
                            STEP 6: WITHDRAWALS
                        </div>
                        <h3 className="text-gray-900 font-bold text-xl mb-4">Withdrawal Process</h3>
                        <p className="text-gray-600 mb-4 text-sm font-medium">Cash out your winnings easily:</p>
                        <ol className="list-decimal pl-5 text-gray-600 text-sm leading-relaxed mb-6 space-y-3 font-medium">
                            <li>Go to <strong>Withdraw</strong> section.</li>
                            <li>Choose method and amount.</li>
                            <li>Complete verification.</li>
                        </ol>
                        <div className="border-l-4 border-blue-400 pl-4 mt-auto text-gray-500 italic text-xs font-semibold">
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

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const Rules = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 mb-10">

                <div className="border border-brand-gold/30 bg-gray-50 rounded-3xl py-6 px-8 text-center mt-10 mb-8 max-w-4xl mx-auto shadow-sm">
                    <h1 className="text-gray-900 text-2xl md:text-3xl font-extrabold uppercase tracking-tight m-0">Goldplay <span className="text-brand-gold">Rules and Regulations</span></h1>
                </div>

                <p className="text-center mb-8 text-gray-600 font-medium">
                    Welcome to <strong className="text-brand-gold">Goldplay</strong>! This page explains all our rules in simple language so you can bet safely and enjoy your gaming experience.
                </p>

                <div className="text-center mb-12">
                    <a
                        href="https://wa.me/6289183063?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gold-gradient hover:bg-brand-gold text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        Join Goldplay
                    </a>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px] shadow-sm">
                    <h2 className="text-gray-900 text-xl font-bold uppercase m-0">General Rules</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium">
                    <p className="text-brand-gold italic font-bold mb-4 uppercase tracking-widest text-sm">Who Can Use Goldplay?</p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li><strong>Age Requirement:</strong> You must be 18 years or older to create an account and place bets on <strong className="text-brand-gold">Goldplay</strong>.</li>
                        <li><strong>One Account Per Person:</strong> Each user can only have one account. Creating multiple accounts is strictly prohibited and will result in all accounts being suspended.</li>
                        <li><strong>Legal Responsibility:</strong> You must follow the gambling laws in your state or country. It is your responsibility to check if online betting is legal in your area before using our platform.</li>
                        <li><strong>Accurate Information:</strong> When registering, provide true and correct details including your name, email, phone number, and date of birth. Any false information may lead to account suspension.</li>
                    </ul>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px] shadow-sm">
                    <h2 className="text-gray-900 text-xl font-bold uppercase m-0">Cricket Betting Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Before Match Starts</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-3 font-medium">
                            <li>You can place bets until the match begins</li>
                            <li>Bets cannot be changed or cancelled once confirmed</li>
                            <li>If a match is abandoned or cancelled, all bets will be void (refunded)</li>
                        </ul>
                    </div>
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">During Live Betting</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-3 font-medium">
                            <li>Live odds change based on match situations</li>
                            <li>Bets are locked when you click “Place Bet”</li>
                            <li>If the match is interrupted (rain, bad light), bets remain valid unless the match is completely cancelled</li>
                        </ul>
                    </div>
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Result Declaration</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-3 font-medium">
                            <li>All results are based on official match outcomes</li>
                            <li>In case of disputes, the official umpire's decision is final</li>
                            <li>Results are usually settled within 24 hours of match completion</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px] shadow-sm">
                    <h2 className="text-gray-900 text-xl font-bold uppercase m-0">Casino Betting Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Game Fairness</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600 font-medium">All casino games use certified Random Number Generators (RNG) to ensure fair results. No one can predict or manipulate game outcomes.</p>
                    </div>
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Live Casino</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-3 font-medium">
                            <li>Live dealer decisions are final</li>
                            <li>If there's a technical issue during your game, we will refund your bet</li>
                            <li>Video proof is maintained for all live casino games</li>
                        </ul>
                    </div>
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Slots and Table Games</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-3 font-medium">
                            <li>Game rules are available inside each game</li>
                            <li>Maximum win limits apply as per game rules</li>
                            <li>Jackpot payouts are subject to verification</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px] shadow-sm">
                    <h2 className="text-gray-900 text-xl font-bold uppercase m-0">Fantasy Games Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Team Selection</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600 font-medium">You must select your team before the deadline. Late entries are not accepted.</p>
                    </div>
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Player Points</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600 font-medium">Points are awarded based on real match performance and our published point system.</p>
                    </div>
                    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-4 text-center mb-6 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-sm font-bold uppercase m-0">Contests & Winnings</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600 font-medium">Fantasy winnings are paid within 24-48 hours after match results are verified.</p>
                    </div>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px] shadow-sm">
                    <h2 className="text-gray-900 text-xl font-bold uppercase m-0">Payment Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10">
                    <div className="border border-gray-100 rounded-3xl p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-6 text-center mb-8 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-lg font-bold uppercase m-0">Deposit</h3>
                        </div>
                        <div className="space-y-4 font-medium text-gray-600">
                            <p className="text-base"><strong className="text-gray-900">Minimum Deposit:</strong> ₹500 per transaction</p>
                            <p className="text-base"><strong className="text-gray-900">Maximum Deposit:</strong> ₹50,000 per transaction</p>
                            <div className="pt-4">
                                <p className="text-gray-900 font-bold mb-3 uppercase tracking-widest text-xs">Accepted Methods:</p>
                                <ul className="list-disc pl-5 text-sm leading-relaxed space-y-3">
                                    <li>UPI (Google Pay, PhonePe, Paytm)</li>
                                    <li>Bank Transfer</li>
                                    <li>Net Banking</li>
                                    <li>Debit/Credit Cards</li>
                                    <li>E-wallets</li>
                                </ul>
                            </div>
                            <p className="text-sm mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 italic"><strong>Processing Time:</strong> Deposits are instant in most cases. If money is deducted from your account but not credited, contact support within 24 hours.</p>
                        </div>
                    </div>
                    <div className="border border-gray-100 rounded-3xl p-10 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-6 text-center mb-8 w-fit mx-auto">
                            <h3 className="text-brand-gold-dark text-lg font-bold uppercase m-0">Withdrawals</h3>
                        </div>
                        <div className="space-y-4 font-medium text-gray-600">
                            <p className="text-base"><strong className="text-gray-900">Minimum Withdrawal:</strong> ₹500</p>
                            <p className="text-base"><strong className="text-gray-900">Maximum Withdrawal:</strong> ₹1,00,000 per transaction</p>
                            <div className="pt-4">
                                <p className="text-gray-900 font-bold mb-3 uppercase tracking-widest text-xs">Processing Time:</p>
                                <ul className="list-disc pl-5 text-sm leading-relaxed space-y-3">
                                    <li>Verified accounts: 1-24 hours</li>
                                    <li>Unverified accounts: Up to 48 hours</li>
                                </ul>
                            </div>
                            <p className="text-sm mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 italic"><strong>Verification Required:</strong> You must verify your identity with valid documents (Aadhaar, PAN, bank details) before making your first withdrawal.</p>
                            <p className="text-sm font-bold text-red-600 mt-2">Important: Withdrawals can only be made to the same account used for deposit.</p>
                        </div>
                    </div>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px] shadow-sm">
                    <h2 className="text-gray-900 text-xl font-bold uppercase m-0">Account Security Rules</h2>
                </div>
                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-brand-gold italic font-bold mb-6 uppercase tracking-widest text-sm">Keep Your Account Safe</p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li><strong>Password Protection:</strong> Use a strong password and never share it with anyone. Goldplay will never ask for your password.</li>
                        <li><strong>Login Details:</strong> Keep your <strong className="text-brand-gold">Goldplay ID</strong> and password confidential. You are responsible for all activity on your account.</li>
                        <li><strong>Suspicious Activity:</strong> If you notice any suspicious activity, contact our support team immediately.</li>
                    </ul>
                </div>

                <div className="bg-gray-100 rounded-3xl p-10 md:p-16 text-center shadow-inner mb-12 border border-gray-200">
                    <h2 className="text-gray-900 text-3xl font-black uppercase mb-8 tracking-tighter">Responsible Gaming</h2>
                    <p className="text-lg text-gray-600 mb-10 font-medium max-w-3xl mx-auto">
                        Goldplay promotes responsible gambling. Gaming should be fun and entertaining, not a way to make money or solve financial problems.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a href="https://wa.me/6289183063?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
                            <MessageCircle size={24} /> Get The Goldplay ID
                        </a>
                    </div>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px] shadow-sm">
                    <h2 className="text-gray-900 text-xl font-bold uppercase m-0">Contact Us</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium text-center bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="mb-6"><strong className="text-gray-900 uppercase tracking-widest text-xs block mb-2">24/7 Customer Support Available</strong></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-gray-900 font-extrabold text-xl">WhatsApp</p>
                            <p className="text-brand-gold font-bold">+1 (640) 239-6837</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-gray-900 font-extrabold text-xl">Live Chat</p>
                            <p className="text-brand-gold font-bold">24/7 Available</p>
                        </div>
                    </div>
                    <p className="mt-8 text-sm italic">Languages Supported: Hindi, Bengali, English, Tamil, Marathi, Malayalam</p>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium border-t-2 border-gray-100 pt-10">
                    <h2 className="text-gray-900 text-xl font-bold uppercase mb-6 text-center">Important Disclaimers</h2>
                    <ul className="list-disc pl-5 mb-10 space-y-4">
                        <li>Goldplay is not responsible for losses incurred due to your betting decisions</li>
                        <li>Past performance or odds do not guarantee future results</li>
                        <li>All games involve risk – never bet more than you can afford to lose</li>
                        <li>Winnings are subject to applicable taxes as per Indian law</li>
                    </ul>
                    <p className="mt-10 font-black text-center text-2xl uppercase tracking-tighter text-gray-900">Play Smart. Play Fair. Play Responsibly.</p>
                </div>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default Rules;

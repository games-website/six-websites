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
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 mb-10">

                <div className="border border-yellow-500 rounded-full py-4 px-6 text-center mt-10 mb-8 max-w-4xl mx-auto shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                    <h1 className="text-yellow-500 text-2xl md:text-3xl font-bold m-0">Mahadev Book Rules and Regulations</h1>
                </div>

                <p className="text-center mb-8 text-gray-300">
                    Welcome to <strong className="text-yellow-500">Mahadev Book</strong>! This page explains all our rules in simple language so you can bet safely and enjoy your gaming experience.
                </p>

                <div className="text-center mb-12">
                    <a
                        href="https://wa.me/16402396837?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded transition-colors"
                    >
                        Join Mahadev Book
                    </a>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px]">
                    <h2 className="text-yellow-500 text-xl italic m-0">General Rules</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="text-yellow-500 italic mb-4">Who Can Use Mahadev Book?</p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li><strong>Age Requirement:</strong> You must be 18 years or older to create an account and place bets on <strong className="text-yellow-500">Mahadev Book</strong>.</li>
                        <li><strong>One Account Per Person:</strong> Each user can only have one account. Creating multiple accounts is strictly prohibited and will result in all accounts being suspended.</li>
                        <li><strong>Legal Responsibility:</strong> You must follow the gambling laws in your state or country. It is your responsibility to check if online betting is legal in your area before using our platform.</li>
                        <li><strong>Accurate Information:</strong> When registering, provide true and correct details including your name, email, phone number, and date of birth. Any false information may lead to account suspension.</li>
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px]">
                    <h2 className="text-yellow-500 text-xl italic m-0">Cricket Betting Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Before Match Starts</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 space-y-2">
                            <li>You can place bets until the match begins</li>
                            <li>Bets cannot be changed or cancelled once confirmed</li>
                            <li>If a match is abandoned or cancelled, all bets will be void (refunded)</li>
                        </ul>
                    </div>
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">During Live Betting</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 space-y-2">
                            <li>Live odds change based on match situations</li>
                            <li>Bets are locked when you click “Place Bet”</li>
                            <li>If the match is interrupted (rain, bad light), bets remain valid unless the match is completely cancelled</li>
                        </ul>
                    </div>
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Result Declaration</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 space-y-2">
                            <li>All results are based on official match outcomes</li>
                            <li>In case of disputes, the official umpire's decision is final</li>
                            <li>Results are usually settled within 24 hours of match completion</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px]">
                    <h2 className="text-yellow-500 text-xl italic m-0">Casino Betting Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Game Fairness</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-300">All casino games use certified Random Number Generators (RNG) to ensure fair results. No one can predict or manipulate game outcomes.</p>
                    </div>
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Live Casino</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 space-y-2">
                            <li>Live dealer decisions are final</li>
                            <li>If there's a technical issue during your game, we will refund your bet</li>
                            <li>Video proof is maintained for all live casino games</li>
                        </ul>
                    </div>
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Slots and Table Games</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 space-y-2">
                            <li>Game rules are available inside each game</li>
                            <li>Maximum win limits apply as per game rules</li>
                            <li>Jackpot payouts are subject to verification</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px]">
                    <h2 className="text-yellow-500 text-xl italic m-0">Fantasy Games Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Team Selection</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-300">You must select your team before the deadline. Late entries are not accepted.</p>
                    </div>
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Player Points</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-300">Points are awarded based on real match performance and our published point system.</p>
                    </div>
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Contests & Winnings</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-300">Fantasy winnings are paid within 24-48 hours after match results are verified.</p>
                    </div>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px]">
                    <h2 className="text-yellow-500 text-xl italic m-0">Payment Rules</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10">
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Deposit</h3>
                        </div>
                        <p className="text-sm mb-2 text-gray-300"><strong>Minimum Deposit:</strong> ₹500 per transaction</p>
                        <p className="text-sm mb-2 text-gray-300"><strong>Maximum Deposit:</strong> ₹50,000 per transaction (no daily limit on number of transactions)</p>
                        <p className="text-sm mb-2 text-gray-300"><strong>Accepted Methods:</strong></p>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 space-y-2">
                            <li>UPI (Google Pay, PhonePe, Paytm)</li>
                            <li>Bank Transfer</li>
                            <li>Net Banking</li>
                            <li>Debit/Credit Cards</li>
                            <li>E-wallets</li>
                        </ul>
                        <p className="text-sm mt-4 text-gray-300"><strong>Processing Time:</strong> Deposits are instant in most cases. If money is deducted from your account but not credited to Mahadev Book, contact support within 24 hours.</p>
                    </div>
                    <div className="border border-yellow-500 rounded-xl p-6 bg-zinc-900/50">
                        <div className="border border-yellow-500 rounded-full py-2 px-4 text-center mb-4 w-fit mx-auto">
                            <h3 className="text-yellow-500 text-lg italic m-0">Withdrawals</h3>
                        </div>
                        <p className="text-sm mb-2 text-gray-300"><strong>Minimum Withdrawal:</strong> ₹500</p>
                        <p className="text-sm mb-2 text-gray-300"><strong>Maximum Withdrawal:</strong> ₹1,00,000 per transaction</p>
                        <p className="text-sm mb-2 text-gray-300"><strong>Processing Time:</strong></p>
                        <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 space-y-2">
                            <li>Verified accounts: 1-24 hours</li>
                            <li>Unverified accounts: May take up to 48 hours</li>
                        </ul>
                        <p className="text-sm mt-4 text-gray-300"><strong>Verification Required:</strong> You must verify your identity with valid documents (Aadhaar, PAN, bank details) before making your first withdrawal.</p>
                        <p className="text-sm mt-2 text-gray-300"><strong>Important:</strong> Withdrawals can only be made to the same account used for deposit. This is for your security.</p>
                    </div>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px]">
                    <h2 className="text-yellow-500 text-xl italic m-0">Bonus and Promotions</h2>
                </div>
                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <ul className="list-disc pl-5 space-y-4">
                        <li><strong>Welcome Bonus:</strong> New users get a welcome bonus on their first deposit. Check the Promotions page for current offers.</li>
                        <li><strong>Wagering Requirements:</strong> All bonuses come with wagering requirements. You must bet the bonus amount a certain number of times before you can withdraw it.</li>
                        <li><strong>Bonus Expiry:</strong> Bonuses expire after 30 days if wagering requirements are not completed.</li>
                        <li><strong>Bonus Abuse:</strong> If we detect bonus abuse (creating multiple accounts, coordinated betting), we reserve the right to cancel bonuses and freeze accounts.</li>
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-fit mx-auto min-w-[50%] md:min-w-[300px]">
                    <h2 className="text-yellow-500 text-xl italic m-0">Account Security Rules</h2>
                </div>
                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="text-yellow-500 italic mb-4">Keep Your Account Safe</p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li><strong>Password Protection:</strong> Use a strong password and never share it with anyone. Mahadev Book will never ask for your password.</li>
                        <li><strong>Login Details:</strong> Keep your <strong className="text-yellow-500">Mahadev Book ID</strong> and password confidential. You are responsible for all activity on your account.</li>
                        <li><strong>Suspicious Activity:</strong> If you notice any suspicious activity, contact our support team immediately.</li>
                        <li><strong>Two-Factor Authentication:</strong> Enable 2FA for added security (available in Account Settings).</li>
                    </ul>
                    <p className="text-yellow-500 italic mb-4 mt-8">Account Suspension</p>
                    <p>Your account may be suspended if you:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Provide false information</li>
                        <li>Create multiple accounts</li>
                        <li>Engage in fraudulent activities</li>
                        <li>Attempt to manipulate games or bets</li>
                        <li>Abuse bonuses or promotions</li>
                        <li>Violate any of our terms</li>
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Responsible Gaming</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="text-yellow-500 italic mb-4">Our Commitment</p>
                    <p className="mb-6">Mahadev Book promotes responsible gambling. Gaming should be fun and entertaining, not a way to make money or solve financial problems.</p>

                    <p className="text-yellow-500 italic mb-4">Self-Control Tools</p>
                    <p className="mb-2"><strong>Deposit Limits:</strong> Set daily, weekly, or monthly deposit limits from your Account Settings.</p>
                    <p className="mb-2"><strong>Self-Exclusion:</strong> Take a break from betting by selecting self-exclusion for 1 month, 3 months, 6 months, or permanently.</p>
                    <p className="mb-6"><strong>Reality Check:</strong> Set time reminders to alert you how long you’ve been playing.</p>

                    <p className="text-yellow-500 italic mb-4">Warning Signs of Problem Gambling</p>
                    <div className="text-right -mt-6">
                        <a href="https://wa.me/16402396837?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
                            <MessageCircle size={20} /> Get The Mahadev Book ID Now
                        </a>
                    </div>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Disputes and Complaints</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="text-yellow-500 italic mb-4">How to Raise a Complaint</p>
                    <p className="mb-2">If you have any issue with:</p>
                    <ul className="list-disc pl-5 mb-6 space-y-1">
                        <li>Bet settlement</li>
                        <li>Deposit/withdrawal</li>
                        <li>Account access</li>
                        <li>Game results</li>
                    </ul>

                    <p className="mb-2"><strong>Step 1:</strong> Contact our 24/7 customer support via Live Chat or WhatsApp</p>
                    <p className="mb-2"><strong>Step 2:</strong> Provide your User ID, transaction details, and description of the issue</p>
                    <p className="mb-4"><strong>Step 3:</strong> We will investigate and respond within 24-48 hours</p>

                    <p className="text-yellow-500 italic mb-4">Important Points</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>All disputes must be reported within 48 hours of the event</li>
                        <li>We require screenshots or proof for faster resolution</li>
                        <li>Management decisions on disputes are final</li>
                        <li>We follow a fair and transparent complaint resolution process</li>
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Technical Issues</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="text-yellow-500 italic mb-4">Platform Errors</p>
                    <p className="mb-2">If you experience technical problems like:</p>
                    <ul className="list-disc pl-5 mb-6 space-y-1">
                        <li>Website not loading</li>
                        <li>App crashing</li>
                        <li>Bets not being placed</li>
                        <li>Payment failures</li>
                    </ul>

                    <p className="mb-4"><strong>Immediate Action:</strong> Contact support immediately with details</p>
                    <p><strong>Protection:</strong> We are not responsible for losses due to internet connectivity issues, device problems, or issues beyond our control. However, if the fault is on our end, we will review and compensate fairly.</p>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Changes to Rules</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="text-yellow-500 italic mb-4">Updates and Modifications</p>
                    <p className="mb-6">Mahadev Book reserves the right to update these Rules and Regulations at any time.</p>

                    <p className="text-yellow-500 italic mb-4">How You'll Know:</p>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                        <li>Major changes will be notified via email</li>
                        <li>Important updates will be shown on the website</li>
                        <li>You can always check this page for the latest version</li>
                    </ul>

                    <p><strong>Your Agreement:</strong> By continuing to use <strong className="text-yellow-500">Mahadev Book</strong> after changes are made, you accept the updated rules.</p>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Contact Us</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300 text-center">
                    <p className="mb-4"><strong>24/7 Customer Support Available:</strong></p>
                    <p className="mb-2"><strong>WhatsApp:</strong> +16402396837</p>
                    <p className="mb-2"><strong>Live Chat:</strong> Available on website and app</p>
                    <p className="mb-2"><strong>Support Hours:</strong> 24 hours, 7 days a week</p>

                    <p className="mt-6"><strong>Languages Supported:</strong> Hindi, Bengali, English, Tamil, Marathi, Malayalam</p>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Your Acceptance</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="mb-6">By registering and using <strong className="text-yellow-500">Mahadev Book</strong>, you confirm that:</p>
                    <ul className="list-none pl-0 space-y-3">
                        <li>✓ You are 18 years or older</li>
                        <li>✓ You have read and understood these Rules and Regulations</li>
                        <li>✓ You agree to follow all our rules</li>
                        <li>✓ You understand that online betting involves risk</li>
                        <li>✓ You will gamble responsibly</li>
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Privacy and Data Protection</h2>
                </div>
                <div className="max-w-4xl mx-auto mb-10 text-gray-300 text-center">
                    <p className="mb-6">Your personal information is safe with us. We use advanced SSL encryption to protect your data. We will never share your information with third parties without your consent.</p>
                    <p>For complete details, read our <span className="text-yellow-500">Privacy Policy</span>.</p>
                </div>

                <div className="border border-yellow-500 rounded-full py-3 px-6 text-center mb-6 max-w-3xl mx-auto">
                    <h2 className="text-yellow-500 text-xl m-0">Important Disclaimers</h2>
                </div>
                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <ul className="list-disc pl-5 mb-6 space-y-3">
                        <li>Mahadev Book is not responsible for losses incurred due to your betting decisions</li>
                        <li>Past performance or odds do not guarantee future results</li>
                        <li>All games involve risk – never bet more than you can afford to lose</li>
                        <li>Winnings are subject to applicable taxes as per Indian law</li>
                        <li>Management reserves the right to refuse service to any user who violates our terms</li>
                    </ul>
                    <p className="mt-6 text-sm"><strong>Last Updated:</strong> November 2024</p>
                    <p className="mt-6 font-bold text-center text-lg">Play Smart. Play Fair. Play Responsibly.</p>
                    <p className="mt-6 italic text-yellow-500 text-center">Mahadev Book – India’s Most Trusted Online Betting Platform.</p>
                    <p className="mt-2 text-center">Create Your Account on <strong className="text-yellow-500">Mahadev Book</strong> Platform.</p>

                    <div className="text-center mt-8">
                        <a href="https://wa.me/16402396837?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                            <MessageCircle size={24} /> Get The Mahadev Book ID Now
                        </a>
                    </div>
                </div>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default Rules;

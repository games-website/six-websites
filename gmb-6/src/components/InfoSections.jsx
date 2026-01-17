import React from 'react';
import { Globe, Zap, ShieldCheck, CheckCircle2, Lock, Dices, Wallet, Crown, Star, Receipt, ZoomIn } from 'lucide-react';
import FAQs from './FAQs';

const InfoSections = () => {
    return (
        <div className="md:col-span-8 space-y-12">
            {/* SECTION 11: About */}
            <section className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
                    <Globe className="text-white w-6 h-6" /> About Bettingraja365
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                    Bettingraja365 is India's first legal and compliant gaming platform, revolutionizing the online betting industry. Established in 2016, we have grown to become the most trusted exchange for sports betting and live casino games.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    With over 10 million active users, we pride ourselves on offering a seamless experience across Cricket, Football, Tennis, and over 150 live casino games.
                </p>
            </section>

            {/* SECTION 12: Instant ID Process */}
            <section id="get-id">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Zap className="text-yellow-500 w-6 h-6" /> Instant ID Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#222] p-6 rounded-lg relative overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-colors">
                        <div className="text-6xl font-black text-white/5 absolute -right-2 -bottom-4">01</div>
                        <div className="text-yellow-500 font-bold text-xl mb-2">Message</div>
                        <p className="text-gray-400 text-sm">Text "Hi" on WhatsApp.</p>
                    </div>
                    <div className="bg-[#222] p-6 rounded-lg relative overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-colors">
                        <div className="text-6xl font-black text-white/5 absolute -right-2 -bottom-4">02</div>
                        <div className="text-yellow-500 font-bold text-xl mb-2">Deposit</div>
                        <p className="text-gray-400 text-sm">Send min ₹500 via UPI.</p>
                    </div>
                    <div className="bg-[#222] p-6 rounded-lg relative overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-colors">
                        <div className="text-6xl font-black text-white/5 absolute -right-2 -bottom-4">03</div>
                        <div className="text-yellow-500 font-bold text-xl mb-2">Play</div>
                        <p className="text-gray-400 text-sm">Get User/Pass instantly.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 13: Why Trusted */}
            <section className="bg-gradient-to-r from-yellow-900/20 to-transparent p-6 rounded-xl border-l-4 border-yellow-500">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-green-500 w-6 h-6" /> Why Bettingraja365 is Trusted?
                </h2>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="text-yellow-500 w-4 h-4 shrink-0" /> Licensed Gaming Authority Certified.</li>
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="text-yellow-500 w-4 h-4 shrink-0" /> 5+ years of operation with zero fraud.</li>
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="text-yellow-500 w-4 h-4 shrink-0" /> Official Sponsor of T20 Leagues.</li>
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="text-yellow-500 w-4 h-4 shrink-0" /> 100% Transparent policies.</li>
                </ul>
            </section>

            {/* SECTION 14: Login Guide Visual */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Login Guide</h2>
                <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                            <p className="text-sm text-gray-300">Visit <strong>bettingraja365.in</strong> official site.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                            <p className="text-sm text-gray-300">Click <strong>Login</strong> button (Top Right).</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                            <p className="text-sm text-gray-300">Enter Credentials from WhatsApp.</p>
                        </div>
                    </div>
                    <div className="bg-black/30 p-4 rounded border border-white/10 w-full md:w-1/3 text-center">
                        <Lock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                        <div className="text-xs text-gray-500">Secure 256-bit SSL Login</div>
                    </div>
                </div>
            </section>

            {/* SECTION 15: Exchange vs Sportsbook */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Exchange vs Sportsbook</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-lg overflow-hidden">
                    <div className="bg-[#1a1a1a] p-6 border-r border-white/10">
                        <h3 className="text-yellow-500 font-bold text-lg mb-2">Betting Exchange</h3>
                        <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                            <li>You bet against other players.</li>
                            <li>Higher odds (Better profits).</li>
                            <li>You can be the bookie (Lay).</li>
                        </ul>
                    </div>
                    <div className="bg-[#222] p-6">
                        <h3 className="text-gray-400 font-bold text-lg mb-2">Traditional Sportsbook</h3>
                        <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4">
                            <li>You bet against the house.</li>
                            <li>Fixed odds included margins.</li>
                            <li>Only "Back" betting allowed.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 16: How to Play */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Dices className="text-purple-500 w-6 h-6" /> How to Play? (Back vs Lay)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-900/10 p-5 rounded-lg border border-blue-500/30">
                        <h3 className="text-blue-400 font-bold text-xl mb-2">BACK (Blue)</h3>
                        <p className="text-sm text-gray-300">
                            Bet <strong>FOR</strong> an outcome.
                            <br /><em>Example: Back India to win.</em>
                        </p>
                    </div>
                    <div className="bg-pink-900/10 p-5 rounded-lg border border-pink-500/30">
                        <h3 className="text-pink-400 font-bold text-xl mb-2">LAY (Pink)</h3>
                        <p className="text-sm text-gray-300">
                            Bet <strong>AGAINST</strong> an outcome.
                            <br /><em>Example: Lay India (You win if India loses).</em>
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 17: Payment Methods */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Wallet className="text-green-400 w-6 h-6" /> Payment Gateways
                </h2>
                <p className="text-gray-400 mb-4">Fastest withdrawals in 15 mins, 24/7.</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center">
                    <div className="bg-[#222] py-2 rounded border border-white/5 text-gray-300 text-xs font-bold">UPI</div>
                    <div className="bg-[#222] py-2 rounded border border-white/5 text-gray-300 text-xs font-bold">Paytm</div>
                    <div className="bg-[#222] py-2 rounded border border-white/5 text-gray-300 text-xs font-bold">PhonePe</div>
                    <div className="bg-[#222] py-2 rounded border border-white/5 text-gray-300 text-xs font-bold">GPay</div>
                    <div className="bg-[#222] py-2 rounded border border-white/5 text-gray-300 text-xs font-bold">Bank</div>
                    <div className="bg-[#222] py-2 rounded border border-white/5 text-gray-300 text-xs font-bold">IMPS</div>
                </div>
            </section>

            {/* SECTION 18: VIP Program */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Crown className="text-yellow-500 w-6 h-6" /> VIP Club
                </h2>
                <div className="bg-gradient-to-r from-yellow-900/40 to-black p-6 rounded-xl border border-yellow-500/30">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-lg font-bold text-yellow-500">Platinum Member Benefits</div>
                        <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">Invite Only</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                        <div>• Dedicated Account Manager</div>
                        <div>• Higher Betting Limits</div>
                        <div>• Instant Withdrawals Priority</div>
                        <div>• Exclusive Event Invites</div>
                    </div>
                </div>
            </section>

            {/* SECTION 19: Winners Leaderboard */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Recent Big Winners</h2>
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5">
                    <div className="grid grid-cols-3 p-3 bg-[#222] text-xs font-bold text-gray-400">
                        <div>Player</div>
                        <div>Game</div>
                        <div className="text-right">Won</div>
                    </div>
                    <div className="grid grid-cols-3 p-3 border-b border-white/5 text-sm">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Ravi K.</div>
                        <div className="text-gray-400">Aviator</div>
                        <div className="text-right text-green-400 font-bold">₹1,50,000</div>
                    </div>
                    <div className="grid grid-cols-3 p-3 border-b border-white/5 text-sm">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Amit S.</div>
                        <div className="text-gray-400">Roulette</div>
                        <div className="text-right text-green-400 font-bold">₹85,000</div>
                    </div>
                    <div className="grid grid-cols-3 p-3 text-sm">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Priya D.</div>
                        <div className="text-gray-400">IPL Match</div>
                        <div className="text-right text-green-400 font-bold">₹2,10,000</div>
                    </div>
                </div>
            </section>

            {/* SECTION 20: Payment Proofs */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Receipt className="text-green-400 w-6 h-6" /> Verified Payment Proofs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Proof 1 */}
                    <div className="bg-[#1a1a1a] p-3 rounded-xl border border-white/5">
                        <div className="aspect-[9/16] bg-[#222] rounded-lg mb-3 relative overflow-hidden flex items-center justify-center border border-white/10 group">
                            <div className="absolute inset-0 bg-green-900/10"></div>
                            <div className="text-center p-4">
                                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"><CheckCircle2 className="text-black font-bold" /></div>
                                <div className="text-green-500 font-bold text-lg">₹50,000</div>
                                <div className="text-xs text-gray-400">Transfer Successful</div>
                                <div className="text-[10px] text-gray-500 mt-1">Ref: 8374XXXX</div>
                            </div>
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">VJ</div>
                            <div className="text-sm font-bold">Vijay Kumar</div>
                        </div>
                        <p className="text-xs text-gray-400">"Withdrawal received in just 2 minutes! Best app."</p>
                    </div>

                    {/* Proof 2 */}
                    <div className="bg-[#1a1a1a] p-3 rounded-xl border border-white/5">
                        <div className="aspect-[9/16] bg-[#222] rounded-lg mb-3 relative overflow-hidden flex items-center justify-center border border-white/10 group">
                            <div className="absolute inset-0 bg-green-900/10"></div>
                            <div className="text-center p-4">
                                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"><CheckCircle2 className="text-black font-bold" /></div>
                                <div className="text-green-500 font-bold text-lg">₹1,25,000</div>
                                <div className="text-xs text-gray-400">Transfer Successful</div>
                                <div className="text-[10px] text-gray-500 mt-1">Ref: 9921XXXX</div>
                            </div>
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">RS</div>
                            <div className="text-sm font-bold">Rahul Singh</div>
                        </div>
                        <p className="text-xs text-gray-400">"Big amount trusted! 1 Lakh withdrawal done instantly."</p>
                    </div>

                    {/* Proof 3 */}
                    <div className="bg-[#1a1a1a] p-3 rounded-xl border border-white/5">
                        <div className="aspect-[9/16] bg-[#222] rounded-lg mb-3 relative overflow-hidden flex items-center justify-center border border-white/10 group">
                            <div className="absolute inset-0 bg-green-900/10"></div>
                            <div className="text-center p-4">
                                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"><CheckCircle2 className="text-black font-bold" /></div>
                                <div className="text-green-500 font-bold text-lg">₹12,500</div>
                                <div className="text-xs text-gray-400">Transfer Successful</div>
                                <div className="text-[10px] text-gray-500 mt-1">Ref: 2210XXXX</div>
                            </div>
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">AK</div>
                            <div className="text-sm font-bold">Amit K.</div>
                        </div>
                        <p className="text-xs text-gray-400">"Small or big amount, Bettingraja365 always pays on time."</p>
                    </div>
                </div>
            </section>

            {/* SECTION 21: User Ratings */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Star className="text-yellow-400 fill-yellow-400 w-6 h-6" /> User Reviews
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-center bg-[#1a1a1a] p-6 rounded-xl">
                    <div className="text-center">
                        <div className="text-6xl font-black text-white">4.8</div>
                        <div className="flex gap-1 justify-center my-2 text-yellow-400">★★★★★</div>
                        <div className="text-xs text-gray-500">1.2M Reviews</div>
                    </div>
                    <div className="flex-1 space-y-3 w-full">
                        <div className="bg-black/40 p-3 rounded border border-white/5">
                            <div className="flex justify-between mb-1">
                                <span className="font-bold text-yellow-500">Rahul S.</span>
                                <div className="text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <p className="text-gray-400 text-sm">"Fastest withdrawal I have ever seen."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 22: FAQs */}
            <FAQs />

            {/* SECTION 23: Betting Rules */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Quick Betting Rules</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1a1a1a] p-4 rounded border border-white/5">
                        <div className="font-bold text-yellow-500 mb-1">Cricket</div>
                        <p className="text-xs text-gray-400">Bets are settled based on official match results. Super over runs count for match winner only.</p>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded border border-white/5">
                        <div className="font-bold text-yellow-500 mb-1">Football</div>
                        <p className="text-xs text-gray-400">90 mins play only. Extra time and penalties do not count unless specified.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 24: Latest News */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Latest News</h2>
                <div className="bg-[#1a1a1a] p-4 rounded border border-white/5 flex gap-4">
                    <div className="w-16 h-16 bg-gray-700 rounded flex-shrink-0"></div>
                    <div>
                        <h4 className="font-bold text-sm">IPL 2025 Auctions Date Announced</h4>
                        <p className="text-xs text-gray-400 mt-1">The mega auction is set to take place in Dubai this year...</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoSections;

import React from 'react';
import { Users, Info } from 'lucide-react';

const ExpertCarousel = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="text-yellow-500 w-6 h-6" /> Meet Our Betting Experts
            </h2>
            <div className="relative group">
                {/* Carousel Container */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
                    {/* Expert 1 */}
                    <div className="min-w-[200px] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 snap-center">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="Expert" className="w-full h-48 object-cover object-top" />
                        <div className="p-4 text-center">
                            <h4 className="font-bold text-yellow-500">Rajesh Kumar</h4>
                            <p className="text-xs text-gray-400 mb-2">Senior Cricket Analyst</p>
                            <div className="text-[10px] bg-green-900/30 text-green-400 px-2 py-1 rounded inline-block">92% Accuracy</div>
                        </div>
                    </div>
                    {/* Expert 2 */}
                    <div className="min-w-[200px] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 snap-center">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Expert" className="w-full h-48 object-cover object-top" />
                        <div className="p-4 text-center">
                            <h4 className="font-bold text-yellow-500">Priya Sharma</h4>
                            <p className="text-xs text-gray-400 mb-2">Tennis Specialist</p>
                            <div className="text-[10px] bg-green-900/30 text-green-400 px-2 py-1 rounded inline-block">88% Accuracy</div>
                        </div>
                    </div>
                    {/* Expert 3 */}
                    <div className="min-w-[200px] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 snap-center">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt="Expert" className="w-full h-48 object-cover object-top" />
                        <div className="p-4 text-center">
                            <h4 className="font-bold text-yellow-500">Vikram Singh</h4>
                            <p className="text-xs text-gray-400 mb-2">Football Strategist</p>
                            <div className="text-[10px] bg-green-900/30 text-green-400 px-2 py-1 rounded inline-block">95% Accuracy</div>
                        </div>
                    </div>
                    {/* Expert 4 */}
                    <div className="min-w-[200px] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 snap-center">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Expert" className="w-full h-48 object-cover object-top" />
                        <div className="p-4 text-center">
                            <h4 className="font-bold text-yellow-500">Amit Patel</h4>
                            <p className="text-xs text-gray-400 mb-2">Casino Pro</p>
                            <div className="text-[10px] bg-green-900/30 text-green-400 px-2 py-1 rounded inline-block">5 Years Exp</div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-[10px] text-gray-500 mt-2 flex items-center justify-center gap-1">
                    <Info className="w-3 h-3" /> Swipe to see more experts
                </p>
            </div>
        </section>
    );
};

export default ExpertCarousel;

import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Info, Shield, HelpCircle, Smartphone, ExternalLink, Globe, BookOpen } from 'lucide-react';

const QuickLinks = () => {
    const categories = [
        {
            title: "Sports Betting",
            icon: <Trophy className="w-5 h-5 text-yellow-500" />,
            links: [
                { name: "Cricket Betting", path: "/cricket" },
                { name: "Live Cricket", path: "/live-cricket-betting" },
                { name: "Football Betting", path: "/football" },
                { name: "Tennis Betting", path: "/tennis" },
                { name: "Basketball", path: "/basketball" },
                { name: "Horse Racing", path: "/horse-race-betting" }
            ]
        },
        {
            title: "Quick Guides",
            icon: <HelpCircle className="w-5 h-5 text-yellow-500" />,
            links: [
                { name: "How to Play", path: "/how-to-play" },
                { name: "Our Services", path: "/services" },
                { name: "Platforms", path: "/platforms" },
                { name: "Latest Blog", path: "/blog" },
                { name: "Referral Code", path: "/referral-code" },
                { name: "App Download", path: "/app-download" }
            ]
        },
        {
            title: "About & Policy",
            icon: <Shield className="w-5 h-5 text-yellow-500" />,
            links: [
                { name: "About Us", path: "/about-us" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Rules & Regulations", path: "/rules-regulations" },
                { name: "General Rules", path: "/rules" }
            ]
        }
    ];

    return (
        <section className="mt-16 bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-6 border-b border-white/5">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Globe className="w-6 h-6 text-yellow-500" />
                    Explore Myleasers
                </h2>
                <p className="text-gray-500 text-xs mt-1">Quick access to all our sports markets, guides, and policies.</p>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                            {cat.icon}
                            <h3 className="font-bold text-gray-200 uppercase text-xs tracking-widest">{cat.title}</h3>
                        </div>
                        <ul className="grid grid-cols-1 gap-2">
                            {cat.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <Link 
                                        to={link.path} 
                                        className="text-sm text-gray-500 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-yellow-500 transition-all" />
                                        {link.name}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all ml-auto" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QuickLinks;

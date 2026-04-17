import React from 'react';
import { GraduationCap, Award, Crown, ShieldCheck } from 'lucide-react';

const stats = [
    {
        icon: <GraduationCap size={40} className="text-black" />,
        title: "Expertise",
        desc: "Built by sports & gaming veterans with 15+ years of proven innovation."
    },
    {
        icon: <Award size={40} className="text-black" />,
        title: "Experience",
        desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions."
    },
    {
        icon: <Crown size={40} className="text-black" />,
        title: "Authority",
        desc: "Recognized as India's leading betting platform by top industry awards."
    },
    {
        icon: <ShieldCheck size={40} className="text-black" />,
        title: "Trust",
        desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs."
    }
];

export default function OfficialStats() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight relative inline-block">
                        The Official Mahadev Book Website
                        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mt-6">
                        Verified and trusted official platform of Mahadev Book. Our commitment to security, fair play, and reliability makes us India’s most preferred online betting destination.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group text-center h-full flex flex-col items-center">
                            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{stat.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

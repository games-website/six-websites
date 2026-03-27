import React from 'react';
import { Shield, Lightbulb, Users, Newspaper, Globe, Cpu } from 'lucide-react';

const awards = [
    {
        icon: <Shield size={48} className="text-yellow-500" />,
        title: "Best Security Practices 2023",
        org: "Indian Gaming Awards"
    },
    {
        icon: <Lightbulb size={48} className="text-yellow-500" />,
        title: "Innovation in Sports Tech 2022",
        org: "Sports Technology Review"
    },
    {
        icon: <Users size={48} className="text-yellow-500" />,
        title: "Customer Excellence 2023",
        org: "India Customer Choice Awards"
    }
];

export default function IndustryRecognition() {
    return (
        <section className="py-20 bg-black text-white px-4 border-t border-zinc-900">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500">
                        Industry Recognition
                    </h2>
                    <p className="text-gray-400">
                        Mahadev Book's commitment to excellence has been recognized by leading industry authorities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {awards.map((award, index) => (
                        <div key={index} className="bg-zinc-900/50 p-10 rounded-2xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900 transition-colors">
                            <div className="mb-6">
                                {award.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{award.title}</h3>
                            <p className="text-gray-500 text-sm">{award.org}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold text-yellow-500 mb-8 uppercase tracking-widest">
                        As Featured In
                    </h3>
                    <div className="flex justify-center gap-8 md:gap-16">
                        <div className="p-4 bg-zinc-900 rounded-full text-blue-400">
                            <Newspaper size={32} />
                        </div>
                        <div className="p-4 bg-zinc-900 rounded-full text-blue-400">
                            <Globe size={32} />
                        </div>
                        <div className="p-4 bg-zinc-900 rounded-full text-blue-400">
                            <Cpu size={32} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

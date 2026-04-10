import React from 'react';
import { Shield, Lightbulb, Users, Newspaper, Globe, Cpu } from 'lucide-react';

const awards = [
    {
        icon: <Shield size={48} className="text-brand-gold-light" />,
        title: "Best Security Practices 2023",
        org: "Indian Gaming Awards"
    },
    {
        icon: <Lightbulb size={48} className="text-brand-gold-light" />,
        title: "Innovation in Sports Tech 2022",
        org: "Sports Technology Review"
    },
    {
        icon: <Users size={48} className="text-brand-gold-light" />,
        title: "Customer Excellence 2023",
        org: "India Customer Choice Awards"
    }
];

export default function IndustryRecognition() {
    return (
        <section className="py-20 bg-gray-50 text-gray-900 px-4 border-t border-gray-200">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-gold">
                        Industry Recognition
                    </h2>
                    <p className="text-gray-600">
                        Goldplay's commitment to excellence has been recognized by leading industry authorities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {awards.map((award, index) => (
                        <div key={index} className="bg-white p-10 rounded-2xl border border-gray-200 flex flex-col items-center text-center hover:bg-gray-50 transition-colors shadow-sm">
                            <div className="mb-6">
                                {award.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{award.title}</h3>
                            <p className="text-gray-500 text-sm">{award.org}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold text-brand-gold mb-8 uppercase tracking-widest">
                        As Featured In
                    </h3>
                    <div className="flex justify-center gap-8 md:gap-16">
                        <div className="p-4 bg-white rounded-full text-blue-600 shadow-md">
                            <Newspaper size={32} />
                        </div>
                        <div className="p-4 bg-white rounded-full text-blue-600 shadow-md">
                            <Globe size={32} />
                        </div>
                        <div className="p-4 bg-white rounded-full text-blue-600 shadow-md">
                            <Cpu size={32} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

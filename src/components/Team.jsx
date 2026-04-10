import React from 'react';

import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';

const team = [
    {
        name: "Rajiv Mehta",
        role: "Senior Sports Analyst",
        desc: "12+ years experience in cricket analytics. Former statistical consultant for IPL teams.",
        image: team1
    },
    {
        name: "Priya Sharma",
        role: "Cybersecurity Head",
        desc: "Expert in financial transaction security with certifications in fraud prevention.",
        image: team2
    },
    {
        name: "Vikram Singh",
        role: "Operations Director",
        desc: "15+ years in gaming operations and customer experience management.",
        image: team3
    }
];

export default function Team() {
    return (
        <section className="py-20 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-gold">Meet Our Expert Team</h2>
                    <p className="text-gray-600">The professionals ensuring your platform is safe, fair, and exciting.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-brand-gold text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

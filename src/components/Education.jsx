import React from 'react';
import { BookOpen, TrendingUp, ShieldAlert, Video } from 'lucide-react';

const courses = [
    {
        icon: <BookOpen size={24} />,
        title: "Beginner's Guide",
        desc: "Understand the basics of cricket betting and odds."
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Odds Calculation",
        desc: "Masterclass on how to calculate and interpret odds."
    },
    {
        icon: <ShieldAlert size={24} />,
        title: "Safe Betting",
        desc: "Learn responsible gambling practices."
    },
    {
        icon: <Video size={24} />,
        title: "Live Webinars",
        desc: "Watch expert sessions on betting strategies."
    }
];

export default function Education() {
    return (
        <section className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    Betting Education & Strategy Center
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-black/50 p-6 rounded-xl border border-zinc-700 hover:border-yellow-500 transition-colors cursor-pointer group">
                            <div className="mb-4 text-yellow-500 bg-yellow-500/10 w-fit p-3 rounded-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                                {course.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                            <p className="text-gray-400 text-sm">{course.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

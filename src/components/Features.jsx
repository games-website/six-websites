import React from 'react';
import { ShieldCheck, Clock, Zap, UserCheck, Smartphone, Target } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck size={40} />,
        title: "Secure & Trusted",
        desc: "Your data and money are always safe with advanced encryption."
    },
    {
        icon: <Clock size={40} />,
        title: "24/7 Support",
        desc: "Friendly support team available anytime via live chat or WhatsApp."
    },
    {
        icon: <Zap size={40} />,
        title: "Instant Withdrawals",
        desc: "No waiting. Withdrawals processed within minutes."
    },
    {
        icon: <UserCheck size={40} />,
        title: "Simple Setup",
        desc: "Creating your account takes only a few minutes."
    },
    {
        icon: <Target size={40} />,
        title: "Premium Access",
        desc: "Unlock exclusive tools and live updates with verified ID."
    },
    {
        icon: <Smartphone size={40} />,
        title: "Fast Login",
        desc: "Optimized servers ensure smooth access on all devices."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-black text-white relative">

            <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500">Why Choose Mahadev Book?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience the gold standard in online betting with features designed for your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.2)] group">
                            <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

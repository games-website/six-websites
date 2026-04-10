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
        <section id="features" className="py-20 bg-white text-gray-900 relative">
            
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-gold">Why Choose Goldplay?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Experience the gold standard in online betting with features designed for your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:border-brand-gold/50 transition-all hover:-translate-y-2 hover:shadow-lg group">
                            <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';
import secureIcon from '../assets/images/secure-icon.jpg';

const securityFeatures = [
    "The platform is built with advanced encryption to keep your data and funds safe.",
    "All transactions are processed via secure gateways like UPI, net banking, and wallets.",
    "Multi-layered protection with real-time threat detection and identity verification.",
    "Responsible gaming tools — set deposit limits and take breaks as needed.",
    "Transparent operations with no hidden charges or deductions.",
    "Regular audits ensure fairness and compliance with Indian regulations.",
    "Consistent, secure, and fast experience across devices and browsers.",
    "24/7 live chat support for instant assistance.",
    "Your betting remains private and fully protected, whether on cricket, football, or casino games.",
    "Getting your verified Mahadev Book ID is the first step toward safe, long-term betting."
];

export default function SecurityTrust() {
    return (
        <section className="py-20 bg-white text-gray-900 px-4 border-t border-gray-100">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-yellow-600 leading-tight">
                            Security & Trust You Can Count On
                        </h2>

                        <ul className="space-y-4">
                            {securityFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <ArrowRight className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-600 text-lg leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image/Card Content */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                            <img
                                src={secureIcon}
                                alt="Security & Trust of Mahadev Book Platform"
                                className="w-full max-w-xl h-auto rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

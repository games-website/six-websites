import React from 'react';
import { Check, Award, ShieldCheck, Lock } from 'lucide-react';

export default function LegalCompliance() {
    return (
        <section className="py-20 bg-white text-gray-900 px-4 border-t border-gray-100">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-brand-gold uppercase tracking-wide">
                    Legal Compliance & Responsible Gaming
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Compliance Framework</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Goldplay operates under international standards for fair play and security:
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Regularly audited by independent testing agencies",
                                "Full compliance with data protection regulations",
                                "Transparent terms of service and privacy policies",
                                "Age verification protocols to prevent underage betting"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="text-brand-gold flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-2xl font-bold text-blue-600 mb-8">Our Certifications</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center hover:bg-gray-100 transition-colors">
                                <div className="mb-4">
                                    <Award size={40} className="text-brand-gold" />
                                </div>
                                <h4 className="text-gray-700 text-sm font-medium leading-relaxed">
                                    iTech Labs<br />Certified RNG
                                </h4>
                            </div>

                            
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center hover:bg-gray-100 transition-colors">
                                <div className="mb-4">
                                    <ShieldCheck size={40} className="text-brand-gold" />
                                </div>
                                <h4 className="text-gray-700 text-sm font-medium leading-relaxed">
                                    PCI DSS Level 1<br />Compliant
                                </h4>
                            </div>

                            
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center hover:bg-gray-100 transition-colors">
                                <div className="mb-4">
                                    <Lock size={40} className="text-brand-gold" />
                                </div>
                                <h4 className="text-gray-700 text-sm font-medium leading-relaxed">
                                    256-bit SSL<br />Encryption
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

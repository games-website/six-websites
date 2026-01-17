import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
    { q: "Is Bettingraja365 Legal in India?", a: "Bettingraja365 operates legally in countries where online betting is permitted. We are a licensed platform ensuring a safe environment for all users." },
    { q: "How do I deposit money?", a: "We support UPI, GPay, PhonePe, Paytm, and Bank Transfer. Deposits are instant and processed 24/7 via our WhatsApp support team." },
    { q: "What is the minimum withdrawal?", a: "The minimum withdrawal amount is ₹500. Withdrawals are processed instantly within 15 minutes to your linked bank account." },
    { q: "What is Back and Lay?", a: "'Back' means betting on an outcome to happen (e.g., India to win). 'Lay' means betting on an outcome NOT to happen (e.g., India NOT to win). This gives you better control over your bets." },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="text-blue-400 w-6 h-6" /> FAQs
            </h2>
            <div id="faq-container" className="space-y-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#1a1a1a] rounded border border-white/5 overflow-hidden">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-200 hover:bg-white/5 transition-colors"
                            onClick={() => toggleFaq(index)}
                        >
                            {faq.q}
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-yellow-500' : 'rotate-0'}`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="p-4 pt-0 text-sm text-gray-400 border-t border-white/5 mt-2 bg-black/20">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;

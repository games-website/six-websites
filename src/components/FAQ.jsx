import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How do I get a Mahadev Book ID?",
        answer: "Simply contact us via WhatsApp to get your ID instantly from a verified agent."
    },
    {
        question: "Is my personal information safe?",
        answer: "Yes, we use advanced encryption to ensure your data is 100% secure."
    },
    {
        question: "How fast are withdrawals?",
        answer: "Withdrawals are processed instantly, usually within minutes."
    },
    {
        question: "Can I bet on live cricket matches?",
        answer: "Absolutely! We specialize in live in-play betting for all cricket leagues."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-yellow-500">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-zinc-800 rounded-xl overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 bg-zinc-900 hover:bg-zinc-800 transition-colors text-left"
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            >
                                <span className="font-bold text-lg">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-gray-500" />}
                            </button>

                            {openIndex === index && (
                                <div className="p-6 bg-zinc-900/50 text-gray-400 border-t border-zinc-800">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

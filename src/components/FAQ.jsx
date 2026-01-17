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
        <section className="py-20 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-yellow-600">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                            <button
                                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            >
                                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="text-yellow-600" /> : <ChevronDown className="text-gray-400" />}
                            </button>

                            {openIndex === index && (
                                <div className="p-6 bg-gray-50 text-gray-600 border-t border-gray-100">
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

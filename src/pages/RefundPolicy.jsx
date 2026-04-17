import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function RefundPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
                <div className="border border-brand-gold/30 bg-gray-50 rounded-3xl py-6 px-8 text-center mb-10 shadow-sm">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-tight">Goldplay – <span className="text-brand-gold">Refund Policy</span></h1>
                </div>

                <p className="text-center text-lg leading-relaxed mb-10 max-w-4xl mx-auto text-gray-600 font-medium">
                    At <strong className="text-brand-gold">Goldplay</strong>, we value our users and are committed to providing a safe, transparent, and fair experience. Our <strong>refund policy</strong> is designed to ensure clarity and trust whenever you participate in our platform services, including betting exchanges and fantasy sports contests.
                </p>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">When Refunds Are Applicable</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium">
                    <p className="mb-4">We provide refunds in the following scenarios:</p>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>If a <strong>transaction fails</strong> due to technical or banking errors.</li>
                        <li>If you <strong>accidentally deposit</strong> an amount exceeding the intended value.</li>
                        <li>If a contest is <strong>canceled, postponed, or voided</strong> by our system.</li>
                        <li>In cases of <strong>system errors or discrepancies</strong> affecting gameplay or account balance.</li>
                    </ul>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Refund Process</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium">
                    <p className="mb-6">Our refund process is simple and hassle-free:</p>
                    <ol className="list-decimal pl-6 space-y-6">
                        <li className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <strong className="text-gray-900">Contact Our Support Team</strong> – Reach out via our in-app chat, email, or support hotline.
                        </li>
                        <li className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <strong className="text-gray-900">Provide Details</strong> – Share your <strong>transaction ID, user ID, and relevant information</strong> for verification.
                        </li>
                        <li className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <strong className="text-gray-900">Processing Time</strong> – Once verified, refunds are usually processed within <strong>24–72 hours</strong>.
                        </li>
                        <li className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <strong className="text-gray-900">Receive Funds</strong> – The refunded amount will be returned to your <strong>original payment method</strong>.
                            <div className="border-l-4 border-blue-400 pl-4 mt-3 text-gray-500 italic text-sm font-semibold">
                                Note: Refunds to e-wallets, cards, or UPI accounts may vary depending on your bank’s processing time.
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Conditions for Refunds</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <ul className="list-disc pl-6 space-y-3">
                        <li>Refunds are only processed for <strong>valid, verified transactions</strong>.</li>
                        <li>We <strong>do not provide refunds</strong> for user mistakes such as wrong contest entries or game selections, except in system error cases.</li>
                        <li>Any <strong>fraudulent or suspicious activity</strong> detected may result in <strong>denial of refund</strong>.</li>
                    </ul>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Contact Us for Refunds</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-600 font-medium text-center">
                    <p className="mb-6">Our dedicated support team is available to help with <strong>all refund-related queries</strong>:</p>
                    <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <strong className="text-gray-900 block mb-2 uppercase text-xs tracking-widest">Live Chat</strong>
                            <p className="text-brand-gold font-bold">Available on our website / app</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <strong className="text-gray-900 block mb-2 uppercase text-xs tracking-widest">Customer Care</strong>
                            <p className="text-brand-gold font-bold">+1 (640) 239-6837</p>
                        </div>
                    </div>
                    <p className="mt-8">We strive to resolve all requests <strong>quickly and transparently</strong> so you can continue enjoying your gaming experience with <strong>peace of mind</strong>.</p>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-3 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Our Commitment</h2>
                </div>

                <div className="max-w-4xl mx-auto text-center text-gray-600 font-medium">
                    <p>
                        At <strong className="text-brand-gold">Goldplay</strong>, your satisfaction and trust are our priority. We are committed to <strong>fair play, transparency, and timely refunds</strong> to ensure a <strong>safe and reliable experience</strong> on our platform.
                    </p>
                </div>
            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}

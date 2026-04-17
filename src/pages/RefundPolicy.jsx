import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function RefundPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
                <div className="border border-yellow-500 rounded-full py-4 px-8 text-center mb-10 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">Mahadev Book – Refund Policy</h1>
                </div>

                <p className="text-center text-lg leading-relaxed mb-10 max-w-4xl mx-auto text-gray-300">
                    At <strong className="text-yellow-500">Mahadev Book</strong>, we value our users and are committed to providing a safe, transparent, and fair experience. Our <strong>refund policy</strong> is designed to ensure clarity and trust whenever you participate in our platform services, including betting exchanges and fantasy sports contests.
                </p>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">When Refunds Are Applicable</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="mb-4">We provide refunds in the following scenarios:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>If a <strong>transaction fails</strong> due to technical or banking errors.</li>
                        <li>If you <strong>accidentally deposit</strong> an amount exceeding the intended value.</li>
                        <li>If a contest is <strong>canceled, postponed, or voided</strong> by our system.</li>
                        <li>In cases of <strong>system errors or discrepancies</strong> affecting gameplay or account balance.</li>
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Refund Process</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="mb-4">Our refund process is simple and hassle-free:</p>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Contact Our Support Team</strong> – Reach out via our in-app chat, email, or support hotline.</li>
                        <li><strong>Provide Details</strong> – Share your <strong>transaction ID, user ID, and relevant information</strong> for verification.</li>
                        <li><strong>Processing Time</strong> – Once verified, refunds are usually processed within <strong>24–72 hours</strong>.</li>
                        <li>
                            <strong>Receive Funds</strong> – The refunded amount will be returned to your <strong>original payment method</strong>.
                            <div className="border-l-4 border-blue-400 pl-4 mt-2 text-gray-400 italic text-sm">
                                Note: Refunds to e-wallets, cards, or UPI accounts may vary depending on your bank’s processing time.
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Conditions for Refunds</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Refunds are only processed for <strong>valid, verified transactions</strong>.</li>
                        <li>We <strong>do not provide refunds</strong> for user mistakes such as wrong contest entries or game selections, except in system error cases.</li>
                        <li>Any <strong>fraudulent or suspicious activity</strong> detected may result in <strong>denial of refund</strong>.</li>
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Contact Us for Refunds</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-10 text-gray-300">
                    <p className="mb-4">Our dedicated support team is available to help with <strong>all refund-related queries</strong>:</p>
                    <ul className="space-y-2 mb-6">
                        <li><strong>Live Chat:</strong> <span className="text-yellow-500">Available on our website / Mahadev Book app</span></li>
                        <li><strong>Customer Care Number:</strong> +12397991318</li>
                    </ul>
                    <p>We strive to resolve all requests <strong>quickly and transparently</strong> so you can continue enjoying your gaming experience with <strong>peace of mind</strong>.</p>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Our Commitment</h2>
                </div>

                <div className="max-w-4xl mx-auto text-center text-gray-300">
                    <p>
                        At <strong className="text-yellow-500">Mahadev Book</strong>, your satisfaction and trust are our priority. We are committed to <strong>fair play, transparency, and timely refunds</strong> to ensure a <strong>safe and reliable experience</strong> on our platform.
                    </p>
                </div>
            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}

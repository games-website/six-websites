import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">

                <div className="border border-yellow-500 rounded-full py-4 px-8 text-center mb-10 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">Mahadev Book – Privacy Policy</h1>
                </div>

                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        We, <strong className="text-yellow-500">Mahadev Book</strong>, are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cricket betting platform, mobile application, and related services.
                    </p>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-8 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Information We Collect</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 hover:border-yellow-500 transition-colors">
                        <h3 className="text-yellow-500 font-bold mb-4 border-b border-yellow-500/20 pb-2">Personal Information</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm">
                            <li>Name, email address, phone number, and date of birth</li>
                            <li>Government-issued ID for verification purposes</li>
                            <li>Payment and banking information</li>
                            <li>Username and password credentials</li>
                        </ul>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 hover:border-yellow-500 transition-colors">
                        <h3 className="text-yellow-500 font-bold mb-4 border-b border-yellow-500/20 pb-2">Automated Information</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm">
                            <li>IP address, device information, and browser type</li>
                            <li>Betting history and transaction records</li>
                            <li>Cookies and similar tracking technologies</li>
                            <li>Location data (with your permission)</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-8 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">How We Use Your Information</h2>
                </div>
                <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-8 mb-12">
                    <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                        {[
                            "Process registrations and verify user identity",
                            "Facilitate deposits, withdrawals, and betting transactions",
                            "Provide customer support and respond to inquiries",
                            "Detect and prevent fraud, abuse, and illegal activities",
                            "Comply with legal and regulatory requirements",
                            "Send promotional offers and updates (with consent)",
                            "Improve our services and user experience"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">✓</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-8 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Information Sharing & Security</h2>
                </div>

                <div className="space-y-8 mb-12 text-gray-300 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">Sharing</h3>
                        <p className="mb-2">We may share your information with payment processors, regulatory authorities, and trusted third-party service providers. <strong className="text-yellow-500">We never sell your personal information.</strong></p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                        <p>We implement SSL encryption, secure servers, firewall protection, and restrict access to personal information to ensure your data is safe.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">Your Rights</h3>
                        <p>You have the right to access, correct, or delete your data, and opt-out of marketing communications.</p>
                    </div>
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-8 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Additional Policies</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
                    <div className="bg-[#1a2236] p-6 rounded-xl border border-yellow-500/20">
                        <h4 className="text-yellow-500 font-bold mb-2">Cookies</h4>
                        <p className="text-sm text-gray-400">We use cookies to enhance your experience and analyze site usage.</p>
                    </div>
                    <div className="bg-[#1a2236] p-6 rounded-xl border border-yellow-500/20">
                        <h4 className="text-yellow-500 font-bold mb-2">Age Restriction</h4>
                        <p className="text-sm text-gray-400">Services strictly for users 18+. We do not collect data from minors.</p>
                    </div>
                    <div className="bg-[#1a2236] p-6 rounded-xl border border-yellow-500/20">
                        <h4 className="text-yellow-500 font-bold mb-2">Data Retention</h4>
                        <p className="text-sm text-gray-400">Data retained for 5-7 years for regulatory compliance.</p>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-gray-300 mb-8">
                        We support <strong>responsible gaming</strong>. Your betting data may be monitored to identify problem gambling patterns. For questions, contact us via our Support Portal.
                    </p>

                    <a
                        href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300"
                    >
                        <MessageCircle size={24} /> Get The Mahadev Book ID Now
                    </a>
                </div>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;

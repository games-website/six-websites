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
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">

                <div className="border border-brand-gold/30 bg-gray-50 rounded-3xl py-6 px-8 text-center mb-10 shadow-sm">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase">Goldplay – <span className="text-brand-gold">Privacy Policy</span></h1>
                </div>

                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                        We, <strong className="text-brand-gold">Goldplay</strong>, are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cricket betting platform, mobile application, and related services.
                    </p>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-2 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Information We Collect</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <h3 className="text-brand-gold font-extrabold mb-4 border-b border-brand-gold/10 pb-2 uppercase tracking-wider">Personal Information</h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-3 text-sm font-medium">
                            <li>Name, email address, phone number, and date of birth</li>
                            <li>Government-issued ID for verification purposes</li>
                            <li>Payment and banking information</li>
                            <li>Username and password credentials</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                        <h3 className="text-brand-gold font-extrabold mb-4 border-b border-brand-gold/10 pb-2 uppercase tracking-wider">Automated Information</h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-3 text-sm font-medium">
                            <li>IP address, device information, and browser type</li>
                            <li>Betting history and transaction records</li>
                            <li>Cookies and similar tracking technologies</li>
                            <li>Location data (with your permission)</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-2 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">How We Use Your Information</h2>
                </div>
                <div className="bg-white border border-gray-100 rounded-3xl p-10 mb-12 shadow-sm">
                    <ul className="grid md:grid-cols-2 gap-6 text-gray-600 font-medium">
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
                                <span className="text-brand-gold mt-1 font-bold">✓</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-2 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Information Sharing & Security</h2>
                </div>

                <div className="space-y-8 mb-12 text-gray-600 text-center md:text-left font-medium">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Sharing</h3>
                        <p className="mb-2">We may share your information with payment processors, regulatory authorities, and trusted third-party service providers. <strong className="text-brand-gold">We never sell your personal information.</strong></p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Security</h3>
                        <p>We implement SSL encryption, secure servers, firewall protection, and restrict access to personal information to ensure your data is safe.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Your Rights</h3>
                        <p>You have the right to access, correct, or delete your data, and opt-out of marketing communications.</p>
                    </div>
                </div>

                <div className="border border-brand-gold/30 bg-gray-50 rounded-full py-2 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase">Additional Policies</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 className="text-brand-gold font-extrabold mb-3 uppercase tracking-tighter">Cookies</h4>
                        <p className="text-sm text-gray-600 font-medium">We use cookies to enhance your experience and analyze site usage.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 className="text-brand-gold font-extrabold mb-3 uppercase tracking-tighter">Age Restriction</h4>
                        <p className="text-sm text-gray-600 font-medium">Services strictly for users 18+. We do not collect data from minors.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 className="text-brand-gold font-extrabold mb-3 uppercase tracking-tighter">Data Retention</h4>
                        <p className="text-sm text-gray-600 font-medium">Data retained for 5-7 years for regulatory compliance.</p>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-gray-600 mb-8 font-medium">
                        We support <strong>responsible gaming</strong>. Your betting data may be monitored to identify problem gambling patterns. For questions, contact us via our Support Portal.
                    </p>

                    <a
                        href="https://wa.me/16402396837?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300"
                    >
                        <MessageCircle size={24} /> Get The Goldplay ID Now
                    </a>
                </div>

            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;

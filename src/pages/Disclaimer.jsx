import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle } from 'lucide-react';

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
                <div className="border border-yellow-500 rounded-full py-4 px-8 text-center mb-10 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">Mahadev Book – Disclaimer</h1>
                </div>

                <p className="text-center text-lg leading-relaxed mb-10 max-w-4xl mx-auto text-gray-300">
                    The information provided on <strong className="text-yellow-500">Mahadev Book</strong> is intended for <strong>educational and informational purposes only</strong>. We strive to deliver accurate and up-to-date content about our platform, betting services, and related features. However, we do not guarantee the completeness, accuracy, reliability, or suitability of any information on this website.
                </p>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-10 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Important Notes</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-max mx-auto">
                            <h3 className="text-yellow-500 font-bold italic">Age Restriction</h3>
                        </div>
                        <p className="text-center text-gray-300">Our services are strictly for users <strong>18 years and above</strong>.</p>
                    </div>

                    <div className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 transition-colors">
                        <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-6 w-max mx-auto">
                            <h3 className="text-yellow-500 font-bold italic">Legal Compliance</h3>
                        </div>
                        <p className="text-center text-gray-300">Online betting and fantasy sports are subject to local laws and regulations. Users are responsible for ensuring that their participation complies with applicable laws in their jurisdiction.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                        { title: "Financial Risk", desc: "Betting involves financial risk. Users should play responsibly and only wager money they can afford to lose. Mahadev Book is not liable for any losses incurred while using our platform." },
                        { title: "Third-Party Links", desc: "Our platform may contain links to third-party websites. We are not responsible for the content, services, or privacy practices of these external sites." },
                        { title: "No Guarantee", desc: "While we provide tools, contests, and betting options, Mahadev Book does not guarantee any winnings. Outcomes depend on user choices and actual game results." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#1a2236] border border-yellow-500/30 rounded-2xl p-6 text-center hover:border-yellow-500 transition-colors">
                            <div className="border border-yellow-500 rounded-full py-1 px-4 text-center mb-4 inline-block">
                                <h3 className="text-yellow-500 font-bold text-sm italic">{item.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="border border-yellow-500 rounded-full py-2 px-6 text-center mb-8 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-yellow-500">Responsible Gaming</h2>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        We encourage <strong>safe and responsible gaming</strong>. If you feel your betting habits are becoming problematic, please seek help and use tools like self-exclusion or deposit limits to manage your activity.
                        <br /><br />
                        By accessing or using <strong className="text-yellow-500">Mahadev Book</strong>, you acknowledge and agree to this disclaimer.
                    </p>

                    <a
                        href="https://wa.me/15208005239"
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

export default Disclaimer;

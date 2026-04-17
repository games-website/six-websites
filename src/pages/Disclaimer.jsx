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
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
                <div className="border border-brand-gold/20 bg-gray-50 rounded-3xl py-6 px-8 text-center mb-10 shadow-sm">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-tight">Goldplay – <span className="text-brand-gold">Disclaimer</span></h1>
                </div>

                <p className="text-center text-lg leading-relaxed mb-10 max-w-4xl mx-auto text-gray-600 font-medium">
                    The information provided on <strong className="text-brand-gold">Goldplay</strong> is intended for <strong>educational and informational purposes only</strong>. We strive to deliver accurate and up-to-date content about our platform, betting services, and related features. However, we do not guarantee the completeness, accuracy, reliability, or suitability of any information on this website.
                </p>

                <div className="border border-brand-gold/20 bg-gray-50 rounded-full py-3 px-8 text-center mb-10 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest">Important Notes</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md text-center">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-6 text-center mb-6 w-max mx-auto shadow-sm">
                            <h3 className="text-brand-gold-dark font-black uppercase text-xs tracking-widest">Age Restriction</h3>
                        </div>
                        <p className="text-gray-600 font-medium">Our services are strictly for users <span className="text-brand-gold font-bold text-xl">18+</span> years and above.</p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md text-center">
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-full py-2 px-6 text-center mb-6 w-max mx-auto shadow-sm">
                            <h3 className="text-brand-gold-dark font-black uppercase text-xs tracking-widest">Legal Compliance</h3>
                        </div>
                        <p className="text-gray-600 font-medium text-sm leading-relaxed">Online betting and fantasy sports are subject to local laws and regulations. Users are responsible for ensuring that their participation complies with applicable laws in their jurisdiction.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                        { title: "Financial Risk", desc: "Betting involves financial risk. Users should play responsibly and only wager money they can afford to lose. Goldplay is not liable for any losses incurred while using our platform." },
                        { title: "Third-Party Links", desc: "Our platform may contain links to third-party websites. We are not responsible for the content, services, or privacy practices of these external sites." },
                        { title: "No Guarantee", desc: "While we provide tools, contests, and betting options, Goldplay does not guarantee any winnings. Outcomes depend on user choices and actual game results." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-md">
                            <div className="bg-white border border-yellow-100 rounded-full py-2 px-4 shadow-inner mb-6 text-center">
                                <h3 className="text-brand-gold font-black text-xs uppercase tracking-tighter">{item.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="border border-brand-gold/20 bg-gray-50 rounded-full py-3 px-8 text-center mb-8 max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest">Responsible Gaming</h2>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                        We encourage <strong>safe and responsible gaming</strong>. If you feel your betting habits are becoming problematic, please seek help and use tools like self-exclusion or deposit limits to manage your activity.
                        <br /><br />
                        By accessing or using <strong className="text-brand-gold">Goldplay</strong>, you acknowledge and agree to this disclaimer.
                    </p>

                    <a
                        href="https://wa.me/12397991318?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-extrabold py-5 px-12 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300 text-lg"
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

export default Disclaimer;

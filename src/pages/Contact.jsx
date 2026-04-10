import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tighter">Contact <span className="text-brand-gold">Us</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        We are here to help you 24/7. Reach out to us for any queries, support, or feedback.
                    </p>
                </div>

                <div className="flex flex-col items-center mt-12">
                    <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 group max-w-md w-full">
                        <div className="text-brand-gold mb-8 bg-white p-6 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-500 border border-yellow-100">
                            <MessageCircle size={64} />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">WhatsApp Support</h3>
                        <p className="mb-10 text-gray-600 font-medium leading-relaxed">
                            Get instant support and your Goldplay ID directly via WhatsApp. Our team is ready to assist you.
                        </p>
                        <a
                            href="https://wa.me/15208005239?text=Hello%20Goldplay%2C%20I%20want%20to%20get%20my%20ID."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc51] text-white font-extrabold py-5 px-12 rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            <MessageCircle size={24} /> Chat Now
                        </a>
                    </div>
                </div>

                <div className="mt-20 bg-gray-50/50 p-10 rounded-3xl border border-gray-100 text-center shadow-inner">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <MapPin size={40} className="text-brand-gold" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Operating Hours</h3>
                    <p className="text-gray-600 font-bold text-lg max-w-md mx-auto leading-relaxed">
                        Our support team is available <span className="text-brand-gold">24 hours a day, 7 days a week</span>, 365 days a year.
                    </p>
                </div>
            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-500">Contact Us</h1>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
                    <p className="text-xl leading-relaxed">
                        We are here to help you 24/7. Reach out to us for any queries, support, or feedback.
                    </p>

                    <div className="flex flex-col items-center mt-12">
                        <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:border-yellow-500/50 transition-colors">
                            <div className="text-yellow-500 mb-4 bg-zinc-800 p-4 rounded-full">
                                <MessageCircle size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Support</h3>
                            <p className="mb-6 text-gray-400">
                                Get instant support and your Mahadev Book ID directly via WhatsApp.
                            </p>
                            <a
                                href="https://wa.me/12397991318?text=Hello%20Mahadevbook%2C%20I%20want%20to%20get%20my%20ID."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                            >
                                Chat Now
                            </a>
                        </div>


                    </div>

                    <div className="mt-12 bg-zinc-900/30 p-8 rounded-xl border border-zinc-800 text-center">
                        <div className="flex justify-center mb-4">
                            <MapPin size={32} className="text-gray-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                        <p className="text-gray-400">
                            Our support team is available 24 hours a day, 7 days a week, 365 days a year.
                        </p>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}

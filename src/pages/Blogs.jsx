import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function Blogs() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gold-gradient selection:text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tighter">Latest <span className="text-brand-gold">Blogs</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Stay updated with the latest news, tips, and insights from the world of sports betting.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                        <div className="h-56 bg-white rounded-3xl mb-6 shadow-inner flex items-center justify-center border border-gray-100 italic text-gray-400 font-bold uppercase tracking-widest">
                            New Content
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-gray-900 uppercase tracking-tight">Coming Soon</h3>
                        <p className="text-gray-600 font-medium">Our team is working on bringing you the best content. Stay tuned for expert insights and winning tips!</p>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function Blogs() {
    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">Latest Blogs</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest news, tips, and insights from the world of sports betting.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                        <div className="h-48 bg-zinc-800 rounded-lg mb-4"></div>
                        <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                        <p className="text-gray-400">Our team is working on bringing you the best content. Stay tuned!</p>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            <Footer />
        </div>
    );
}

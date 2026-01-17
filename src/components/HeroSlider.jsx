import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const banners = [
    { id: 1, color: "from-yellow-600 to-yellow-800", text: "365% WELCOME BONUS", sub: "Get Your ID Now" },
    { id: 2, color: "from-green-600 to-green-800", text: "INSTANT WITHDRAWAL", sub: "24/7 Support Available" },
    { id: 3, color: "from-blue-600 to-blue-800", text: "IPL 2025 BETTING", sub: "Best Odds in Market" },
];

const HeroSlider = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentBanner((prev) => (prev + 1) % banners.length);
                setFade(true);
            }, 300); // Wait for fade out
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const b = banners[currentBanner];

    return (
        <div className="relative h-48 md:h-80 rounded-xl overflow-hidden mb-6 mx-4 md:mx-0 shadow-2xl shadow-black/50 group">
            <div className={`absolute inset-0 bg-gradient-to-r ${b.color} transition-all duration-700 ease-in-out flex flex-col justify-center items-center text-center p-6 banner-transition`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
                <h2 className={`text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-2 transform transition-all duration-700 italic ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    {b.text}
                </h2>
                <p className={`text-xl text-yellow-200 font-medium mb-6 drop-shadow-md ${fade ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    {b.sub}
                </p>
                <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors shadow-lg flex items-center gap-2">
                    Play Now <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default HeroSlider;

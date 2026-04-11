import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <a href="https://wa.me/16402396837?text=Hello%20Myleasers%2C%20I%20want%20to%20get%20my%20ID." className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg shadow-green-900/50 hover:bg-[#20bd5a] transition-all z-50 flex items-center gap-2 animate-bounce">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="font-bold hidden md:inline">Get ID Now</span>
        </a>
    );
};

export default FloatingWhatsApp;

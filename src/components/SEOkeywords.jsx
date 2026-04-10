import React from 'react';

const SEOKeywords = () => {
    const keywords = [
        "Goldplay", "Goldplay", "Goldplay login", "Goldplay online book ID",
        "Goldplay Club", "Goldplay website", "Goldplay app download",
        "Goldplay betting app download", "Goldplay whatsapp group link", "Goldplay WhatsApp Number",
        "Goldplay ID", "Goldplay com", "Goldplay pro", "Goldplay logo", "Goldplay Gaming",
        "Goldplay io", "Goldplay win", "Goldplay Betting", "Goldplay cricket ID",
        "Goldplay cricket betting", "Goldplay cricket App", "Goldplay cricket id login",
        "Goldplay register", "Goldplay betting", "Goldplay 247", "Goldplay book",
        "Goldplay online book number", "Goldplay login registration",
        "Goldplay link", "Goldplay win", "Goldplay", "Goldplay Booking",
        "Goldplay ID", "Goldplay Club", "Goldplay Online", "Goldplay betting case", "Goldplay betting app case",
        "Goldplay Website", "Goldplay book 11", "Goldplay. com", "Goldplay pro",
        "Goldplay online", "Goldplay official", "Goldplay book", "Goldplay book india",
        "Goldplay book online", "Goldplay book com", "Goldplay book since 2010",
        "Goldplayofficial", "Goldplay in", "www Goldplay book in", "www Goldplay book",
        "Goldplay book online", "Goldplay betting app download", "Goldplay", "Goldplay login",
        "Goldplay.club", "Goldplay.win", "Goldplay online", "Goldplay book",
        "Goldplay book Club", "Goldplay ID", "Goldplay online"
    ];

    return (
        <div className="bg-gray-100 py-10 px-5 border-t border-brand-gold/20 text-center">
            <h3 className="text-gray-900 text-2xl mb-5 font-bold">People Also Search For Goldplay</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
                {keywords.map((keyword, index) => (
                    <span key={index} className="text-gray-600 text-sm">
                        <strong className="text-brand-gold">{keyword}</strong> {index < keywords.length - 1 && '|'}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SEOKeywords;

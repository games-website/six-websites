import React from 'react';

const SEOKeywords = () => {
    const keywords = [
        "Mahadev Book", "MahadevBook", "Mahadev Book login", "Mahadev Book online book ID",
        "Mahadev Book Club", "Mahadev Book website", "Mahadev Book app download",
        "Mahadev Book Club", "Mahadev Book whatsapp group link", "Mahadev Book WhatsApp Number",
        "Mahadev Book ID", "mahadevbook com", "mahadevbook pro", "Mahadev Book logo",
        "Mahadev Book io", "Mahadev Book win", "Mahadev Book cricbet99", "Mahadev Book cricket ID",
        "Mahadev Book cricket betting", "Mahadev Book cricket App", "Mahadev Book cricket id login",
        "Mahadev register", "Mahadev Book betting", "Mahadev Book 247", "Mahadev Book book",
        "Mahadev Book online book number", "Mahadev Book login registration",
        "Mahadev Book link", "Mahadev Book win", "Mahadev Book", "Mahadev Book Booking",
        "Mahadev Book ID", "Mahadev Book Club", "Mahadev Book Online",
        "Mahadev Book Website", "mahadev book 11", "mahadevbook. com", "Mahadevbook pro",
        "Mahadev Book online", "Mahadev Book official", "mahadev book", "mahadev book india",
        "mahadev book online", "mahadev book com", "mahadev book since 2010",
        "mahadevbookofficial", "mahadevbook in", "www mahadev book in", "www mahadev book",
        "mahadev book online", "betball9 mahadev book", "Mahadevbook", "Mahadevbook login",
        "Mahadevbook.club", "Mahadevbook.win", "Mahadevbook online", "Mahadev book",
        "Mahadev book Club", "Mahadev Book ID", "Mahadevbook online"
    ];

    return (
        <div className="bg-[#0d1425] py-10 px-5 border-t border-yellow-500 text-center">
            <h3 className="text-white text-2xl mb-5">People Also Search For Mahadev Book</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
                {keywords.map((keyword, index) => (
                    <span key={index} className="text-gray-300 text-sm">
                        <strong className="text-yellow-500">{keyword}</strong> {index < keywords.length - 1 && '|'}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SEOKeywords;

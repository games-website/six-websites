import React from 'react';

const SEOKeywords = () => {
    const keywords = [
        "Myleasers", "Myleasers", "Myleasers login", "Myleasers online book ID",
        "Myleasers Club", "Myleasers website", "Myleasers app download",
        "Myleasers Club", "Myleasers whatsapp group link", "Myleasers WhatsApp Number",
        "Myleasers ID", "myleasers com", "myleasers pro", "Myleasers Online logo", "myleasers online",
        "myleasers online book id",
        "Myleasers Online io", "Myleasers Online win", "Myleasers Online cricbet99", "Myleasers Online cricket ID",
        "Myleasers cricket betting", "Myleasers cricket App", "Myleasers cricket id login",
        "Reddy register", "Myleasers betting", "Myleasers 247", "Myleasers Online book",
        "Myleasers Online online book number", "Myleasers login registration",
        "Myleasers link", "Myleasers Online win", "Myleasers Book", "Myleasers Booking",
        "Myleasers Book ID", "Myleasers Book Club", "Myleasers Book Online",
        "Myleasers Book Website", "myleasers online 11", "myleasers. com", "Myleasers pro",
        "Myleasers Online official", "myleasers", "myleasers online book", "myleasers book",
        "myleasers online india", "myleasers online com", "myleasers online since 2010",
        "myleasersofficial", "myleasers in", "www myleasers book in", "www myleasers online",
        "premium myleasers online", "official myleasers online", "Myleasers Book", "Myleasers Book login",
        "Myleasers Book.club", "Myleasers Book.win", "Myleasers Book online", "Myleasers Book",
        "Myleasers Book Club", "Myleasers Book ID", "Myleasers Book online"
    ];

    return (
        <div style={{ backgroundColor: '#111111', padding: '40px 20px', borderTop: '1px solid #eab308', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>People Also Search For Myleasers</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '1200px', margin: '0 auto' }}>
                {keywords.map((keyword, index) => (
                    <span key={index} style={{ color: '#ccc', fontSize: '14px' }}>
                        <strong style={{ color: '#eab308' }}>{keyword}</strong> {index < keywords.length - 1 && '|'}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SEOKeywords;

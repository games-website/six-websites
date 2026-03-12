import React from 'react';

const SEOKeywords = () => {
    const keywords = [
        "Reddy Anna", "ReddyAnna", "Reddy Anna login", "Reddy Anna online book ID",
        "Reddy Anna Club", "Reddy Anna website", "Reddy Anna app download",
        "Reddy Anna Club", "Reddy Anna whatsapp group link", "Reddy Anna WhatsApp Number",
        "Reddy Anna ID", "reddyanna com", "reddyanna pro", "Reddy anna logo",
        "Reddy anna io", "Reddy anna win", "Reddy anna cricbet99", "Reddy anna cricket ID",
        "Reddy Anna cricket betting", "Reddy Anna cricket App", "Reddy Anna cricket id login",
        "Reddy register", "Reddy Anna betting", "Reddy Anna 247", "Reddy anna book",
        "Reddy anna online book number", "Reddy Anna login registration",
        "Reddy Anna link", "Reddy anna win", "Reddy Anna Book", "Reddy Anna Booking",
        "Reddy Anna Book ID", "Reddy Anna Book Club", "Reddy Anna Book Online",
        "Reddy Anna Book Website", "reddy anna 11", "reddyanna. com", "Reddyanna pro",
        "Reddy anna online", "Reddy anna official", "reddy ana", "anna reddy",
        "reddy anna india", "reddy anna online", "reddy anna com", "reddy anna since 2010",
        "reddyannaofficial", "reddyanna in", "www anna reddy in", "www reddy anna",
        "mahadev reddy anna", "betball9 reddy anna", "Reddybook", "Reddybook login",
        "Reddybook.club", "Reddybook.win", "Reddybook online", "Reddy book",
        "Reddy book Club", "Reddy Book ID", "Reddybook online"
    ];

    return (
        <div style={{ backgroundColor: '#0d1425', padding: '40px 20px', borderTop: '1px solid #FFD700', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>People Also Search For Reddy Anna</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '1200px', margin: '0 auto' }}>
                {keywords.map((keyword, index) => (
                    <span key={index} style={{ color: '#ccc', fontSize: '14px' }}>
                        <strong style={{ color: '#FFD700' }}>{keyword}</strong> {index < keywords.length - 1 && '|'}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SEOKeywords;

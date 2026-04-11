import React from 'react';

const SEOKeywords = () => {
    const keywordGroups = [
        {
            title: "Cricekt ID",
            keywords: ["Online Cricket ID", "Cricket ID", "Best Online Cricket ID", "Cricket Betting ID", "Get Online Cricket ID"]
        },
        {
            title: "Betting ID",
            keywords: ["Online Betting ID", "Best Betting ID", "Trusted Betting ID", "Betting ID Provider", "Indian Betting ID"]
        },
        {
            title: "Casino ID",
            keywords: ["Online Casino ID", "Live Casino ID", "Best Casino ID", "Casino Betting ID", "Get Casino ID"]
        },
        {
            title: "Book ID",
            keywords: ["Online Book ID", "Best Online Book ID", "Mahadev Book ID", "Fairplay ID", "Reddy Anna ID"]
        }
    ];

    return (
        <section style={{ backgroundColor: '#0f0f0f', padding: '60px 20px', borderTop: '1px solid #222' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ color: 'var(--primary-color)', fontSize: '24px', fontWeight: '800', marginBottom: '40px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Popular Search Terms
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                    {keywordGroups.map((group, idx) => (
                        <div key={idx} style={{ background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #333', transition: 'all 0.3s ease' }}>
                            <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                                {group.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {group.keywords.map((keyword, kIdx) => (
                                    <li key={kIdx} style={{ color: '#888', marginBottom: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: 'var(--secondary-color)' }}>•</span> {keyword}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SEOKeywords;

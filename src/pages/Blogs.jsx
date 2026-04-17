import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = [
        {
            title: "Top 5 Strategies for IPL Betting 2026",
            date: "April 5, 2026",
            category: "Cricket",
            image: "/images/cricket_hero.png",
            excerpt: "Learn how to analyze player form and pitch conditions to make winning predictions this IPL season."
        },
        {
            title: "Understanding Live Casino Odds",
            date: "April 2, 2026",
            category: "Casino",
            image: "/images/casino_hero_new.png",
            excerpt: "A deep dive into the math behind roulette and blackjack to help you bet smarter and win bigger."
        },
        {
            title: "Pro Guide: How to Get Your First Betting ID",
            date: "March 28, 2026",
            category: "Tutorial",
            image: "/images/how_to_play_hero.png",
            excerpt: "Everything you need to know about the registration process on India's most trusted exchange."
        }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1, padding: '100px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 6vw, 56px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase'
                        }}>
                            Fairplay Insights
                        </h1>
                        <p style={{ fontSize: '20px', color: '#888' }}>
                            Stay updated with the latest news, tips, and strategies from the world of betting.
                        </p>
                        <div style={{ width: '100px', height: '4px', background: 'var(--primary-gradient)', margin: '30px auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {blogPosts.map((post, idx) => (
                            <div key={idx} style={{ background: '#111', borderRadius: '30px', overflow: 'hidden', border: '1px solid #222', transition: 'all 0.3s ease' }}>
                                <div style={{ height: '200px', background: '#0a0a0a', borderBottom: '1px solid #333' }}>
                                    {/* Placeholder for image */}
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#333' }}>
                                        <i className="fas fa-image" style={{ fontSize: '48px' }}></i>
                                    </div>
                                </div>
                                <div style={{ padding: '35px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center' }}>
                                        <span style={{ background: 'rgba(255, 215, 0, 0.1)', color: 'var(--primary-color)', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                            {post.category}
                                        </span>
                                        <span style={{ color: '#555', fontSize: '12px' }}>{post.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '15px' }}>{post.title}</h3>
                                    <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>{post.excerpt}</p>
                                    <a href="#" style={{ color: 'var(--secondary-color)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        READ MORE <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '80px', textAlign: 'center' }}>
                        <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '15px 40px' }}>
                             SUBSCRIBE TO NEWSLETTER
                        </a>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default Blogs;

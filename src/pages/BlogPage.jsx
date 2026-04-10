import React, { useEffect, useState } from 'react';

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 6);
    };

    const blogPosts = [
        {
            id: 1,
            title: "Online Sports Betting Trends 2026 in India",
            date: "February 13, 2026",
            author: "Daniel Smyth",
            image: "/images/moneydaddy_blog_trends.png",
            link: "#"
        },
        {
            id: 2,
            title: "How Cricket Match Conditions Affect Live Odds",
            date: "February 11, 2026",
            author: "Daniel Smyth",
            image: "/images/moneydaddy_blog_cricket.png",
            link: "#"
        },
        {
            id: 3,
            title: "NBA Playoffs 2026 Key Moments Covered",
            date: "February 11, 2026",
            author: "Daniel Smyth",
            image: "/images/moneydaddy_blog_nba.png",
            link: "#"
        },
        {
            id: 4,
            title: "Data Privacy & User Protection Policies on Reddy Anna",
            date: "February 10, 2026",
            author: "Daniel Smyth",
            image: "/images/about_branding.png",
            link: "#"
        },
        {
            id: 5,
            title: "Reddy Anna App vs Website – Which Is Better for Users?",
            date: "February 10, 2026",
            author: "Daniel Smyth",
            image: "/images/mobile-app.png",
            link: "#"
        },
        {
            id: 6,
            title: "Why Reddy Anna Book Is a Trusted Online Betting Platform",
            date: "February 6, 2026",
            author: "Daniel Smyth",
            image: "/images/hero_banner.png",
            link: "#"
        },
        {
            id: 7,
            title: "Top 5 Strategies for Winning Big on Reddy Anna Casino",
            date: "February 5, 2026",
            author: "Daniel Smyth",
            image: "/images/live_casino.png",
            link: "#"
        },
        {
            id: 8,
            title: "Understanding the Odds: A Beginner's Guide to Cricket Betting",
            date: "February 4, 2026",
            author: "Daniel Smyth",
            image: "/images/cricket_hero_new.jpg",
            link: "#"
        },
        {
            id: 9,
            title: "How to Secure Your Reddy Anna Account from Fraud",
            date: "February 3, 2026",
            author: "Daniel Smyth",
            image: "/images/login_process_original.png",
            link: "#"
        },
        {
            id: 10,
            title: "The Rise of Fantasy Sports in India: Reddy Anna's Role",
            date: "February 2, 2026",
            author: "Daniel Smyth",
            image: "/images/football_fantasy_hero_new.png",
            link: "#"
        },

        ...Array.from({ length: 35 }, (_, i) => ({
            id: 11 + i,
            title: `Reddy Anna Betting Tips & Tricks Vol. ${i + 1}: Mastering ${['Cricket', 'Football', 'Tennis', 'Casino', 'Slots'][i % 5]}`,
            date: `January ${31 - (i % 31)}, 2026`,
            author: "Daniel Smyth",
            image: [
                '/images/cricket.png',
                '/images/football.png',
                '/images/tennis.png',
                '/images/live_casino.png',
                '/images/roulette.png',
                '/images/slots.png',
                '/images/poker.png',
                '/images/football_fantasy_hero_new.png',
                '/images/horse_racing_hero_provided.jpg'
            ][i % 9],
            link: "#"
        }))
    ];

    return (
        <div className="blog-page" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', paddingBottom: '40px' }}>
            <div className="container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>

                <h1 style={{
                    color: '#ffffffff',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    borderBottom: '1px solid #FFD700',
                    paddingBottom: '10px',
                    marginBottom: '40px'
                }}>
                    Recent Blog Posts
                </h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {blogPosts.slice(0, visible).map((post) => (
                        <div key={post.id} style={{
                            backgroundColor: '#000000ff',
                            borderRadius: '10px',

                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.95)'
                        }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Reddy+Anna+Blog' }}
                                />
                            </div>
                            <div style={{ padding: '20px', color: '#000' }}>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '10px',
                                    lineHeight: '1.4',
                                    height: '50px',
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical'
                                }}>
                                    {post.title}
                                </h3>
                                <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>
                                    {post.author} <span style={{ color: '#FF4500' }}>///</span> {post.date}
                                </div>
                                <a href={post.link} style={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    fontSize: '14px'
                                }}>
                                    Read More »
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {visible < blogPosts.length && (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <button onClick={showMoreItems} style={{
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}>
                            Load More
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default BlogPage;

import React, { useEffect, useState } from 'react';
import blogTrends from '../assets/blog_trends.png';
import blogCricket from '../assets/blog_cricket.png';
import blogCasino from '../assets/blog_casino.png';
import aboutBranding from '../assets/app_mock.png';
import mobileApp from '../assets/app_mock.png';
import heroBanner from '../assets/app_mock.png';
import cricketThumb from '../assets/sports_cricket.png';
import footballThumb from '../assets/sports_football.png';
import tennisThumb from '../assets/sports_tennis.png';
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
            image: blogTrends,
            link: "#"
        },
        {
            id: 2,
            title: "How Cricket Match Conditions Affect Live Odds",
            date: "February 11, 2026",
            author: "Daniel Smyth",
            image: blogCricket,
            link: "#"
        },
        {
            id: 3,
            title: "NBA Playoffs 2026 Key Moments Covered",
            date: "February 11, 2026",
            author: "Daniel Smyth",
            image: footballThumb,
            link: "#"
        },
        {
            id: 4,
            title: "Data Privacy & User Protection Policies on Lotus365",
            date: "February 10, 2026",
            author: "Daniel Smyth",
            image: aboutBranding,
            link: "#"
        },
        {
            id: 5,
            title: "Lotus365 App vs Website – Which Is Better for Users?",
            date: "February 10, 2026",
            author: "Daniel Smyth",
            image: mobileApp,
            link: "#"
        },
        {
            id: 6,
            title: "Why Lotus365 Book Is a Trusted Online Betting Platform",
            date: "February 6, 2026",
            author: "Daniel Smyth",
            image: heroBanner,
            link: "#"
        },
        {
            id: 7,
            title: "Top 5 Strategies for Winning Big on Lotus365 Casino",
            date: "February 5, 2026",
            author: "Daniel Smyth",
            image: blogCasino,
            link: "#"
        },
        {
            id: 8,
            title: "Understanding the Odds: A Beginner's Guide to Cricket Betting",
            date: "February 4, 2026",
            author: "Daniel Smyth",
            image: cricketThumb,
            link: "#"
        },
        {
            id: 9,
            title: "How to Secure Your Lotus365 Account from Fraud",
            date: "February 3, 2026",
            author: "Daniel Smyth",
            image: mobileApp,
            link: "#"
        },
        {
            id: 10,
            title: "The Rise of Fantasy Sports in India: Lotus365's Role",
            date: "February 2, 2026",
            author: "Daniel Smyth",
            image: footballThumb,
            link: "#"
        },
        ...Array.from({ length: 35 }, (_, i) => ({
            id: 11 + i,
            title: `Lotus365 Betting Tips & Tricks Vol. ${i + 1}: Mastering ${['Cricket', 'Football', 'Tennis', 'Casino', 'Slots'][i % 5]}`,
            date: `January ${31 - (i % 31)}, 2026`,
            author: "Daniel Smyth",
            image: [
                cricketThumb,
                footballThumb,
                tennisThumb,
                blogCasino,
                cricketThumb,
                footballThumb,
                tennisThumb,
                blogCasino,
                footballThumb
            ][i % 9],
            link: "#"
        }))
    ];
    return (
        <div className="blog-page" style={{ backgroundColor: 'var(--primary-green)', color: '#fff', minHeight: '100vh', paddingBottom: '40px' }}>
            <div className="container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{
                    color: '#fff',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    borderBottom: '1px solid var(--accent-yellow)',
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
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Lotus365+Blog' }}
                                />
                            </div>
                            <div style={{ padding: '20px', color: '#fff' }}>
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
                                <div style={{ fontSize: '12px', color: '#ccc', marginBottom: '15px' }}>
                                    {post.author}
                                </div>
                                <a href={post.link} style={{
                                    color: 'var(--accent-yellow)',
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
                            backgroundColor: 'var(--accent-yellow)',
                            color: '#000',
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
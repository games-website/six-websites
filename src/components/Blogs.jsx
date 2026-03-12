import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <section class="section">
            <div class="container">
                <h2 class="section-title">Blogs and News Reddyanna</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px' }}>Our blog section is a place where you can find latest
                    news, hints and tips.</p>
                <div class="blog-grid">
                    <div class="blog-card">
                        <img src="/images/moneydaddy_blog_trends.png" alt="Blog 1" />
                        <div class="blog-content">
                            <h3>Online Sports Betting Trends 2026 in India</h3>
                            <Link to="/blogs" class="read-more">Read More</Link>
                        </div>
                    </div>
                    <div class="blog-card">
                        <img src="/images/moneydaddy_blog_cricket.png" alt="Blog 2" />
                        <div class="blog-content">
                            <h3>How Cricket Match Conditions Affect Live Odds</h3>
                            <Link to="/blogs" class="read-more">Read More</Link>
                        </div>
                    </div>
                    <div class="blog-card">
                        <img src="/images/moneydaddy_blog_nba.png" alt="Blog 3" />
                        <div class="blog-content">
                            <h3>NBA Playoffs 2026 Key Moments Covered</h3>
                            <Link to="/blogs" class="read-more">Read More</Link>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link to="/blogs" className="btn-gold">View All Blogs</Link>
                </div>
            </div>
        </section>
    );
};

export default Blogs;

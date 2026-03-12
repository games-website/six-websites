import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
        color: '#fff'
    };

    const sectionBorderBox = {
        border: '1px solid #FFD700',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '40px',
        backgroundColor: '#1a2236'
    };

    const sectionTitleStyle = {
        color: '#FFD700',
        fontSize: '28px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '0'
    };

    const cardStyle = {
        border: '1px solid #444',
        borderRadius: '15px',
        padding: '30px',
        backgroundColor: '#1f293a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    };

    const infoCardStyle = {
        border: '1px solid #FFD700',
        borderRadius: '20px',
        padding: '30px',
        backgroundColor: '#1a2236',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        boxShadow: '0 0 15px rgba(255, 215, 0, 0.1)'
    };

    const iconCircleStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FFD700, #ffaa00)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        fontSize: '32px',
        color: '#000',
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
    };

    return (
        <div style={{ backgroundColor: '#0d1425', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>

            {}
            <div style={containerStyle}>
                <div style={sectionBorderBox}>
                    <h1 style={{ ...sectionTitleStyle, fontSize: 'clamp(20px, 5vw, 28px)', wordWrap: 'break-word', maxWidth: '100%', boxSizing: 'border-box' }}>Reddy Anna - Trusted Online Cricket Betting ID Provider in India</h1>
                </div>

                <div style={{ marginBottom: '60px', lineHeight: '1.8', fontSize: '16px', color: '#ccc' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Welcome to <span style={{ color: '#FFD700' }}>Reddy Anna</span>, your trusted Betting ID’s for online gaming and sports betting in India since 2010. Since our inception, we’ve been committed to providing a safe, fair, and enjoyable gaming experience for players across the country.
                    </p>
                    <p>
                        At Reddy Anna, we believe in innovation, transparency, and player satisfaction. we are <span style={{ color: '#FFD700' }}>trusted online betting ID provider</span> and wide range of games — from live casino classics to sports betting and skill-based games — all designed to give you maximum entertainment and winning opportunities.
                    </p>
                </div>

                {}
                <div style={{ marginBottom: '80px' }}>
                    <img
                        src="/images/about_branding.png"
                        alt="Reddy Anna Branding"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                </div>

                {}
                <div style={{ ...sectionBorderBox, padding: '15px', display: 'inline-block', marginBottom: '50px', minWidth: '60%' }}>
                    <h2 style={{ ...sectionTitleStyle, fontSize: '24px' }}>Why Choose Reddy Anna?</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '80px' }}>
                    {}
                    <div style={cardStyle}>
                        <div style={iconCircleStyle}>🔒</div>
                        <h3 style={{ color: '#FFD700', fontSize: '18px', marginBottom: '15px' }}>TRUSTED & SECURE</h3>
                        <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6' }}>
                            We use advanced encryption and secure Indian payment gateways to protect your funds and data.
                        </p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={iconCircleStyle}>💳</div>
                        <h3 style={{ color: '#FFD700', fontSize: '18px', marginBottom: '15px' }}>MULTIPLE PAYMENT OPTIONS</h3>
                        <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6' }}>
                            Deposit and withdraw easily via Net Banking, Paytm, Google Pay, PhonePe, and IMPS.
                        </p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={iconCircleStyle}>⭐</div>
                        <h3 style={{ color: '#FFD700', fontSize: '18px', marginBottom: '15px' }}>PLAYER-CENTRIC APPROACH</h3>
                        <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6' }}>
                            Our 24/7 customer support ensures your issues are resolved promptly.
                        </p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={iconCircleStyle}>🎯</div>
                        <h3 style={{ color: '#FFD700', fontSize: '18px', marginBottom: '15px' }}>FAIR & TRANSPARENT GAMING</h3>
                        <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6' }}>
                            All games follow strict fairness protocols and guidelines.
                        </p>
                    </div>
                </div>

                {}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {}
                    <div style={infoCardStyle}>
                        <h3 style={{ ...sectionTitleStyle, borderBottom: '1px solid #444', paddingBottom: '15px', width: '100%', marginBottom: '20px' }}>Our Mission</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '20px' }}>
                            To provide a reliable, secure, and exciting gaming environment where every player feels valued, informed, and empowered to enjoy their favorite games responsibly.
                        </p>
                        <p style={{ color: '#fff', fontWeight: 'bold' }}>Join Reddy Anna Book Now</p>
                    </div>

                    {}
                    <div style={infoCardStyle}>
                        <h3 style={{ ...sectionTitleStyle, borderBottom: '1px solid #444', paddingBottom: '15px', width: '100%', marginBottom: '20px' }}>Our Vision</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '20px' }}>
                            To become the most trusted online gaming brand in India, known for innovation, fairness, and customer satisfaction since 2010.
                        </p>
                        <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                            Join the <span style={{ color: '#FFD700' }}>Reddy Anna</span> community today and experience world-class gaming, seamless payments, and unmatched support.
                        </p>
                    </div>

                    {}
                    <div style={infoCardStyle}>
                        <h3 style={{ ...sectionTitleStyle, borderBottom: '1px solid #444', paddingBottom: '15px', width: '100%', marginBottom: '20px' }}>Contact Details</h3>
                        <div style={{ color: '#fff', fontSize: '16px', lineHeight: '2' }}>
                            <p>Reddy Anna WhatsApp Number – +1(520)800-5239</p>
                        </div>
                    </div>

                    {}
                    <div style={infoCardStyle}>
                        <h3 style={{ ...sectionTitleStyle, borderBottom: '1px solid #444', paddingBottom: '15px', width: '100%', marginBottom: '20px' }}>Author</h3>
                        <p style={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '15px' }}>Author – Daniel Smyth</p>
                        <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '14px', textAlign: 'left' }}>
                            Daniel Smyth – Expert content writer and editor specializing in iGaming, online casino, poker, and sports betting. Daniel creates SEO-optimized news, reviews, guides, and feature articles to help players stay informed and make safe, smart betting decisions.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;

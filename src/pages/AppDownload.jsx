import React, { useEffect } from 'react';
import SEOKeywords from '../components/SEOKeywords';

const AppDownload = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionTitleStyle = {
        color: '#FFD700',
        fontSize: '24px',
        marginBottom: '20px',
        border: '1px solid #FFD700',
        borderRadius: '50px',
        padding: '10px 30px',
        display: 'inline-block',
        textAlign: 'center'
    };

    const cardStyle = {
        border: '1px solid #444',
        borderRadius: '15px',
        padding: '25px',
        backgroundColor: '#1f293a',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left'
    };

    const gameCardStyle = {
        border: '1px solid #334155',
        borderRadius: '15px',
        padding: '30px',
        backgroundColor: '#1e293b',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 0 15px rgba(0, 255, 255, 0.1)'
    };

    const downloadButtonStyle = {
        background: 'linear-gradient(to right, #1e90ff, #00bfff)',
        color: '#fff',
        padding: '12px 30px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '15px',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        letterSpacing: '1px'
    };

    const requirementsStyle = {
        border: '1px solid #FFD700',
        borderRadius: '20px',
        padding: '10px 20px',
        color: '#FFD700',
        display: 'inline-block',
        marginBottom: '15px',
        fontSize: '14px'
    };

    return (
        <div className="app-download-page" style={{ backgroundColor: '#0d1425', color: '#fff', minHeight: '100vh', paddingTop: '100px' }}>

            {}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '80px' }}>
                <div style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '15px 20px',
                    display: 'inline-block',
                    color: '#FFD700',
                    fontSize: 'clamp(18px, 5vw, 26px)',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    backgroundColor: '#1a2236',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                }}>
                    Reddy Anna App – Official Platform for Sports, Casino & Online Betting
                </div>
                <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', maxWidth: '1000px', margin: '0 auto 30px' }}>
                    Welcome to the official Reddy Anna App, your one-stop destination for online gaming, sports betting, and casino entertainment. The <span style={{ color: '#FFD700' }}>Reddy Anna</span> platform has become a trusted name among Indian players, offering a safe, secure, and exciting way to play your favorite games — from cricket and football betting to poker, rummy, and live casino tables.
                    <br /><br />
                    With the official Reddy Anna App, you can enjoy real-time matches, smooth gameplay, instant deposits, and 24/7 support — all from your mobile phone. Whether you’re a casual player or a professional punter, this app is designed to deliver the most convenient and rewarding gaming experience in India.
                </p>
                <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={downloadButtonStyle}>
                    DOWNLOAD REDDY ANNA APP
                </a>
            </div>

            {}
            <div style={{ backgroundColor: '#000', padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ ...sectionTitleStyle, margin: '0 0 20px 0', textAlign: 'left' }}>About the Reddy Anna App</div>
                        <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '30px' }}>
                            The Reddy Anna App is the official mobile version of the popular <span style={{ color: '#FFD700' }}>Reddy Anna</span> platform, built exclusively for users who want fast and flexible gaming access anytime, anywhere. It’s compatible with Android and iOS devices, ensuring you never miss a live match or casino event.
                            <br /><br />
                            Using your Reddy Anna ID, you can log in instantly, explore hundreds of games, and place secure bets within seconds. Every transaction is protected by advanced SSL encryption, giving you complete peace of mind while you play.
                        </p>
                        <div style={{ backgroundColor: '#1a2236', padding: '20px', borderRadius: '10px', border: '1px solid #333' }}>
                            <span style={requirementsStyle}>Requirements:</span>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#fff', fontSize: '15px', lineHeight: '1.8' }}>
                                <li>Android 5.0+ | iOS 11.0+</li>
                                <li>App Size: 30 MB</li>
                                <li>Desktop – Windows & Mac (64-bit) Recommended</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
                        <div style={{
                            background: 'linear-gradient(45deg, #3a1c05, #673507)',
                            padding: '40px',
                            borderRadius: '20px',
                            border: '1px solid #FFD700',
                            boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)'
                        }}>
                            <h2 style={{ color: '#FFD700', fontSize: '32px', marginBottom: '10px', textTransform: 'uppercase' }}>Download</h2>
                            <h2 style={{ color: '#FFD700', fontSize: '36px', marginBottom: '20px', textTransform: 'uppercase' }}>Reddy Anna App</h2>
                            <p style={{ color: '#fff', marginBottom: '30px' }}>websoite url</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {}
                    <div style={cardStyle}>
                        <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎯</div>
                        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Easy Registration</h3>
                        <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Sign up and get your Reddy Anna ID in minutes.</p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
                        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Instant Login</h3>
                        <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Access all your games with a single secure login.</p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏏</div>
                        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Real-Time Betting</h3>
                        <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Enjoy live odds for cricket, football, and other sports.</p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎰</div>
                        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Casino Entertainment</h3>
                        <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Play Roulette, Teen Patti, Andar Bahar, Blackjack, and more.</p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={{ fontSize: '40px', marginBottom: '15px' }}>💸</div>
                        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Quick Deposits & Withdrawals</h3>
                        <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Fast, safe, and transparent transactions.</p>
                    </div>
                    {}
                    <div style={cardStyle}>
                        <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔔</div>
                        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Live Notifications</h3>
                        <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Get match updates, results, and bonus alerts instantly.</p>
                    </div>
                </div>
            </div>

            {}
            <div style={{ backgroundColor: '#0e1628', padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
                    <div style={{ ...sectionTitleStyle, minWidth: '400px' }}>Games You Can Play on Reddy Anna App</div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '40px' }}>
                        {}
                        <div style={gameCardStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '30px', marginRight: '15px', background: '#00e5ff', padding: '10px', borderRadius: '10px', color: '#000' }}>🏏</span>
                                <h3 style={{ color: '#00e5ff', fontSize: '24px', margin: 0 }}>Cricket Betting</h3>
                            </div>
                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '30px' }}>
                                Follow your favorite tournaments like IPL, T20, Test Matches, and World Cups. Bet live, track performance, and enjoy real-time odds — all in one place.
                            </p>
                            <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{ ...downloadButtonStyle, background: '#00e5ff', color: '#000', width: '100%' }}>DOWNLOAD & PLAY</a>
                        </div>
                        {}
                        <div style={gameCardStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '30px', marginRight: '15px', background: '#00e5ff', padding: '10px', borderRadius: '10px', color: '#000' }}>⚽</span>
                                <h3 style={{ color: '#00e5ff', fontSize: '24px', margin: 0 }}>Football Betting</h3>
                            </div>
                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '30px' }}>
                                From Premier League to La Liga and local matches, the Reddy Anna App brings global football betting directly to your screen with fast updates and fair odds.
                            </p>
                            <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{ ...downloadButtonStyle, background: '#00e5ff', color: '#000', width: '100%' }}>DOWNLOAD & PLAY</a>
                        </div>
                        {}
                        <div style={gameCardStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '30px', marginRight: '15px', background: '#00e5ff', padding: '10px', borderRadius: '10px', color: '#000' }}>🎰</span>
                                <h3 style={{ color: '#00e5ff', fontSize: '24px', margin: 0 }}>Casino Games</h3>
                            </div>
                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '30px' }}>
                                Experience real-dealer casino games in HD. Choose from Roulette, Baccarat, Blackjack, and Teen Patti for a true casino experience from the comfort of home.
                            </p>
                            <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{ ...downloadButtonStyle, background: '#00e5ff', color: '#000', width: '100%' }}>DOWNLOAD & PLAY</a>
                        </div>
                        {}
                        <div style={gameCardStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '30px', marginRight: '15px', background: '#00e5ff', padding: '10px', borderRadius: '10px', color: '#000' }}>🃏</span>
                                <h3 style={{ color: '#00e5ff', fontSize: '24px', margin: 0 }}>Poker & Rummy</h3>
                            </div>
                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '30px' }}>
                                Join skill-based tables and challenge real players. Play to win, improve your strategy, and enjoy smooth gameplay 24/7.
                            </p>
                            <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{ ...downloadButtonStyle, background: '#00e5ff', color: '#000', width: '100%' }}>DOWNLOAD & PLAY</a>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <div style={{ ...sectionTitleStyle, textAlign: 'left', minWidth: '400px' }}>How to Download and Install the Reddy Anna App</div>
                    <p style={{ color: '#fff', fontSize: '18px', margin: '20px 0', fontWeight: 'bold' }}>Getting started is simple:</p>
                    <ol style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.8', fontSize: '16px' }}>
                        <li style={{ marginBottom: '15px' }}>Visit the official <span style={{ color: '#FFD700' }}>Reddy Anna</span> website.</li>
                        <li style={{ marginBottom: '15px' }}>Look for the <strong>Download App</strong> button on the homepage.</li>
                        <li style={{ marginBottom: '15px' }}>Choose <strong>Android</strong> or <strong>iOS</strong> based on your device.</li>
                        <li style={{ marginBottom: '15px' }}>Allow installation from unknown sources if prompted (for Android).</li>
                        <li style={{ marginBottom: '15px' }}>Install the app, log in with your ID, and start successful betting!</li>
                    </ol>
                </div>
                <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{
                        background: 'linear-gradient(45deg, #3a1c05, #673507)',
                        padding: '40px',
                        borderRadius: '20px',
                        border: '1px solid #FFD700',
                        boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        <h2 style={{ color: '#FFD700', fontSize: '32px', marginBottom: '10px', textTransform: 'uppercase' }}>DOWNLOAD</h2>
                        <h2 style={{ color: '#FFD700', fontSize: '36px', marginBottom: '10px', textTransform: 'uppercase' }}>REDDY ANNA APP</h2>
                        <p style={{ color: '#fff', marginBottom: '0' }}>websoite url</p>
                    </div>
                </div>
            </div>

            {}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 80px', textAlign: 'center' }}>
                <div style={{ ...sectionTitleStyle, minWidth: '400px' }}>Why Choose the Official Reddy Anna App</div>
                <p style={{ color: '#ccc', fontSize: '16px', marginBottom: '40px' }}>
                    There are many apps out there, but none match the reliability and performance of <span style={{ color: '#FFD700' }}>Reddy Anna</span>. Here’s why users trust it:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {}
                    <div style={{ ...cardStyle, alignItems: 'center', textAlign: 'center', border: '1px solid #FFD700', boxShadow: 'none' }}>
                        <div style={{ backgroundColor: '#FFD700', borderRadius: '50%', padding: '15px', marginBottom: '15px', boxShadow: '0 0 10px #FFD700' }}>
                            <span style={{ fontSize: '24px', color: '#000' }}>✅</span>
                        </div>
                        <h4 style={{ color: '#FFD700', marginBottom: '0' }}>Verified official app version</h4>
                    </div>
                    {}
                    <div style={{ ...cardStyle, alignItems: 'center', textAlign: 'center', border: '1px solid #FFD700', boxShadow: 'none' }}>
                        <div style={{ backgroundColor: '#FFD700', borderRadius: '50%', padding: '15px', marginBottom: '15px', boxShadow: '0 0 10px #FFD700' }}>
                            <span style={{ fontSize: '24px', color: '#000' }}>🔒</span>
                        </div>
                        <h4 style={{ color: '#FFD700', marginBottom: '0' }}>100% safe and SSL-encrypted</h4>
                    </div>
                    {}
                    <div style={{ ...cardStyle, alignItems: 'center', textAlign: 'center', border: '1px solid #FFD700', boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)' }}>
                        <div style={{ backgroundColor: '#FFD700', borderRadius: '50%', padding: '15px', marginBottom: '15px', boxShadow: '0 0 10px #FFD700' }}>
                            <span style={{ fontSize: '24px', color: '#000' }}>⚡</span>
                        </div>
                        <h4 style={{ color: '#FFD700', marginBottom: '0' }}>Fast deposits and withdrawals</h4>
                    </div>
                    {}
                    <div style={{ ...cardStyle, alignItems: 'center', textAlign: 'center', border: '1px solid #FFD700', boxShadow: 'none' }}>
                        <div style={{ backgroundColor: '#FFD700', borderRadius: '50%', padding: '15px', marginBottom: '15px', boxShadow: '0 0 10px #FFD700' }}>
                            <span style={{ fontSize: '24px', color: '#000' }}>📲</span>
                        </div>
                        <h4 style={{ color: '#FFD700', marginBottom: '0' }}>Optimized for mobile gaming</h4>
                    </div>
                    {}
                    <div style={{ ...cardStyle, alignItems: 'center', textAlign: 'center', border: '1px solid #FFD700', boxShadow: 'none' }}>
                        <div style={{ backgroundColor: '#FFD700', borderRadius: '50%', padding: '15px', marginBottom: '15px', boxShadow: '0 0 10px #FFD700' }}>
                            <span style={{ fontSize: '24px', color: '#000' }}>🧾</span>
                        </div>
                        <h4 style={{ color: '#FFD700', marginBottom: '0' }}>Transparent rules and fair play</h4>
                    </div>
                    {}
                    <div style={{ ...cardStyle, alignItems: 'center', textAlign: 'center', border: '1px solid #FFD700', boxShadow: 'none' }}>
                        <div style={{ backgroundColor: '#FFD700', borderRadius: '50%', padding: '15px', marginBottom: '15px', boxShadow: '0 0 10px #FFD700' }}>
                            <span style={{ fontSize: '24px', color: '#000' }}>💬</span>
                        </div>
                        <h4 style={{ color: '#FFD700', marginBottom: '0' }}>24/7 responsive customer care</h4>
                    </div>
                </div>

                <div style={{ marginTop: '60px', textAlign: 'left' }}>
                    <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.8' }}>
                        With millions of registered users, the Reddy Anna App continues to set the standard for responsible and enjoyable online betting in India.
                        <br /><br />
                        Create Your Account on <span style={{ color: '#FFD700' }}>Reddy Anna Book</span> Platform.
                    </p>
                </div>
            </div>

            <SEOKeywords />

        </div>
    );
};

export default AppDownload;

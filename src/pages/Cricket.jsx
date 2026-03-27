import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cricket = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const headerStyle = {
        border: '1px solid #FFD700',
        borderRadius: '50px',
        padding: '10px 30px',
        textAlign: 'center',
        marginBottom: '20px',
        display: 'inline-block',
        color: '#FFD700',
        fontSize: '24px',
        fontWeight: 'bold'
    };

    const cardStyle = {
        border: '1px solid #FFD700',
        borderRadius: '15px',
        padding: '25px',
        backgroundColor: '#111',
        marginBottom: '20px',
        height: '100%',
        textAlign: 'left'
    };

    const subHeaderStyle = {
        color: '#FFD700',
        fontSize: '18px',
        marginBottom: '15px',
        borderBottom: '1px solid #333',
        paddingBottom: '10px',
        fontStyle: 'italic'
    };

    return (
        <div className="cricket-page" style={{ backgroundColor: '#0d1425', color: '#fff', minHeight: '100vh' }}>

            {}
            <section style={{ backgroundColor: '#1a2236', padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={headerStyle}>
                            Reddy Anna Cricket Betting
                        </div>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Get Your Reddy Anna Online Cricket ID
                        </h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#ccc' }}>
                            Love cricket and online betting? <span style={{ color: '#FFD700' }}>Reddy Anna Cricket</span> brings live match excitement to your fingertips. Use your Reddy Anna Cricket ID login or the Reddy Anna Cricket App to place real-time bets on IPL, T20, and international matches.
                        </p>
                        <p style={{ lineHeight: '1.6', marginBottom: '30px', color: '#ccc' }}>
                            Enjoy high odds, instant payouts, and secure transactions.
                            <br /><br />
                            <strong>Action:</strong> Sign up now and start winning with Reddy Anna Cricket Betting!
                        </p>
                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{
                            background: 'linear-gradient(to right, #1e90ff, #00bfff)',
                            color: '#fff',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            boxShadow: '0 4px 15px rgba(30, 144, 255, 0.4)'
                        }}>
                            GET ID & PLAY NOW
                        </a>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src="/images/cricket_hero_new.jpg"
                            alt="Reddy Anna Cricket Betting"
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#000' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={headerStyle}>
                            Why Choose Reddy Anna for Cricket Betting?
                        </div>
                    </div>

                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ddd', lineHeight: '1.8', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                        <li style={{ marginBottom: '15px' }}>Verified <span style={{ color: '#FFD700' }}>Reddy Anna Cricket ID</span> Login for safe access and account protection.</li>
                        <li style={{ marginBottom: '15px' }}>Real-time odds and instant updates on every match.</li>
                        <li style={{ marginBottom: '15px' }}>Seamless deposits and withdrawals through secure payment gateways.</li>
                        <li style={{ marginBottom: '15px' }}>Exclusive bonuses and cashback for cricket bettors.</li>
                        <li style={{ marginBottom: '15px' }}>User-friendly Reddy Anna Cricket App available for Android and iOS.</li>
                    </ul>

                    <p style={{ textAlign: 'center', marginTop: '40px', color: '#ccc', fontStyle: 'italic' }}>
                        Getting started is simple — create your Reddy Anna Cricket ID, log in, choose your favourite match, and place your bets confidently.
                    </p>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#1a2236' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ ...headerStyle, marginBottom: '40px' }}>
                        Our Reddy Anna Cricket App: Betting On The Go
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '50px' }}>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏏</div>
                            <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>Live Cricket Betting</h4>
                            <p style={{ color: '#ccc' }}>Live cricket betting with real-time odds.</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💰</div>
                            <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>Secure Transactions</h4>
                            <p style={{ color: '#ccc' }}>Secure deposits and instant withdrawals.</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🚀</div>
                            <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>Fast & User-Friendly</h4>
                            <p style={{ color: '#ccc' }}>User-friendly design, fast loading speed.</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📱</div>
                            <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>Cross-Platform App</h4>
                            <p style={{ color: '#ccc' }}>Works on Android & iOS (under 25 MB).</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💬</div>
                            <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>Always Available</h4>
                            <p style={{ color: '#ccc' }}>24/7 customer support.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'left', backgroundColor: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #FFD700' }}>
                        <h3 style={{ color: '#FFD700', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>How to Download:</h3>
                        <ol style={{ marginLeft: '20px', color: '#ccc', lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '10px' }}>Visit the official <span style={{ color: '#FFD700' }}>Reddy Anna</span> website.</li>
                            <li style={{ marginBottom: '10px' }}>Tap <strong>“Download App”</strong> on the homepage.</li>
                            <li style={{ marginBottom: '10px' }}>Allow installation from unknown sources (Android only).</li>
                            <li>Open the app and <strong>log in or create your ID</strong> to start betting.</li>
                        </ol>
                    </div>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#000' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={headerStyle}>
                            Reddy Anna Cricket Matches & Tournament
                        </div>
                    </div>
                    <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '40px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                        Cricket is not just a sport in India — it’s a passion, a celebration, and a way of life. Reddy Anna has created a platform that brings that same energy to your screen. Whether it’s an international series, IPL showdown, or a friendly T20 contest, Reddy Anna makes sure you stay connected to every over, every run, and every victory.
                    </p>

                    <div style={{ ...cardStyle, width: '100%' }}>
                        <h3 style={subHeaderStyle}>What Are Reddy Anna Cricket Matches?</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                            <strong>Reddy Anna Cricket Matches</strong> are specially designed online events where users can follow real-time match updates, explore live betting markets, and participate in interactive tournaments. These matches cover a wide range of formats — from T10 and T20 to One-Day and Test series.
                        </p>
                        <p style={{ color: '#ccc', marginBottom: '10px' }}>Reddy Anna provides access to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
                            <li>Live match odds and statistics</li>
                            <li>Team and player performance insights</li>
                            <li>Multiple betting markets like match winner, top batsman, and total runs</li>
                            <li>Instant updates during ongoing matches</li>
                        </ul>
                    </div>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#1a2236' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        <div style={cardStyle}>
                            <div style={headerStyle}>How to Join Reddy Anna Cricket Matches</div>
                            <p style={{ color: '#ccc', marginBottom: '20px' }}>Getting started is quick and simple:</p>
                            <ol style={{ marginLeft: '20px', color: '#ccc', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '10px' }}>Create your <span style={{ color: '#FFD700' }}>Reddy Anna ID</span> through the official website.</li>
                                <li style={{ marginBottom: '10px' }}>Complete your <span style={{ color: '#FFD700' }}>Reddy Anna login</span> and access the cricket section.</li>
                                <li style={{ marginBottom: '10px' }}>Browse ongoing matches and tournaments.</li>
                                <li>Join your favourite event and place your predictions or bets.</li>
                            </ol>
                            <p style={{ color: '#ccc', marginTop: '20px', lineHeight: '1.6' }}>
                                Once logged in, you can follow match schedules, check team stats, and enjoy an uninterrupted cricket experience wherever you are.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <div style={headerStyle}>Why Cricket Lovers Choose Reddy Anna</div>
                            <p style={{ color: '#ccc', marginBottom: '20px' }}>Cricket fans across India trust Reddy Anna for its:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '10px' }}>Real-time performance tracking</li>
                                <li style={{ marginBottom: '10px' }}>Fair and transparent system</li>
                                <li style={{ marginBottom: '10px' }}><strong>Ball-by-ball updates</strong> and real-time match feeds</li>
                                <li style={{ marginBottom: '10px' }}>Exclusive cricket events and promotions</li>
                                <li>Safe and secure platform for all transactions</li>
                            </ul>
                            <p style={{ color: '#ccc', marginTop: '20px', lineHeight: '1.6' }}>
                                The platform combines entertainment with strategy, making every match more engaging and rewarding.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{
                            backgroundColor: '#25D366',
                            color: '#fff',
                            padding: '15px 40px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '20px',
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
                        }}>
                            <i className="fab fa-whatsapp"></i> Get The Reddy Anna ID Now
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Cricket;

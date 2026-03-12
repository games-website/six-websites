import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Football = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionStyle = {
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
    };

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
        marginBottom: '30px',
        height: '100%'
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
        <div className="football-page" style={{ backgroundColor: '#0d1425', color: '#fff', minHeight: '100vh' }}>

            {}
            <section style={{ backgroundColor: '#1a2236', padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={headerStyle}>
                            Reddy Anna Football Betting
                        </div>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Experience Premium Football Betting with Reddy Anna
                        </h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '30px', color: '#ccc' }}>
                            Welcome to <span style={{ color: '#FFD700' }}>Reddy Anna</span>, India’s trusted platform for football betting enthusiasts. Whether you’re passionate about the English Premier League, La Liga, UEFA Champions League, or the Indian Super League, our comprehensive betting platform brings you closer to the action with competitive odds and real-time match updates.
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
                            src="/images/football_fantasy_hero_new.png"
                            alt="Reddy Anna Football Betting"
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#000' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <div style={headerStyle}>
                            Why Choose Reddy Anna for Football Betting?
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>


                        <div style={{ flex: '2 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>

                            {}
                            <div style={cardStyle}>
                                <div style={subHeaderStyle}>Extensive Match Coverage</div>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ddd', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>International Leagues:</strong> Premier League, La Liga, Serie A, Bundesliga, Ligue 1</li>
                                    <li style={{ marginBottom: '10px' }}><strong>European Competitions:</strong> Champions League, Europa League, Conference League</li>
                                    <li style={{ marginBottom: '10px' }}><strong>International Tournaments:</strong> FIFA World Cup, UEFA Euro, Copa America, Asian Cup</li>
                                    <li><strong>Club Friendlies:</strong> Pre-season matches and international club friendlies</li>
                                </ul>
                            </div>

                            {}
                            <div style={cardStyle}>
                                <div style={subHeaderStyle}>Advanced Betting Options</div>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ddd', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '10px' }}>Half-Time/Full-Time results</li>
                                    <li style={{ marginBottom: '10px' }}>Total Corners markets</li>
                                    <li style={{ marginBottom: '10px' }}>Yellow/Red Card betting</li>
                                    <li>Player Props and Specials</li>
                                </ul>
                            </div>

                            {}
                            <div style={cardStyle}>
                                <div style={subHeaderStyle}>Diverse Betting Markets</div>
                                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Match Result Options:</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ddd', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '10px' }}>Home Win, Draw, Away Win (1X2)</li>
                                    <li style={{ marginBottom: '10px' }}>Double Chance betting</li>
                                    <li style={{ marginBottom: '10px' }}>Draw No Bet markets</li>
                                    <li>Handicap betting for competitive matches</li>
                                </ul>
                            </div>

                            {}
                            <div style={cardStyle}>
                                <div style={subHeaderStyle}>Goal-Based Markets</div>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ddd', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '10px' }}>Over/Under goals (0.5, 1.5, 2.5, 3.5, 4.5)</li>
                                    <li style={{ marginBottom: '10px' }}>Both Teams to Score (BTTS)</li>
                                    <li style={{ marginBottom: '10px' }}>Correct Score predictions</li>
                                    <li style={{ marginBottom: '10px' }}>First/Last Goal Scorer</li>
                                    <li>Anytime Goal Scorer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ ...headerStyle, width: '100%', maxWidth: 'none', textAlign: 'left', paddingLeft: '20px' }}>
                        Football Betting Tips for Indian Players
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '40px', alignItems: 'center' }}>

                        <div style={{ flex: '2 1 500px', padding: '20px' }}>
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ color: '#FFD700', fontSize: '20px', marginBottom: '10px', fontStyle: 'italic' }}>Understanding Odds and Probability</h3>
                                <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                                    Learn to read decimal odds, fractional odds, and understand implied probability. Our platform displays odds in your preferred format, making it easier to calculate potential winnings and make informed betting decisions.
                                </p>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ color: '#FFD700', fontSize: '20px', marginBottom: '10px', fontStyle: 'italic' }}>Bankroll Management Strategies</h3>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
                                    <li>Set a dedicated betting budget</li>
                                    <li>Never chase losses with bigger stakes</li>
                                    <li>Use stake sizing techniques (flat betting, percentage betting)</li>
                                    <li>Track your betting history for analysis</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ color: '#FFD700', fontSize: '20px', marginBottom: '10px', fontStyle: 'italic' }}>Research and Analysis</h3>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
                                    <li>Study team form and head-to-head records</li>
                                    <li>Consider home/away performance statistics</li>
                                    <li>Monitor injury news and team selections</li>
                                    <li>Analyze weather conditions for outdoor matches</li>
                                    <li>Follow expert predictions and betting trends</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ color: '#FFD700', fontSize: '20px', marginBottom: '10px', fontStyle: 'italic' }}>Popular Betting Strategies</h3>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
                                    <li>Value betting on underrated teams</li>
                                    <li>Asian Handicap for balanced markets</li>
                                    <li>Accumulator building with careful selections</li>
                                    <li>Cash-out options for risk management</li>
                                </ul>
                            </div>
                        </div>

                        {}
                        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="https://via.placeholder.com/500x500?text=Betting+Analytics+Chart"
                                alt="Betting Strategy"
                                style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', maxWidth: '400px', objectFit: 'cover' }}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/500x500?text=Betting+Strategy' }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#000', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        border: '1px solid #FFD700',
                        borderRadius: '30px',
                        padding: '10px',
                        display: 'inline-block',
                        color: '#FFD700',
                        fontSize: '22px',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        width: '100%'
                    }}>
                        Start Your Football Betting Journey with Reddy Anna Today
                    </div>
                    <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                        Experience the excitement of online football betting with <span style={{ color: '#FFD700' }}>Reddy Anna</span> India’s premier betting platform. Register now and receive your welcome bonus to begin wagering on your favourite teams and leagues.
                    </p>
                    <p style={{ color: '#888', fontStyle: 'italic', marginBottom: '40px' }}>
                        Gamble responsibly. Terms and conditions apply. 18+ only.
                    </p>
                    <p style={{ color: '#fff', fontSize: '18px' }}>
                        Join <span style={{ color: '#FFD700' }}>Reddy Anna Book</span> Platform
                    </p>
                </div>
            </section>

            {}
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
                <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    padding: '12px 30px',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '16px',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
                }}>
                    <i className="fab fa-whatsapp"></i> Get The Reddy Anna ID Now
                </a>
            </div>

        </div>
    );
};

export default Football;

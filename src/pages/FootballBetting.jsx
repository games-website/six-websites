import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const FootballBetting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <section style={{ 
                    background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/images/hero-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '100px 20px',
                    textAlign: 'center',
                    borderBottom: '1px solid #333'
                }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ 
                            display: 'inline-block', 
                            padding: '8px 24px', 
                            background: 'rgba(255, 215, 0, 0.1)', 
                            border: '1px solid rgba(255, 215, 0, 0.4)', 
                            borderRadius: '50px',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            letterSpacing: '1px'
                        }}>
                             Fairplay Football Betting
                        </div>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 7vw, 60px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textTransform: 'uppercase',
                            lineHeight: '1.2'
                        }}>
                            Experience Premium Football Betting
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                            Passionate about Football? <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> covers Premier League, La Liga, UCL, and ISL with competitive odds and real-time updates.
                        </p>
                        <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> START BETTING NOW
                        </a>
                    </div>
                </section>

                {/* Features Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>Why Choose <span style={{ color: 'var(--primary-color)' }}>Fairplay</span>?</h2>
                            <div style={{ width: '80px', height: '4px', background: 'var(--primary-gradient)', margin: '0 auto', borderRadius: '2px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Extensive Coverage", desc: "Premier League, La Liga, Serie A, Champions League, FIFA World Cup, and more.", icon: "fa-globe-americas" },
                                { title: "Advanced Options", desc: "Half-Time/Full-Time, Corners, Cards, Player Props, and Handicap betting.", icon: "fa-bolt" },
                                { title: "Diverse Markets", desc: "1X2, Double Chance, Draw No Bet, BTTS, and Over/Under Goals.", icon: "fa-chart-pie" },
                                { title: "Goal Markets", desc: "First Goal Scorer, Anytime Scorer, Correct Score, and detailed match combos.", icon: "fa-futbol" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{ padding: '40px', textAlign: 'left', border: '1px solid #222', background: '#111', transition: 'transform 0.3s ease' }}>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        background: 'rgba(255, 215, 0, 0.1)', 
                                        borderRadius: '12px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        marginBottom: '25px',
                                        border: '1px solid rgba(255, 215, 0, 0.2)'
                                    }}>
                                        <i className={`fas ${item.icon}`} style={{ fontSize: '26px', color: 'var(--primary-color)' }}></i>
                                    </div>
                                    <h3 style={{ color: 'var(--primary-color)', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.6', fontSize: '15px' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Betting Tips Section */}
                <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                             <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff' }}>Pro Football Betting Tips</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Analyze Stats", desc: "Study team form, H2H records, home/away performance, and injury news before placing bets." },
                                { title: "Bankroll Management", desc: "Set a budget and stick to it. Never chase losses and use consistent stake sizing." },
                                { title: "Explore Markets", desc: "Look beyond match winners. Value often lies in corners, cards, or goal markets." }
                            ].map((tip, i) => (
                                <div key={i} style={{ 
                                    background: '#111', 
                                    padding: '35px', 
                                    borderRadius: '20px', 
                                    borderTop: '5px solid var(--primary-color)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }}>
                                    <h3 style={{ color: 'var(--primary-color)', fontWeight: '800', fontSize: '20px', marginBottom: '15px' }}>{tip.title}</h3>
                                    <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7' }}>{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ 
                            background: 'linear-gradient(135deg, #111 0%, #000 100%)', 
                            padding: '80px 40px', 
                            borderRadius: '40px', 
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            textAlign: 'center'
                        }}>
                            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: '900', color: '#fff', marginBottom: '25px', textTransform: 'uppercase' }}>
                                Join <span style={{ color: 'var(--primary-color)' }}>Fairplay</span> Today
                            </h2>
                            <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 45px' }}>
                                Register now and get your Welcome Bonus to start wagering on your favourite teams and leagues with India's most trusted ID.
                            </p>
                            <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '20px 60px', fontSize: '20px', borderRadius: '50px' }}>
                                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET YOUR ID ON WHATSAPP
                            </a>
                            <p style={{ color: '#555', fontSize: '12px', marginTop: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Gamble responsibly. 18+ Only. Terms & Conditions Apply.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default FootballBetting;

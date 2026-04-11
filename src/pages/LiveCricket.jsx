import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const LiveCricket = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <section style={{ 
                    background: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/hero-bg.png")',
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
                            border: '1px solid var(--primary-color)', 
                            borderRadius: '50px',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            fontSize: '14px'
                        }}>
                             Fairplay Live Cricket
                        </div>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 7vw, 60px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textTransform: 'uppercase'
                        }}>
                            Don't Just Watch, Win!
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                            Experience every ball, boundary, and wicket with real-time updates. <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> is your ultimate destination for live cricket exchange and betting.
                        </p>
                        <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fas fa-satellite-dish" style={{ marginRight: '10px' }}></i> WATCH & BET LIVE NOW
                        </a>
                    </div>
                </section>

                {/* Features Section */}
                <section style={{ padding: '80px 20px' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Real-Time Odds", desc: "Odds that reflect the match momentum in seconds.", icon: "📈" },
                                { title: "Live Streaming", desc: "High-definition streaming for all major cricket leagues.", icon: "📺" },
                                { title: "Session Betting", desc: "Predict runs, wickets, and more in every session.", icon: "⚡" },
                                { title: "Instant Settling", desc: "Get your winnings credited as soon as the bet result is out.", icon: "💰" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{ padding: '40px', textAlign: 'center', border: '1px solid #222', background: '#111' }}>
                                    <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
                                    <h3 style={{ color: 'var(--primary-color)', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.6', fontSize: '14px' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Info Text Section */}
                <section style={{ padding: '80px 20px', background: '#0a0a0a' }}>
                    <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#fff', marginBottom: '30px', textAlign: 'center' }}>Maximize Your Cricket Betting Experience</h2>
                        <div style={{ color: '#aaa', lineHeight: '1.8', fontSize: '17px' }}>
                            <p style={{ marginBottom: '20px' }}>
                                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> provides a sophisticated platform for live cricket betting, covering everything from IPL and PSL to Test matches and World Cups. Our "In-Play" betting feature allows you to place wagers on a wide array of markets as the action unfolds on the field.
                            </p>
                            <p style={{ marginBottom: '20px' }}>
                                Whether it's predicting the next wicket, the runs in the current over, or the final match outcome, our live exchange gives you full control. With Fairplay's fast-loading interface, you never miss a value bet.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ 
                            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/about_hero_new.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '80px 40px', 
                            borderRadius: '40px',
                            textAlign: 'center',
                            border: '1px solid rgba(255, 215, 0, 0.3)'
                        }}>
                             <h2 style={{ fontSize: 'clamp(32px, 8vw, 48px)', fontWeight: '900', color: '#fff', marginBottom: '20px', textTransform: 'uppercase' }}>Ready for the Next Ball?</h2>
                             <p style={{ fontSize: '20px', color: 'var(--primary-color)', fontWeight: '800', marginBottom: '45px' }}>Get your verified Cricket ID and start winning in real-time.</p>
                             <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '20px 60px', borderRadius: '50px', fontSize: '20px' }}>
                                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> WHATSAPP US FOR YOUR ID
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default LiveCricket;

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const KabaddiBetting = () => {
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
                            border: '1px solid var(--primary-color)', 
                            borderRadius: '50px',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            fontSize: '14px'
                        }}>
                             Fairplay Kabaddi Betting
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
                            Experience the Power of Kabaddi
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px' }}>
                            Passionate about Kabaddi? <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> covers Pro Kabaddi League (PKL) and international matches with real-time updates.
                        </p>
                        <a href="https://wa.me/15208005239?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET ID & START NOW
                        </a>
                    </div>
                </section>

                {/* About Section */}
                <section style={{ padding: '80px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#fff', marginBottom: '30px' }}>
                            What Is <span style={{ color: 'var(--primary-color)' }}>Fairplay</span> Kabaddi Betting?
                        </h2>
                        <div style={{ padding: '40px', background: '#111', borderRadius: '25px', border: '1px solid #222', boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
                            <p style={{ color: '#aaa', fontSize: '18px', lineHeight: '1.8' }}>
                                Use your verified <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay ID</span> to bet on match winners, raid points, total scores, and super tackles. We offer a peer-driven betting environment with fair pricing and 100% transparency.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section style={{ padding: '80px 20px', background: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>Why Choose Us?</h2>
                            <p style={{ color: '#888', marginTop: '15px' }}>Trust, Speed, and User Experience are our top priorities.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Higher Odds", desc: "Better returns than local bookmakers.", icon: "📈" },
                                { title: "Live Betting", desc: "Bet on raids and tackles in real-time.", icon: "⚡" },
                                { title: "Safe Login", desc: "Secure Fairplay Login system.", icon: "🔒" },
                                { title: "Fast Transactions", desc: "Instant deposits & withdrawals.", icon: "💸" },
                                { title: "Simple Interface", desc: "Easy for beginners and pros.", icon: "📱" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{ padding: '40px', textAlign: 'left', border: '1px solid #222', background: '#111', transition: 'all 0.3s ease' }}>
                                    <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
                                    <h3 style={{ color: 'var(--primary-color)', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.6', fontSize: '14px' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Info & Markets Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
                            <div style={{ flex: '1.5', minWidth: '320px' }}>
                                <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#fff', marginBottom: '40px' }}>How to Get Your ID</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { s: "1", t: "Contact us via WhatsApp" },
                                        { s: "2", t: "Get your Verified ID" },
                                        { s: "3", t: "Deposit & Start Betting" }
                                    ].map((step, idx) => (
                                        <div key={idx} style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '20px', 
                                            background: '#111', 
                                            padding: '25px', 
                                            borderRadius: '20px', 
                                            border: '1px solid #222' 
                                        }}>
                                            <div style={{ 
                                                width: '45px', 
                                                height: '45px', 
                                                borderRadius: '50%', 
                                                background: 'var(--secondary-color)', 
                                                color: '#000', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                fontWeight: '900',
                                                fontSize: '20px'
                                            }}>
                                                {step.s}
                                            </div>
                                            <p style={{ color: '#fff', fontWeight: '700', fontSize: '18px', margin: 0 }}>{step.t}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ flex: '1', minWidth: '320px', background: 'rgba(255, 215, 0, 0.05)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255, 215, 0, 0.1)' }}>
                                <h3 style={{ color: 'var(--primary-color)', fontSize: '24px', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase' }}>Kabaddi Betting Markets</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {[
                                        "Match Winner",
                                        "Total Points (Over/Under)",
                                        "Team Performance",
                                        "Super Raids",
                                        "High 5s",
                                        "Best Defender"
                                    ].map((m, i) => (
                                        <li key={i} style={{ color: '#aaa', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--secondary-color)', fontSize: '14px' }}></i> {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ 
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', 
                            padding: '80px 40px', 
                            borderRadius: '40px',
                            color: '#000'
                        }}>
                            <h2 style={{ fontSize: 'clamp(32px, 8vw, 48px)', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>
                                Take Control of the Game
                            </h2>
                            <p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '45px', opacity: 0.9 }}>
                                Get your <span style={{ fontWeight: '900' }}>Fairplay ID</span> today and dominate the Kabaddi betting arena!
                            </p>
                            <a href="https://wa.me/15208005239?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ 
                                background: '#000', 
                                color: '#fff', 
                                padding: '20px 60px', 
                                borderRadius: '50px', 
                                fontWeight: '900',
                                fontSize: '20px',
                                display: 'inline-block',
                                border: 'none',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
                            }}>
                                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> JOIN THE ACTION NOW
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default KabaddiBetting;

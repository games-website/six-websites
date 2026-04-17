import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const HorseRaceBetting = () => {
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
                            padding: '10px 30px', 
                            background: 'rgba(255, 215, 0, 0.1)', 
                            border: '1px solid var(--primary-color)', 
                            borderRadius: '50px',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                            marginBottom: '35px',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            letterSpacing: '1.5px'
                        }}>
                             Fairplay Horse Race Betting
                        </div>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 8vw, 64px)', 
                            fontWeight: '900', 
                            marginBottom: '25px',
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textTransform: 'uppercase',
                            lineHeight: '1.1'
                        }}>
                            Experience the Thrill of Racing
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 45px', lineHeight: '1.7' }}>
                            Bet on your favorite horses across major international and domestic tracks. <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> provides real-time updates and competitive odds for every race.
                        </p>
                        <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fas fa-horse" style={{ marginRight: '10px' }}></i> START WINNING NOW
                        </a>
                    </div>
                </section>

                {/* Features Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>Premium Racing Features</h2>
                            <div style={{ width: '80px', height: '4px', background: 'var(--primary-gradient)', margin: '25px auto', borderRadius: '2px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '35px' }}>
                            {[
                                { title: "Live Streaming", desc: "Watch races in high quality as they happen.", icon: "fa-tv" },
                                { title: "Expert Analysis", desc: "Get insights and tips from racing veterans.", icon: "fa-chart-line" },
                                { title: "Best Odds", desc: "Maximize your returns with our industry-leading odds.", icon: "fa-star" },
                                { title: "Fast Payouts", desc: "Instant withdrawals reflect in your account seconds after the race.", icon: "fa-money-bill-wave" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{ padding: '45px', textAlign: 'left', border: '1px solid #222', background: '#111', borderRadius: '25px' }}>
                                    <div style={{ 
                                        width: '65px', 
                                        height: '65px', 
                                        background: 'rgba(255, 215, 0, 0.1)', 
                                        borderRadius: '16px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        marginBottom: '30px',
                                        border: '1px solid rgba(255, 215, 0, 0.2)'
                                    }}>
                                        <i className={`fas ${item.icon}`} style={{ fontSize: '28px', color: 'var(--primary-color)' }}></i>
                                    </div>
                                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.7' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Info Split Section */}
                <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '320px' }}>
                                <h2 style={{ fontSize: '34px', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '30px' }}>What makes us the best?</h2>
                                <p style={{ color: '#ccc', fontSize: '18px', marginBottom: '35px', lineHeight: '1.8' }}>
                                    Fairplay offers a comprehensive Horse Racing betting platform that covers tracks from the US, UK, Australia, and India. Our platform is designed for both casual bettors and serious handicappers.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {["Secure Fairplay Login", "24/7 Support via WhatsApp", "Variety of Bet Types (Win, Place, Each-way)", "Global Track Coverage"].map((text, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#f0f0f0', fontWeight: '600' }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)' }}></i> {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ flex: '1', minWidth: '320px' }}>
                                <img src="/images/horse_hero_new.png" alt="Horse racing" style={{ width: '100%', borderRadius: '30px', border: '1px solid #333', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <div style={{ 
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', 
                            padding: '60px 40px', 
                            borderRadius: '35px',
                            color: '#000'
                        }}>
                            <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>Get Your Racing ID Now</h2>
                            <p style={{ fontSize: '22px', fontWeight: '700', marginBottom: '40px', opacity: 0.8 }}>Join thousands of winners on India's most trusted exchange.</p>
                            <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ 
                                background: '#000', 
                                color: '#fff', 
                                padding: '20px 60px', 
                                borderRadius: '50px', 
                                fontWeight: '900',
                                fontSize: '20px',
                                display: 'inline-block',
                                border: 'none',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}>
                                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> WHATSAPP US NOW
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default HorseRaceBetting;

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const TennisBetting = () => {
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
                             Fairplay Tennis Betting
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
                            Master the Court
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                            Bet on Grand Slams, ATP, and WTA tournaments with the best odds in the industry. <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> is your premier destination for tennis exchange.
                        </p>
                        <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fas fa-table-tennis" style={{ marginRight: '10px' }}></i> START WINNING NOW
                        </a>
                    </div>
                </section>

                {/* Info Text Section */}
                <section style={{ padding: '80px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#fff', marginBottom: '30px' }}>
                            How to Start Betting on <span style={{ color: 'var(--primary-color)' }}>Tennis</span>
                        </h2>
                        <div style={{ padding: '45px', background: '#111', borderRadius: '30px', border: '1px solid #222', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative' }}>
                             <p style={{ color: '#aaa', fontSize: '18px', lineHeight: '1.8', position: 'relative', zIndex: 1 }}>
                                Getting started is simple. Register on our official platform to create your <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay ID</span>. Log in, explore live tennis markets, and place your bets instantly. Enjoy fast deposits and instant withdrawals with zero hassle.
                            </p>
                            <i className="fas fa-question" style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '80px', color: 'rgba(255,215,0,0.03)', zIndex: 0 }}></i>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section style={{ padding: '80px 20px', background: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>Why Choose Us?</h2>
                            <p style={{ color: '#888', marginTop: '15px' }}>Top-tier security and unmatchable odds for tennis enthusiasts.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Live Betting", desc: "Bet on every point, set, and game as it happens.", icon: "fa-bolt" },
                                { title: "Major Tournaments", desc: "Grand Slams, ATP, WTA, and Challenger events.", icon: "fa-trophy" },
                                { title: "Secure Transactions", desc: "100% safe deposits and instant withdrawals.", icon: "fa-shield-alt" },
                                { title: "Mobile Friendly", desc: "Bet on the go with our optimized mobile interface.", icon: "fa-mobile-alt" },
                                { title: "Exclusive Bonuses", desc: "Get rewards and cashback on big tournament matches.", icon: "fa-gift" },
                                { title: "24/7 Support", desc: "Round-the-clock assistance for all your queries.", icon: "fa-headset" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{ padding: '40px', textAlign: 'left', border: '1px solid #222', background: '#111' }}>
                                    <div style={{ fontSize: '36px', color: 'var(--primary-color)', marginBottom: '20px' }}>
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA & Features Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '320px', background: '#111', padding: '50px', borderRadius: '30px', border: '1px solid #222' }}>
                                <h3 style={{ fontSize: '26px', fontWeight: '900', color: '#fff', marginBottom: '35px', borderLeft: '5px solid var(--primary-color)', paddingLeft: '20px' }}>Key Features</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    {[
                                        { t: "Live Match Tracking", d: "Follow live scores and odds updates instantly." },
                                        { t: "Flexible Betting Options", d: "Singles, doubles, set winner, and over/under markets." },
                                        { t: "Instant Updates", d: "Zero latency odds for the competitive edge." },
                                        { t: "Bank-Grade Security", d: "Your data and funds are protected by advanced encryption." }
                                    ].map((f, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', background: 'var(--primary-color)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <i className="fas fa-check" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <div>
                                                <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '5px' }}>{f.t}</h4>
                                                <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>{f.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ flex: '1', minWidth: '320px', textAlign: 'center' }}>
                                <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginBottom: '30px' }}>Responsible Gaming</h2>
                                <p style={{ color: '#888', fontSize: '18px', marginBottom: '45px', lineHeight: '1.7' }}>
                                    At Fairplay, we prioritize your well-being. Set your limits and bet responsibly while enjoying the game you love.
                                </p>
                                <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '20px 60px', borderRadius: '50px', fontSize: '20px' }}>
                                    <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> JOIN MADRASCAFE NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default TennisBetting;

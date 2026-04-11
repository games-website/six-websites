import React, { useEffect } from 'react';
import SEOKeywords from '../components/SEOkeywords';

const FantasySports = () => {
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
                    <div className="container">
                        <div style={{ 
                            display: 'inline-block', 
                            padding: '8px 20px', 
                            background: 'rgba(255, 215, 0, 0.1)', 
                            border: '1px solid var(--primary-color)', 
                            borderRadius: '50px',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontSize: '14px'
                        }}>
                             Fairplay Fantasy Sports
                        </div>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 8vw, 64px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textTransform: 'uppercase'
                        }}>
                            Play, Compete & Win
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px' }}>
                            Create your dream team and compete for real cash prizes. <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> brings you the ultimate fantasy gaming experience for Cricket, Football, and Kabaddi.
                        </p>
                        <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', fontSize: '18px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET ID & PLAY NOW
                        </a>
                    </div>
                </section>

                {/* Why Play Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '15px' }}>Why Play Fantasy Sports?</h2>
                            <div style={{ width: '80px', height: '4px', background: 'var(--primary-gradient)', margin: '0 auto', borderRadius: '2px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Daily Contests", desc: "New contests every day for every match.", icon: "fa-calendar-day" },
                                { title: "Real Cash Prizes", desc: "Turn your sports knowledge into real winnings.", icon: "fa-coins" },
                                { title: "Safe & Secure", desc: "100% data privacy and secure transactions.", icon: "fa-shield-alt" },
                                { title: "Easy to Use", desc: "Create teams and join leagues in seconds.", icon: "fa-bolt" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{ padding: '40px 30px', textAlign: 'left', border: '1px solid #333' }}>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        background: 'rgba(255, 215, 0, 0.1)', 
                                        borderRadius: '15px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        marginBottom: '25px'
                                    }}>
                                        <i className={`fas ${item.icon}`} style={{ fontSize: '24px', color: 'var(--primary-color)' }}></i>
                                    </div>
                                    <h3 style={{ color: 'var(--primary-color)', fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Win Section */}
                <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '30px' }}>How to Win?</h2>
                                <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '40px' }}>
                                    Winning on Fairplay Fantasy is about skill and strategy. Follow these simple steps:
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        "Select an upcoming match.",
                                        "Create your team within the credit limit.",
                                        "Choose your Captain & Vice-Captain wisely.",
                                        "Join a contest and track the leaderboard."
                                    ].map((step, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #222' }}>
                                            <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--secondary-color)', color: '#000', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontWeight: 'bold' }}>
                                                <span style={{ margin: 'auto' }}>{i + 1}</span>
                                            </div>
                                            <span style={{ color: '#fff', fontWeight: '600' }}>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', padding: '50px', background: 'rgba(255, 215, 0, 0.05)', borderRadius: '30px', border: '1px solid rgba(255, 215, 0, 0.1)' }}>
                                <h3 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '20px' }}>GRAND LEAGUES</h3>
                                <p style={{ color: '#888', marginBottom: '35px' }}>
                                    Join our Mega Contests with massive prize pools. Small entry fees, huge rewards! Turn your passion for sports into life-changing winnings.
                                </p>
                                <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '15px 40px' }}>
                                    JOIN MEGA CONTEST
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <div className="container">
                        <div style={{ background: 'linear-gradient(135deg, #111 0%, #000 100%)', padding: '80px 40px', borderRadius: '40px', border: '1px solid #222' }}>
                            <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#fff', marginBottom: '20px', textTransform: 'uppercase' }}>Build Your Dream Team</h2>
                            <p style={{ color: '#aaa', fontSize: '20px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Get your <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay ID</span> and start your fantasy sports journey today!
                            </p>
                            <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '20px 60px', fontSize: '20px' }}>
                                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET YOUR ID ON WHATSAPP
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
        </div>
    );
};

export default FantasySports;

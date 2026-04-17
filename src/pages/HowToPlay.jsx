import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const HowToPlay = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            title: "Contact Registration",
            desc: "Reach out to our 24/7 WhatsApp support to initiate your registration process. It takes less than 2 minutes.",
            icon: "fa-comments-dollar"
        },
        {
            title: "Get Your Secure ID",
            desc: "Once verified, we provide you with a unique Fairplay ID and secure login credentials for our premium exchange.",
            icon: "fa-id-card"
        },
        {
            title: "Deposit Funds",
            desc: "Add funds to your account via UPI, NetBanking, or any major wallet. We offer instant deposit confirmation.",
            icon: "fa-wallet"
        },
        {
            title: "Start Betting",
            desc: "Navigate through our wide range of sports and casino games. Place your bets and enjoy the action!",
            icon: "fa-play-circle"
        }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1 }}>
                {/* Header Section */}
                <section style={{ 
                    padding: '80px 20px', 
                    textAlign: 'center', 
                    borderBottom: '1px solid #222',
                    background: '#0a0a0a'
                }}>
                    <div className="container">
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 6vw, 48px)', 
                            fontWeight: '900', 
                            marginBottom: '15px',
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase'
                        }}>
                            How to Get Started
                        </h1>
                        <p style={{ fontSize: '18px', color: '#888', maxWidth: '600px', margin: '0 auto' }}>
                            A simple 4-step guide to join India's #1 trusted betting platform.
                        </p>
                    </div>
                </section>

                {/* Steps Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                            {steps.map((step, i) => (
                                <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                                    <div style={{ 
                                        width: '100px', 
                                        height: '100px', 
                                        background: 'rgba(255, 215, 0, 0.1)', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        margin: '0 auto 30px',
                                        border: '1px solid var(--primary-color)',
                                        position: 'relative'
                                    }}>
                                        <i className={`fas ${step.icon}`} style={{ fontSize: '42px', color: 'var(--primary-color)' }}></i>
                                        <div style={{ 
                                            position: 'absolute', 
                                            top: '-10px', 
                                            right: '-10px', 
                                            width: '35px', 
                                            height: '35px', 
                                            background: 'var(--secondary-color)', 
                                            color: '#000', 
                                            borderRadius: '50%', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            fontWeight: '900',
                                            fontSize: '18px'
                                        }}>
                                            {i + 1}
                                        </div>
                                    </div>
                                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>{step.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.6', fontSize: '15px' }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Important Info Section */}
                <section style={{ padding: '80px 20px', background: '#111' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ padding: '40px', background: '#0a0a0a', borderRadius: '25px', border: '1px solid #333' }}>
                            <h2 style={{ color: 'var(--primary-color)', fontSize: '28px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>
                                <i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i> Useful Information
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { t: "Minimum Deposit", v: "Start from as low as ₹100." },
                                    { t: "Withdrawal Speed", v: "Get your winnings in under 5 minutes." },
                                    { t: "ID Requirement", v: "Valid ID might be requested for large transactions." },
                                    { t: "Bonus Eligibility", v: "All new registrations are eligible for a 10% Welcome Bonus." }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '15px' }}>
                                        <span style={{ color: '#aaa', fontWeight: '600' }}>{item.t}</span>
                                        <span style={{ color: '#fff', fontWeight: 'bold' }}>{item.v}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Support CTA */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase' }}>Need Help Setting Up?</h2>
                        <p style={{ color: '#888', fontSize: '18px', marginBottom: '45px', maxWidth: '600px', margin: '0 auto 45px' }}>
                            Our experts are available around the clock to help you with your account, deposits, or any technical queries.
                        </p>
                        <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '20px 60px', borderRadius: '50px', fontSize: '18px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> CHAT WITH SUPPORT NOW
                        </a>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default HowToPlay;

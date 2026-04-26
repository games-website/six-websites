import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function FeaturesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1, padding: '100px 20px' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 6vw, 56px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase'
                        }}>
                            Unmatched Features
                        </h1>
                        <p style={{ fontSize: '20px', color: '#888', maxW: '700px', margin: '0 auto' }}>
                            Discover why <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> is the preferred choice for millions of users worldwide.
                        </p>
                        <div style={{ width: '100px', height: '4px', background: 'var(--primary-gradient)', margin: '30px auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: "100% Secure", desc: "We employ advanced encryption protocols to safeguard your personal data and financial transactions.", icon: "fa-shield-alt" },
                            { title: "Lightning Fast", desc: "Experience zero lag. Our optimized platform ensures instant bet placement and real-time updates.", icon: "fa-bolt" },
                            { title: "Mobile Friendly", desc: "Bet on the go with our fully responsive design, optimized for all mobile devices and tablets.", icon: "fa-mobile-alt" },
                            { title: "Easy Registration", desc: "Sign up in seconds. Our simplified registration process gets you your betting ID instantly.", icon: "fa-user-check" },
                            { title: "Global Markets", desc: "Access a vast array of international sports leagues and casino games from around the world.", icon: "fa-globe" },
                            { title: "Data Privacy", desc: "Your privacy is paramount. We adhere to strict data protection policies and never share your information.", icon: "fa-lock" }
                        ].map((feature, idx) => (
                            <div key={idx} className="feature-card" style={{ 
                                padding: '50px 35px', 
                                textAlign: 'left', 
                                border: '1px solid #222', 
                                background: '#111',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ 
                                    width: '70px', 
                                    height: '70px', 
                                    background: 'rgba(255, 215, 0, 0.1)', 
                                    borderRadius: '20px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    marginBottom: '30px',
                                    border: '1px solid rgba(255, 215, 0, 0.2)'
                                }}>
                                    <i className={`fas ${feature.icon}`} style={{ fontSize: '32px', color: 'var(--primary-color)' }}></i>
                                </div>
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>{feature.title}</h3>
                                <p style={{ color: '#888', lineHeight: '1.7', fontSize: '16px' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '80px', textAlign: 'center' }}>
                         <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', fontSize: '18px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> EXPERIENCE IT NOW
                        </a>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            
        </div>
    );
}

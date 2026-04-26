import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1, padding: '80px 20px' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Header Banner */}
                    <div style={{ 
                        background: '#111', 
                        border: '1px solid #333', 
                        borderRadius: '30px', 
                        padding: '40px', 
                        textAlign: 'center', 
                        marginBottom: '60px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        <h1 style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '900', color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                            Fairplay – Disclaimer
                        </h1>
                    </div>

                    <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '17px', textAlign: 'center', marginBottom: '60px' }}>
                        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                            The information provided on <strong style={{ color: 'var(--primary-color)' }}>Fairplay</strong> is for educational and informational purposes only. We strive to deliver accurate content about our platform, but we do not guarantee its completeness or suitability for all users.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <div style={{ background: '#111', padding: '40px', borderRadius: '30px', border: '1px solid #222', textAlign: 'center' }}>
                            <div style={{ background: 'rgba(255, 215, 0, 0.1)', color: 'var(--primary-color)', padding: '8px 25px', borderRadius: '50px', display: 'inline-block', marginBottom: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Age Restriction
                            </div>
                            <p style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>Our services are strictly for users <span style={{ color: 'var(--primary-color)', fontSize: '24px' }}>18+</span> years and above.</p>
                        </div>

                        <div style={{ background: '#111', padding: '40px', borderRadius: '30px', border: '1px solid #222', textAlign: 'center' }}>
                            <div style={{ background: 'rgba(255, 215, 0, 0.1)', color: 'var(--primary-color)', padding: '8px 25px', borderRadius: '50px', display: 'inline-block', marginBottom: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Legal Compliance
                            </div>
                            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
                                Online betting and fantasy sports are subject to local laws. Users are responsible for ensuring their participation complies with the laws in their jurisdiction.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                        {[
                            { title: "Financial Risk", desc: "Betting involves financial risk. Users should play responsibly and only wager money they can afford to lose." },
                            { title: "Third-Party Links", desc: "We are not responsible for the content, services, or privacy practices of external sites linked on our platform." },
                            { title: "No Guarantee", desc: "While we provide elite tools and markets, Fairplay does not guarantee any winnings. Outcomes depend on skill and results." }
                        ].map((item, idx) => (
                            <div key={idx} style={{ background: '#0a0a0a', padding: '30px', borderRadius: '25px', border: '1px solid #222' }}>
                                <h3 style={{ color: 'var(--primary-color)', fontSize: '18px', fontWeight: '800', marginBottom: '15px', textTransform: 'uppercase' }}>{item.title}</h3>
                                <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: 'rgba(255, 215, 0, 0.05)', padding: '50px', borderRadius: '40px', border: '1px solid rgba(255, 215, 0, 0.1)', textAlign: 'center' }}>
                        <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: '800', marginBottom: '25px' }}>Responsible Gaming</h2>
                        <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                            We encourage safe and responsible gaming. If you feel your betting habits are becoming problematic, please seek help and use our self-exclusion tools.
                        </p>
                        <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '20px 60px', borderRadius: '50px', fontSize: '18px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET YOUR ID SECURELY
                        </a>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default Disclaimer;

import React from 'react';

const CTASection = () => {
    return (
        <section className="cta-section" style={{ background: '#0a0a0a', padding: '80px 0', borderTop: '1px solid #222' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ 
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '42px',
                    fontWeight: '900',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '-1px'
                }}>
                    Ready to Start Your Winning Journey?
                </h2>
                <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px', fontWeight: '500' }}>
                    Join Fairplay today and get access to India's most trusted online betting platform with instant withdrawals and 24/7 support.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 50px' }}>
                        <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET YOUR ID NOW
                    </a>
                    <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '20px 50px' }}>
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

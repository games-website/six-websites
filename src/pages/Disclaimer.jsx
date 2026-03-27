import React, { useEffect } from 'react';

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="disclaimer-page" style={{ backgroundColor: '#121c36', color: '#fff', minHeight: '100vh', paddingBottom: '40px' }}>
            <div className="container">

                {}
                <div className="policy-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '15px',
                    textAlign: 'center',
                    marginTop: '40px',
                    marginBottom: '30px',
                    boxShadow: '0 0 10px rgba(255, 215, 0, 0.2)',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                }}>
                    <h1 style={{ color: '#FFD700', fontSize: '28px', margin: 0, fontWeight: '700' }}>Reddy Anna – Disclaimer</h1>
                </div>

                <p style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    The information provided on <strong style={{ color: '#FFD700' }}>Reddy Anna</strong> is intended for <strong>educational and informational purposes only</strong>. We strive to deliver accurate and up-to-date content about our platform, betting services, and related features. However, we do not guarantee the completeness, accuracy, reliability, or suitability of any information on this website.
                </p>

                {}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '30px',
                    maxWidth: '100%',
                    margin: '0 auto 30px auto',
                    boxSizing: 'border-box'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Important Notes</h2>
                </div>

                {}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>

                    {}
                    <div style={{ border: '1px solid #FFD700', borderRadius: '20px', padding: '30px', background: '#0d1425' }}>
                        <div style={{ border: '1px solid #FFD700', borderRadius: '30px', padding: '10px', textAlign: 'center', marginBottom: '20px' }}>
                            <h3 style={{ color: '#FFD700', margin: 0, fontStyle: 'italic' }}>Age Restriction</h3>
                        </div>
                        <p style={{ textAlign: 'center' }}>Our services are strictly for users <strong>18 years and above</strong>.</p>
                    </div>

                    {}
                    <div style={{ border: '1px solid #FFD700', borderRadius: '20px', padding: '30px', background: '#0d1425' }}>
                        <div style={{ border: '1px solid #FFD700', borderRadius: '30px', padding: '10px', textAlign: 'center', marginBottom: '20px' }}>
                            <h3 style={{ color: '#FFD700', margin: 0, fontStyle: 'italic' }}>Legal Compliance</h3>
                        </div>
                        <p style={{ textAlign: 'center' }}>Online betting and fantasy sports are subject to local laws and regulations. Users are responsible for ensuring that their participation complies with applicable laws in their jurisdiction.</p>
                    </div>
                </div>

                {}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>

                    {}
                    <div style={{ border: '1px solid #FFD700', borderRadius: '20px', padding: '20px', background: '#0d1425', textAlign: 'center' }}>
                        <div style={{ border: '1px solid #FFD700', borderRadius: '30px', padding: '8px', textAlign: 'center', marginBottom: '15px', display: 'inline-block', minWidth: '200px' }}>
                            <h3 style={{ color: '#FFD700', margin: 0, fontSize: '18px', fontStyle: 'italic' }}>Financial Risk</h3>
                        </div>
                        <p style={{ fontSize: '14px' }}>Betting involves financial risk. Users should <strong>play responsibly</strong> and only wager money they can afford to lose. Reddy Anna is <strong>not liable for any losses</strong> incurred while using our platform.</p>
                    </div>

                    {}
                    <div style={{ border: '1px solid #FFD700', borderRadius: '20px', padding: '20px', background: '#0d1425', textAlign: 'center' }}>
                        <div style={{ border: '1px solid #FFD700', borderRadius: '30px', padding: '8px', textAlign: 'center', marginBottom: '15px', display: 'inline-block', minWidth: '200px' }}>
                            <h3 style={{ color: '#FFD700', margin: 0, fontSize: '18px', fontStyle: 'italic' }}>Third-Party Links</h3>
                        </div>
                        <p style={{ fontSize: '14px' }}>Our platform may contain links to third-party websites. We are <strong>not responsible for the content, services, or privacy practices</strong> of these external sites.</p>
                    </div>

                    {}
                    <div style={{ border: '1px solid #FFD700', borderRadius: '20px', padding: '20px', background: '#0d1425', textAlign: 'center' }}>
                        <div style={{ border: '1px solid #FFD700', borderRadius: '30px', padding: '8px', textAlign: 'center', marginBottom: '15px', display: 'inline-block', minWidth: '200px' }}>
                            <h3 style={{ color: '#FFD700', margin: 0, fontSize: '18px', fontStyle: 'italic' }}>No Guarantee of Winnings</h3>
                        </div>
                        <p style={{ fontSize: '14px' }}>While we provide tools, contests, and betting options, Reddy Anna <strong>does not guarantee any winnings</strong>. Outcomes depend on user choices and actual game results.</p>
                    </div>
                </div>

                {}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '100%',
                    margin: '0 auto 20px auto',
                    boxSizing: 'border-box'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Responsible Gaming</h2>
                </div>

                <div className="policy-content" style={{ maxWidth: '1000px', margin: '0 auto 40px auto', textAlign: 'center' }}>
                    <p style={{ marginBottom: '20px' }}>
                        We encourage <strong>safe and responsible gaming</strong>. If you feel your betting habits are becoming problematic, please seek help and use tools like self-exclusion or deposit limits to manage your activity.
                    </p>
                    <p style={{ fontSize: '14px', color: '#ccc' }}>
                        By accessing or using <strong style={{ color: '#FFD700' }}>Reddy Anna</strong>, you acknowledge and agree to this disclaimer.
                    </p>
                    <div style={{ marginTop: '30px' }}>
                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{
                            backgroundColor: '#25D366',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <i className="fab fa-whatsapp"></i> Get The Reddy Anna ID Now
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Disclaimer;

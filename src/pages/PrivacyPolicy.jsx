import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1, padding: '80px 20px' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '15px' }}>Privacy Policy</h1>
                        <p style={{ color: '#888', fontWeight: 'bold' }}>Last Updated: April 2026</p>
                        <div style={{ width: '80px', height: '4px', background: 'var(--primary-gradient)', margin: '20px auto', borderRadius: '2px' }}></div>
                    </div>

                    {/* Content */}
                    <div style={{ background: '#111', padding: '40px', borderRadius: '30px', border: '1px solid #222', lineHeight: '1.8' }}>
                        <p style={{ color: '#ccc', marginBottom: '30px', fontSize: '17px' }}>
                            At <strong style={{ color: 'var(--primary-color)' }}>Fairplay</strong>, we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>

                        <div style={{ marginBottom: '40px' }}>
                            <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '20px', borderLeft: '4px solid var(--primary-color)', paddingLeft: '20px' }}>1. Information We Collect</h2>
                            <p style={{ color: '#aaa' }}>
                                We collect several types of information from and about users of our Website, including:
                            </p>
                            <ul style={{ color: '#aaa', paddingLeft: '20px', marginTop: '10px' }}>
                                <li>Personally identifiable information (Name, Email, Phone Number, WhatsApp details).</li>
                                <li>Transaction details for deposits and withdrawals.</li>
                                <li>Usage data and technical logs for website performance.</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '20px', borderLeft: '4px solid var(--primary-color)', paddingLeft: '20px' }}>2. How We Use Your Information</h2>
                            <p style={{ color: '#aaa' }}>
                                We use information that we collect about you or that you provide to us to present our Website and its contents to you, to provide you with information, products, or services that you request from us, and to fulfill any other purpose for which you provide it.
                            </p>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                             <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '20px', borderLeft: '4px solid var(--primary-color)', paddingLeft: '20px' }}>3. Data Security</h2>
                            <p style={{ color: '#aaa' }}>
                                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
                            </p>
                        </div>

                        <div style={{ padding: '30px', background: 'rgba(255, 215, 0, 0.05)', borderRadius: '20px', border: '1px solid rgba(255, 215, 0, 0.1)' }}>
                            <h3 style={{ color: 'var(--primary-color)', fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Important Notice</h3>
                            <p style={{ color: '#aaa', fontSize: '15px', marginBottom: 0 }}>
                                Our services are strictly for users aged 18 and above. We do not knowingly collect personal information from children under 18.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                         <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '15px 40px' }}>
                            CONTACT SUPPORT
                        </a>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default PrivacyPolicy;

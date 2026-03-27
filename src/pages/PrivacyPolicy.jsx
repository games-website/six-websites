import React, { useEffect } from 'react';
const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="privacy-policy-page" style={{ backgroundColor: 'var(--primary-green)', color: '#fff', minHeight: '100vh', paddingBottom: '40px' }}>
            <div className="container">
                {}
                <div className="policy-header" style={{
                    border: '1px solid var(--accent-yellow)',
                    borderRadius: '50px',
                    padding: '15px',
                    textAlign: 'center',
                    marginTop: '40px',
                    marginBottom: '30px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                }}>
                    <h1 style={{ color: 'var(--accent-yellow)', fontSize: '28px', margin: 0, fontWeight: '700' }}>Lotus365 – Privacy Policy</h1>
                </div>
                <p style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    Your privacy is important to us. At <strong style={{ color: 'var(--accent-yellow)' }}>Lotus365</strong>, we are committed to protecting your personal information and ensuring a secure and transparent gaming experience.
                    This <strong>Privacy Policy</strong> explains how we collect, use, and safeguard your data when you use our website and app.
                </p>
                {}
                <div className="policy-section-header" style={{
                    border: '1px solid var(--accent-yellow)',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Information We Collect</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px' }}>We may collect the following types of information:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Personal Information:</strong> Name, email address, phone number, and date of birth provided during registration.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Financial Information:</strong> Transaction details, bank account, or wallet information for deposits and withdrawals (processed securely).</li>
                        <li style={{ marginBottom: '10px' }}><strong>Technical Data:</strong> IP address, device type, browser type, and usage patterns to improve our services.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Cookies:</strong> We use cookies to enhance your user experience and remember your preferences.</li>
                    </ul>
                </div>
                {}
                <div className="policy-section-header" style={{
                    border: '1px solid var(--accent-yellow)',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>How We Use Your Information</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px' }}>Your data is used for the following purposes:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '10px' }}>To <strong>create and manage your account</strong>.</li>
                        <li style={{ marginBottom: '10px' }}>To <strong>process transactions</strong> (deposits and withdrawals) securely.</li>
                        <li style={{ marginBottom: '10px' }}>To <strong>verify your identity</strong> and prevent fraud or money laundering.</li>
                        <li style={{ marginBottom: '10px' }}>To <strong>communicate with you</strong> regarding updates, offers, and support.</li>
                        <li style={{ marginBottom: '10px' }}>To <strong>improve our platform</strong> and ensure a seamless gaming experience.</li>
                    </ul>
                </div>
                {}
                <div className="policy-section-header" style={{
                    border: '1px solid var(--accent-yellow)',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Data Security</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ lineHeight: '1.8' }}>
                        We employ <strong>advanced security measures</strong>, including <strong>SSL encryption</strong> and secure servers, to protect your personal and financial data from unauthorized access, alteration, or disclosure.
                        However, please note that no method of transmission over the internet is 100% secure, but we strive to use commercially acceptable means to protect your information.
                    </p>
                </div>
                {}
                <div className="policy-section-header" style={{
                    border: '1px solid var(--accent-yellow)',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Sharing of Information</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ lineHeight: '1.8' }}>
                        We <strong>do not sell, trade, or rent</strong> your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above.
                        We may disclose your information if required by law or to protect our rights and property.
                    </p>
                </div>
                {}
                <div className="policy-section-header" style={{
                    border: '1px solid var(--accent-yellow)',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Your Rights</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px' }}>You have the right to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Access</strong> your personal data held by us.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Request correction</strong> of inaccurate information.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Request deletion</strong> of your account and data (subject to legal and regulatory requirements).</li>
                    </ul>
                    <p style={{ marginTop: '15px' }}>
                        If you wish to exercise any of these rights, please contact our support team.
                    </p>
                </div>
                {}
                <div className="policy-section-header" style={{
                    border: '1px solid var(--accent-yellow)',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Contact Us</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px' }}>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8', textAlign: 'center' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Lotus365 Support</strong></li>
                        <li style={{ marginBottom: '10px' }}><strong>WhatsApp:</strong> <a href="https://wa.me/447735317489" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-yellow)', textDecoration: 'none' }}>+447735317489</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default PrivacyPolicy;
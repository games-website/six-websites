import React, { useEffect } from 'react';
const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="disclaimer-page" style={{ backgroundColor: 'var(--primary-green)', color: '#fff', minHeight: '100vh', paddingBottom: '40px' }}>
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
                    <h1 style={{ color: 'var(--accent-yellow)', fontSize: '28px', margin: 0, fontWeight: '700' }}>Lotus365 – Disclaimer</h1>
                </div>
                <p style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    Please read this <strong>Disclaimer</strong> carefully before using the <strong style={{ color: 'var(--accent-yellow)' }}>Lotus365</strong> platform. By accessing or using our website and services, you agree to the terms outlined below.
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
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>General Information</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                        The information provided on <strong style={{ color: 'var(--accent-yellow)' }}>Lotus365</strong> is for general informational and entertainment purposes only. While we accept no liability for any errors or omissions in the content, we make every effort to ensure the accuracy and reliability of the information on our platform.
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
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Betting Risks</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                        Online betting and gambling involve financial risk. <strong style={{ color: 'var(--accent-yellow)' }}>Lotus365</strong> is not responsible for any financial losses incurred while using our services. Users are advised to bet responsibly and only wager amounts they can afford to lose.
                    </p>
                    <div style={{ borderLeft: '3px solid var(--accent-yellow)', paddingLeft: '15px', marginTop: '20px', color: '#ccc', fontStyle: 'italic' }}>
                        <strong>Note:</strong> Past performance or game outcomes do not guarantee future results.
                    </div>
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
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Legal Compliance</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                        It is the user's responsibility to ensure that online betting is legal in their jurisdiction. <strong style={{ color: 'var(--accent-yellow)' }}>Lotus365</strong> does not warrant that the services are compliant with the laws of every country or region. Users accessing the platform from restricted areas do so at their own risk.
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
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Third-Party Links</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                        Our website may contain links to third-party websites. <strong style={{ color: 'var(--accent-yellow)' }}>Lotus365</strong> has no control over the content, privacy policies, or practices of any third-party sites and assumes no responsibility for them.
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
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '22px', margin: 0 }}>Modifications</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                        <strong style={{ color: 'var(--accent-yellow)' }}>Lotus365</strong> reserves the right to modify, update, or change this Disclaimer at any time without prior notice. Continued use of the platform constitutes acceptance of the updated terms.
                    </p>
                </div>
                {}
            </div >
        </div >
    );
};
export default Disclaimer;
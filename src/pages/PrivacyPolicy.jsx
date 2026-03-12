import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionStyle = {
        marginBottom: '40px',
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    const headerStyle = {
        border: '1px solid #FFD700',
        borderRadius: '50px',
        padding: '10px 30px',
        textAlign: 'center',
        marginBottom: '20px',
        maxWidth: '100%',
        margin: '0 auto 20px auto',
        color: '#FFD700',
        fontSize: '22px',
        fontWeight: 'bold',
        boxSizing: 'border-box'
    };

    const contentStyle = {
        color: '#fff',
        lineHeight: '1.8',
        fontSize: '16px'
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '20px',
        marginBottom: '20px'
    };

    return (
        <div className="privacy-page" style={{ backgroundColor: '#0d1425', color: '#fff', minHeight: '100vh', paddingBottom: '40px' }}>
            <div className="container" style={{ padding: '40px 20px' }}>


                <div style={headerStyle}>
                    Privacy Policy
                </div>

                <div style={{ ...sectionStyle, textAlign: 'center' }}>
                    <p style={contentStyle}>
                        We, <strong style={{ color: '#FFD700' }}>Reddy Anna</strong> is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cricket betting platform, mobile application, and related services.
                    </p>
                </div>


                <div style={headerStyle}>
                    Information We Collect
                </div>
                <div style={sectionStyle}>
                    <p style={{ ...contentStyle, fontWeight: 'bold', marginBottom: '10px' }}>Personal Information:</p>
                    <ul style={{ ...contentStyle, ...listStyle }}>
                        <li>Name, email address, phone number, and date of birth</li>
                        <li>Government-issued ID for verification purposes</li>
                        <li>Payment and banking information</li>
                        <li>Username and password credentials</li>
                    </ul>

                    <p style={{ ...contentStyle, fontWeight: 'bold', marginBottom: '10px' }}>Automated Information:</p>
                    <ul style={{ ...contentStyle, ...listStyle }}>
                        <li>IP address, device information, and browser type</li>
                        <li>Betting history and transaction records</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Location data (with your permission)</li>
                    </ul>
                </div>


                <div style={headerStyle}>
                    How We Use Your Information
                </div>
                <div style={sectionStyle}>
                    <p style={{ ...contentStyle, marginBottom: '10px' }}>We use collected information to:</p>
                    <ul style={{ ...contentStyle, ...listStyle }}>
                        <li>Process registrations and verify user identity</li>
                        <li>Facilitate deposits, withdrawals, and betting transactions</li>
                        <li>Provide customer support and respond to inquiries</li>
                        <li>Detect and prevent fraud, abuse, and illegal activities</li>
                        <li>Comply with legal and regulatory requirements</li>
                        <li>Send promotional offers and updates (with consent)</li>
                        <li>Improve our services and user experience</li>
                    </ul>
                </div>


                <div style={headerStyle}>
                    Information Sharing
                </div>
                <div style={sectionStyle}>
                    <p style={{ ...contentStyle, marginBottom: '10px' }}>We may share your information with:</p>
                    <ul style={{ ...contentStyle, ...listStyle }}>
                        <li>Payment processors for transaction handling</li>
                        <li>Regulatory authorities as legally required</li>
                        <li>Third-party service providers under strict confidentiality agreements</li>
                        <li>Law enforcement when mandated by law</li>
                    </ul>
                    <p style={contentStyle}>We never sell your personal information to third parties.</p>
                </div>


                <div style={headerStyle}>
                    Data Security
                </div>
                <div style={sectionStyle}>
                    <p style={{ ...contentStyle, marginBottom: '10px' }}>We implement industry-standard security measures including:</p>
                    <ul style={{ ...contentStyle, ...listStyle }}>
                        <li>SSL encryption for data transmission</li>
                        <li>Secure servers with firewall protection</li>
                        <li>Regular security audits and updates</li>
                        <li>Restricted access to personal information</li>
                        <li>Two-factor authentication options</li>
                    </ul>
                </div>


                <div style={headerStyle}>
                    Your Rights
                </div>
                <div style={sectionStyle}>
                    <p style={{ ...contentStyle, marginBottom: '10px' }}>You have the right to:</p>
                    <ul style={{ ...contentStyle, ...listStyle }}>
                        <li>Access your personal information</li>
                        <li>Request corrections to inaccurate data</li>
                        <li>Delete your account and associated data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Withdraw consent for data processing</li>
                    </ul>
                </div>


                <div style={headerStyle}>
                    Cookies Policy
                </div>
                <div style={sectionStyle}>
                    <p style={contentStyle}>
                        We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can manage your cookie preferences through your browser settings.
                    </p>
                </div>


                <div style={headerStyle}>
                    Age Restriction
                </div>
                <div style={sectionStyle}>
                    <p style={contentStyle}>
                        Our services are strictly for users aged 18 and above. We do not knowingly collect information from minors.
                    </p>
                </div>


                <div style={headerStyle}>
                    Data Retention
                </div>
                <div style={sectionStyle}>
                    <p style={contentStyle}>
                        We retain your information for as long as your account is active or as required by law, typically for 5-7 years after account closure for regulatory compliance.
                    </p>
                </div>


                <div style={headerStyle}>
                    Changes to Privacy Policy
                </div>
                <div style={sectionStyle}>
                    <p style={contentStyle}>
                        We may update this policy periodically. Users will be notified of significant changes via email or platform notifications.
                    </p>
                </div>


                <div style={headerStyle}>
                    Contact Us
                </div>
                <div style={sectionStyle}>
                    <p style={{ ...contentStyle, marginBottom: '10px' }}>For privacy-related questions or requests:</p>
                    <ul style={{ ...contentStyle, ...listStyle }}>
                        <li>Support Portal: Available 24/7 through your account</li>
                    </ul>
                </div>


                <div style={headerStyle}>
                    Responsible Gaming
                </div>
                <div style={sectionStyle}>
                    <p style={contentStyle}>
                        We support responsible gaming practices. Your betting data may be monitored to identify problem gambling patterns and provide necessary assistance.
                    </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{
                        backgroundColor: '#25D366',
                        color: '#fff',
                        padding: '12px 30px',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '18px',
                        boxShadow: '0 0 15px rgba(37, 211, 102, 0.5)'
                    }}>
                        <i className="fab fa-whatsapp"></i> Get The Reddy Anna ID Now
                    </a>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;

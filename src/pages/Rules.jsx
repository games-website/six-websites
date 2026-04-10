import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const Rules = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ruleSections = [
        {
            title: "General Betting Rules",
            rules: [
                "All bets are settled based on the official result of the governing body.",
                "In case of a postponed match, bets remain active for 48 hours.",
                "Minimum age for participation is 18 years.",
                "One user is allowed to hold only one active Fairplay ID.",
                "Abuse of platform features may lead to account suspension."
            ]
        },
        {
            title: "Cricket Specific Rules",
            rules: [
                "Settlement is based on the result declared at the end of the match.",
                "In limited overs matches, bets are void if the match is abandoned.",
                "Super Overs do not count towards match outcome bets unless specified.",
                "Session bets are void if the match is interrupted before session completion."
            ]
        },
        {
            title: "Account & Withdrawals",
            rules: [
                "Withdrawals are processed 24/7 with a 5-minute average turnaround.",
                "Deposits must be made from accounts held in the user's own name.",
                "Verification may be required for large withdrawal requests.",
                "Fairplay reserves the right to void bets suspected of fraudulent activity."
            ]
        }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1, padding: '80px 20px' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '15px' }}>Rules & Regulations</h1>
                        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>Please read our terms carefully to ensure a smooth and fair betting experience on <span style={{ color: 'var(--primary-color)' }}>Fairplay</span>.</p>
                        <div style={{ width: '100px', height: '4px', background: 'var(--primary-gradient)', margin: '30px auto', borderRadius: '2px' }}></div>
                    </div>

                    {/* Rules Content */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {ruleSections.map((section, idx) => (
                            <div key={idx} style={{ 
                                background: '#111', 
                                padding: '40px', 
                                borderRadius: '30px', 
                                border: '1px solid #222',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '-20px', 
                                    right: '-10px', 
                                    fontSize: '100px', 
                                    fontWeight: '900', 
                                    color: 'rgba(255, 215, 0, 0.03)', 
                                    zIndex: 0 
                                }}>
                                    {idx + 1}
                                </div>
                                <h2 style={{ color: 'var(--primary-color)', fontSize: '26px', fontWeight: '800', marginBottom: '25px', position: 'relative', zIndex: 1 }}>
                                    {section.title}
                                </h2>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, position: 'relative', zIndex: 1 }}>
                                    {section.rules.map((rule, rIdx) => (
                                        <li key={rIdx} style={{ 
                                            padding: '15px 0', 
                                            borderBottom: '1px solid rgba(255,255,255,0.05)', 
                                            color: '#aaa',
                                            lineHeight: '1.6',
                                            display: 'flex',
                                            gap: '15px',
                                            alignItems: 'flex-start'
                                        }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '5px' }}></i>
                                            <span>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Final Note */}
                    <div style={{ marginTop: '60px', textAlign: 'center', background: 'rgba(255, 215, 0, 0.05)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255, 215, 0, 0.1)' }}>
                        <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>Gamble Responsibly</h3>
                        <p style={{ color: '#888', fontSize: '16px' }}>
                            Betting should be fun. Never bet more than you can afford to lose. For support or queries about our rules, please contact our 24/7 support team.
                        </p>
                        <a href="https://wa.me/15208005239?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '30px', padding: '15px 40px' }}>
                            CHAT WITH US
                        </a>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default Rules;

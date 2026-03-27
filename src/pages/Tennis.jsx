import React, { useEffect } from 'react';
import heroTennis from '../assets/hero_tennis.png';
const Tennis = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const headerStyle = {
        border: '1px solid var(--accent-yellow)',
        borderRadius: '50px',
        padding: '10px 30px',
        textAlign: 'center',
        marginBottom: '20px',
        display: 'inline-block',
        color: 'var(--accent-yellow)',
        fontSize: '22px',
        fontWeight: 'bold'
    };
    const sectionTitleStyle = {
        color: 'var(--accent-yellow)',
        fontSize: '24px',
        marginBottom: '20px',
        border: '1px solid var(--accent-yellow)',
        borderRadius: '50px',
        padding: '10px 30px',
        display: 'inline-block'
    };
    return (
        <div className="tennis-page" style={{ backgroundColor: 'var(--primary-green)', color: '#fff', minHeight: '100vh' }}>
            { }
            <section style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ ...headerStyle, fontSize: '24px', lineHeight: '1.4' }}>
                            Lotus365 Tennis Betting – Bet <br /> on Live Tennis Matches
                        </div>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#eee', fontSize: '16px' }}>
                            Welcome to <span style={{ color: 'var(--accent-yellow)' }}>Lotus365</span>, your ultimate destination for live tennis betting in India. With our platform, you can enjoy real-time <strong>Lotus365 Tennis</strong> betting and access all major tennis tournaments, including Wimbledon, US Open, French Open, and Australian Open. Whether you’re a beginner or an experienced bettor, our platform ensures a smooth and secure experience for every user.
                        </p>
                        <a href="https://wa.me/15208005239?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{
                            background: 'linear-gradient(to right, #fdd835, #fbc02d)',
                            color: '#000',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginTop: '20px',
                            boxShadow: '0 4px 15px rgba(253, 216, 53, 0.4)'
                        }}>
                            GET ID & PLAY NOW
                        </a>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src={heroTennis}
                            alt="Lotus365 Tennis Betting"
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            How to Get Started with Lotus365 Tennis Betting
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '20px' }}>
                        Getting started is simple. First, create your <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 ID</span> by registering on our official platform. Once your account is ready, log in through <strong>Lotus365 Login</strong> and explore our tennis betting options. You can place pre-match bets, track live odds, and enjoy fast deposits and withdrawals using our trusted payment methods.
                    </p>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--primary-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Why Choose Lotus365 for Tennis Betting
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '20px' }}>
                        We understand Indian bettors' needs. That’s why <strong>Lotus365 Sports Betting</strong> offers:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}><strong>Live tennis betting</strong> with real-time updates</li>
                        <li style={{ marginBottom: '15px' }}><strong>Wide range of tournaments</strong> – Grand Slams, ATP, WTA, and more</li>
                        <li style={{ marginBottom: '15px' }}><strong>Safe and secure transactions</strong> with instant deposits & withdrawals</li>
                        <li style={{ marginBottom: '15px' }}><strong>User-friendly mobile interface</strong> for betting on the go</li>
                        <li style={{ marginBottom: '15px' }}><strong>Exclusive bonuses and promotions</strong> for registered users</li>
                    </ul>
                </div>
            </section>
            {}
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Features of Lotus365 Tennis Betting
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '20px' }}>
                        Our tennis betting section is designed for a seamless experience:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}><strong>Live match tracking:</strong> Follow every point and set with live odds</li>
                        <li style={{ marginBottom: '15px' }}><strong>Flexible betting options:</strong> Singles, doubles, match winner, over/under, and set betting</li>
                        <li style={{ marginBottom: '15px' }}><strong>Instant updates:</strong> Real-time odds ensure you never miss an opportunity</li>
                        <li style={{ marginBottom: '15px' }}><strong>Secure platform:</strong> All transactions and accounts are protected with advanced security protocols</li>
                    </ul>
                </div>
            </section>
            {}
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--primary-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Responsible Gaming
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px' }}>
                        At <span style={{ color: 'var(--accent-yellow)' }}>Lotus365</span>, we promote responsible gaming. Set your limits, bet only what you can afford, and enjoy tennis betting as a fun and exciting activity.
                    </p>
                </div>
            </section>
            {}
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Join Lotus365 Today
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '30px' }}>
                        Start your tennis betting journey with <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 ID</span> today. Place bets on your favorite tennis matches, enjoy live action, and experience a safe and trusted online sports betting platform designed for Indian players.
                        <br /><br />
                        Create Account on <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Book Online</span> Platform
                    </p>
                </div>
            </section>
        </div>
    );
};
export default Tennis;
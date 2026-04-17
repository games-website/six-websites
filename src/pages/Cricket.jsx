import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroCricket from '../assets/hero_cricket.png';
const Cricket = () => {
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
        fontSize: '24px',
        fontWeight: 'bold'
    };
    const cardStyle = {
        border: '1px solid var(--accent-yellow)',
        borderRadius: '15px',
        padding: '25px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: '20px',
        height: '100%',
        textAlign: 'left'
    };
    const subHeaderStyle = {
        color: 'var(--accent-yellow)',
        fontSize: '18px',
        marginBottom: '15px',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        paddingBottom: '10px',
        fontStyle: 'italic'
    };
    return (
        <div className="cricket-page" style={{ backgroundColor: 'var(--primary-green)', color: '#fff', minHeight: '100vh' }}>
            { }
            <section style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={headerStyle}>
                            Lotus365 Cricket Betting
                        </div>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Get Your Lotus365 Online Cricket ID
                        </h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#eee' }}>
                            Love cricket and online betting? <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Cricket</span> brings live match excitement to your fingertips. Use your Lotus365 Cricket ID login or the Lotus365 Cricket App to place real-time bets on IPL, T20, and international matches.
                        </p>
                        <p style={{ lineHeight: '1.6', marginBottom: '30px', color: '#eee' }}>
                            Enjoy high odds, instant payouts, and secure transactions.
                            <br /><br />
                            <strong>Action:</strong> Sign up now and start winning with Lotus365 Cricket Betting!
                        </p>
                        <a href="https://wa.me/12397991318?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{
                            background: 'linear-gradient(to right, #fdd835, #fbc02d)',
                            color: '#000',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            boxShadow: '0 4px 15px rgba(253, 216, 53, 0.4)'
                        }}>
                            GET ID & PLAY NOW
                        </a>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src={heroCricket}
                            alt="Lotus365 Cricket Betting"
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={headerStyle}>
                            Why Choose Lotus365 for Cricket Betting?
                        </div>
                    </div>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                        <li style={{ marginBottom: '15px' }}>Verified <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Cricket ID</span> Login for safe access and account protection.</li>
                        <li style={{ marginBottom: '15px' }}>Real-time odds and instant updates on every match.</li>
                        <li style={{ marginBottom: '15px' }}>Seamless deposits and withdrawals through secure payment gateways.</li>
                        <li style={{ marginBottom: '15px' }}>Exclusive bonuses and cashback for cricket bettors.</li>
                        <li style={{ marginBottom: '15px' }}>User-friendly Lotus365 Cricket App available for Android and iOS.</li>
                    </ul>
                    <p style={{ textAlign: 'center', marginTop: '40px', color: '#eee', fontStyle: 'italic' }}>
                        Getting started is simple — create your Lotus365 Cricket ID, log in, choose your favourite match, and place your bets confidently.
                    </p>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ ...headerStyle, marginBottom: '40px' }}>
                        Our Lotus365 Cricket App: Betting On The Go
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '50px' }}>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏏</div>
                            <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Live Cricket Betting</h4>
                            <p style={{ color: '#eee' }}>Live cricket betting with real-time odds.</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💰</div>
                            <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Secure Transactions</h4>
                            <p style={{ color: '#eee' }}>Secure deposits and instant withdrawals.</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🚀</div>
                            <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Fast & User-Friendly</h4>
                            <p style={{ color: '#eee' }}>User-friendly design, fast loading speed.</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📱</div>
                            <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Cross-Platform App</h4>
                            <p style={{ color: '#eee' }}>Works on Android & iOS (under 25 MB).</p>
                        </div>
                        <div style={cardStyle}>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💬</div>
                            <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Always Available</h4>
                            <p style={{ color: '#eee' }}>24/7 customer support.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left', backgroundColor: 'rgba(0,0,0,0.3)', padding: '30px', borderRadius: '15px', border: '1px solid var(--accent-yellow)' }}>
                        <h3 style={{ color: 'var(--accent-yellow)', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px', marginBottom: '20px' }}>How to Download:</h3>
                        <ol style={{ marginLeft: '20px', color: '#eee', lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '10px' }}>Visit the official <span style={{ color: 'var(--accent-yellow)' }}>Lotus365</span> website.</li>
                            <li style={{ marginBottom: '10px' }}>Tap <strong>“Download App”</strong> on the homepage.</li>
                            <li style={{ marginBottom: '10px' }}>Allow installation from unknown sources (Android only).</li>
                            <li>Open the app and <strong>log in or create your ID</strong> to start betting.</li>
                        </ol>
                    </div>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={headerStyle}>
                            Lotus365 Cricket Matches & Tournament
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.6', marginBottom: '40px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                        Cricket is not just a sport in India — it’s a passion, a celebration, and a way of life. Lotus365 has created a platform that brings that same energy to your screen. Whether it’s an international series, IPL showdown, or a friendly T20 contest, Lotus365 makes sure you stay connected to every over, every run, and every victory.
                    </p>
                    <div style={{ ...cardStyle, width: '100%' }}>
                        <h3 style={subHeaderStyle}>What Are Lotus365 Cricket Matches?</h3>
                        <p style={{ color: '#eee', lineHeight: '1.6', marginBottom: '20px' }}>
                            <strong>Lotus365 Cricket Matches</strong> are specially designed online events where users can follow real-time match updates, explore live betting markets, and participate in interactive tournaments. These matches cover a wide range of formats — from T10 and T20 to One-Day and Test series.
                        </p>
                        <p style={{ color: '#eee', marginBottom: '10px' }}>Lotus365 provides access to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.6' }}>
                            <li>Live match odds and statistics</li>
                            <li>Team and player performance insights</li>
                            <li>Multiple betting markets like match winner, top batsman, and total runs</li>
                            <li>Instant updates during ongoing matches</li>
                        </ul>
                    </div>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        <div style={cardStyle}>
                            <div style={headerStyle}>How to Join Lotus365 Cricket Matches</div>
                            <p style={{ color: '#eee', marginBottom: '20px' }}>Getting started is quick and simple:</p>
                            <ol style={{ marginLeft: '20px', color: '#eee', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '10px' }}>Create your <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 ID</span> through the official website.</li>
                                <li style={{ marginBottom: '10px' }}>Complete your <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 login</span> and access the cricket section.</li>
                                <li style={{ marginBottom: '10px' }}>Browse ongoing matches and tournaments.</li>
                                <li>Join your favourite event and place your predictions or bets.</li>
                            </ol>
                            <p style={{ color: '#eee', marginTop: '20px', lineHeight: '1.6' }}>
                                Once logged in, you can follow match schedules, check team stats, and enjoy an uninterrupted cricket experience wherever you are.
                            </p>
                        </div>
                        <div style={cardStyle}>
                            <div style={headerStyle}>Why Cricket Lovers Choose Lotus365</div>
                            <p style={{ color: '#eee', marginBottom: '20px' }}>Cricket fans across India trust Lotus365 for its:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '10px' }}>Real-time performance tracking</li>
                                <li style={{ marginBottom: '10px' }}>Fair and transparent system</li>
                                <li style={{ marginBottom: '10px' }}><strong>Ball-by-ball updates</strong> and real-time match feeds</li>
                                <li style={{ marginBottom: '10px' }}>Exclusive cricket events and promotions</li>
                                <li>Safe and secure platform for all transactions</li>
                            </ul>
                            <p style={{ color: '#eee', marginTop: '20px', lineHeight: '1.6' }}>
                                The platform combines entertainment with strategy, making every match more engaging and rewarding.
                            </p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <a href="https://wa.me/12397991318?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{
                            backgroundColor: '#25D366',
                            color: '#fff',
                            padding: '15px 40px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '20px',
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
                        }}>
                            <i className="fab fa-whatsapp"></i> Get The Lotus365 ID Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Cricket;
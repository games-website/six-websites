import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" style={{ background: '#0a0a0a', padding: '80px 0 30px', borderTop: '1px solid #222' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', marginBottom: '60px' }}>

                    {/* Column 1: Brand */}
                    <div>
                        <div className="footer-logo" style={{ marginBottom: '20px' }}>
                            <img src="/images/logo.png" alt="Fairplay" style={{ height: '40px' }} />
                        </div>

                        <p style={{ color: '#888', lineHeight: '1.6', fontSize: '15px', marginBottom: '25px' }}>
                            India's Most Trusted and Secure Online Betting platform. Experience the thrill of live gaming with instant withdrawals and 24/7 support.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" className="social-icon" style={{ color: 'var(--primary-color)', fontSize: '20px' }}><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon" style={{ color: 'var(--primary-color)', fontSize: '20px' }}><i className="fab fa-telegram"></i></a>
                            <a href="#" className="social-icon" style={{ color: 'var(--primary-color)', fontSize: '20px' }}><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Sports Betting */}
                    <div>
                        <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Betting</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><NavLink to="/cricket-betting" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Cricket Betting</NavLink></li>
                            <li><NavLink to="/football-betting" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Football Betting</NavLink></li>
                            <li><NavLink to="/tennis-betting" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Tennis Betting</NavLink></li>
                            <li><NavLink to="/horse-race-betting" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Horse Racing</NavLink></li>
                            <li><NavLink to="/kabaddi-betting" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Kabaddi Betting</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Live Gaming */}
                    <div>
                        <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Live Games</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><NavLink to="/live-casino" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Live Casino</NavLink></li>
                            <li><NavLink to="/live-cricket" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Live Cricket</NavLink></li>
                            <li><NavLink to="/fantasy-sports" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Fantasy Sports</NavLink></li>
                            <li><NavLink to="/features" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Platform Features</NavLink></li>
                            <li><NavLink to="/how-to-play" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>How to Play</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Help & Legal */}
                    <div>
                        <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><NavLink to="/about-us" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>About Us</NavLink></li>
                            <li><NavLink to="/contact" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Contact Support</NavLink></li>
                            <li><NavLink to="/rules" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>General Rules</NavLink></li>
                            <li><NavLink to="/privacy-policy" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Privacy Policy</NavLink></li>
                            <li><NavLink to="/disclaimer" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Disclaimer</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #222', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                    <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>
                        &copy; {new Date().getFullYear()} Fairplay. All Rights Reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <span style={{ color: '#444', fontSize: '12px', fontWeight: 'bold' }}>18+ | Responsible Gaming</span>
                        <img src="/images/whatsapp-icon.png" alt="BeGambleAware" style={{ height: '20px', opacity: 0.5, filter: 'grayscale(1)' }} onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

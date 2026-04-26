import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-content">
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/home">» Home</Link></li>
                        <li><Link to="/about-us">» About Us</Link></li>
                        <li><Link to="/services">» Services</Link></li>
                        <li><Link to="/blogs">» Blogs</Link></li>
                        <li><Link to="/referral">» Referral Code</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Sports & Games</h3>
                    <ul>
                        <li><Link to="/cricket-betting">» Cricket Betting</Link></li>
                        <li><Link to="/football-betting">» Football Betting</Link></li>
                        <li><Link to="/tennis-betting">» Tennis Betting</Link></li>
                        <li><Link to="/live-cricket">» Live Cricket</Link></li>
                        <li><Link to="/kabaddi-betting">» Kabaddi Betting</Link></li>
                        <li><Link to="/horse-race-betting">» Horse Race Betting</Link></li>
                        <li><Link to="/fantasy-sports">» Fantasy Sports</Link></li>
                        <li><Link to="/live-casino">» Live Casino</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Support & Legal</h3>
                    <ul>
                        <li><Link to="/rules">» Rules & Regulation</Link></li>
                        <li><Link to="/how-to-play">» How to Play</Link></li>
                        <li><Link to="/refund-policy">» Refund Policy</Link></li>
                        <li><Link to="/privacy-policy">» Privacy Policy</Link></li>
                        <li><Link to="/disclaimer">» Disclaimer</Link></li>
                    </ul>
                </div>
                <div className="footer-column contact-column">
                    <h3>Contact Us</h3>
                    <div className="contact-info">
                        <a href="https://wa.me/6289183063?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <span className="phone-icon">💬</span> +6289183063
                        </a>
                    </div>
                    <a href="https://wa.me/6289183063?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="btn-primary get-id-btn" style={{ marginTop: '20px', width: 'auto', padding: '10px 30px', cursor: 'pointer' }}>Get ID</button>
                    </a>
                </div>
            </div>
            <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: '40px' }}>
                <p>&copy; 2026 Lotus365. All Rights Reserved.</p>
                <p style={{ fontSize: '12px', marginTop: '10px' }}>Responsible Gambling: 18+ Only.</p>
            </div>
        </footer>
    );
};
export default Footer;
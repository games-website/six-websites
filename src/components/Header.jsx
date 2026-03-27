import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lotusLogo from '../assets/lotus365_logo.png';
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header>
            <div className="container header-content">
                <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img id='logo-img' src={lotusLogo} alt="Lotus365" />
                </Link>

                <div className="header-actions">
                    <a id='get-id-nav-btn' href="https://wa.me/15208005239?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="get-id-header-btn">
                        Get ID
                    </a>
                    <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
                <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-visible active' : ''}`}>
                    <Link to="/home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                    <Link to="/rules" onClick={() => setMobileMenuOpen(false)}>Rules & Regulation</Link>
                    <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
                </nav>

            </div>
        </header>
    );
};
export default Header;
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const closeNav = () => {
        setIsNavActive(false);
    };

    return (
        <header class="header">
            <div class="container header-container">
                <div class="logo">
                    <h1 style={{ color: '#FFD700', fontSize: '24px', fontWeight: 800, margin: 0, letterSpacing: '1px' }}>
                        REDDYANNA</h1>
                </div>
                <button
                    class="hamburger-menu"
                    aria-label="Toggle Navigation"
                    onClick={toggleNav}
                >
                    <i class={`fas ${isNavActive ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <nav class={`nav ${isNavActive ? 'active' : ''}`}>
                    <Link to="/" onClick={closeNav}>Home</Link>
                    <Link to="/services" onClick={closeNav}>Services</Link>
                    <Link to="/platforms" onClick={closeNav}>Platforms</Link>
                    <Link to="/rules" onClick={closeNav}>Rules</Link>
                    <Link to="/about-us" onClick={closeNav}>About Us</Link>
                    {location.pathname === '/' && (
                        <>
                            <a href="#sports-id" onClick={closeNav}>Sports ID</a>
                            <a href="#register" onClick={closeNav}>Register</a>
                            <a href="#login" onClick={closeNav}>Login</a>
                        </>
                    )}
                    <a href="#sports-id" class="mobile-only-btn btn-gold" onClick={closeNav}>GET ID</a>
                </nav>
                <a href="#sports-id" class="desktop-only-btn btn-gold">GET ID</a>
            </div>
        </header>
    );
};

export default Header;

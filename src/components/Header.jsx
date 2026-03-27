import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isNavActive, setIsNavActive] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const closeNav = () => {
        setIsNavActive(false);
        setIsServicesOpen(false);
    };

    const toggleServices = (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setIsServicesOpen(!isServicesOpen);
        }
    };

    return (
        <header class="header">
            <div class="container header-container">
                <div class="logo">
                    <Link to="/" onClick={closeNav}>
                        <img id='logo-img' src="/images/reddy_anna_header_logo.jpg" alt="Reddy Anna Logo" />
                    </Link>
                </div>
                <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" className="mobile-header-btn btn-gold">GET ID</a>
                <button
                    class="hamburger-menu"
                    aria-label="Toggle Navigation"
                    onClick={toggleNav}
                >
                    <i class={`fas ${isNavActive ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <nav class={`nav ${isNavActive ? 'active' : ''}`}>
                    <Link to="/" onClick={closeNav}>Home</Link>

                    <div className={`nav-item-dropdown ${isServicesOpen ? 'open' : ''}`}>
                        <Link to="/services" onClick={toggleServices} className="dropdown-trigger">
                            Services <i className={`fas fa-chevron-${isServicesOpen ? 'up' : 'down'} mobile-only`}></i>
                        </Link>
                        <div className="dropdown-menu">
                            <Link to="/cricket" onClick={closeNav}>Cricket Betting</Link>
                            <Link to="/football" onClick={closeNav}>Football Betting</Link>
                            <Link to="/live-cricket-betting" onClick={closeNav}>Live Cricket Betting</Link>
                            <Link to="/fantasy-sports" onClick={closeNav}>Fantasy Sports Contests</Link>
                            <Link to="/tennis" onClick={closeNav}>Tennis Betting</Link>
                            <Link to="/kabaddi" onClick={closeNav}>Kabaddi Betting</Link>
                            <Link to="/casino" onClick={closeNav}>Live Casino</Link>
                            <Link to="/horse-race-betting" onClick={closeNav}>Horse Race Betting</Link>
                            <Link to="/services" onClick={closeNav} className="all-services-link">All Services</Link>
                        </div>
                    </div>

                    <Link to="/platforms" onClick={closeNav}>Platforms</Link>

                    <Link to="/about-us" onClick={closeNav}>About Us</Link>
                    <Link to="/how-to-play" onClick={closeNav}>How to Play</Link>
                    {/* <Link to="/app-download" onClick={closeNav}>App</Link> */}
                    <Link to="/blogs" onClick={closeNav}>Blogs</Link>
                    {location.pathname === '/' && (
                        <>

                        </>
                    )}
                </nav>
                <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" class="desktop-only-btn btn-gold">GET ID</a>
            </div>
        </header >
    );
};

export default Header;

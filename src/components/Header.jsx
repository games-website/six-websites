import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownActive(false);
    };

    // Body scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleDropdown = (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setIsDropdownActive(!isDropdownActive);
        }
    };


    return (
        <header className="header animate fade-in">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo">
                    <NavLink to="/" onClick={closeMenu}>
                        <img src="/images/logo.png" alt="Fairplay" style={{ height: '40px', display: 'block' }} />
                    </NavLink>
                </div>


                <div className="hamburger" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: '24px', color: 'var(--primary-color)' }}></i>
                </div>


                <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>

                    <div className={`dropdown ${isDropdownActive ? 'active' : ''}`}>
                        <span className="dropdown-toggle" onClick={toggleDropdown} style={{ color: '#fff', fontWeight: '600', textTransform: 'uppercase', fontSize: '14px' }}>
                            Features <i className="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '5px' }}></i>
                        </span>
                        <div className="dropdown-menu">
                            <NavLink to="/cricket-betting" className="dropdown-item" onClick={closeMenu}>Cricket Betting</NavLink>
                            <NavLink to="/football-betting" className="dropdown-item" onClick={closeMenu}>Football Betting</NavLink>
                            <NavLink to="/tennis-betting" className="dropdown-item" onClick={closeMenu}>Tennis Betting</NavLink>
                            <NavLink to="/horse-race-betting" className="dropdown-item" onClick={closeMenu}>Horse Racing</NavLink>
                            <NavLink to="/kabaddi-betting" className="dropdown-item" onClick={closeMenu}>Kabaddi Betting</NavLink>
                            <NavLink to="/live-casino" className="dropdown-item" onClick={closeMenu}>Live Casino</NavLink>
                            <NavLink to="/live-cricket" className="dropdown-item" onClick={closeMenu}>Live Cricket</NavLink>
                            <NavLink to="/fantasy-sports" className="dropdown-item" onClick={closeMenu}>Fantasy Sports</NavLink>
                        </div>
                    </div>

                    <NavLink to="/about-us" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    {/* <NavLink to="/blogs" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink> */}
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </nav>

                <div className="header-cta">
                    <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '10px 20px', borderRadius: '50px' }}>
                        <i className="fab fa-whatsapp"></i> WhatsApp Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header className="header animate fade-in">
            <div className="container">
                <div className="logo">
                    <h1 >Madrascafe</h1>
                </div>
                {}
                <div className="hamburger" onClick={toggleMenu}>
                    {}
                    <i className="fas fa-bars"></i>
                </div>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    {}
                    {}
                    <NavLink to="/partners" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Our Partners</NavLink>
                    <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                    {}
                    {}
                </nav>
                <div className="header-cta">
                    <a href="#" className="btn-login">Login</a>
                    <a href="#" className="btn-whatsapp"><i className="fab fa-whatsapp"></i> WhatsApp Now</a>
                </div>
            </div>
        </header>
    );
};
export default Header;

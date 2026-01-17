import React, { useState } from 'react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <div className="container header-content">
                <div className="logo">LOTUS<span style={{ color: 'white' }}>360</span></div>

                <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-visible' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#sports">Sports</a>
                    <a href="#casino">Casino</a>
                    <a href="#live">Live</a>
                    <a href="#promotions">Promotions</a>
                </nav>

                <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</div>
            </div>
        </header>
    );
};

export default Header;

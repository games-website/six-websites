import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{ marginBottom: '20px' }}>Madrascafe</h2>
                        <p>India's Most Trusted Online Betting Platform.</p>
                    </div>
                </div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Responsible Gaming</a>
                </div>
                <p style={{ marginTop: '30px', fontSize: '12px' }}>&copy; 2025 Madrascafe. All rights reserved.</p>
                <p style={{ fontSize: '12px', color: '#666' }}>BeGambleAware.org</p>
            </div>
        </footer>
    );
};
export default Footer;

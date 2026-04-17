import React from 'react';
import promoBanner from '../assets/promotions_banner.png';
const Promotions = () => {
    return (
        <div className="promotions-section" style={{ padding: '60px 0', textAlign: 'center', backgroundColor: '#0d1425' }}>
            <div className="container">
                <h2 style={{ color: 'var(--accent-yellow)', marginBottom: '30px' }}>Exclusive Promotions</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto', overflow: 'hidden', borderRadius: '20px', border: '1px solid var(--accent-yellow)', boxShadow: '0 0 20px rgba(253, 216, 53, 0.2)' }}>
                    <img src={promoBanner} alt="Promotions" style={{ width: '100%', display: 'block' }} />
                </div>
                <p style={{ marginTop: '20px', fontSize: '18px' }}>Check out our latest offers and bonuses. Claim your rewards today!</p>
                <a href="https://wa.me/12397991318?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ marginTop: '20px' }}>Claim Now</button>
                </a>
            </div>
        </div>
    );
};
export default Promotions;
import React from 'react';
import customerCareImg from '../assets/customer_care.png';
const CustomerCare = () => {
    return (
        <div className="customer-care-section" style={{ padding: '60px 0', textAlign: 'center', backgroundColor: 'var(--primary-green)' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', justifyContent: 'center' }}>
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
                    <img src={customerCareImg} alt="Customer Care" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 0 20px rgba(0,0,0,0.3)' }} />
                </div>
                <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
                    <h2 style={{ color: 'var(--accent-yellow)', fontSize: '36px', marginBottom: '20px' }}>24/7 Dedicated Support</h2>
                    <p style={{ fontSize: '18px', color: '#fff', lineHeight: '1.6', marginBottom: '30px' }}>
                        At Lotus365, your experience is our top priority. Our dedicated customer care team is available 24 hours a day, 7 days a week to assist you with any queries, account issues, or betting assistance.
                    </p>
                    <a href="https://wa.me/12397991318?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>💬</span> Chat with Support
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default CustomerCare;
import React from 'react';
const GetID = () => {
    return (
        <div className="get-id-section" style={{ padding: '40px 0', textAlign: 'center', backgroundColor: 'var(--primary-green)' }}>
            <div className="container">
                <h2 style={{ color: 'var(--accent-yellow)' }}>Get Your ID Now</h2>
                <p>Join Lotus365 and start winning today!</p>
                <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ marginTop: '20px', cursor: 'pointer' }}>Get ID</button>
                </a>
            </div>
        </div>
    );
};
export default GetID;
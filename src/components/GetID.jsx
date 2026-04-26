import React from 'react';
const GetID = () => {
    return (
        <div className="get-id-section" style={{ padding: '40px 0', textAlign: 'center', backgroundColor: 'var(--primary-green)' }}>
            <div className="container">
                <h2 style={{ color: 'var(--accent-yellow)' }}>Get Your ID Now</h2>
                <p>Join Lotus365 and start winning today!</p>
                <a href="https://wa.me/6289183063?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ marginTop: '20px', cursor: 'pointer' }}>Get ID</button>
                </a>
            </div>
        </div>
    );
};
export default GetID;
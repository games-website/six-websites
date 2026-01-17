import React from 'react';
const Partners = () => {
    return (
        <>
            { }
            <div className="page-header"
                style={{ background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('')" }}>
                <div className="container animate fade-in">
                    <h1 style={{ color: '#fff' }}>Our Trusted Partners</h1>
                    <p style={{ fontSize: '20px', color: '#ddd', marginTop: '10px' }}>Collaborating with the Best in the Industry</p>
                </div>
            </div>
            { }
            <section className="section animate slide-up" style={{ background: 'var(--secondary-color)' }}>
                <div className="container">
                    <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>
                        <div className="feature-card partner-card">
                            <h2>Madras365</h2>
                            <p>Leading provider of sports exchange services with seamless integration.</p>
                        </div>
                        <div className="feature-card partner-card">
                            <h2>Salasar</h2>
                            <p>Trusted name in the betting industry known for reliability.</p>
                        </div>
                        <div className="feature-card partner-card">
                            <h2>Lotus365</h2>
                            <p>Premium platform for high-stakes betting and casino games.</p>
                        </div>
                        <div className="feature-card partner-card">
                            <h2>TigerExch</h2>
                            <p>Innovative exchange platform with cutting-edge technology.</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <h3>Become a Partner</h3>
                        <p style={{ maxWidth: '600px', margin: '20px auto', color: '#ccc' }}>Join our network of successful partners and
                            grow your business with Madrascafe. Contact us today to learn more.</p>
                        <a href="#" className="btn-secondary">Contact Us</a>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Partners;

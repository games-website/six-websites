import React from 'react';
const LiveSection = () => {
    return (
        <section className="section-spacer">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Live Casino Action</h2>
                <p style={{ maxWidth: '700px', opacity: 0.9 }}>
                    Interact with real dealers in our Live Casino. Experience the atmosphere of a real casino from the comfort of your home.
                    Available 24/7 with HD streaming.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <li style={{ background: '#fdd835', color: '#000', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>Live Baccarat</li>
                    <li style={{ background: '#fdd835', color: '#000', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>Live Blackjack</li>
                    <li style={{ background: '#fdd835', color: '#000', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>Live Roulette</li>
                    <li style={{ background: '#fdd835', color: '#000', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>Andar Bahar</li>
                </ul>
            </div>
        </section>
    );
};
export default LiveSection;
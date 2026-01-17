import React from 'react';

const CasinoSection = () => {
    return (
        <section className="content-block" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
            <h2 style={{ color: 'var(--accent-yellow)' }}>Premium Casino Games</h2>
            <p>
                Step into the Lotus Casino. From classic Slots to Table Games like Blackjack, Baccarat, and Roulette.
                Enjoy immersive graphics and fair gameplay. Big jackpots await!
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
                <div style={{ height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: 'none', overflow: 'hidden' }}>
                    <img src="./src/assets/casino_slots.png" alt="Slots" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
                <div style={{ height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: 'none', overflow: 'hidden' }}>
                    <img src="./src/assets/casino_roulette.png" alt="Roulette" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
                <div style={{ height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: 'none', overflow: 'hidden' }}>
                    <img src="./src/assets/casino_teen_patti.png" alt="Teen Patti" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className="btn-outline">
                    <span>🎰</span> Play Casino
                </button>
            </div>
        </section>
    );
};

export default CasinoSection;

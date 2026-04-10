import React from 'react';
import casinoSlots from '../assets/casino_slots.png';
import casinoRoulette from '../assets/casino_roulette.png';
import casinoTeenPatti from '../assets/casino_teen_patti.png';
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
                    <img src={casinoSlots} alt="Slots" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
                <div style={{ height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: 'none', overflow: 'hidden' }}>
                    <img src={casinoRoulette} alt="Roulette" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
                <div style={{ height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: 'none', overflow: 'hidden' }}>
                    <img src={casinoTeenPatti} alt="Teen Patti" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="https://wa.me/16402396837?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-outline" style={{ cursor: 'pointer' }}>
                        <span>🎰</span> Play Casino
                    </button>
                </a>
            </div>
        </section>
    );
};
export default CasinoSection;
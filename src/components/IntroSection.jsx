import React from 'react';
import appMock from '../assets/app_mock.png';
const IntroSection = () => {
    return (
        <section className="content-block">
            <h2>Lotus365 – Betting on Sports and Casino Games Like Never Before</h2>
            <p>
                Lotus365 offers an unmatched experience for bettors and gamers alike.
                With a wide range of sports to bet on, including cricket, football, and tennis,
                alongside thrilling casino games like slots, roulette, and poker, the platform
                delivers endless entertainment. Lotus365 combines cutting-edge technology and secure transactions.
            </p>
            <a href="https://wa.me/15208005239?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-outline" style={{ cursor: 'pointer' }}>
                    <span>💬</span> START BETTING
                </button>
            </a>
            <div className="mock-phone-container">
                <div className="mock-phone-label">
                    <img src={appMock} alt="App Interface Simulation" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                </div>
            </div>
            <h2>Kickstart Your Betting Journey with 400% Deposit Bonus!</h2>
        </section>
    );
};
export default IntroSection;
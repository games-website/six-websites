import React from 'react';

const IntroSection = () => {
    return (
        <section className="content-block">
            <h2>Lotus India – Betting on Sports and Casino Games Like Never Before</h2>
            <p>
                Lotus India offers an unmatched experience for bettors and gamers alike.
                With a wide range of sports to bet on, including cricket, football, and tennis,
                alongside thrilling casino games like slots, roulette, and poker, the platform
                delivers endless entertainment. Lotus combines cutting-edge technology and secure transactions.
            </p>

            <button className="btn-outline">
                <span>💬</span> START BETTING
            </button>

            <div className="mock-phone-container">
                <div className="mock-phone-label">
                    <img src="./src/assets/app_mock.png" alt="App Interface Simulation" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                </div>
            </div>

            <h2>Kickstart Your Betting Journey with 400% Deposit Bonus!</h2>
        </section>
    );
};

export default IntroSection;

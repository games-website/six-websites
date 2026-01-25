import React from 'react';
import sportsCricket from '../assets/sports_cricket.png';
import sportsFootball from '../assets/sports_football.png';
import sportsTennis from '../assets/sports_tennis.png';

const SportsSection = () => {
    return (
        <section className="section-spacer">
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Sports Betting at Lotus</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                Experience the thrill of sports betting with Lotus. We offer a vast array of markets including Cricket (IPL, World Cup),
                Football (Premier League, La Liga), Tennis, and more. Get the best odds and live updates.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px', flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', width: '300px', overflow: 'hidden', textAlign: 'center', paddingBottom: '20px' }}>
                    <img src={sportsCricket} alt="Cricket" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <h3 style={{ color: 'var(--accent-yellow)', marginTop: '15px' }}>Cricket</h3>
                    <p style={{ fontSize: '15px', padding: '0 10px' }}>Match Winner, Toss, Fancy Bets</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', width: '300px', overflow: 'hidden', textAlign: 'center', paddingBottom: '20px' }}>
                    <img src={sportsFootball} alt="Football" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <h3 style={{ color: 'var(--accent-yellow)', marginTop: '15px' }}>Football</h3>
                    <p style={{ fontSize: '15px', padding: '0 10px' }}>Goals, Corners, Cards</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', width: '300px', overflow: 'hidden', textAlign: 'center', paddingBottom: '20px' }}>
                    <img src={sportsTennis} alt="Tennis" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <h3 style={{ color: 'var(--accent-yellow)', marginTop: '15px' }}>Tennis</h3>
                    <p style={{ fontSize: '15px', padding: '0 10px' }}>Set Winner, Game Handicap</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className="btn-outline">
                    <span>💬</span> Bet on Sports
                </button>
            </div>
        </section>
    );
};

export default SportsSection;


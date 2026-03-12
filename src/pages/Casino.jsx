import React, { useEffect } from 'react';
import heroCasino from '../assets/hero_casino.png';
const Casino = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const headerStyle = {
        border: '1px solid var(--accent-yellow)',
        borderRadius: '50px',
        padding: '10px 30px',
        textAlign: 'center',
        marginBottom: '20px',
        display: 'inline-block',
        color: 'var(--accent-yellow)',
        fontSize: '22px',
        fontWeight: 'bold'
    };
    const sectionTitleStyle = {
        color: 'var(--accent-yellow)',
        fontSize: '24px',
        marginBottom: '20px',
        border: '1px solid var(--accent-yellow)',
        borderRadius: '50px',
        padding: '10px 30px',
        display: 'inline-block'
    };
    return (
        <div className="casino-page" style={{ backgroundColor: 'var(--primary-green)', color: '#fff', minHeight: '100vh' }}>
            { }
            <section style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ ...headerStyle, fontSize: '24px', lineHeight: '1.4' }}>
                            Lotus365 Casino Games - Bet <br /> on Live Casino
                        </div>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#eee', fontSize: '16px' }}>
                            Welcome to <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Casino</span>, where excitement meets trust and real-money gaming comes alive. <strong>Lotus365 online casino</strong> gives players a premium platform to enjoy world-class casino games with smooth gameplay, fair odds, and instant transactions.
                            <br /><br />
                            Whether you’re a beginner or a seasoned player, Lotus365 Book is designed to deliver a safe, thrilling, and rewarding gambling experience.
                        </p>
                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{
                            background: 'linear-gradient(to right, #fdd835, #fbc02d)',
                            color: '#000',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginTop: '20px',
                            boxShadow: '0 4px 15px rgba(253, 216, 53, 0.4)'
                        }}>
                            PLAY LIVE CASINO
                        </a>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src={heroCasino}
                            alt="Lotus365 Casino"
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Lotus365 Live Casino – Real Dealers, Real Action
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '20px' }}>
                        Experience the thrill of a real casino from your mobile with <strong>Lotus365 live casino</strong>. Play live Teen Patti, Andar Bahar, Roulette, Blackjack, and Baccarat with professional dealers streaming in real time. Every move is transparent, interactive, and packed with excitement.
                    </p>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--primary-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Popular Casino Games at Lotus365 Book
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '20px' }}>
                        At <strong>Lotus365 Casino</strong>, you can enjoy:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}>Live Teen Patti & Andar Bahar</li>
                        <li style={{ marginBottom: '15px' }}>Roulette & Blackjack</li>
                        <li style={{ marginBottom: '15px' }}>Baccarat & Poker tables</li>
                        <li style={{ marginBottom: '15px' }}>Slot games & instant win games</li>
                    </ul>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginTop: '20px' }}>
                        All games are optimized for mobile and offer smooth performance with fast results.
                    </p>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Get Your Lotus365 Casino ID
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '20px' }}>
                        Creating a <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 casino ID</span> is quick and hassle-free. Register instantly via WhatsApp, get verified in minutes, and start playing without long forms or delays.
                    </p>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--primary-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Why Choose Lotus365 Online Casino?
                        </div>
                    </div>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}>Secure & fair gaming environment</li>
                        <li style={{ marginBottom: '15px' }}>Fast deposit and withdrawal options</li>
                        <li style={{ marginBottom: '15px' }}>Mobile-friendly live casino platform</li>
                        <li style={{ marginBottom: '15px' }}>24/7 customer support</li>
                        <li style={{ marginBottom: '15px' }}>Trusted by Indian casino players</li>
                    </ul>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginTop: '20px' }}>
                        Join <span style={{ color: 'var(--accent-yellow)' }}>Lotus365</span> Casino today and enjoy a premium online casino experience where you can play smart, play safe, and win big.
                        <br /><br />
                        Create Account on <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Book</span> Platform.
                    </p>
                </div>
            </section>
        </div>
    );
};
export default Casino;
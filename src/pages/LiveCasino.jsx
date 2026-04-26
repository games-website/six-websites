import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const LiveCasino = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const casinoGames = [
        { name: 'Live Roulette', icon: 'fa-dharmachakra', desc: 'Experience the classic wheel in HD.' },
        { name: 'Teen Patti', icon: 'fa-cards', desc: 'The favorite Indian card game, live.' },
        { name: 'Andar Bahar', icon: 'fa-random', desc: 'Simple, fast, and exciting live action.' },
        { name: 'Blackjack', icon: 'fa-copy', desc: 'Beat the dealer in our premium studios.' },
        { name: 'Baccarat', icon: 'fa-gem', desc: 'The game of high rollers with real dealers.' },
        { name: 'Live Slots', icon: 'fa-slot-machine', desc: 'Hundreds of themes with massive jackpots.' }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <section style={{ 
                    background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/images/hero-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '100px 20px',
                    textAlign: 'center',
                    borderBottom: '1px solid #333'
                }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ 
                            display: 'inline-block', 
                            padding: '10px 30px', 
                            background: 'rgba(255, 215, 0, 0.1)', 
                            border: '1px solid var(--primary-color)', 
                            borderRadius: '50px',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            letterSpacing: '1px'
                        }}>
                             Fairplay Live Casino
                        </div>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 8vw, 64px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textTransform: 'uppercase',
                            lineHeight: '1.1'
                        }}>
                            World-Class Live Gaming
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
                            Step into the luxury of real-time casino action. <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span> brings you the world's most popular tables with professional live dealers.
                        </p>
                        <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fas fa-dice" style={{ marginRight: '10px' }}></i> ENTER THE CASINO
                        </a>
                    </div>
                </section>

                {/* Popular Games Grid */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>Most Popular Tables</h2>
                            <div style={{ width: '80px', height: '4px', background: 'var(--primary-gradient)', margin: '25px auto', borderRadius: '2px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {casinoGames.map((game, idx) => (
                                <div key={idx} className="feature-card" style={{ 
                                    padding: '40px', 
                                    textAlign: 'center', 
                                    border: '1px solid #222', 
                                    background: '#111',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '20px' }}>
                                        <i className={`fas ${game.icon}`}></i>
                                    </div>
                                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>{game.name}</h3>
                                    <p style={{ color: '#888', fontSize: '15px' }}>{game.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '30px' }}>Fair Play & Transparency</h2>
                        <p style={{ color: '#aaa', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                            At Fairplay, all our live casino games are powered by world-renowned providers such as Evolution Gaming and Ezugi. We guarantee 100% fair outcomes through real-time streaming and certified RNG systems.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                            <div style={{ textAlign: 'center' }}>
                                <i className="fas fa-shield-alt" style={{ fontSize: '32px', color: '#25d366', display: 'block', marginBottom: '10px' }}></i>
                                <span style={{ fontWeight: 'bold' }}>Certified Secure</span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <i className="fas fa-video" style={{ fontSize: '32px', color: 'var(--secondary-color)', display: 'block', marginBottom: '10px' }}></i>
                                <span style={{ fontWeight: 'bold' }}>HD Stream</span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <i className="fas fa-user-friends" style={{ fontSize: '32px', color: 'var(--primary-color)', display: 'block', marginBottom: '10px' }}></i>
                                <span style={{ fontWeight: 'bold' }}>Pro Dealers</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <div style={{ 
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', 
                            padding: '80px 40px', 
                            borderRadius: '40px',
                            textAlign: 'center',
                            color: '#000'
                        }}>
                             <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: '900', marginBottom: '25px', textTransform: 'uppercase' }}>Ready to Take the Seat?</h2>
                             <p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '40px', opacity: 0.8 }}>Get your ID in 2 minutes and join world-class tables now.</p>
                             <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ 
                                background: '#000', 
                                color: '#fff', 
                                padding: '20px 60px', 
                                borderRadius: '50px', 
                                fontWeight: '900',
                                fontSize: '20px',
                                display: 'inline-block'
                            }}>
                                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET CASINO ID ON WHATSAPP
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default LiveCasino;

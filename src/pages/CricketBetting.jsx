import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const CricketBetting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <section style={{ 
                    background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/images/cricket_hero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '100px 20px',
                    textAlign: 'center',
                    borderBottom: '1px solid #333'
                }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ 
                            display: 'inline-block', 
                            padding: '8px 24px', 
                            background: 'rgba(255, 215, 0, 0.1)', 
                            border: '1px solid var(--primary-color)', 
                            borderRadius: '50px',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            fontSize: '14px'
                        }}>
                             Fairplay Cricket Betting
                        </div>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 7vw, 60px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textTransform: 'uppercase'
                        }}>
                            India's No. 1 Cricket Exchange
                        </h1>
                        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                            From IPL and World Cup to domestic T20s, get the best odds, fastest updates, and instant settlements on <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span>.
                        </p>
                        <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET YOUR CRICKET ID NOW
                        </a>
                    </div>
                </section>

                {/* Markets Section */}
                <section style={{ padding: '80px 20px' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>Extensive Betting Markets</h2>
                            <div style={{ width: '80px', height: '4px', background: 'var(--primary-gradient)', margin: '20px auto', borderRadius: '2px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Match Winner", desc: "Bet on the final outcome of the match with standard back/lay options.", icon: "fa-trophy" },
                                { title: "Session Betting", desc: "Predict runs in 6, 10, or 20 overs with real-time session markets.", icon: "fa-clock" },
                                { title: "Player Props", desc: "Wager on top batsman, top bowler, or individual player scores.", icon: "fa-user" },
                                { title: "Special Markets", desc: "Total sixes, wickets, and method of dismissal for every match.", icon: "fa-star" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{ padding: '40px', textAlign: 'left', border: '1px solid #222', background: '#111' }}>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        background: 'rgba(255, 215, 0, 0.1)', 
                                        borderRadius: '12px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        marginBottom: '25px'
                                    }}>
                                        <i className={`fas ${item.icon}`} style={{ fontSize: '24px', color: 'var(--primary-color)' }}></i>
                                    </div>
                                    <h3 style={{ color: 'var(--primary-color)', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.6', fontSize: '15px' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ 
                            background: 'linear-gradient(135deg, #111 0%, #000 100%)', 
                            padding: '80px 40px', 
                            borderRadius: '40px', 
                            border: '1px solid rgba(255, 215, 0, 0.2)'
                        }}>
                             <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#fff', marginBottom: '25px', textTransform: 'uppercase' }}>
                                Ready to Play <span style={{ color: 'var(--primary-color)' }}>Hand to Hand?</span>
                             </h2>
                             <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '45px', maxWidth: '600px', margin: '0 auto 45px' }}>
                                Join Fairplay today and experience the thrill of live cricket exchange with India's most trusted ID provider.
                             </p>
                             <a href="https://wa.me/16402396837?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '20px 60px', borderRadius: '50px', fontSize: '20px' }}>
                                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET STARTED ON WHATSAPP
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default CricketBetting;

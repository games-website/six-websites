import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <section style={{ 
                    background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/images/about_hero_new.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '120px 20px',
                    textAlign: 'center',
                    borderBottom: '1px solid #222'
                }}>
                    <div className="container">
                        <h1 style={{ 
                            fontSize: 'clamp(36px, 8vw, 64px)', 
                            fontWeight: '900', 
                            marginBottom: '25px',
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textTransform: 'uppercase'
                        }}>
                            About Fairplay
                        </h1>
                        <p style={{ fontSize: '22px', color: '#aaa', maxWidth: '800px', margin: '0 auto' }}>
                            India's Most Trusted and Secure Online Betting Platform.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '320px' }}>
                                <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginBottom: '30px' }}>Our Mission</h2>
                                <p style={{ color: '#aaa', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                                    At <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Fairplay</span>, we are on a mission to redefine the online gaming experience in India. We combine cutting-edge technology with a user-centric approach to provide a platform that is not only thrilling but also 100% safe and transparent.
                                </p>
                                <p style={{ color: '#aaa', fontSize: '18px', lineHeight: '1.8' }}>
                                    Since our inception, we have served millions of users, providing them with instant IDs, 24/7 support, and the fastest withdrawal system in the industry.
                                </p>
                            </div>
                            <div style={{ flex: '1', minWidth: '320px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {[
                                    { label: 'Users', value: '5M+' },
                                    { label: 'Partners', value: '50+' },
                                    { label: 'Support', value: '24/7' },
                                    { label: 'Markets', value: '1000+' }
                                ].map((stat, i) => (
                                    <div key={i} style={{ background: '#111', padding: '30px', borderRadius: '20px', textAlign: 'center', border: '1px solid #222' }}>
                                        <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '5px' }}>{stat.value}</div>
                                        <div style={{ color: '#666', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>Core Values</h2>
                            <div style={{ width: '80px', height: '4px', background: 'var(--primary-gradient)', margin: '25px auto', borderRadius: '2px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "Integrity", desc: "Fair play is at the heart of everything we do.", icon: "fa-balance-scale" },
                                { title: "Innovation", desc: "Always evolving to bring you the best gaming tech.", icon: "fa-lightbulb" },
                                { title: "Trust", desc: "Building long-term relationships through transparency.", icon: "fa-handshake" }
                            ].map((val, idx) => (
                                <div key={idx} style={{ padding: '50px 40px', background: '#111', borderRadius: '30px', border: '1px solid #222' }}>
                                    <i className={`fas ${val.icon}`} style={{ fontSize: '40px', color: 'var(--primary-color)', marginBottom: '25px' }}></i>
                                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>{val.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.7' }}>{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#fff', marginBottom: '30px' }}>Join the Fairplay Family</h2>
                        <p style={{ fontSize: '20px', color: '#888', marginBottom: '45px', maxWidth: '600px', margin: '0 auto 45px' }}>
                            Experience the difference with India's most trusted ID provider. Start your journey today.
                        </p>
                        <a href="https://wa.me/12397991318?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 60px', borderRadius: '50px' }}>
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> GET STARTED NOW
                        </a>
                    </div>
                </section>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default AboutUs;

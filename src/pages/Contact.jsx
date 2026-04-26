import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1, padding: '100px 20px' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ 
                            fontSize: 'clamp(32px, 6vw, 56px)', 
                            fontWeight: '900', 
                            marginBottom: '20px',
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase'
                        }}>
                            Get in Touch
                        </h1>
                        <p style={{ fontSize: '20px', color: '#888' }}>
                            Our 24/7 expert support team is here to help you with anything you need.
                        </p>
                        <div style={{ width: '100px', height: '4px', background: 'var(--primary-gradient)', margin: '30px auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                        <div style={{ flex: '1', minWidth: '320px', background: '#111', padding: '50px', borderRadius: '30px', border: '1px solid #222' }}>
                            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: '800', marginBottom: '40px' }}>Support Channels</h2>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fab fa-whatsapp" style={{ fontSize: '32px', color: '#25d366' }}></i>
                                    </div>
                                    <div>
                                        <div style={{ color: '#aaa', fontSize: '14px', fontWeight: 'bold' }}>WHATSAPP ID SUPPORT</div>
                                        <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>Fast Response (24/7)</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-envelope" style={{ fontSize: '28px', color: 'var(--primary-color)' }}></i>
                                    </div>
                                    <div>
                                        <div style={{ color: '#aaa', fontSize: '14px', fontWeight: 'bold' }}>EMAIL QUERIES</div>
                                        <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>support@fairplay.com</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-map-marker-alt" style={{ fontSize: '28px', color: 'var(--primary-color)' }}></i>
                                    </div>
                                    <div>
                                        <div style={{ color: '#aaa', fontSize: '14px', fontWeight: 'bold' }}>REGISTERED OFFICE</div>
                                        <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>Mumbai, Maharashtra, India</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '50px' }}>
                                 <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ width: '100%', textAlign: 'center', padding: '20px', borderRadius: '50px', fontSize: '18px', display: 'block' }}>
                                    <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> CHAT ON WHATSAPP
                                </a>
                            </div>
                        </div>

                        <div style={{ flex: '1.2', minWidth: '320px', background: '#0a0a0a', padding: '50px', borderRadius: '30px', border: '1px solid #222' }}>
                            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>Send us a Message</h2>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    <input type="text" placeholder="Your Name" style={{ flex: '1', minWidth: '200px', background: '#111', border: '1px solid #333', padding: '15px 20px', borderRadius: '10px', color: '#fff' }} />
                                    <input type="text" placeholder="Mobile Number" style={{ flex: '1', minWidth: '200px', background: '#111', border: '1px solid #333', padding: '15px 20px', borderRadius: '10px', color: '#fff' }} />
                                </div>
                                <input type="email" placeholder="Email Address" style={{ background: '#111', border: '1px solid #333', padding: '15px 20px', borderRadius: '10px', color: '#fff' }} />
                                <textarea placeholder="How can we help you?" rows="5" style={{ background: '#111', border: '1px solid #333', padding: '15px 20px', borderRadius: '10px', color: '#fff', resize: 'none' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ padding: '15px', borderRadius: '10px', width: '100%', border: 'none', fontWeight: 'bold', fontSize: '16px' }}>
                                    SUBMIT REQUEST
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            
        </div>
    );
};

export default Contact;

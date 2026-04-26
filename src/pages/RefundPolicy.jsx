import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOKeywords from '../components/SEOkeywords';

export default function RefundPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#f0f0f0', display: 'flex', flexDirection: 'column' }}>
            
            <main style={{ flexGrow: 1, padding: '80px 20px' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Header Banner */}
                    <div style={{ 
                        border: '2px solid var(--primary-color)', 
                        borderRadius: '50px', 
                        padding: '25px 40px', 
                        textAlign: 'center', 
                        marginBottom: '60px',
                        background: 'rgba(255, 215, 0, 0.05)'
                    }}>
                        <h1 style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '900', color: 'var(--primary-color)', margin: 0 }}>Refund Policy</h1>
                    </div>

                    <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '17px' }}>
                        <p style={{ textAlign: 'center', marginBottom: '50px' }}>
                            At <strong style={{ color: 'var(--primary-color)' }}>Fairplay</strong>, we value our users and are committed to providing a safe, transparent, and fair experience. Our refund policy ensures clarity and trust whenever you participate in our platform services.
                        </p>

                        {/* Section 1 */}
                        <div style={{ marginBottom: '50px' }}>
                            <div style={{ borderBottom: '2px solid #333', display: 'inline-block', paddingBottom: '5px', marginBottom: '25px' }}>
                                <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '800' }}>When Refunds Are Applicable</h2>
                            </div>
                            <ul style={{ color: '#aaa', paddingLeft: '20px', listStyleType: 'square' }}>
                                <li style={{ marginBottom: '10px' }}>If a <strong>transaction fails</strong> due to technical or banking errors.</li>
                                <li style={{ marginBottom: '10px' }}>If you <strong>accidentally deposit</strong> an amount exceeding the intended value.</li>
                                <li style={{ marginBottom: '10px' }}>If a contest is <strong>canceled, postponed, or voided</strong> by our system.</li>
                                <li style={{ marginBottom: '10px' }}>In cases of <strong>system errors or discrepancies</strong> affecting gameplay.</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div style={{ marginBottom: '50px' }}>
                            <div style={{ borderBottom: '2px solid #333', display: 'inline-block', paddingBottom: '5px', marginBottom: '25px' }}>
                                <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '800' }}>Refund Process</h2>
                            </div>
                            <p style={{ marginBottom: '20px' }}>Process is simple and hassle-free:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {[
                                    { t: "Contact Support", d: "Reach out via our WhatsApp support portal." },
                                    { t: "Provide Details", d: "Share your transaction ID and user ID for verification." },
                                    { t: "Processing Time", d: "Refunds are processed within 24–72 hours after verification." },
                                    { t: "Receive Funds", d: "The amount will be returned to your original payment method." }
                                ].map((step, idx) => (
                                    <div key={idx} style={{ background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #222' }}>
                                        <strong style={{ color: 'var(--primary-color)' }}>Step {idx + 1}: {step.t}</strong> — {step.d}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Note */}
                        <div style={{ 
                            background: '#0a0a0a', 
                            padding: '40px', 
                            borderRadius: '30px', 
                            border: '1px solid #333', 
                            textAlign: 'center' 
                        }}>
                             <h3 style={{ color: 'var(--primary-color)', fontSize: '22px', fontWeight: '800', marginBottom: '20px' }}>Our Commitment</h3>
                             <p style={{ margin: 0 }}>
                                At Fairplay, your satisfaction and trust are our priority. We are committed to fair play, transparency, and timely refunds to ensure a safe and reliable experience.
                             </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                         <a href="https://wa.me/6289183063?text=Hello%20Fairplay%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '15px 40px' }}>
                            CONTACT FOR REFUND
                        </a>
                    </div>
                </div>
            </main>
            <SEOKeywords />
            
        </div>
    );
}

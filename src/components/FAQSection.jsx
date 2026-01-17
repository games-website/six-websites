import React from 'react';

const FAQSection = () => {
    return (
        <section className="section-spacer" style={{ borderBottom: 'none' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Is my personal information safe?
                    </h4>
                    <p style={{ opacity: 0.9, fontSize: '14px' }}>Yes, Lotus uses advanced encryption technology to
                        ensure that all your personal and financial information is kept secure and private.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>What is the minimum withdrawal
                        amount?</h4>
                    <p style={{ opacity: 0.9, fontSize: '14px' }}>Withdrawals are processed instantly. The minimum
                        withdrawal amount may vary based on the method chosen, but typically starts from a low limit
                        to suit all players.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>How do I contact customer support?
                    </h4>
                    <p style={{ opacity: 0.9, fontSize: '14px' }}>Our customer support team is available 24/7. You can
                        reach us via the WhatsApp button on the screen or through the 'Contact Us' section in the
                        app.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Can I bet on my mobile device?
                    </h4>
                    <p style={{ opacity: 0.9, fontSize: '14px' }}>Absolutely! Lotus is fully optimized for mobile
                        devices, and we also offer a dedicated app for both Android and iOS users for a seamless
                        experience.</p>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

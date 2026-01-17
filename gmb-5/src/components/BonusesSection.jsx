import React from 'react';

const BonusesSection = () => {
    return (
        <React.Fragment>

            <section className="section-spacer">
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '10px', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--accent-yellow)', marginBottom: '10px' }}>Chat on WhatsApp for Official ID</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 20px auto', opacity: 0.9 }}>
                        For a seamless and secure experience with Sports365, connect with our team on WhatsApp to obtain
                        your official original ID.
                        Simply send us a message, and our dedicated support staff will assist you promptly.
                    </p>
                    <div className="mock-phone-container"
                        style={{ height: 'auto', margin: '20px auto', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <img src="./src/assets/whatsapp_mock.png" alt="WhatsApp Support" style={{ maxWidth: '100%', borderRadius: '10px' }} />
                    </div>
                    <button className="btn-outline">
                        <span>💬</span> Chat Now
                    </button>
                </div>
            </section>

            <section className="content-block">
                <h2>Sports365's Best Bonuses and Promotional Offers</h2>
                <div
                    style={{
                        width: '100%',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                    <img src="./src/assets/bonus_promo.png" alt="400% Bonus" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
                <p>
                    Sports365's Best Bonuses and Promotional Offers are designed to give bettors and gamers a
                    significant edge.
                    One of the standout features is the impressive welcome bonus, which often includes a substantial
                    percentage match on initial deposits.
                    In addition to the welcome offer, Sports365 provides a variety of ongoing promotions such as reload
                    bonuses and free bets.
                </p>
                <p>
                    Furthermore, Sports365 frequently introduces exclusive promotions tailored to major sports events,
                    adding extra excitement to the betting experience.
                    Seasonal offers and loyalty rewards ensure that both new and regular players benefit from continuous
                    incentives.
                </p>
                <button className="btn-outline">
                    <span>💬</span> WhatsApp for Instant ID
                </button>
            </section>
        </React.Fragment>
    );
};

export default BonusesSection;

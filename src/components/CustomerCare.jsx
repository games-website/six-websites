import React from 'react';

const CustomerCare = () => {
    return (
        <section class="section bg-subtle-mint">
            <div class="container">
                <h2 class="section-title">Customer Care Services at Reddyanna</h2>
                <p class="text-center mb-40">Whenever you need assistance: we are always there to help!</p>
                <div class="customer-care-banner mb-40" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="/images/customer_care_original.png" alt="Customer Care"
                        style={{ width: '80vw', height: '50vh', borderRadius: '15px' }} />
                </div>
                <div class="features-grid">
                    <div class="feature-card outline-card">
                        <h3>Round-the-Clock Service</h3>
                        <p>You can reach us via phone call, through email or chat anytime throughout the week.</p>
                    </div>
                    <div class="feature-card outline-card">
                        <h3>Prompt Feedback</h3>
                        <p>We aim at resolving every of your issue at the earliest time possible.</p>
                    </div>
                    <div class="feature-card outline-card">
                        <h3>Comprehensive Assistance</h3>
                        <p>Our support team is ready to help you with any questions relating to your account.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerCare;

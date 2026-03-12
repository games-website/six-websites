import React from 'react';

const Promotions = () => {
    return (
        <section class="section bg-subtle-lavender promotions-section">
            <div class="container">
                <h2 class="section-title">Reddyanna Book Promotions and Bonuses</h2>
                <p class="text-center mb-40">Boost your gaming experience with enticing promotions and bonuses. We have:</p>
                <div class="promo-grid">

                    <div class="promo-card">
                        <img src="/images/promo_welcome.png" alt="Welcome Bonus" class="promo-img-icon" />
                        <h3>Welcome Bonus</h3>
                        <p>New users can enjoy a generous welcome bonus upon signing up.</p>
                    </div>

                    <div class="promo-card">
                        <img src="/images/promo_ongoing.png" alt="Ongoing Promos" class="promo-img-icon" />
                        <h3>Ongoing Promos</h3>
                        <p>Regular specials and offers for continuous fun.</p>
                    </div>

                    <div class="promo-card">
                        <img src="/images/promo_loyalty.png" alt="Loyalty Rewards" class="promo-img-icon" />
                        <h3>Loyalty Rewards</h3>
                        <p>You earn rewards and bonuses as you continue playing with us.</p>
                    </div>
                </div>
                <div class="center-btn mt-40">
                    <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" class="btn-black-gold"><i class="fab fa-whatsapp"></i> Claim Your Bonus Now!</a>
                </div>
            </div>
        </section>
    );
};

export default Promotions;

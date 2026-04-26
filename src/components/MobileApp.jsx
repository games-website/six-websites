import React from 'react';

const MobileApp = () => {
    return (
        <section class="section">
            <div class="container">
                <div class="split-content reverse-mobile mt-60">
                    <div class="text-content">
                        <h2 class="section-title text-left">Myleasers Mobile App</h2>
                        <p><strong>India's Top-Rated Online Gaming Platform.</strong><br />Rated ⭐⭐⭐⭐⭐ 4.8/5 • Trusted by 1M+
                            Players<br />Get ₹25 Free Bonus Instantly When You Download the App!</p>
                        <p style={{ marginTop: '20px' }}>Elevate your betting experience with the Myleasers Mobile App!
                            Designed for on-the-go convenience, our app lets you place bets, track live scores, and manage
                            your account from anywhere.</p>
                        <a href="https://wa.me/6289183063?text=Hello%20Myleasers%2C%20I%20want%20to%20get%20my%20ID." class="btn-gold mt-20"><i class="fab fa-android"></i> Download App Now</a>
                    </div>
                    <div class="image-content">
                        <img src="/images/mobile-app.png" alt="Myleasers Mobile App" class="reveal" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;

import React from 'react';

const Hero = () => {
    return (
        <section class="hero-section" id="home">
            <div class="container hero-container">
                <div class="hero-content">
                    <h1>Myleasers Book – India’s Leading Sports ID Platform Since 2010</h1>
                    <p>Welcome to <strong>Myleasers Book</strong>, India’s No.1 provider of sports IDs since 2010 and the
                        largest exchange platform for fantastic online sports betting.</p>
                    <ul class="hero-features">
                        <li><i class="fas fa-arrow-circle-right"></i> Trusted Since 2010</li>
                        <li><i class="fas fa-arrow-circle-right"></i> Instant Cricket ID</li>
                        <li><i class="fas fa-arrow-circle-right"></i> Live Cricket Tournaments Betting</li>
                        <li><i class="fas fa-arrow-circle-right"></i> Latest Sports Coverage</li>
                        <li><i class="fas fa-arrow-circle-right"></i> 24/7 Secure Refill Services</li>
                        <li><i class="fas fa-arrow-circle-right"></i> 24-hour Withdrawal Service</li>
                    </ul>
                    <a href="https://wa.me/12397991318?text=Hello%20Myleasers%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" class="btn-hero-glow"><i class="fab fa-whatsapp"></i> Get Your Online ID Now</a>
                </div>
                <div className="hero-image reveal">
                    <img src="/images/myleasers_hero_new.png" alt="MYLEASERS Hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

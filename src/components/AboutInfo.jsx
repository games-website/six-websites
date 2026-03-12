import React from 'react';

const AboutInfo = () => {
    return (
        <section class="section about-info-section" id="about">
            <div class="container">

                <div class="about-hero-grid">
                    <div class="about-card-image">
                        <img src="/images/about-us.png" alt="What is Reddyanna Book" />
                    </div>
                    <div class="about-text-content">
                        <h2 class="section-title text-left" style={{ textAlign: 'left', marginBottom: '20px' }}>What is
                            Reddyanna
                            Book?</h2>
                        <p><strong>Reddyanna Book</strong> is India’s biggest exchange platform, providing excellent online
                            sports betting with a <strong>24-hour withdrawal service</strong>. It ranges from live sports to
                            thrilling casino games with exceptional gaming experience coming first. The user-friendly
                            technological aspects and a wide variety of betting opportunities are what make our platform
                            relevant to each type of player.</p>

                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" class="btn-black-gold" style={{ marginTop: '30px' }}>
                            <i class="fab fa-whatsapp"></i> Get Your Reddyanna Book ID
                        </a>
                    </div>
                </div>


                <div class="about-details-wrapper about-gradient-section"
                    style={{ marginTop: '60px', padding: '40px', borderRadius: '15px' }}>
                    <h2 class="section-title" style={{ color: '#FFD700', marginBottom: '20px', textAlign: 'center' }}>About
                        Reddyanna
                        Book</h2>
                    <p
                        style={{ textAlign: 'justify', maxWidth: '900px', margin: '0 auto 40px', color: '#fff', lineHeight: '1.8', fontSize: '16px' }}>
                        Reddyanna Book is the largest sports betting exchange in India, providing an exciting online
                        betting experience with quick and easy withdrawal options. We began with an aim of revolutionizing
                        online betting. Quality customer service, innovative features, and excellent gaming experiences are
                        what define Reddyanna Book as the best among its competitors. Below is some information about us:
                    </p>

                    <div class="info-table stylish-table">
                        <div class="info-row">
                            <div class="info-label"><i class="fas fa-star" style={{ color: '#FFD700' }}></i> ASPECT</div>
                            <div class="info-value">DETAILS</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label"><i class="fas fa-scroll" style={{ color: '#cda434' }}></i> Founded</div>
                            <div class="info-value">2010</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label"><i class="fas fa-globe" style={{ color: '#4facfe' }}></i> Mission</div>
                            <div class="info-value">To offer a secure and thrilling betting environment.</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label"><i class="fas fa-eye" style={{ color: '#fff' }}></i> Vision</div>
                            <div class="info-value">To be the most trusted name in online sports betting and casino gaming.
                            </div>
                        </div>
                        <div class="info-row">
                            <div class="info-label"><i class="fas fa-list" style={{ color: '#20c997' }}></i> Core Values</div>
                            <div class="info-value">Integrity, Innovation, and Customer Satisfaction.</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label"><i class="fas fa-bolt" style={{ color: '#ff9966' }}></i> Technology</div>
                            <div class="info-value">Cutting-edge technology for seamless user experiences.</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label"><i class="fas fa-users" style={{ color: '#f6d365' }}></i> Customer Focus
                            </div>
                            <div class="info-value">Dedicated to providing exceptional support and service.</div>
                        </div>
                    </div>

                    <div class="center-btn mt-40" style={{ textAlign: 'center' }}>
                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" class="btn-glow"><i class="fab fa-whatsapp"></i> Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInfo;

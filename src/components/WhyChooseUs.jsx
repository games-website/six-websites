import React from 'react';
import { BarChart3, Zap, ShieldCheck, Users, Smartphone, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section class="features-section">
            <div class="features-container">

                <div class="features-header">
                    <h2>Everything you need</h2>
                    <p>Powerful features to help you grow your business.</p>
                </div>


                <div class="features-grid">

                    <div class="feature-card">
                        <div class="icon-wrapper icon-blue">
                            <BarChart3 />
                        </div>
                        <h3>Advanced Analytics</h3>
                        <p>Get detailed insights into your performance with our real-time analytics dashboard. Track growth
                            effortlessly.</p>
                    </div>


                    <div class="feature-card">
                        <div class="icon-wrapper icon-indigo">
                            <Zap />
                        </div>
                        <h3>Lightning Fast</h3>
                        <p>Optimized for speed. Experience ultra-fast load times and seamless interactions across all
                            devices.</p>
                    </div>


                    <div class="feature-card">
                        <div class="icon-wrapper icon-green">
                            <ShieldCheck />
                        </div>
                        <h3>Bank-Grade Security</h3>
                        <p>Your data is safe with us. We use state-of-the-art encryption to ensure total privacy and
                            protection.</p>
                    </div>


                    <div class="feature-card">
                        <div class="icon-wrapper icon-purple">
                            <Users />
                        </div>
                        <h3>Team Collaboration</h3>
                        <p>Invite your team and work together in real-time. Manage permissions and roles with ease.</p>
                    </div>


                    <div class="feature-card">
                        <div class="icon-wrapper icon-orange">
                            <Smartphone />
                        </div>
                        <h3>Mobile First</h3>
                        <p>Fully responsive design ensuring your content looks perfect on phones, tablets, and desktops.</p>
                    </div>


                    <div class="feature-card">
                        <div class="icon-wrapper icon-pink">
                            <Headphones />
                        </div>
                        <h3>24/7 Support</h3>
                        <p>Our dedicated support team is here to help you solve any issues, day or night.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

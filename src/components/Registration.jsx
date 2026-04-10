import React from 'react';

const Registration = () => {
    const handleSignUp = (e) => {
        e.preventDefault();
        alert('Action would open sign up');
    };

    return (
        <section class="section registration-section" id="register">
            <div class="container">
                <h2 class="section-title">Myleasers Book Registration Process</h2>
                <div class="split-content">
                    <div class="text-content">
                        <p class="section-desc">Here is a step-by-step guide to complete the registration process:</p>
                        <ul class="custom-list">
                            <li>Visit the official website – <strong>myleasersbook.com</strong></li>
                            <li>Click on the <strong>“Sign Up”</strong> button.</li>
                            <li>Fill in your details like <strong>phone number and password</strong>.</li>
                            <li>Enter the <strong>OTP</strong> sent to your mobile number.</li>
                            <li>Click <strong>Register</strong> to complete the process.</li>
                            <li>Our support team may contact you to verify your account.</li>
                            <li>Once verified, you can <strong>log in</strong> and start betting on cricket and other games
                                instantly.</li>
                        </ul>
                        <a href="https://wa.me/15208005239?text=Hello%20Myleasers%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" class="btn-black-gold">
                            <i class="fab fa-whatsapp"></i> SignUp Now
                        </a>
                    </div>
                    <div class="image-content">
                        <img src="/images/myleasers_steps.png" alt="Registration Process" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;

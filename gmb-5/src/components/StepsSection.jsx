import React from 'react';

const StepsSection = () => {
    return (
        <section className="section-spacer">
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>How to Register and Login?</h2>
            <section className="section-spacer" style={{ border: 'none', padding: 0 }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>How to Start Betting with Lotus - A Step-by-Step Guide</h2>
                <div className="steps-container">
                    <div className="step-item">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h4>Visit Website or Download App</h4>
                            <p>Open your browser and go to the Lotus website or download the official app from the
                                Google Play Store or Apple App Store.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h4>Sign Up for an Account</h4>
                            <p>Click on the 'Sign Up' or 'Register' button. Fill in your name, email, phone number, and
                                create a secure password. Agree to terms and submit.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h4>Verify Your Account</h4>
                            <p>Check your email or SMS for a verification link or code. Click the link or enter the code
                                to confirm your account and complete registration.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h4>Log In to Your Account</h4>
                            <p>Return to the website or app. Enter your registered email address and password in the
                                login fields and click 'Log In'.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">5</div>
                        <div className="step-content">
                            <h4>Deposit Funds</h4>
                            <p>Go to the 'Deposit' section. Choose your preferred payment method (card, e-wallet, bank
                                transfer), enter the amount, and complete the transaction.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">6</div>
                        <div className="step-content">
                            <h4>Explore Betting Options</h4>
                            <p>Browse available sports betting markets or casino games. Select the event or game you
                                want to bet on and review the odds.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">7</div>
                        <div className="step-content">
                            <h4>Place Your Bet</h4>
                            <p>Choose your bet type and enter the amount you wish to wager. Confirm your bet and wait
                                for the outcome.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">8</div>
                        <div className="step-content">
                            <h4>Claim Bonuses</h4>
                            <p>Check the promotions section for available bonuses. Follow instructions to claim and use
                                them to enhance your experience.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-number">9</div>
                        <div className="step-content">
                            <h4>Withdraw Your Winnings</h4>
                            <p>If you have winnings, go to the 'Withdraw' section. Choose your method, enter the amount,
                                and follow instructions to complete the process.</p>
                        </div>
                    </div>
                </div>
                <p style={{ textAlign: 'center', marginBottom: '20px', opacity: 0.8, fontStyle: 'italic' }}>
                    By following these steps, you’ll be well on your way to enjoying a rewarding betting experience.
                </p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button className="btn-outline">
                        <span>💬</span> WhatsApp for Instant ID
                    </button>
                </div>
            </section>

        </section>
    );
};

export default StepsSection;

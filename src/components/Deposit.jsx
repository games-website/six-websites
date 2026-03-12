import React from 'react';

const Deposit = () => {
    return (
        <section class="section bg-subtle-grey">
            <div class="container">
                <h2 class="section-title">How to Deposit Money into Your Reddyanna Account</h2>
                <p class="text-center mb-40">You can add money to your balance easily using our reliable deposit system as
                    follows:</p>
                <div class="deposit-grid">
                    <div class="deposit-card">
                        <h3>Login</h3>
                        <p>Get into your Reddyanna book account.</p>
                    </div>
                    <div class="deposit-card">
                        <h3>Go to Deposit Section</h3>
                        <p>Find a button for depositing funds on the website.</p>
                    </div>
                    <div class="deposit-card">
                        <h3>Select Method</h3>
                        <p>Choose preferable payment variant from offered list.</p>
                    </div>
                    <div class="deposit-card">
                        <h3>Enter Amount</h3>
                        <p>Specify amount of money needed for depositing manually.</p>
                    </div>
                    <div class="deposit-card">
                        <h3>Confirm Deposit</h3>
                        <p>Carry out the operation by watching balance change instantly.</p>
                    </div>
                </div>
                <div class="center-btn mt-40">
                    <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" class="btn-black-gold"><i class="fab fa-whatsapp"></i> Deposit Now and Start Playing!</a>
                </div>
            </div>
        </section>
    );
};

export default Deposit;

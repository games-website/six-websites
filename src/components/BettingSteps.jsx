import React from 'react';

const BettingSteps = () => {
    return (
        <section class="section betting-steps-section" id="rules">
            <div class="container">
                <h2 class="section-title">How to Place a Bet at Reddyanna Book</h2>
                <p class="text-center mb-40">At <strong>Reddyanna Book</strong> placing a bet is a simple and convenient
                    process. Here’s how it goes:</p>

                <div class="bet-grid-top">

                    <div class="bet-card">
                        <div class="bet-num">1</div>
                        <h3>Log In</h3>
                        <p>Enter your login details at the log in page where necessary.</p>
                    </div>

                    <div class="bet-card">
                        <div class="bet-num">2</div>
                        <h3>Select A Sport</h3>
                        <p>Proceed straight into the sports category then pick the sport or event that you opt placing bets
                            on.</p>
                    </div>

                    <div class="bet-card">
                        <div class="bet-num">3</div>
                        <h3>Choose Your Bet</h3>
                        <p>Choose whether you want single bet, multiple bets or live betting.</p>
                    </div>
                </div>

                <div class="bet-grid-bottom">

                    <div class="bet-card">
                        <div class="bet-num">4</div>
                        <h3>Enter Stake Amount</h3>
                        <p>Key in amount you wish to stake.</p>
                    </div>

                    <div class="bet-card">
                        <div class="bet-num">5</div>
                        <h3>Confirm Bet</h3>
                        <p>Make sure that you have reviewed everything accurately before confirming this wager. It will go
                            through after you confirm it.</p>
                    </div>
                </div>

                <div class="center-btn mt-40">
                    <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" class="btn-black-gold"><i class="fab fa-whatsapp"></i> Ready to Bet? Start
                        Here!</a>
                </div>
            </div>
        </section>
    );
};

export default BettingSteps;

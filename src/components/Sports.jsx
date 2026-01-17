import React from 'react';

const Sports = () => {
    return (
        <section class="section bg-subtle-blue" id="services">
            <div class="container">
                <h2 class="section-title">Sports to Bet on Reddyanna Book</h2>
                <p class="text-center mb-40">You can bet on numerous sporting events. Below are some of these games:</p>
                <div class="quad-grid">

                    <div class="game-card reveal">
                        <img src="/images/cricket.png" alt="Cricket" />
                        <div class="game-content">
                            <h3>Cricket</h3>
                            <p>Bet on local and international cricket matches.</p>
                        </div>
                    </div>

                    <div class="game-card reveal">
                        <img src="/images/football.png" alt="Football" />
                        <div class="game-content">
                            <h3>Football</h3>
                            <p>Place wagers on top leagues, championships, or regular games.</p>
                        </div>
                    </div>

                    <div class="game-card reveal">
                        <img src="/images/basketball.png" alt="Basketball" />
                        <div class="game-content">
                            <h3>Basketball</h3>
                            <p>Stake on NBA fixtures and other leading basketball tournaments.</p>
                        </div>
                    </div>

                    <div class="game-card reveal">
                        <img src="/images/tennis.png" alt="Tennis" />
                        <div class="game-content">
                            <h3>Tennis</h3>
                            <p>Bet in Grand Slam contests as well as ATP/WTA tennis events.</p>
                        </div>
                    </div>
                </div>
                <p class="text-center mt-20 text-sm">To see what else our bookmaker has to offer... open our section
                    dedicated to sports bets.</p>
            </div>
        </section>
    );
};

export default Sports;

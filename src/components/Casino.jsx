import React from 'react';
import { Link } from 'react-router-dom';

const Casino = () => {
    return (
        <section class="section bg-subtle-pink">
            <div class="container">
                <h2 class="section-title">Casino Games Offered by Reddyanna</h2>
                <p class="text-center mb-40">In the casino category, we boast an impressive collection of gaming options
                    that guarantee ultimate fun. Some highlights include:</p>
                <div class="quad-grid">
                    <Link to="/casino" class="game-card reveal"><img src="/images/slots.png" alt="Slots" />
                        <h3>Slot Machines</h3>
                    </Link>
                    <Link to="/casino" class="game-card reveal"><img src="/images/poker.png" alt="Poker" />
                        <h3>Poker</h3>
                    </Link>
                    <Link to="/casino" class="game-card reveal"><img src="/images/roulette.png" alt="Roulette" />
                        <h3>Roulette</h3>
                    </Link>
                    <Link to="/casino" class="game-card reveal"><img src="/images/live_casino.png" alt="Live Casino" />
                        <h3>Live Casino</h3>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Casino;

import React from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
    return (
        <section class="section bg-subtle-blue" id="services">
            <div class="container">
                <h2 class="section-title">Sports to Bet on Reddyanna Book</h2>
                <p class="text-center mb-40">You can bet on numerous sporting events. Below are some of these games:</p>
                <div class="quad-grid">

                    <Link to="/cricket" class="game-card reveal">
                        <img src="/images/cricket.png" alt="Cricket" />
                        <div class="game-content">
                            <h3>Cricket</h3>
                            <p>Bet on local and international cricket matches.</p>
                        </div>
                    </Link>

                    <Link to="/football" class="game-card reveal">
                        <img src="/images/football.png" alt="Football" />
                        <div class="game-content">
                            <h3>Football</h3>
                            <p>Place wagers on top leagues, championships, or regular games.</p>
                        </div>
                    </Link>

                    <Link to="/kabaddi" class="game-card reveal">
                        <img src="/images/football_fantasy_hero_new.png" alt="Kabaddi Betting" />
                        <div class="game-content">
                            <h3>Kabaddi Betting</h3>
                            <p>Bet on Pro Kabaddi League and major tournaments with high odds.</p>
                        </div>
                    </Link>

                    <Link to="/horse-race-betting" class="game-card reveal">
                        <img src="/images/horse_racing_hero_provided.jpg" alt="Horse Race Betting" />
                        <div class="game-content">
                            <h3>Horse Race Betting</h3>
                            <p>Experience the thrill of live horse racing with real-time odds.</p>
                        </div>
                    </Link>

                    <Link to="/tennis" class="game-card reveal">
                        <img src="/images/tennis.png" alt="Tennis" />
                        <div class="game-content">
                            <h3>Tennis</h3>
                            <p>Bet in Grand Slam contests as well as ATP/WTA tennis events.</p>
                        </div>
                    </Link>

                    <Link to="/live-cricket-betting" class="game-card reveal">
                        <img src="/images/live_cricket_hero_new.jpg" alt="Live Cricket" />
                        <div class="game-content">
                            <h3>Live Cricket Betting</h3>
                            <p>Get ID & Bet on Live T20, IPL, and ODIs in real-time.</p>
                        </div>
                    </Link>


                    {}

                    <Link to="/fantasy-sports" class="game-card reveal">
                        <img src="/images/football_fantasy_hero_new.png" alt="Fantasy Sports" />
                        <div class="game-content">
                            <h3>Fantasy Sports</h3>
                            <p>Build your dream team and win real cash rewards.</p>
                        </div>
                    </Link>
                </div>
                <p class="text-center mt-20 text-sm">To see what else our bookmaker has to offer... open our section
                    dedicated to sports bets.</p>
            </div>
        </section>
    );
};

export default Sports;

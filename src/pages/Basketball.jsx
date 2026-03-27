import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Basketball = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        reveals.forEach(el => observer.observe(el));
        return () => reveals.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="service-page basketball-page">
            <section className="hero-simple bg-basketball">
                <div className="container">
                    <h1 className="hero-title reveal">Basketball Betting</h1>
                    <p className="hero-subtitle reveal">Dunk into the action. Best odds on NBA, EuroLeague, and more.</p>
                    <a href="#sports-id" className="btn-gold reveal">GET YOUR BASKETBALL ID</a>
                </div>
            </section>

            <section className="section bg-court-orange">
                <div className="container">
                    <h2 className="section-title white-text">Major Basketball Leagues</h2>
                    <div className="triple-grid">
                        <div className="league-card reveal">
                            <div className="league-icon">🏀</div>
                            <h3>NBA</h3>
                            <p>The world's premier basketball league. Bet on every game from the regular season to the Finals.</p>
                        </div>
                        <div className="league-card reveal">
                            <div className="league-icon">🌍</div>
                            <h3>EuroLeague</h3>
                            <p>Experience the highest level of European basketball. Top clubs, top competition.</p>
                        </div>
                        <div className="league-card reveal">
                            <div className="league-icon">🏆</div>
                            <h3>NCAA</h3>
                            <p>Follow March Madness and the future stars of the NBA.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container text-center">
                    <h2 className="reveal">Make Your Move</h2>
                    <p className="reveal">Register now and get exclusive access to our basketball betting markets.</p>
                    <div className="cta-buttons reveal">
                        <a href="#sports-id" className="btn-gold large">GET ID NOW</a>
                        <Link to="/services" className="btn-outline-black large">View All Sports</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Basketball;

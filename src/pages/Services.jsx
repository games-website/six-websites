import React from 'react';
const Services = () => {
    return (
        <>
            { }
            <div className="page-header"
                style={{ background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('')" }}>
                <div className="container animate fade-in">
                    <h1 style={{ color: '#fff' }}>Our Services</h1>
                    <p style={{ fontSize: '20px', color: '#ddd', marginTop: '10px' }}>Explore the wide range of Sports Betting and
                        Casino options available on Madrascafe.</p>
                </div>
            </div >
            { }
            < section className="section" >
                <div className="container">
                    <h2 style={{ color: '#fff' }}>Sports Betting</h2>
                    <div className="services-grid">
                        <div className="service-card animate slide-up">
                            <div className="icon-box"><i className="fas fa-cricket"></i></div>
                            <h3>Cricket Betting</h3>
                            <p>Bet on local and international cricket matches. From IPL, T20 World Cups, to Test Series, we
                                cover every major cricketing event with the best odds.</p>
                            <a href="#" className="btn-service">Bet on Cricket</a>
                        </div>
                        <div className="service-card animate slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-box"><i className="fas fa-futbol"></i></div>
                            <h3>Football Betting</h3>
                            <p>Place wagers on top leagues like EPL, La Liga, Champions League, and FIFA World Cup. Experience
                                live betting on your favorite football matches.</p>
                            <a href="#" className="btn-service">Bet on Football</a>
                        </div>
                        <div className="service-card animate slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-box"><i className="fas fa-table-tennis"></i></div>
                            <h3>Tennis Betting</h3>
                            <p>Bet in Grand Slam contests as well as ATP/WTA tennis events. Enjoy point-by-point betting on
                                major tennis tournaments.</p>
                            <a href="#" className="btn-service">Bet on Tennis</a>
                        </div>
                        <div className="service-card animate slide-up" style={{ animationDelay: '0.6s' }}>
                            <div className="icon-box"><i className="fas fa-basketball-ball"></i></div>
                            <h3>Basketball</h3>
                            <p>Stake on NBA fixtures and other leading basketball tournaments. Get live updates and competitive
                                odds.</p>
                            <a href="#" className="btn-service">Bet on Basketball</a>
                        </div>
                    </div>
                </div>
            </section >
            { }
            < section className="section bg-light" >
                <div className="container">
                    <h2 style={{ color: '#fff' }}>Casino Games</h2>
                    <div className="services-grid">
                        <div className="service-card animate slide-up">
                            <div className="icon-box"><i className="fas fa-users"></i></div>
                            <h3>Live Casino</h3>
                            <p>Feel real-time interaction during playing live dealer games including Blackjack, Baccarat, and
                                Teen Patti.</p>
                        </div>
                        <div className="service-card animate slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-box"><i className="fas fa-slot-machine"></i></div>
                            { }
                            <div className="icon-box"><i className="fas fa-dice"></i></div>
                            <h3>Slot Machines</h3>
                            <p>Choose between various themes and jackpot slots. Spin to win big with our wide variety of slot
                                games.</p>
                        </div>
                        <div className="service-card animate slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-box"><i className="fas fa-dharmachakra"></i></div>
                            <h3>Roulette</h3>
                            <p>Spin it differently with multiple roulette options including American, European, and French
                                Roulette.</p>
                        </div>
                        <div className="service-card animate slide-up" style={{ animationDelay: '0.6s' }}>
                            <div className="icon-box"><i className="fas fa-heart"></i></div>
                            <h3>Poker</h3>
                            <p>Play both traditional poker games and their more thrilling variants. Join tables with players
                                from across India.</p>
                        </div>
                    </div>
                </div>
            </section >
            { }
            < section className="section cta-section" style={{ background: 'var(--primary-color)' }}>
                <div className="container">
                    <h2 style={{ color: '#fff' }}>Ready to Start Winning?</h2>
                    <p style={{ color: '#fff', fontSize: '20px' }}>Get your ID instantly and start playing on India's most trusted
                        platform.</p>
                    <a href="#" className="btn-secondary" style={{ marginTop: '20px' }}><i
                        className="fab fa-whatsapp"></i> Get Your ID Now</a>
                </div>
            </section >
        </>
    );
};
export default Services;

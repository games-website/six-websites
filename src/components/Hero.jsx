import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-grid">

                <div className="hero-text">
                    <h1>Winning Big with Lotus <br /> Sports Betting and Casino Games</h1>
                    <div className="brand-huge">Lotus</div>
                    <div className="hero-sub">MOST TRUSTED SINCE 2015</div>

                    <p className="hero-visible-desktop">
                        Join the fastest growing betting platform. Experience secure transactions, instant withdrawals, and
                        24/7 support.
                    </p>
                </div>

                {/* <div className="reg-card">
                    <h3>Registration</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input type="text" placeholder="User Name" required />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button className="btn-primary">SignUp</button>
                    </form>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;

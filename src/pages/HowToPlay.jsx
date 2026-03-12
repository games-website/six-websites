import React, { useEffect } from 'react';

const HowToPlay = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionTitleStyle = {
        color: '#FFD700',
        fontSize: '24px',
        marginBottom: '20px',
        border: '1px solid #FFD700',
        borderRadius: '50px',
        padding: '10px 30px',
        display: 'inline-block',
        textAlign: 'center'
    };

    const cardStyle = {
        border: '2px solid #FFD700',
        borderRadius: '20px',
        padding: '30px',
        backgroundColor: '#1a2236',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    };

    const cardHeaderStyle = {
        border: '1px solid #FFD700',
        borderRadius: '50px',
        padding: '10px 20px',
        color: '#FFD700',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '18px'
    };

    return (
        <div className="how-to-play-page" style={{ backgroundColor: '#0d1425', color: '#fff', minHeight: '100vh', paddingTop: '100px' }}>

            {}
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '60px' }}>
                <div style={sectionTitleStyle}>
                    How to Bet on Reddy Anna Online Cricket Betting & Casino Games
                </div>
                <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginTop: '20px', marginBottom: '30px' }}>
                    <span style={{ color: '#FFD700' }}>Reddy Anna</span> is a trusted platform for online sports betting and casino games. Whether you enjoy betting on cricket, football, or trying your luck in casino games like slots and poker, Reddy Anna makes online gaming easy, secure, and fun. This guide will show you how to start and enjoy the platform responsibly.
                </p>
                <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{
                    backgroundColor: '#8B8000',
                    color: '#fff',
                    padding: '12px 30px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}>
                    Login & Play Online
                </a>
            </div>

            {}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={sectionTitleStyle}>Guide to Bet on Reddy Anna</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>

                    {}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>1. Creating a Reddy Anna Account</div>
                        <p style={{ color: '#ccc', marginBottom: '15px' }}>Getting started is quick and easy:</p>
                        <ol style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>Visit the <span style={{ color: '#FFD700' }}>official Reddy Anna website</span>.</li>
                            <li style={{ marginBottom: '10px' }}>Click <strong>Sign Up</strong> or <strong>Register</strong>.</li>
                            <li style={{ marginBottom: '10px' }}>Fill in your details like name, email, and mobile number.</li>
                            <li style={{ marginBottom: '10px' }}>Set a <strong>strong password</strong> and complete the verification process.</li>
                        </ol>
                        <div style={{ borderLeft: '3px solid #00bfff', paddingLeft: '15px', color: '#ccc', fontStyle: 'italic' }}>
                            <strong>Tip:</strong> Always use a strong password and enable 2-factor authentication if available to keep your account safe.
                        </div>
                    </div>

                    {}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>2. Depositing Funds</div>
                        <p style={{ color: '#ccc', marginBottom: '15px' }}>To start betting or playing casino games, you need to deposit money:</p>
                        <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>Reddy Anna supports multiple payment options like <strong>UPI, cards, e-wallets</strong>, and sometimes <strong>cryptocurrency</strong>.</li>
                            <li style={{ marginBottom: '10px' }}>Check the <strong>minimum and maximum deposit limits</strong>.</li>
                            <li style={{ marginBottom: '10px' }}>Verify your balance before placing bets.</li>
                        </ul>
                        <div style={{ borderLeft: '3px solid #00bfff', paddingLeft: '15px', color: '#ccc', fontStyle: 'italic' }}>
                            <strong>Tip:</strong> Start with small deposits to get familiar with the platform.
                        </div>
                    </div>

                    {}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>3. Understanding Sports Betting on Reddy Anna</div>
                        <p style={{ color: '#ccc', marginBottom: '15px' }}>Reddy Anna offers a variety of sports betting options:</p>
                        <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Popular sports:</strong> Cricket, football, basketball, tennis, and more.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Types of bets:</strong> Single bets, multiple bets, live bets, and in-play bets.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Reading odds:</strong> Learn how to calculate your potential winnings using the odds.</li>
                        </ul>
                        <div style={{ borderLeft: '3px solid #00bfff', paddingLeft: '15px', color: '#ccc', fontStyle: 'italic' }}>
                            <strong>Beginner Tip:</strong> Start with simple bets and gradually explore more advanced options.
                        </div>
                    </div>

                    {}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>4. Playing Reddy Anna Casino Games</div>
                        <p style={{ color: '#ccc', marginBottom: '15px' }}>Reddy Anna also offers a wide range of casino games:</p>
                        <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Games available:</strong> Slots, poker, roulette, blackjack, and more.</li>
                            <li style={{ marginBottom: '10px' }}><strong>How to play:</strong> Select a game, place your bet, and enjoy.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Demo mode:</strong> Practice with free-play options before betting real money.</li>
                        </ul>
                        <div style={{ borderLeft: '3px solid #00bfff', paddingLeft: '15px', color: '#ccc', fontStyle: 'italic' }}>
                            <strong>Tip:</strong> Set a budget for casino games to play responsibly and enjoy longer.
                        </div>
                    </div>

                    {}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>5. Live Betting & Live Casino Experience</div>
                        <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Live sports betting:</strong> Bet on matches in real-time as the action unfolds.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Live casino:</strong> Play with real dealers and interact with other players in real-time.</li>
                            <li style={{ marginBottom: '10px' }}>Track scores and updates carefully to make informed bets.</li>
                        </ul>
                        <div style={{ borderLeft: '3px solid #00bfff', paddingLeft: '15px', color: '#ccc', fontStyle: 'italic' }}>
                            <strong>Pro Tip:</strong> Start with small bets during live games until you are comfortable.
                        </div>
                    </div>

                    {}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>6. Withdrawals and Managing Winnings</div>
                        <p style={{ color: '#ccc', marginBottom: '15px' }}>Withdrawing your winnings is simple:</p>
                        <ol style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>Go to the <strong>Withdraw section</strong> in your <span style={{ color: '#FFD700' }}>Reddy Anna</span> account.</li>
                            <li style={{ marginBottom: '10px' }}>Choose your preferred withdrawal method.</li>
                            <li style={{ marginBottom: '10px' }}>Complete any verification steps if required.</li>
                        </ol>
                        <div style={{ borderLeft: '3px solid #00bfff', paddingLeft: '15px', color: '#ccc', fontStyle: 'italic' }}>
                            <strong>Tip:</strong> Double-check your bank or wallet details to avoid errors.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowToPlay;

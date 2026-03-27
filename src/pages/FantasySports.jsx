import React, { useEffect } from 'react';

const FantasySports = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const headerStyle = {
        border: '1px solid #FFD700',
        borderRadius: '50px',
        padding: '10px 30px',
        textAlign: 'center',
        marginBottom: '20px',
        display: 'inline-block',
        color: '#FFD700',
        fontSize: '22px',
        fontWeight: 'bold'
    };

    const sectionTitleStyle = {
        color: '#FFD700',
        fontSize: '24px',
        marginBottom: '20px',
        border: '1px solid #FFD700',
        borderRadius: '50px',
        padding: '10px 30px',
        display: 'inline-block'
    };

    return (
        <div className="fantasy-sports-page" style={{ backgroundColor: '#0d1425', color: '#fff', minHeight: '100vh' }}>

            {}
            <section style={{ backgroundColor: '#1a2236', padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ ...headerStyle, fontSize: '28px', lineHeight: '1.4', padding: '15px 40px' }}>
                            Fantasy Sports Contests with<br /> Reddy Anna
                        </div>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#ccc', fontSize: '18px' }}>
                            Step into the exciting world of <strong>fantasy sports contests</strong> with <span style={{ color: '#FFD700' }}>Reddy Anna</span>! Build your virtual team of real players and watch them compete in actual matches. The better your players perform, the more points you earn – climb the leaderboard, compete with others, and win real cash rewards.
                        </p>

                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" style={{
                            background: 'linear-gradient(to right, #1e90ff, #00bfff)',
                            color: '#fff',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginTop: '20px',
                            boxShadow: '0 4px 15px rgba(30, 144, 255, 0.4)'
                        }}>
                            GET ID & PLAY NOW
                        </a>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src="/images/football_fantasy_hero_new.png"
                            alt="Reddy Anna Fantasy Sports"
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#000' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Why Play Reddy Anna Fantasy Sports?
                        </div>
                    </div>

                    <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '18px', marginBottom: '30px' }}>
                        With <span style={{ color: '#FFD700' }}>Reddy Anna Fantasy Sports</span>, every match becomes thrilling. Whether you love cricket, football, or kabaddi, our platform gives you a chance to <strong>show off your skills</strong>, strategize your lineup, and make every game more exciting.
                    </p>

                    <p style={{ color: '#FFD700', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', fontStyle: 'italic' }}>
                        Benefits of Playing:
                    </p>

                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}><strong>Real-time Scoring:</strong> Points are calculated based on actual match performance.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Multiple Contests:</strong> Join free or paid contests to suit your play style.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Easy Access:</strong> Use your <span style={{ color: '#FFD700' }}>Reddy Anna ID</span> to log in anytime, anywhere.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Safe & Secure:</strong> Play confidently with verified accounts and secure transactions.</li>
                    </ul>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#0d1425' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            How to Join Reddy Anna Fantasy Sports
                        </div>
                    </div>

                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}><strong>Create Your Reddy Anna ID</strong> – Sign up on the <strong>Reddy Anna website</strong> and complete your profile.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Login & Explore</strong> – Access contests with your <span style={{ color: '#FFD700' }}>Reddy Anna Login</span> credentials.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Pick Your Players</strong> – Build your dream team and submit before the match begins.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Track & Win</strong> – Watch live scoring, track your points, and climb the leaderboard for rewards.</li>
                    </ul>
                </div>
            </section>

            {}
            <section style={{ padding: '60px 20px', backgroundColor: '#000' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Create Your Fantasy Team & Win Real Cash Today
                        </div>
                    </div>
                    <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '18px', marginBottom: '30px' }}>
                        Build your dream team with <strong>Reddy Anna Fantasy Sports</strong> and compete in real matches. Earn points based on actual player performance, climb the leaderboard, and win <strong>real cash prizes</strong>. With easy <span style={{ color: '#FFD700' }}>Reddy Anna Login</span>, secure deposits, and fast withdrawals, every game becomes thrilling. Play today and turn your strategy into rewards!
                        <br /><br />
                        Create Account on <span style={{ color: '#FFD700' }}>Reddy Anna Book</span> Platform
                    </p>
                </div>
            </section>

        </div>
    );
};

export default FantasySports;

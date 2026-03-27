import React, { useEffect } from 'react';
import heroFantasy from '../assets/hero_fantasy.png';
const FantasySports = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const headerStyle = {
        border: '1px solid var(--accent-yellow)',
        borderRadius: '50px',
        padding: '10px 30px',
        textAlign: 'center',
        marginBottom: '20px',
        display: 'inline-block',
        color: 'var(--accent-yellow)',
        fontSize: '22px',
        fontWeight: 'bold'
    };
    const sectionTitleStyle = {
        color: 'var(--accent-yellow)',
        fontSize: '24px',
        marginBottom: '20px',
        border: '1px solid var(--accent-yellow)',
        borderRadius: '50px',
        padding: '10px 30px',
        display: 'inline-block'
    };
    return (
        <div className="fantasy-sports-page" style={{ backgroundColor: 'var(--primary-green)', color: '#fff', minHeight: '100vh' }}>
            { }
            <section style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ ...headerStyle, fontSize: '28px', lineHeight: '1.4', padding: '15px 40px' }}>
                            Fantasy Sports Contests with<br /> Lotus365
                        </div>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#eee', fontSize: '18px' }}>
                            Step into the exciting world of <strong>fantasy sports contests</strong> with <span style={{ color: 'var(--accent-yellow)' }}>Lotus365</span>! Build your virtual team of real players and watch them compete in actual matches. The better your players perform, the more points you earn – climb the leaderboard, compete with others, and win real cash rewards.
                        </p>
                        <a href="https://wa.me/15208005239?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{
                            background: 'linear-gradient(to right, #fdd835, #fbc02d)',
                            color: '#000',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginTop: '20px',
                            boxShadow: '0 4px 15px rgba(253, 216, 53, 0.4)'
                        }}>
                            GET ID & PLAY NOW
                        </a>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src={heroFantasy}
                            alt="Lotus365 Fantasy Sports"
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Why Play Lotus365 Fantasy Sports?
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '30px' }}>
                        With <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Fantasy Sports</span>, every match becomes thrilling. Whether you love cricket, football, or kabaddi, our platform gives you a chance to <strong>show off your skills</strong>, strategize your lineup, and make every game more exciting.
                    </p>
                    <p style={{ color: 'var(--accent-yellow)', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', fontStyle: 'italic' }}>
                        Benefits of Playing:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}><strong>Real-time Scoring:</strong> Points are calculated based on actual match performance.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Multiple Contests:</strong> Join free or paid contests to suit your play style.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Easy Access:</strong> Use your <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 ID</span> to log in anytime, anywhere.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Safe & Secure:</strong> Play confidently with verified accounts and secure transactions.</li>
                    </ul>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--primary-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            How to Join Lotus365 Fantasy Sports
                        </div>
                    </div>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#eee', lineHeight: '1.8', fontSize: '18px' }}>
                        <li style={{ marginBottom: '15px' }}><strong>Create Your Lotus365 ID</strong> – Sign up on the <strong>Lotus365 website</strong> and complete your profile.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Login & Explore</strong> – Access contests with your <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Login</span> credentials.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Pick Your Players</strong> – Build your dream team and submit before the match begins.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Track & Win</strong> – Watch live scoring, track your points, and climb the leaderboard for rewards.</li>
                    </ul>
                </div>
            </section>
            { }
            <section style={{ padding: '60px 20px', backgroundColor: 'var(--dark-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={sectionTitleStyle}>
                            Create Your Fantasy Team & Win Real Cash Today
                        </div>
                    </div>
                    <p style={{ color: '#eee', lineHeight: '1.8', fontSize: '18px', marginBottom: '30px' }}>
                        Build your dream team with <strong>Lotus365 Fantasy Sports</strong> and compete in real matches. Earn points based on actual player performance, climb the leaderboard, and win <strong>real cash prizes</strong>. With easy <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Login</span>, secure deposits, and fast withdrawals, every game becomes thrilling. Play today and turn your strategy into rewards!
                        <br /><br />
                        Create Account on <span style={{ color: 'var(--accent-yellow)' }}>Lotus365 Book</span> Platform
                    </p>
                </div>
            </section>
        </div>
    );
};
export default FantasySports;
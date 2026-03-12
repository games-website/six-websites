import React, { useEffect } from 'react';

const RulesRegulations = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionStyle = {
        border: '1px solid #FFD700',
        borderRadius: '20px',
        padding: '20px',
        background: '#0d1425',
        marginBottom: '30px'
    };

    const headerStyle = {
        border: '1px solid #FFD700',
        borderRadius: '30px',
        padding: '10px 20px',
        textAlign: 'center',
        marginBottom: '20px',
        display: 'block',
        width: 'fit-content',
        margin: '0 auto 20px auto',
        minWidth: '50%',
        maxWidth: '100%',
        boxSizing: 'border-box'
    };

    const headerTitleStyle = {
        color: '#FFD700',
        margin: 0,
        fontSize: '20px',
        fontStyle: 'italic'
    };

    return (
        <div className="rules-page" style={{ backgroundColor: '#121c36', color: '#fff', minHeight: '100vh', paddingBottom: '40px' }}>
            <div className="container">

                {}
                <div className="policy-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '15px',
                    textAlign: 'center',
                    marginTop: '40px',
                    marginBottom: '20px',
                    boxShadow: '0 0 10px rgba(255, 215, 0, 0.2)',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                }}>
                    <h1 style={{ color: '#FFD700', fontSize: '28px', margin: 0, fontWeight: '700' }}>Reddy Anna Rules and Regulations</h1>
                </div>

                <p style={{ textAlign: 'center', marginBottom: '30px' }}>
                    Welcome to <strong style={{ color: '#FFD700' }}>Reddy Anna</strong>! This page explains all our rules in simple language so you can bet safely and enjoy your gaming experience.
                </p>

                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <a href="#register" className="btn-gold" style={{
                        backgroundColor: '#8B8000',
                        color: '#fff',
                        padding: '10px 30px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'inline-block'
                    }}>Join Reddy Anna</a>
                </div>

                {}
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>General Rules</h2>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Who Can Use Reddy Anna?</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}><strong>Age Requirement:</strong> You must be 18 years or older to create an account and place bets on <strong style={{ color: '#FFD700' }}>Reddy Anna</strong>.</li>
                        <li style={{ marginBottom: '15px' }}><strong>One Account Per Person:</strong> Each user can only have one account. Creating multiple accounts is strictly prohibited and will result in all accounts being suspended.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Legal Responsibility:</strong> You must follow the gambling laws in your state or country. It is your responsibility to check if online betting is legal in your area before using our platform.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Accurate Information:</strong> When registering, provide true and correct details including your name, email, phone number, and date of birth. Any false information may lead to account suspension.</li>
                    </ul>
                </div>

                {}
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>Cricket Betting Rules</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto 40px auto' }}>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Before Match Starts</h3>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>You can place bets until the match begins</li>
                            <li>Bets cannot be changed or cancelled once confirmed</li>
                            <li>If a match is abandoned or cancelled, all bets will be void (refunded)</li>
                        </ul>
                    </div>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>During Live Betting</h3>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>Live odds change based on match situations</li>
                            <li>Bets are locked when you click “Place Bet”</li>
                            <li>If the match is interrupted (rain, bad light), bets remain valid unless the match is completely cancelled</li>
                        </ul>
                    </div>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Result Declaration</h3>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>All results are based on official match outcomes</li>
                            <li>In case of disputes, the official umpire's decision is final</li>
                            <li>Results are usually settled within 24 hours of match completion</li>
                        </ul>
                    </div>
                </div>

                {/* Casino Betting Rules */}
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>Casino Betting Rules</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto 40px auto' }}>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Game Fairness</h3>
                        </div>
                        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>All casino games use certified Random Number Generators (RNG) to ensure fair results. No one can predict or manipulate game outcomes.</p>
                    </div>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Live Casino</h3>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>Live dealer decisions are final</li>
                            <li>If there's a technical issue during your game, we will refund your bet</li>
                            <li>Video proof is maintained for all live casino games</li>
                        </ul>
                    </div>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Slots and Table Games</h3>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>Game rules are available inside each game</li>
                            <li>Maximum win limits apply as per game rules</li>
                            <li>Jackpot payouts are subject to verification</li>
                        </ul>
                    </div>
                </div>

                {}
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>Fantasy Games Rules</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto 40px auto' }}>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Team Selection</h3>
                        </div>
                        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>You must select your team before the deadline. Late entries are not accepted.</p>
                    </div>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Player Points</h3>
                        </div>
                        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Points are awarded based on real match performance and our published point system.</p>
                    </div>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Contests & Winnings</h3>
                        </div>
                        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Fantasy winnings are paid within 24-48 hours after match results are verified.</p>
                    </div>
                </div>


                {}
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>Payment Rules</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto 40px auto' }}>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Deposit</h3>
                        </div>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Minimum Deposit:</strong> ₹500 per transaction</p>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Maximum Deposit:</strong> ₹50,000 per transaction (no daily limit on number of transactions)</p>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Accepted Methods:</strong></p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>UPI (Google Pay, PhonePe, Paytm)</li>
                            <li>Bank Transfer</li>
                            <li>Net Banking</li>
                            <li>Debit/Credit Cards</li>
                            <li>E-wallets</li>
                        </ul>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}><strong>Processing Time:</strong> Deposits are instant in most cases. If money is deducted from your account but not credited to Reddy Anna, contact support within 24 hours.</p>

                    </div>
                    <div style={sectionStyle}>
                        <div style={{ ...headerStyle, width: 'auto', minWidth: '0' }}>
                            <h3 style={headerTitleStyle}>Withdrawals</h3>
                        </div>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Minimum Withdrawal:</strong> ₹500</p>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Maximum Withdrawal:</strong> ₹1,00,000 per transaction</p>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Processing Time:</strong></p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>Verified accounts: 1-24 hours</li>
                            <li>Unverified accounts: May take up to 48 hours</li>
                        </ul>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}><strong>Verification Required:</strong> You must verify your identity with valid documents (Aadhaar, PAN, bank details) before making your first withdrawal.</p>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}><strong>Important:</strong> Withdrawals can only be made to the same account used for deposit. This is for your security.</p>
                    </div>
                </div>

                {}
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>Bonus and Promotions</h2>
                </div>
                <div style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}><strong>Welcome Bonus:</strong> New users get a welcome bonus on their first deposit. Check the Promotions page for current offers.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Wagering Requirements:</strong> All bonuses come with wagering requirements. You must bet the bonus amount a certain number of times before you can withdraw it.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Bonus Expiry:</strong> Bonuses expire after 30 days if wagering requirements are not completed.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Bonus Abuse:</strong> If we detect bonus abuse (creating multiple accounts, coordinated betting), we reserve the right to cancel bonuses and freeze accounts.</li>
                    </ul>
                </div>

                {}
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>Account Security Rules</h2>
                </div>
                <div style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Keep Your Account Safe</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}><strong>Password Protection:</strong> Use a strong password and never share it with anyone. Reddy Anna will never ask for your password.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Login Details:</strong> Keep your <strong style={{ color: '#FFD700' }}>Reddy Anna ID</strong> and password confidential. You are responsible for all activity on your account.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Suspicious Activity:</strong> If you notice any suspicious activity, contact our support team immediately.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Two-Factor Authentication:</strong> Enable 2FA for added security (available in Account Settings).</li>
                    </ul>
                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px', marginTop: '20px' }}>Account Suspension</p>
                    <p>Your account may be suspended if you:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li>Provide false information</li>
                        <li>Create multiple accounts</li>
                        <li>Engage in fraudulent activities</li>
                        <li>Attempt to manipulate games or bets</li>
                        <li>Abuse bonuses or promotions</li>
                        <li>Violate any of our terms</li>
                    </ul>

                </div>

                {}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Responsible Gaming</h2>
                </div>

                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Our Commitment</p>
                    <p style={{ marginBottom: '20px' }}>Reddy Anna promotes responsible gambling. Gaming should be fun and entertaining, not a way to make money or solve financial problems.</p>

                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Self-Control Tools</p>
                    <p style={{ marginBottom: '10px' }}><strong>Deposit Limits:</strong> Set daily, weekly, or monthly deposit limits from your Account Settings.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Self-Exclusion:</strong> Take a break from betting by selecting self-exclusion for 1 month, 3 months, 6 months, or permanently.</p>
                    <p style={{ marginBottom: '20px' }}><strong>Reality Check:</strong> Set time reminders to alert you how long you’ve been playing.</p>

                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Warning Signs of Problem Gambling</p>
                    <div style={{ textAlign: 'right', marginTop: '-20px' }}>
                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{
                            backgroundColor: '#25D366',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <i className="fab fa-whatsapp"></i> Get The Reddy Anna ID Now
                        </a>
                    </div>
                </div>

                {}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Disputes and Complaints</h2>
                </div>

                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>How to Raise a Complaint</p>
                    <p style={{ marginBottom: '10px' }}>If you have any issue with:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Bet settlement</li>
                        <li>Deposit/withdrawal</li>
                        <li>Account access</li>
                        <li>Game results</li>
                    </ul>

                    <p style={{ marginBottom: '10px' }}><strong>Step 1:</strong> Contact our 24/7 customer support via Live Chat or WhatsApp</p>
                    <p style={{ marginBottom: '10px' }}><strong>Step 2:</strong> Provide your User ID, transaction details, and description of the issue</p>
                    <p style={{ marginBottom: '10px' }}><strong>Step 3:</strong> We will investigate and respond within 24-48 hours</p>

                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Important Points</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>All disputes must be reported within 48 hours of the event</li>
                        <li>We require screenshots or proof for faster resolution</li>
                        <li>Management decisions on disputes are final</li>
                        <li>We follow a fair and transparent complaint resolution process</li>
                    </ul>
                </div>

                {}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Technical Issues</h2>
                </div>

                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Platform Errors</p>
                    <p style={{ marginBottom: '10px' }}>If you experience technical problems like:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Website not loading</li>
                        <li>App crashing</li>
                        <li>Bets not being placed</li>
                        <li>Payment failures</li>
                    </ul>

                    <p style={{ marginBottom: '15px' }}><strong>Immediate Action:</strong> Contact support immediately with details</p>
                    <p><strong>Protection:</strong> We are not responsible for losses due to internet connectivity issues, device problems, or issues beyond our control. However, if the fault is on our end, we will review and compensate fairly.</p>
                </div>

                {}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Changes to Rules</h2>
                </div>

                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>Updates and Modifications</p>
                    <p style={{ marginBottom: '20px' }}>Reddy Anna reserves the right to update these Rules and Regulations at any time.</p>

                    <p style={{ color: '#FFD700', fontStyle: 'italic', marginBottom: '15px' }}>How You'll Know:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Major changes will be notified via email</li>
                        <li>Important updates will be shown on the website</li>
                        <li>You can always check this page for the latest version</li>
                    </ul>

                    <p><strong>Your Agreement:</strong> By continuing to use <strong style={{ color: '#FFD700' }}>Reddy Anna</strong> after changes are made, you accept the updated rules.</p>
                </div>


                {/* Contact Us */}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Contact Us</h2>
                </div>

                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '15px' }}><strong>24/7 Customer Support Available:</strong></p>
                    <p style={{ marginBottom: '10px' }}><i className="fab fa-whatsapp"></i> <strong>WhatsApp:</strong> +1(520)800-5239</p>
                    <p style={{ marginBottom: '10px' }}><i className="fas fa-comments"></i> <strong>Live Chat:</strong> Available on website and app</p>
                    <p style={{ marginBottom: '10px' }}><i className="fas fa-clock"></i> <strong>Support Hours:</strong> 24 hours, 7 days a week</p>

                    <p style={{ marginTop: '20px' }}><strong>Languages Supported:</strong> Hindi, Bengali, English, Tamil, Marathi, Malayalam</p>
                </div>

                {/* Your Acceptance */}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Your Acceptance</h2>
                </div>

                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <p style={{ marginBottom: '20px' }}>By registering and using <strong style={{ color: '#FFD700' }}>Reddy Anna</strong>, you confirm that:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}>✓ You are 18 years or older</li>
                        <li style={{ marginBottom: '10px' }}>✓ You have read and understood these Rules and Regulations</li>
                        <li style={{ marginBottom: '10px' }}>✓ You agree to follow all our rules</li>
                        <li style={{ marginBottom: '10px' }}>✓ You understand that online betting involves risk</li>
                        <li style={{ marginBottom: '10px' }}>✓ You will gamble responsibly</li>
                    </ul>
                </div>

                {/* Privacy and Data Protection */}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Privacy and Data Protection</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto', textAlign: 'center' }}>
                    <p style={{ marginBottom: '20px' }}>Your personal information is safe with us. We use advanced SSL encryption to protect your data. We will never share your information with third parties without your consent.</p>
                    <p>For complete details, read our <span style={{ color: '#FFD700' }}>Privacy Policy</span>.</p>
                </div>

                {/* Important Disclaimers */}
                <div className="policy-section-header" style={{
                    border: '1px solid #FFD700',
                    borderRadius: '50px',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto'
                }}>
                    <h2 style={{ color: '#FFD700', fontSize: '22px', margin: 0 }}>Important Disclaimers</h2>
                </div>
                <div className="policy-content" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
                        <li>Reddy Anna is not responsible for losses incurred due to your betting decisions</li>
                        <li>Past performance or odds do not guarantee future results</li>
                        <li>All games involve risk – never bet more than you can afford to lose</li>
                        <li>Winnings are subject to applicable taxes as per Indian law</li>
                        <li>Management reserves the right to refuse service to any user who violates our terms</li>
                    </ul>
                    <p style={{ marginTop: '20px', fontSize: '14px' }}><strong>Last Updated:</strong> November 2024</p>
                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Play Smart. Play Fair. Play Responsibly.</p>
                    <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#FFD700' }}>Reddy Anna – India’s Most Trusted Online Betting Platform.</p>
                    <p style={{ marginTop: '10px' }}>Create Your Account on <strong style={{ color: '#FFD700' }}>Reddy Anna Book</strong> Platform.</p>

                    <div style={{ textAlign: 'right', marginTop: '20px' }}>
                        <a href="https://wa.me/15208005239" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{
                            backgroundColor: '#25D366',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <i className="fab fa-whatsapp"></i> Get The Reddy Anna ID Now
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RulesRegulations;

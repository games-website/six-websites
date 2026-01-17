import React from 'react';

const ExpertTeam = () => {
    return (
        <section class="section bg-subtle-cream">
            <div class="container">
                <h2 class="section-title">Introducing the Reddyanna Book Expert Team</h2>
                <p class="text-center mb-40">The experts at Reddyanna Book make the platform safe, transparent and friendly
                    to the players in order to achieve success. The following are the three main members of our team:</p>

                <div class="team-grid">

                    <div class="team-card">
                        <img src="/images/winner_kunal.png" alt="Kunal Khanna" class="team-img reveal" />
                        <h3>Kunal Khanna</h3>
                        <div class="role">Senior Sports Analyst</div>
                        <p>Kunal has 12+ years of experience in the field of analytics, which serves as a win-win solution
                            to the issue as he can give correct information and forecasts that can lead to a smarter
                            decision in betting.</p>
                        <div class="badge-yellow">M.Sc. in Statistics</div>
                        <div class="badge-gold">Former IPL Consultant</div>
                    </div>

                    <div class="team-card">
                        <img src="/images/winner_minal.png" alt="Minal Mehta" class="team-img reveal" />
                        <h3>Minal Mehta</h3>
                        <div class="role">Cybersecurity Head</div>
                        <p>Minal is totally safe in terms of user accounts and transactions. Reddyanna Book is a reliable
                            source of information as she is a fraud prevention expert and a sophisticated data security
                            expert.</p>
                        <div class="badge-yellow">CISSP Certified</div>
                        <div class="badge-gold">PCI-DSS Specialist</div>
                    </div>

                    <div class="team-card">
                        <img src="/images/avatar_anjali.png" alt="Navneet Thakur" class="team-img reveal" />
                        <h3>Navneet Thakur</h3>
                        <div class="role">Operations Director</div>
                        <p>Navneet has more than 15 years experience in customer service and operations of games. He
                            guarantees his players a convenient and consistent fulfilling betting experience.</p>
                        <div class="badge-yellow">MBA in Operations</div>
                        <div class="badge-gold">iGaming Certified</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertTeam;

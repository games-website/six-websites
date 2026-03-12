import React from 'react';
const PlatformTable = () => {
    return (
        <section className="section-spacer">
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--accent-yellow)' }}>Platform Overview</h2>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Platform Overview</td>
                            <td>Lotus is a popular online platform offering sports betting and casino games in
                                India.</td>
                        </tr>
                        <tr>
                            <td>Year of Registration</td>
                            <td>Registered and launched in 2015.</td>
                        </tr>
                        <tr>
                            <td>Sports Betting</td>
                            <td>Wide range of sports including cricket, football, tennis, and more.</td>
                        </tr>
                        <tr>
                            <td>Casino Games</td>
                            <td>Offers slots, roulette, blackjack, poker, and live dealer games.</td>
                        </tr>
                        <tr>
                            <td>Bonuses</td>
                            <td>Up to 400% deposit bonus and regular promotions.</td>
                        </tr>
                        <tr>
                            <td>Payment Methods</td>
                            <td>Supports secure and fast payment options like UPI, net banking, and wallets.</td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>24/7 customer support available via chat and WhatsApp.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
export default PlatformTable;
import React from 'react';
import paymentProof from '../assets/payment_proof.png';
import paymentProof2 from '../assets/payment_proof_2.png';
import paymentProof3 from '../assets/payment_proof_3.png';
import paymentProof4 from '../assets/payment_proof_4.png';

const PaymentProof = () => {
    return (
        <section className="payment-proof-section">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Proof of Payment: How to Confirm Withdrawals</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                To ensure that your withdrawals are processed correctly on Lotus, it's essential to confirm your
                payment proof.
                After requesting a withdrawal, you will receive a confirmation email or notification detailing the
                transaction.
            </p>

            <div className="screenshot-grid">
                <div className="screenshot-placeholder" style={{ border: 'none', background: 'transparent' }}>
                    <img src={paymentProof} alt="Proof 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <div className="screenshot-placeholder" style={{ border: 'none', background: 'transparent' }}>
                    <img src={paymentProof2} alt="Proof 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <div className="screenshot-placeholder" style={{ border: 'none', background: 'transparent' }}>
                    <img src={paymentProof3} alt="Proof 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <div className="screenshot-placeholder" style={{ border: 'none', background: 'transparent' }}>
                    <img src={paymentProof4} alt="Proof 4" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '13px', marginTop: '15px', opacity: 0.7 }}>
                If you encounter any discrepancies, contact customer support immediately.
            </p>
        </section>
    );
};

export default PaymentProof;

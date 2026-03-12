import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Who is the Reddyanna Book Official?",
            answer: "Reddyanna Book Official is India's most trusted online betting platform, offering a wide range of sports betting options including cricket, football, tennis, and a live casino experience."
        },
        {
            question: "How do I register on Reddyanna?",
            answer: "Registration is simple. Click on the 'Get ID' button contact us on WhatsApp at +1(520)800-5239. Our support team will help you create your account instantly."
        },
        {
            question: "Is it secure playing on Reddyanna?",
            answer: "Yes, absolutely. We use advanced SSL encryption to ensure that your personal and financial information is 100% secure. We are a verified and trusted platform."
        },
        {
            question: "What games can I play on Reddyanna?",
            answer: "You can bet on various sports like Cricket, Football, Tennis, Horse Racing, and play Live Casino games including Roulette, Blackjack, Teen Patti, and Andar Bahar."
        },
        {
            question: "How do I place bets on Reddyanna?",
            answer: "Once you have your ID, log in to the platform, choose your preferred sport or game, select the match/market, enter your stake, and place your bet."
        },
        {
            question: "How do I deposit funds into my Reddyanna account?",
            answer: "We support multiple payment methods including UPI (Google Pay, PhonePe, Paytm), Net Banking, and Bank Transfer. Deposits are instant."
        },
        {
            question: "What are responsible gaming measures?",
            answer: "We promote responsible gaming by allowing users to set deposit limits. We strictly enforce an 18+ age policy and encourage playing for entertainment only."
        },
        {
            question: "How do I get in touch with customer service?",
            answer: "Our customer support is available 24/7. You can contact us via WhatsApp at +1(520)800-5239 or use the Live Chat feature on our website."
        },
        {
            question: "Are there age restrictions to playing on Reddyanna?",
            answer: "Yes, you must be at least 18 years old to register and play on Reddyanna Book."
        },
        {
            question: "Can I play on Reddyanna without signing up?",
            answer: "No, you need a valid user ID to place bets. You can browse the site, but to play, you must register."
        },
        {
            question: "Is the Reddyanna book legal in India?",
            answer: "Reddyanna operates legally where online betting is permitted. We advise users to check their local laws regarding online betting."
        },
        {
            question: "What is Reddyanna about?",
            answer: "Reddyanna is about providing a premium, transparent, and fair betting environment for sports enthusiasts and casino lovers."
        },
        {
            question: "How do you play the Reddyanna book?",
            answer: "Get your ID, deposit funds, select a game, and start predicting outcomes. Wins are credited to your account instantly."
        },
        {
            question: "What is the WhatsApp number for Reddyanna book?",
            answer: "The official WhatsApp number for Reddyanna Book is +1(520)800-5239."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq-section" style={{ padding: '60px 0', backgroundColor: '#0d1425' }}>
            <div className="container">
                <h2 className="section-title text-white" style={{ textAlign: 'center', marginBottom: '10px', color: '#FFD700' }}>FAQ's</h2>
                <p className="text-white mb-40" style={{ textAlign: 'center', marginBottom: '40px', color: '#ccc' }}>
                    Discover more about Reddyanna Book's offer and join us now to enjoy unparalleled gambling experiences!
                </p>

                <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item" style={{ marginBottom: '15px', borderBottom: '1px solid #333' }}>
                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    padding: '15px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: activeIndex === index ? '#1a2236' : 'transparent',
                                    color: activeIndex === index ? '#FFD700' : '#fff',
                                    fontWeight: 'bold'
                                }}
                            >
                                {faq.question}
                                <span>{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && (
                                <div style={{ padding: '15px', color: '#ccc', lineHeight: '1.6', backgroundColor: '#1a2236' }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

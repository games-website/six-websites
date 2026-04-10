import React from 'react';



import upi from '../assets/images/upi.png';
import paytm from '../assets/images/paytm.png';
import gpay from '../assets/images/gpay.png'; 
import phonepe from '../assets/images/phonepe.png';
import visa from '../assets/images/visa.png';


import netbanking from '../assets/images/netbanking.png';
import crypto from '../assets/images/crypto.png';
import mastercard from '../assets/images/mastercard.png';
import rupay from '../assets/images/rupay.png';
import bitcoin from '../assets/images/bitcoin.png';

const paymentMethods = [
    { img: upi, label: "UPI" },
    { img: paytm, label: "Paytm" },
    { img: gpay, label: "Google Pay" },
    { img: netbanking, label: "NetBanking" },
    { img: crypto, label: "Crypto" },
    { img: phonepe, label: "PhonePe" },
    { img: visa, label: "Visa" },
    { img: mastercard, label: "MasterCard" },
    { img: rupay, label: "RuPay" },
];

const keywords = [
    "Goldplay", "Goldplay ID", "Goldplay ID", "Goldplay",
    "Goldplay Online", "Goldplay Online Betting", "Goldplay Betting",
    "Goldplay Betting", "Goldplay Betting App", "Gold365", "Laser247",
    "IPL Betting ID", "Online Betting ID", "Goldplay Online Book",
    "Goldplay App", "Goldplayie", "Goldplay Login ID and Password",
    "Goldplay WhatsApp Number", "Goldplay", "Goldplay Betting Apps"
];

export default function PaymentSEO() {
    return (
        <section className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-6xl text-center">

                
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-4">Secure & Flexible Payment Options</h2>
                    <p className="text-gray-600 mb-12">
                        We support all major payment methods so you can deposit and withdraw with ease and confidence.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {paymentMethods.map((method, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={method.img}
                                        alt={method.label}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <span className="font-bold text-gray-700 text-sm tracking-wide">{method.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="border-t border-gray-200 pt-10">
                    <h3 className="text-2xl font-bold text-brand-gold mb-6">
                        Popular Searches Related to Goldplay
                    </h3>
                    <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-sm text-gray-500 max-w-5xl mx-auto leading-relaxed">
                        {keywords.map((keyword, index) => (
                            <React.Fragment key={index}>
                                <span className="hover:text-brand-gold cursor-pointer transition-colors border-b border-transparent hover:border-brand-gold">
                                    {keyword}
                                </span>
                                {index < keywords.length - 1 && <span className="text-gray-300">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

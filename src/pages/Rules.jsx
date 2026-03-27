import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Registration from '../components/Registration';
import Login from '../components/Login';
import BettingSteps from '../components/BettingSteps';
import Deposit from '../components/Deposit';
import Withdrawal from '../components/Withdrawal';
import GetID from '../components/GetID';

const Rules = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        reveals.forEach(el => observer.observe(el));
        return () => reveals.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <>
            {}
            <Steps />
            <Registration />
            <Login />
            <BettingSteps />
            <Deposit />
            <Withdrawal />
            <GetID />
        </>
    );
};

export default Rules;

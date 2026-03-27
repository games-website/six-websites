import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Sports from '../components/Sports';
import Casino from '../components/Casino';
import Promotions from '../components/Promotions';
import CustomerCare from '../components/CustomerCare';
import GetID from '../components/GetID';

const Services = () => {
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
            <Sports />
            <Casino />
            <Promotions />
            <CustomerCare />
            <GetID />
        </>
    );
};

export default Services;

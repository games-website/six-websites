import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import AccessBanner from '../components/AccessBanner';
import MobileApp from '../components/MobileApp';
import GetID from '../components/GetID';

const Platforms = () => {
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
            <AccessBanner />
            <MobileApp />
            <GetID />
        </>
    );
};

export default Platforms;

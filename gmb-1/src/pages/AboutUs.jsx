import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutInfo from '../components/AboutInfo';
import WhyChooseUs from '../components/WhyChooseUs';
import History from '../components/History';
import Testimonials from '../components/Testimonials';

const AboutUs = () => {
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
            <Hero />
            <AboutInfo />
            <WhyChooseUs />
            <History />
            <Testimonials />
        </>
    );
};

export default AboutUs;

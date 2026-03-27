import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutInfo from '../components/AboutInfo';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import History from '../components/History';
import Steps from '../components/Steps';
import Blogs from '../components/Blogs';
import Registration from '../components/Registration';
import Login from '../components/Login';
import BettingSteps from '../components/BettingSteps';
import AccessBanner from '../components/AccessBanner';
import Stats from '../components/Stats';
import Sports from '../components/Sports';
import Casino from '../components/Casino';
import Promotions from '../components/Promotions';
import CustomerCare from '../components/CustomerCare';
import Deposit from '../components/Deposit';
import Withdrawal from '../components/Withdrawal';
import MobileApp from '../components/MobileApp';
import LeadingPlatform from '../components/LeadingPlatform';
import ExpertTeam from '../components/ExpertTeam';
import GetID from '../components/GetID';
import Legal from '../components/Legal';
import UsersTestimonials from '../components/UsersTestimonials';
import FAQ from '../components/FAQ';

const Home = () => {
    useEffect(() => {

        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(el => observer.observe(el));

        return () => {
            reveals.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            <Hero />
            <AboutInfo />
            <Testimonials />
            {}
            <History />
            <Steps />
            <Blogs />
            <Registration />
            {/* <Login /> */}
            <BettingSteps />
            <AccessBanner />
            <Stats />
            <Sports />
            <Casino />
            <Promotions />
            <CustomerCare />
            <Deposit />
            <Withdrawal />
            {/* <MobileApp /> */}
            <LeadingPlatform />
            <ExpertTeam />
            <GetID />
            <Legal />
            <UsersTestimonials />
            <FAQ />
        </>
    );
};

export default Home;

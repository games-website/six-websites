import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sports from '../components/SportsSection';
import Casino from '../components/CasinoSection';
import Promotions from '../components/Promotions';
import CustomerCare from '../components/CustomerCare';
import GetID from '../components/GetID';
import serviceCricketImg from '../assets/service_cricket.png';
import serviceFootballImg from '../assets/service_football.png';
import serviceTennisImg from '../assets/service_tennis.png';
import serviceCasinoImg from '../assets/service_casino.png';
import serviceHorseImg from '../assets/service_horse.png';
import serviceKabaddiImg from '../assets/service_kabaddi.png';
import serviceFantasyImg from '../assets/service_fantasy.png';
const ServiceCard = ({ title, image, link }) => (
    <div className="service-card" style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        textAlign: 'center'
    }}>
    </div>
);
const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const servicesList = [
        { title: "Cricket", image: serviceCricketImg, link: "/cricket-betting" },
        { title: "Football", image: serviceFootballImg, link: "/football-betting" },
        { title: "Tennis", image: serviceTennisImg, link: "/tennis-betting" },
        { title: "Horse Racing", image: serviceHorseImg, link: "/horse-race-betting" },
        { title: "Kabaddi", image: serviceKabaddiImg, link: "/kabaddi-betting" },
        { title: "Live Casino", image: serviceCasinoImg, link: "/live-casino" },
        { title: "Fantasy Sports", image: serviceFantasyImg, link: "/fantasy-sports" },
        { title: "Live Cricket", image: serviceCricketImg, link: "/live-cricket" }
    ];
    return (
        <div className="services-page" style={{ backgroundColor: 'var(--primary-green)', paddingBottom: '60px' }}>
            <Sports />
            <Casino />
            <Promotions />
            <CustomerCare />
            <GetID />
        </div>
    );
};
export default Services;
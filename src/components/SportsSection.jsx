import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sportsCricket from '../assets/service_cricket.png';
import sportsFootball from '../assets/service_football.png';
import sportsTennis from '../assets/service_tennis.png';
import sportsKabaddi from '../assets/service_kabaddi.png';
import sportsHorse from '../assets/service_horse.png';
import sportsFantasy from '../assets/service_fantasy.png';
import sportsCasino from '../assets/service_casino.png';
import sportsLiveCricket from '../assets/hero_live_cricket.png';
const SportsSection = () => {
    const services = [
        { name: 'Cricket', img: sportsCricket, path: '/cricket-betting', desc: 'Match Winner, Toss, Fancy Bets' },
        { name: 'Football', img: sportsFootball, path: '/football-betting', desc: 'Goals, Corners, Cards' },
        { name: 'Tennis', img: sportsTennis, path: '/tennis-betting', desc: 'Set Winner, Game Handicap' },
        { name: 'Live Cricket', img: sportsLiveCricket, path: '/live-cricket', desc: 'Live Ball-by-Ball Betting' },
        { name: 'Kabaddi', img: sportsKabaddi, path: '/kabaddi-betting', desc: 'Raids, Tackles, Super 10s' },
        { name: 'Horse Racing', img: sportsHorse, path: '/horse-race-betting', desc: 'Win, Place, Each-Way' },
        { name: 'Fantasy Sports', img: sportsFantasy, path: '/fantasy-sports', desc: 'Create Your Dream Team' },
        { name: 'Live Casino', img: sportsCasino, path: '/live-casino', desc: 'Roulette, Baccarat, Slots' }
    ];
    return (
        <section className="section-spacer">
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Sports & Games at Lotus365</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', opacity: 0.9, marginBottom: '40px' }}>
                Experience the thrill of online gaming with Lotus365. We offer a vast array of markets including Cricket,
                Football, Tennis, Kabaddi, and a world-class Live Casino. Get the best odds and live updates.
            </p>
            <div className="sports-carousel-container" style={{ position: 'relative', padding: '0 40px' }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    className="sports-swiper"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <Link to={service.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="service-card" style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    textAlign: 'center',
                                    paddingBottom: '20px',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    marginBottom: '40px' 
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                        <img src={service.img} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <h3 style={{ color: 'var(--accent-yellow)', marginTop: '15px' }}>{service.name}</h3>
                                    <p style={{ fontSize: '15px', padding: '0 10px', opacity: 0.8 }}>{service.desc}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="https://wa.me/16402396837?text=Hello%20Lotus365%2C%20I%20want%20to%20get%20my%20ID." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-outline" style={{ cursor: 'pointer' }}>
                        <span>💬</span> Chat on WhatsApp
                    </button>
                </a>
            </div>
            <style>{`
                .sports-swiper .swiper-pagination-bullet {
                    background: #fff;
                    opacity: 0.5;
                }
                .sports-swiper .swiper-pagination-bullet-active {
                    background: var(--accent-yellow);
                    opacity: 1;
                }
                .sports-swiper .swiper-button-next,
                .sports-swiper .swiper-button-prev {
                    color: var(--accent-yellow);
                    transform: scale(0.6);
                }
                @media (max-width: 640px) {
                    .sports-carousel-container {
                        padding: 0 10px !important;
                    }
                    .sports-swiper .swiper-button-next,
                    .sports-swiper .swiper-button-prev {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};
export default SportsSection;
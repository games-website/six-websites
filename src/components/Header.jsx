import { Link } from 'react-router-dom';
import { Smartphone, MessageCircle, Menu, Search, User } from 'lucide-react';

const Header = ({ activeTab, setActiveTab, navItems }) => {
    return (
        <header className="sticky top-0 z-50 bg-[#111] shadow-lg">
            {/* Top Strip */}
            <div className="bg-black/50 py-1 px-4 flex justify-between items-center text-[10px] text-gray-400 border-b border-white/5">
                <div className="flex items-center gap-4">
                    <span>India's No.1 Exchange</span>
                    <Link to="/app-download" className="hover:text-yellow-500 flex items-center gap-1 transition-colors">
                        <Smartphone className="w-3 h-3" /> Get App
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <span><span className="text-yellow-500 font-bold">10M+</span> Active Users</span>
                    <Link to="/services" className="hover:text-yellow-500 transition-colors">24/7 Support</Link>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
                <div className="flex items-center gap-4">


                    {/* Logo */}
                    <Link to="/" className="text-2xl font-black italic tracking-tighter text-yellow-500">
                        MY<span className="text-white">LEASERS</span>
                    </Link>
                </div>



                {/* Auth Buttons */}
                <div className="flex items-center gap-2">
                    {/* <button className="hidden md:flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-400 px-3 py-1.5 transition-colors">
                        <Search className="w-4 h-4 md:hidden" />
                        Login
                    </button>
                    <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black text-sm font-bold px-4 py-2 rounded-md shadow-lg shadow-yellow-500/20 transition-all flex items-center gap-1">
                        <User className="w-4 h-4 fill-black" />
                        Sign Up
                    </button> */}
                </div>
            </div>

            {/* Navigation Bar (Desktop) */}
            <nav className="hidden md:flex bg-[#1a1a1a] border-b border-white/5">
                <div className="container mx-auto flex overflow-x-auto no-scrollbar">
                    <div id="desktop-nav" className="flex">
                        {navItems.map((item) => {
                            const navLinks = {
                                'Home': '/',
                                'In-Play': '/live-cricket-betting',
                                'Cricket': '/cricket',
                                'Casino': '/casino',
                                'Live Casino': '/casino',
                                'Review': '/#reviews',
                                'Registration': '/#register',
                                'Support': '/services',
                                'Guide': '/how-to-play'
                            };

                            return (
                                <a
                                    key={item}
                                    href={navLinks[item] || '#'}
                                    onClick={(e) => {
                                        setActiveTab(item);
                                        // Optional: Smooth scroll handled by CSS, but good to set active state
                                    }}
                                    className={`px-6 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all hover:bg-white/5 whitespace-nowrap block ${activeTab === item
                                        ? 'text-yellow-500 border-yellow-500'
                                        : 'text-gray-400 border-transparent hover:text-white'
                                        }`}
                                >
                                    {item}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

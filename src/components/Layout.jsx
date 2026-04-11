import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout = ({ children }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const navItems = ['Home', 'In-Play', 'Cricket', 'Casino', 'Live Casino', 'Review', 'Registration', 'Support', 'Guide'];

    return (
        <div className="bg-[#111111] text-white selection:bg-yellow-500 selection:text-black pb-20 md:pb-0 min-h-screen">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems} />
            
            <main className="container mx-auto md:px-4 py-4 max-w-7xl">
                {children}
            </main>

            <Footer />
            <MobileNav />
            <FloatingWhatsApp />
        </div>
    );
};

export default Layout;

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout = ({ children }) => {
    const navItems = ['Home', 'In-Play', 'Cricket', 'Casino', 'Live Casino', 'Review', 'Registration', 'Support', 'Guide'];

    return (
        <div className="bg-[#111111] text-white selection:bg-yellow-500 selection:text-black pb-20 md:pb-0 min-h-screen">
            <Header navItems={navItems} />
            
            <main className="w-full px-4 md:px-0 md:container md:mx-auto py-4 max-w-7xl">
                {children}
            </main>

            <Footer />
            <MobileNav />
            <FloatingWhatsApp />
        </div>
    );
};

export default Layout;

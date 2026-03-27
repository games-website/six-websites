import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWA from './FloatingWA';
import { Outlet } from 'react-router-dom';
import SEOKeywords from './SEOKeywords';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <SEOKeywords />
            <Footer />
            <FloatingWA />
        </>
    );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Toaster position='top-center' />
            <Navbar />
            
            <main className="flex-grow">
                <Outlet/>
            </main>
            
            <Footer />
        </div>
    );
};

export default RootLayout;
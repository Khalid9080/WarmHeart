import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar container */}
            <div className="py-4 md:py-6 lg:py-8 px-4 md:px-8 lg:px-16 items-center bg-amber-200">
                <Navbar />
            </div>

            {/* Main content */}
            <div className="min-h-[calc(100vh-438px)] container mx-auto py-10">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;

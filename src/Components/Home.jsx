import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <div className='fixed inset-x-0 bottom-0 text-center py-4'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
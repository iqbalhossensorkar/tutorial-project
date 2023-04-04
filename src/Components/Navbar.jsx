import { Bars2Icon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='container mx-auto px-6 py-7 md:flex md:justify-between md:items-center" bg-[#67e39f] text-white'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>
                    Rest-Countries
                </div>
                <div className='md:hidden'>
                    <button type="button" className="block text-white hover:text-gray-700 focus:text-white focus:outline-none">
                        <Bars2Icon className="h-6 w-6 fill-current" viewBox="0 0 24 24"></Bars2Icon>
                    </button>
                </div>
            </div>
            <div className='md:flex items-center'>
                <div className='text-lg font-bold'>
                    <span className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-700 mr-4'><Link to="/">Home</Link></span>
                    <span className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-700 mr-4'><Link to="/countries">Countries</Link></span>
                    <span className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-700'><Link to="/meals">Meals</Link></span>
                </div>

            </div>
        </nav >

    );
};

export default Navbar;
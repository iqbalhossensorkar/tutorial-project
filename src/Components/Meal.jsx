import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, strCategory, strArea, idMeal } = meal;
    return (
        <Link to={`../meal/${idMeal}`}>
            <div className='overflow-hidden relative transform hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-lg'>
                <div className='object-cover w-full h-56 md:h-64 lg:h-80'>
                    <img src={strMealThumb} alt="" className='' />
                </div>
                <div className='bg-black text-white bg-opacity-75 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col'>
                    <h1 className='text-2xl font-bold'>{strMeal}</h1>
                    <p className='my-4 text-lg'>{strCategory}</p>
                    <p className='mt-auto text-center font-bold'>{strArea}</p>
                </div>
            </div>
        </Link>
    );
};

export default Meal;
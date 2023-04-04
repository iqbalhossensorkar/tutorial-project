import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Meal from './Meal';
import Loading from './Loading';

const Meals = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    const meals = useLoaderData();
    return (
        <div className='flex flex-col min-h-screen container mx-auto p-4'>
            <h1 className='text-5xl mb-12 text-center font-bold'>Total meals: <span className='text-[#67e39f] font-extrabold'>{meals.meals.length}</span> </h1>
            <div className='grid sm:grid-cols-2 gap-8 mb-8 md:grid-cols-3 lg:grid-cols-4'>
                {
                    meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;
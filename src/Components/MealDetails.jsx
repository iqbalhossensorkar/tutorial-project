import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { HeartIcon } from '@heroicons/react/24/solid';

const MealDetails = () => {
    const mealDetail = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    const [like, setLike] = useState(true);
    const [cut, setCut] = useState(true);
    const { strMeal, strMealThumb, strInstructions, strTags, strCategory, strArea, idMeal, strSource, strYoutube } = mealDetail.meals[0];
    return (
        <div className='mt-8 flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
            <div className='lg:w-1/2 h-full'>
                <img src={strMealThumb} alt="" className='object-cover w-full  lg:h-full' />
            </div>
            <div className='p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                <div className='flex justify-between items-center'>
                    <p className='bg-yellow-500 rounded-full px-2 py-0 font-bold max-w-fit'>{idMeal}</p>
                    <div>
                        {like ? (
                            <span onClick={() => setLike(!like)}><HeartIcon type="checkbox" className='fill-none stroke-current h-6 w-6'></HeartIcon></span>

                        ) : (<span onClick={() => setLike(!like)}><HeartIcon type="checkbox" className='h-6 w-6'></HeartIcon></span>)}
                    </div>
                </div>
                <h1 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>{strMeal}</h1>

                {cut ? (
                    <>
                        <p>{strInstructions.substring(0, 100)}.... <span className='text-blue-500 cursor-pointer' onClick={() => setCut(!cut)}>Read More</span></p>

                    </>
                ) : (
                    <>
                        <p>{strInstructions}....</p>
                        <span className='cursor-pointer text-blue-500' onClick={() => setCut(!cut)}>Read Less</span>
                    </>
                )

                }
                <p className='font-bold text-[#5f5d5d] my-8'>{strTags}</p>
                <div className='flex gap-5 mt-8 items-center'>
                    <a href={strSource} target='_blank' className='btn px-8 py-4 bg-red-400 hover:bg-red-600 text-white transition-colors duration-300'>
                        Follow Us
                    </a>
                    <p className='items-center font-extrabold text-gray-600 '>
                        <a href={strYoutube} className='btn px-8 py-4 bg-blue-400 hover:bg-blue-600 text-white transition-colors duration-300'>
                            Watch Tutorial
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;
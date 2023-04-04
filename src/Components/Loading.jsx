import Lottie from "lottie-react";
import React from 'react';
import loading from './loading-snake.json'

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-100px)]">
            <Lottie animationData={loading} loop={true}></Lottie>
        </div>
    );
};

export default Loading;
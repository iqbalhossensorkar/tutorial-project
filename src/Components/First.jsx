import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';

const First = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            This Page Belongs To 
        </div>
    );
};

export default First;
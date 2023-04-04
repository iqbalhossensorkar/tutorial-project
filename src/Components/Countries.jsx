import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';

const Countries = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            This Is Country PAGE
        </div>
    );
};

export default Countries;
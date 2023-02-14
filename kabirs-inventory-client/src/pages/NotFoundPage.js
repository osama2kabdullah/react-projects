import React from 'react';
import HelmetMe from './shared/HelmetMe';

const NotFoundPage = () => {
    return (
        <div className='text-center h-[90vh] grid justify-center items-center'>
            <HelmetMe>Not found</HelmetMe>
            <div>
            <h1 className='text-5xl font-bold'>404</h1>
            <h3 className='text-2xl'>Page not found</h3>
            </div>
        </div>
    );
};

export default NotFoundPage;
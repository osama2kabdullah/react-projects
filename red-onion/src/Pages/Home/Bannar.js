import React from 'react';
import ButtonMe from '../shared/ButtonMe';


const Bannar = () => {
    return (
        <div className='bannar text-center pt-[30vh]'>
            <h2 className='text-5xl'>Best food waiting for your belly</h2>
            <br />
            <div className='relative w-1/3 mx-auto'>
            <input className='p-2 search-input w-full px-5 rounded-full' type="text" name="search" id="" />
            <div className='absolute top-0 right-0'><ButtonMe>Search</ButtonMe></div>
            
            </div>
            
        </div>
    );
};

export default Bannar;
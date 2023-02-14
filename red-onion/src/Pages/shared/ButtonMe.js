import React from 'react';

const ButtonMe = ({children}) => {
    return (
        <button className='p-2 bg-red-500 text-white px-6 rounded-full hover:bg-red-600 active:bg-red-500'>{children}</button>
    );
};

export default ButtonMe;
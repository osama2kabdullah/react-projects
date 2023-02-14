import React from 'react';

const ButtonMe = ({children, btn}) => {
    return (
        <button onClick={btn} className='p-2 px-5 bg-red-300 rounded-full hover:bg-red-400 active:bg-red-300'>
            {children}
        </button>
    );
};

export default ButtonMe;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({children, click}) => {
    const navigate = useNavigate()
    const hndlBtn = (click) => {
        navigate(click);
    }
    return (
        <button onClick={()=>hndlBtn(click)} className='bg-orange-500 text-2xl font-bold p-2 w-60 rounded-full hover:bg-orange-600 active:bg-orange-700 m-2'>
            {children}
        </button>
    );
};

export default Button;
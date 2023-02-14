import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='p-3 bg-white sticky top-0 px-16 flex justify-between'>
            <h1 onClick={()=>navigate('/')} className='text-3xl cursor-pointer text-center'>Kabirs Inventory</h1>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;
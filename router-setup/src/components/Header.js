import React from 'react';
import CustomLink from './Customlinks';

const Header = () => {
    return (
        <nav className='flex gap-2 justify-center'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/orders'>Orders</CustomLink>
        </nav>
    );
};

export default Header;
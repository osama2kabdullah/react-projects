import React from 'react';
import CustomLink from './CustomLink';

const Header = () => {
    return (
        <nav className='flex gap-4 p-2 justify-end bg-gray-500'>
            <CustomLink to='/'>Countreis</CustomLink>
            <CustomLink to='/chart'>Data Chart</CustomLink>
            <CustomLink to='/tourguid'>Tour Guid</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
        </nav>
    );
};

export default Header;
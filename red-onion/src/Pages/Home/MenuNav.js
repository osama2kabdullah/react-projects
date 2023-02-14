import React from 'react';
import CustomLink from '../shared/CustomLink';

const MenuNav = () => {
    return (
        <nav className='flex text-xl justify-center gap-5'>
            <CustomLink to='food/breakfast'>Breakfast</CustomLink>
            <CustomLink to='food/lunch'>Lunch</CustomLink>
            <CustomLink to='food/dinner'>Dinner</CustomLink>
        </nav>
    );
};

export default MenuNav;
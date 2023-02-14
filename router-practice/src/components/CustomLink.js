import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({path: resolved.pathname, end: true});
    return (
        <Link
        className='text-xl p-2 text-gray-200 hover:text-white font-bold'
        style={{borderBottom: match ? '1px solid #fff':''}}
        to={to}
        {...props}
        >
        {children}
        </Link>
    );
};

export default CustomLink;
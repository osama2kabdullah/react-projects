import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link
        className='p-1 rounded-md text-xl'
        style={{ fontWeight: match ? 'bolder':'',color: match ? 'orange' : ''}}
        to={to}
        >
        {children}
        </Link>
    );
};

export default CustomLink;
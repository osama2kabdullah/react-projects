import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const SideLinks = ({children, to, ...props}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({path: resolved.pathname, end: true});
    return (
        <Link
        className='text-xl p-3 border hover:bg-gray-300'
        style={{backgroundColor: match ? '#ddd':''}}
        to={to}
        {...props}
        >
        {children}
        </Link>
    );
};

export default SideLinks;
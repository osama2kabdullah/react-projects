import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link
        style={match ? {color: 'red', borderBottom: '2px solid red'}: {}}
        to={to}
        >
        {children}
        </Link>
    );
};

export default CustomLink;
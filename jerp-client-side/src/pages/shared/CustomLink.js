import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link
        style={match ? {color: 'orange'}: {}}
        to={to}
        >
        {children}
        </Link>
    );
};

export default CustomLink;
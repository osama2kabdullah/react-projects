import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
            <Link
            className='p-2 hover:text-gray-300'
                style={{ borderBottom: match ? '2px solid':'' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
    );
}

export default CustomLink;
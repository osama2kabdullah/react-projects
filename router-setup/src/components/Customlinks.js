import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
            <Link
            className='p-1 rounded-md hover:bg-slate-100 text-xl'
                style={{ backgroundColor: match ? "#ddd" : "", fontWeight: match ? 'bolder':'' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
    );
}

export default CustomLink;
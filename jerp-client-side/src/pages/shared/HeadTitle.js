import React from 'react';

const HeadTitle = ({children}) => {
    return (
        <h1 className="text-center lg:text-5xl text-2xl my-8 text-blue-500">{children}</h1>
    );
};

export default HeadTitle;
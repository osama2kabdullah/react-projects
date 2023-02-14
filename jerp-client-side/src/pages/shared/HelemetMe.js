import React from 'react';
import { Helmet } from 'react-helmet';

const HelemetMe = ({children}) => {
    return (
        <Helmet>
            <title>{children} - Jerp</title>
        </Helmet>
    );
};

export default HelemetMe;
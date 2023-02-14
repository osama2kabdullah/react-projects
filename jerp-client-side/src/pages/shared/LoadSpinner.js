import { Spinner } from 'flowbite-react';
import React from 'react';

const LoadSpinner = () => {
    return (
        <div className="text-center">
        <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
      </div>
    );
};

export default LoadSpinner;
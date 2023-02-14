import React from 'react';

const QuickBoxCompo = ({title, description, logo, bgcolor}) => {
    return (
        <div
        style={bgcolor && {backgroundColor: '#3A4256'}}
        className='bg-primary text-white flex  items-center rounded-lg p-8 gap-5 py-5'>
            {logo}
            <div>
            <h3 className='text-xl'>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default QuickBoxCompo;
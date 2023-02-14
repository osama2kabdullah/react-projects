import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='text-center'>
            <h4 className='p-4 text-xl'>Copyright &copy; {year} Dr. Jhatka by Osama Abdullah</h4>
        </div>
    );
};

export default Footer;
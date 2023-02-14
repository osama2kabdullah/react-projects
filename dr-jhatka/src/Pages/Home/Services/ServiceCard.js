import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Common/Button';

const ServiceCard = ({service}) => {
    const {name, picture, about, balance} = service;
    const navigate = useNavigate();
    
    return (
        <div className='bg-sky-300'>
            <img src={picture} alt="" />
            <div className='p-3'>
            <h3 className='text-2xl pb-3'>{name}</h3>
            <p className='font-bold font-mono'>Monthly {balance}</p>
            <p className='py-4'>{about.slice(0,100)}</p>
            <div onClick={()=>navigate('/checkout')}><Button>Choose this</Button></div>
            </div>
        </div>
    );
};

export default ServiceCard;
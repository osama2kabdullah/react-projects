import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='py-12'>
            <h1 className='text-3xl text-center text-sky-600'>Services</h1>
            <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-32 gap-5 my-12 mx-6 sm:mx-32'>
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
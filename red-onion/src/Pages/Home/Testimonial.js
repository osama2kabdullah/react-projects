import React from 'react';
import TestimonialCard from './TestimonialCard';
import choose1 from '../../images/choose1.png';
import choose2 from '../../images/choose2.png';
import choose3 from '../../images/choose3.png';
import Group204 from '../../images/icons/Group204.png';
import Group245 from '../../images/icons/Group245.png';
import Group1133 from '../../images/icons/Group1133.png';

const Testimonial = () => {
    return (
        <div className='mx-32 my-16'>
            <h2 className='text-4xl'>Why you choose us</h2>
            <p className='my-5 font-bold w-3/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus voluptatibus quisquam.</p>
            <div className='grid grid-cols-3 gap-12'>
                <TestimonialCard iconImg={Group204} coverImg={choose1} name='Fast Delivery'></TestimonialCard>
                <TestimonialCard iconImg={Group1133} coverImg={choose3} name='A Good Auto Respond'></TestimonialCard>
                <TestimonialCard iconImg={Group245} coverImg={choose2} name='Home Delivery'></TestimonialCard>
                
            </div>
        </div>
    );
};

export default Testimonial;
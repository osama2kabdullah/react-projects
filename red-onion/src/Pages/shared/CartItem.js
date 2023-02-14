import React from 'react';
import dinner1 from '../../images/dinner/dinner1.png'

const CartItem = () => {
    return (
        <div className='bg-gray-200 my-2 p-2 w-full flex gap-2 items-center rounded-2xl'>
           <img className='h-24' src={dinner1} alt="" /> 
           <div>
            <h3 className='font-bold text-md'>Butter Nan</h3>
            <h2 className='text-xl font-bold text-red-500'>$40</h2>
            <p>Delivery fee</p>
           </div>
           <div className=' flex'>
            <input className='text-3xl ' type="button" value="-" />
            <input className='text-xl mx-1 rounded-md w-12 text-center bg-white font-bold' disabled name="quantity" id="" />
            <input className='text-3xl' type="button" value="+" />
           </div>
        </div>
    );
};

export default CartItem;
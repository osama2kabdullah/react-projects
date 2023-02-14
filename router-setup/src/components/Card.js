import React, { useContext } from 'react';

const Card = ({data, btn}) => {
    const {name, picture, price} = data;
    return (
        <div className='m-2 bg-orange-900 flex w-full'>
            <img className='w-3/6 p-2' src={picture} alt="" />
            <div className='text-left text-white w-full'>
                <div className='h-full p-2' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                <h3 className='text-2xl bolder'>{name}</h3>
                <span>Price: ${price}</span>
                </div>
                <button onClick={()=>btn(data)} className='w-full hover:bg-orange-500 bg-orange-400 p-2'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
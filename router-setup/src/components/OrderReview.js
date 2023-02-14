import React, { useContext } from 'react';
import { RingContext } from '../App';

const OrderReview = () => {
    const upohar = useContext(RingContext)
    return (
        <div>
            <h1>This is Order review {upohar}</h1>
        </div>
    );
};

export default OrderReview;
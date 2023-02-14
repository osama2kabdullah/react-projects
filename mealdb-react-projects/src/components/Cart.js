import React from 'react';

const Cart = (props) => {
    return (
        <div>
            {
                props.data.map(data=><p key={data.idMeal
                }>{data.strMeal}: {data.quantity}</p>)
            }
        </div>
    );
};

export default Cart;
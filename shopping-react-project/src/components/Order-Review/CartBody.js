import React from 'react';

const CartBody = (props) => {
    let total = 0;
    let shipping = 0;
    let quantity = [];
    // loop all property that is object 
    for(const product of props.data){
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
        quantity.push(product.quantity)
    }
    // sum of quantity
    let sum = 0;
    for (const i of quantity) {
        sum = sum + i;
    }
    // sum of tax 
    const Tax = (total * 0.03).toFixed(2);
    // sum of grand total
    const  grandTotal = total + shipping + parseFloat(Tax);
    
    
    return (
        <div className='cart-dashbpard'>
            <h3 style={{textAlign: 'center'}}>Order Summary</h3>
            <p>Selected Items: {sum}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${Tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
            <button onClick={props.btn} className='btn btn-danger'>Clear Cart <i className="fa-solid fa-trash"></i></button>
            {props.children}
        </div>
    );
};

export default CartBody;
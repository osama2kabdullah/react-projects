import React from 'react';

const Product = (props) => {
    const {picture, name, balance} = props.data;
    return (
        <div className='single-card'>
            <div>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: {balance}</p>
            </div>
            <button onClick={props.btn}>Select <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;
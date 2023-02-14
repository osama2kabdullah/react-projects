import React from 'react';

const SingleProducts = (prams) => {
    const {img, name, price, seller, ratings} = prams.datas;
    
    return (<div className="card leading-4">
    <img className="card-img-top" src={img} alt=""/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Price: ${price} </p><br /><br /><br />
      <p className="card-text">Manufacturer : {seller} </p>
      <p className="card-text">Rating : {ratings} start</p>
    </div>
    <div onClick={prams.btn} className="btn btn-warning card-footer">
      <small className="text-dark">Add to Cart <i className="fa-solid fa-cart-plus"></i></small>
    </div>
  </div>
        );
};

export default SingleProducts;
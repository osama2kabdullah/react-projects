import React from 'react';
import { Link } from 'react-router-dom';
import useLoaddb from '../../Hooks/useLoaddb';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import CartBody from './CartBody';
import ReviewProducts from './ReviewProducts';

const Order = () => {
    //load data
    const [products] = useProducts();
    // get cart
    const [matched, setMatched] = useLoaddb(products);
    //remove btn
    const rmvbtn = product => {
        const removeItem = matched.filter(item=>item.id !== product.id);
        setMatched(removeItem);
        // remove from db
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="m-32 flex-col flex gap-3">
                {
                    matched.map(item=><ReviewProducts
                    key={item.id}
                    data={item}
                    btn={rmvbtn}
                    ></ReviewProducts>)
                }
            </div>
            <div className="product-cart">
                <CartBody data={matched}>
                <Link to='/shipping'>
                <button className='btn btn-warning'>Procced to Checout<i className="fa-solid fa-arrow-right"></i></button>
                </Link>
                </CartBody>
            </div>
        </div>
    );
};

export default Order;
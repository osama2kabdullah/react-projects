import React, { useState } from 'react';
import useLoadData from '../Hooks/useLoadData';
import Card from './Card';
import Cart from './Cart';

const Home = () => {
    const [datas, setDatas] = useLoadData();
    
    const [cart, setCart] = useState([])
    // add to cart
    const addToCartBtn = (selectedItem) => {
        if(cart.indexOf(selectedItem) === -1){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }else {
            alert('Item already added')
        }
    }
    
    // remove cart
    const removeCart = (selectedItem) => {
        const newCart = cart.filter(item=>item._id!==selectedItem._id)
        setCart(newCart);
    }
    
    return (
        <div style={{display: 'grid', gridTemplateColumns: '80% 20%'}}>
            <div className='grid grid-cols-3 gap-2 m-4'>
                {
                    datas.map(data=><Card
                    key={data._id}
                    data={data}
                    btn={addToCartBtn}
                    >
                    </Card>)
                }
            </div>
            <div className='bg-red-300'>
                <Cart
                removeBtn={removeCart}
                selectedItems={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
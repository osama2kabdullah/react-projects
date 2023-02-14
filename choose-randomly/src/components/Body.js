import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';

const Body = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    
    // select event handlr
    const [items, setItems] = useState([])
    const btnClick = (product) => {
        console.log(product);
        if(items.length >= 5){
            alert('You can select 5 Books only')
            return;
        }else if(items.indexOf(product) !== -1){
            alert('You can select One Book onetime')
            return;
        }else {
            const newItems = [...items, product];
            setItems(newItems);
        }
    }
    
    // clear all event hndlr
    const clearBtn = () => {
        const emtyItems = [];
        setItems(emtyItems)
    }
    
    //pic randomly btn event hndlr
    const [random, setRandom] = useState([])
    const randomBtn = () => {
        const randomItem = items[Math.round(Math.random() * items.length)];
        setRandom(randomItem);
    }
    
    return (
        <div className='main'>
            <div className="product-container">
                {
                    products.map(product=><Product btn={()=>btnClick(product)} key={product.id} data={product}></Product>)
                }
            </div>
            <div className="product-cart">
                <Cart randomObj={random} randomBtn={()=>randomBtn()} btn={()=>clearBtn()} data={items}></Cart>
            </div>
        </div>
    );
};

export default Body;
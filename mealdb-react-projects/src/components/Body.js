
import { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import Cart from './Cart';
import { addToDb, getfromDb } from './Storage';

const Body = () => {
    //load data from json
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=m')
        .then(res=>res.json())
        .then(data=>{
            const upArr = [];
            data.meals.forEach(element => {
                element.quantity = 1;
                upArr.push(element);
                setDatas(upArr);
            });
        })
    },[]);
    
    //click image to show data name in cart board
    const [cart, setCart] = useState([]);
    const imgClick = (data) => {
        //check already added in cart items
        const existInCart = cart.find(item=>item.idMeal === data.idMeal);
        let ourCart;
        if(existInCart){
            // increase the quantity of already added items
            existInCart.quantity = existInCart.quantity + 1;
            // storing items without that already added
            const rest = cart.filter(item=>item.idMeal !== existInCart.idMeal);
            ourCart = [...rest, existInCart]
        }else {
            ourCart = [...cart, data]
        }
        // set that new array
        setCart(ourCart);
        
        // save to local storage
        addToDb(data);
    }
    
    
    // get from localstorage
    useEffect(()=> {
        const priviusItem = getfromDb();

        const newArr = [];
        for (const id in priviusItem) {
            const matched = datas.find(item=>item.idMeal === id);
            
            if(matched){
                matched.quantity = priviusItem[id];
                newArr.push(matched);
            }
        }
        setCart(newArr);
        
    },[datas])
    
    return (
        <div>
            <div className="body">
            <div className="content">
                {
                    datas.map(data=><Card key={data.idMeal} btn={()=>imgClick(data)} data={data}></Card>)
                }
            </div>
            <div className="cart">
                <Cart data={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Body;
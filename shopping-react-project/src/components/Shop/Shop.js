import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { addToDb, LoadfromDb } from "../../utilities/DataBase";
import { removeFromDb } from "../../utilities/fakedb";
import CartBody from "../Order-Review/CartBody";
import SingleProducts from "./SingleProducts";

const Shop = () => {
  // load data from json
  const [products] = useProducts();
  // set to cart board
  const [cart, setCart] = useState([]);
  const btnclick = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    let newCart;
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((item) => product.id !== item.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    // save to localStorage
    addToDb(product.id);
  };
  // clear cart btn
  const ClearCart = () => {
    removeFromDb();
  };
  // load data from Db
  useEffect(() => {
    const loadDb = LoadfromDb();
    const saveProducts = [];
    for (const id in loadDb) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = loadDb[id];
        addedProduct.quantity = quantity;
        saveProducts.push(addedProduct);
      }
      setCart(saveProducts);
    }
  }, [products]);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <SingleProducts
            key={product.id}
            btn={() => btnclick(product)}
            datas={product}
          ></SingleProducts>
        ))}
      </div>

      <div className="product-cart">
        <CartBody btn={ClearCart} data={cart}>
          <Link to='/order'>
            <button className="btn btn-warning">
              Review Order <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </CartBody>
      </div>
    </div>
  );
};

export default Shop;

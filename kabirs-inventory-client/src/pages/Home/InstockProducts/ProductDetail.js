import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLoadStocks from "../../../hooks/useLoadStocks";
import ButtonMe from "../../shared/ButtonMe";
import HelmetMe from "../../shared/HelmetMe";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [products, setProducts] = useLoadStocks(
    `https://safe-garden-23742.herokuapp.com/manageproducts/${productId}`
  );

  const age = parseInt(products?.age);
  const [newAge, setNewAge] = useState();

  const updateItems = { id: products?._id, age: newAge };
  if (newAge) {
    fetch("https://safe-garden-23742.herokuapp.com/updateProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItems),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const updateBtn = () => {
    //decrease quantity number
    if (newAge) {
      const minusAge = newAge - 1;
      setNewAge(minusAge);
    } else {
      const minusAge = age - 1;
      setNewAge(minusAge);
    }
  };

  //add quantity
  const addQuantity = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    if (number) {
      if(newAge){
        setNewAge(newAge + parseInt(number));
      } else {
        setNewAge(age + parseInt(number));
      }
    }
  };
  return (
    <div className="flex mx-12 gap-5">
      {
        products?.name && <HelmetMe>{products?.name}</HelmetMe>
      }
      <div>
        <h2 className="text-4xl mb-8 font-bold">{products?.name}</h2>
        <p>{products?.about}</p>
        <div className="text-xl">
          <p className="mt-5">price: {products?.balance}</p>
          <p>product id: {products?._id}</p>
          <p className="mb-8">Company Name: {products?.company}</p>
        </div>
        <ButtonMe btn={updateBtn}>Deleverd</ButtonMe>
        <p className="mt-12 text-2xl font-bold">
          quantity: {newAge ? newAge : age} pis
        </p>

        <form onSubmit={addQuantity} className="border p-3 mt-8">
          <h4 className="text-2xl">Store this product</h4>
          <div>
            <input className="border p-2" type="number" name="number" />
            <ButtonMe>Add</ButtonMe>
          </div>
        </form>
        <div className="text-center mt-12">
          <ButtonMe btn={() => navigate("/managestock")}>
            Manage Your stocks
          </ButtonMe>
        </div>
      </div>
      <img
        className="w-3/6"
        src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg"
        alt=""
      />
    </div>
  );
};

export default ProductDetail;

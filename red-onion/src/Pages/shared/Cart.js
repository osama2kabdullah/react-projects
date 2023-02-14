import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className=" pt-12 leading-8">
      <p>
        From <span className="font-bold"> Gulshan Plaza 201</span>
      </p>
      <p>Ariving in 20-30 min</p>
      <p>107 Rd No 8</p>
      <div>
        <CartItem></CartItem>
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>Subtotal- 4 item</td>
            <td>jubayer</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>text3.2</td>
          </tr>
          <tr>
            <td>Delivery fee</td>
            <td>text3.2</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>text3.2</td>
          </tr>
        </tbody>
      </table>
      <input
        className="p-1 mt-4 font-bold bg-red-500 rounded-md w-full hover:bg-red-600 active:bg-red-500 text-white"
        type="button"
        value="Place Order"
      />
    </div>
  );
};

export default Cart;

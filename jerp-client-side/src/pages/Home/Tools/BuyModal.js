import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullPageLoading from "../../shared/FullPageLoading";

const BuyModal = ({ modal, setModal, product }) => {
  const navigate = useNavigate();
  const { availableQty, name, minimumOrder, price, _id } = product;
  const [orderQty, setOrderQty] = useState((availableQty < minimumOrder) ? availableQty : minimumOrder);
  const [ordering, setOrdering] = useState(false);

  const [lessThannAvailable, setlessThannAvailable] = useState(false);
  useEffect(()=>{
    if(minimumOrder > availableQty){
      setlessThannAvailable(true)
    }
  },[minimumOrder, availableQty])
  console.log('tukush',lessThannAvailable);
  
  const handleConfirmOrder = (e) => {
    setOrdering(true);
    e.preventDefault();
    const productQuantity = e.target.qty.value;
    const totalPrice = e.target.totalPrice.value;
    const shippingAddress = e.target.shippingAddress.value;
    const phoneNumber = e.target.phoneNumber.value;
    const doc = {
      productQuantity,
      totalPrice,
      productName: name,
      shippingAddress,
      phoneNumber,
    };
    fetch("http://localhost:5000/makeOrder", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        const newProductAvailable =
          parseInt(availableQty) - parseInt(productQuantity);
        fetch("http://localhost:5000/decreaseproductquantity/" + _id, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({ newProductAvailable }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        setOrdering(false);
        setModal(false);
        navigate("/dashboard");
      });
  };
console.log(orderQty);
  return (
    <React.Fragment>
      <Modal
        show={modal}
        size="md"
        popup={true}
        onClose={() => setModal(false)}
      >
        {ordering && <FullPageLoading></FullPageLoading>}
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 pb-4 sm:pb-6  xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h3>

            <form onSubmit={handleConfirmOrder} class="w-full max-w-lg">
              <h2 className="text-lg font-bold mb-6">
                Available: {availableQty}
              </h2>
              <div class="flex flex-wrap  mb-6">
                {/* -------------------------- */}
                <label
                  class=" w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Shipping Address
                </label>
                <input
                  type="text"
                  name="shippingAddress"
                  placeholder="Address"
                  className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                />

                {/* -------------------------------- */}
                <label
                  class=" w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                />

                {/* ------------------------ */}
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Qty
                  </label>
                  <input
                    onChange={(e) => setOrderQty(parseInt(e.target.value))}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    name="qty"
                    value={orderQty}
                    placeholder="Number of products"
                  />
                </div>
                {/* -------------------------- */}
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Total
                  </label>
                  <input
                    disabled
                    name="totalPrice"
                    value={`${(price * parseInt(orderQty) || 0).toFixed(2)}`}
                    className="text-xl font-bold mt-4"
                  />
                </div>
                {availableQty < parseInt(orderQty) && (
                  <small className="text-red-500">Out of stock</small>
                )}
                {(lessThannAvailable ? 0 : minimumOrder) > parseInt(orderQty) && (
                  <small className="text-red-500">
                    Minimum order {minimumOrder}
                  </small>
                )}
              </div>
              <Button
                disabled={
                  !orderQty || availableQty < parseInt(orderQty) ||
                  (lessThannAvailable ? 0 : minimumOrder) > parseInt(orderQty)
                }
              >
                {" "}
                <button type="submit">Confirm Order</button>{" "}
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default BuyModal;

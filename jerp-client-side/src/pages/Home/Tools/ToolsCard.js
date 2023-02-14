import { Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";

const ToolsCard = ({ tool }) => {
  const { name, picture, _id, price, availableQty } = tool;
  const { admin } = useContext(AppContext);
  return (
    <>
      <Card
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={picture}
      >
        <span>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </span>
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          {availableQty < 1 ? (
            <span className="text-yellow-700">Out of stock</span>
          ) : (
            <span>Available {availableQty} Qty</span>
          )}
        </span>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            to={"productdetail/" + _id}
            className={
              availableQty < 1
                ? "rounded-lg bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                : "rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            }
          >
            {availableQty < 1 || admin ? "See details" : "Order Now"}
          </Link>
        </div>
      </Card>
    </>
  );
};

export default ToolsCard;

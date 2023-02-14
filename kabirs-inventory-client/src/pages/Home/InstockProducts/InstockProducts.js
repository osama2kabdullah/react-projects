import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firbase.init";
import useLoadStocks from "../../../hooks/useLoadStocks";
import ButtonMe from "../../shared/ButtonMe";

const InstockProducts = () => {
  const [user, loading] = useAuthState(auth);

  const headers = {
    authorization: "Bearer " + localStorage.getItem("accees_token"),
  };
  const [userProducts, setUserProducts] = useLoadStocks(
    "https://safe-garden-23742.herokuapp.com/userData?email=" + user?.email,
    headers
  );
  
  const [products, setProducts] = useLoadStocks(
    "https://safe-garden-23742.herokuapp.com/inStocProducts"
  );

  const navigate = useNavigate();

  console.log('products',products);
  console.log('userProducts',userProducts);

  return (
    <div className="m-12">
      <h3 className="text-3xl text-center mb-12">In stock products</h3>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product?._id} className="border">
            <img
              className="w-full"
              src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg"
              alt=""
            />
            <div className="p-2">
              <h4 className="text-xl font-bold">{product?.name}</h4>
              <p className="font-mono">price: {product?.balance}</p>
              <p>availble: {product?.age} pis</p>
              <p>{product?.about.slice(0, 90)}</p>
              <p className="font-bold mb-5">{product?.company}</p>
              {user ? (
                <ButtonMe btn={() => alert("This is not your product")}>
                  Update this product
                </ButtonMe>
              ) : (
                <ButtonMe
                  btn={() => navigate("/manageproducts/" + product?._id)}
                >
                  Update this product
                </ButtonMe>
              )}
            </div>
          </div>
        ))}
        {user &&
          userProducts.map((product) => (
            <div key={product?._id} className="border">
              <img
                className="w-full"
                src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg"
                alt=""
              />
              <div className="p-2">
                <h4 className="text-xl font-bold">{product?.name}</h4>
                <p className="font-mono">price: {product?.balance}</p>
                <p>availble: {product?.age} pis</p>
                <p>{product?.about.slice(0, 90)}</p>
                <p className="font-bold mb-5">{product?.company}</p>
                <ButtonMe
                  btn={() => navigate("/manageproducts/" + product?._id)}
                >
                  Update this product
                </ButtonMe>
              </div>
            </div>
          ))}
      </div>
      {(user && userProducts?.length) === 0 && (
        <p className="text-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 inline text-yellow-500 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          You dont have any products yet{" "}
          <span
            onClick={() => navigate("/managestock")}
            className="hover:underline text-sky-500 cursor-pointer"
          >
            Add some products
          </span>
        </p>
      )}
      <div className="text-center mt-12">
        <ButtonMe btn={() => navigate("/managestock")}>
          Manage Your stocks
        </ButtonMe>
      </div>
    </div>
  );
};

export default InstockProducts;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dinner1 from "../../images/dinner/dinner1.png";
import ButtonMe from "../shared/ButtonMe";

const ItemDetails = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  return (
    <section>
      <div className="">
        <button onClick={()=>navigate(from, { replace: true })} className="p-2 hover:bg-gray-200 rounded-xl ml-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Go back
        </button>
      </div>
      <div className="mx-32 grid grid-cols-2 my-5">
        <div className="py-12">
          <h1 className="text-5xl mb-3">Lite Breakfast</h1>

          <p className="leading-7 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            placeat obcaecati perferendis repellat nisi? Placeat, unde sint!
            Cumque architecto nemo aliquam cum, assumenda quod veniam nihil,
            animi quis in quo!
          </p>

          <div className="flex gap-8 pb-4">
            <h1 className="text-3xl inline">$51</h1>
            <div className="border px-3 rounded-full pb-1">
              <input className="text-3xl " type="button" value="-" />
              <input
                className="text-xl mx-1 rounded-md w-12 text-center bg-white font-bold"
                disabled
                name="quantity"
                value="1"
              />
              <input className="text-3xl" type="button" value="+" />
            </div>
          </div>

          <ButtonMe>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Add
          </ButtonMe>
        </div>
        <img src={dinner1} alt="" />
      </div>
    </section>
  );
};

export default ItemDetails;

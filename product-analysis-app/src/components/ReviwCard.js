import React from "react";

const ReviwCard = ({ review }) => {
    const star = review.balance;
    
  return (
    <div className="p-7 m-4 text-center bg-gray-200 rounded-2xl">
        <div className="bg-white w-20 mx-auto m-3 rounded-full p-4">
        <img className="w-20" src={review.picture} alt="" />
        </div>
      <h3 className="text-2xl">{review.name}</h3>
      <p className="text-yellow-400">
        {
            (star===1) ? <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </span>:''
        }
        {
            (star===2) ? <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </span>: ''
        }
        {
            (star===3) ? <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </span>: ''
        }
        {
            (star===4) ? <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </span>: ''
        }
        {
            (star===5) ? <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </span>: ''
        }
      </p>
      <p className="text-lg">{review.text}</p>
    </div>
  );
};

export default ReviwCard;

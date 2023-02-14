import React from "react";
import { Link } from "react-router-dom";

const TestimonialCard = ({ coverImg, iconImg, name }) => {
  return (
    <div className="rounded-3xl hover:shadow-md">
      <img src={coverImg} alt="" />
      <div className="p-2 flex gap-2">
        <img className="h-12" src={iconImg} alt="" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur aiet itaque nisi 
          </p>
          <p className="mt-4 text-sky-800">
            <Link>
              See more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 inline h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

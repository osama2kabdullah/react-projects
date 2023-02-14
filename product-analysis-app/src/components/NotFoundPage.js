import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
    const backbtn = () => {
        navigate('/');
    }
  return (
    <div className="bg-gray-100 h-screen justify-center">
      <center className="m-auto p-16">
        <div className=" tracking-widest">
          <span className="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span className="text-gray-500 text-xl">
            Sorry, We couldn't find that you are looking!
          </span>
        </div>
      </center>
      <center className="mt-6">
        <button
        onClick={backbtn}
          className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
        >
          Go Home{" "}
        </button>
      </center>
    </div>
  );
};

export default NotFoundPage;
